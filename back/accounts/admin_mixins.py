from django.contrib import admin, messages
from django.contrib.auth.models import Group
from django.utils import timezone

from .helpers import is_admin, is_moderator, is_shelter
from .mixins import ModerationStatus
from . import roles


class ModeratableAdminMixin:
    """Миксин для ModelAdmin — фильтрация, права, экшены модерации.

    Права:
      - Приют: создаёт только своё (статус PENDING), редактирует только своё.
      - Модератор: редактирует всё, создавать не может.
      - Админ: полный доступ, при создании выбирает приют (статус APPROVED).
    """

    def get_list_display(self, request):
        base = list(super().get_list_display(request))
        if 'status' not in base:
            base.append('status')
        # Модераторы и админы видят столбец «Приют» в списке
        if is_moderator(request.user) and 'shelter' not in base:
            base.append('shelter')
        return base

    def get_list_filter(self, request):
        base = list(super().get_list_filter(request))
        if 'status' not in base:
            base.append('status')
        return base

    def get_readonly_fields(self, request, obj=None):
        base = list(super().get_readonly_fields(request, obj))
        # moderated_by и moderated_at всегда readonly (проставляются через экшены)
        for f in ('moderated_by', 'moderated_at'):
            if f not in base:
                base.append(f)
        # shelter: только админ может менять
        if not is_admin(request.user) and 'shelter' not in base:
            base.append('shelter')
        # status: приют видит только, не может менять
        if is_shelter(request.user) and 'status' not in base:
            base.append('status')
        return base

    def get_exclude(self, request, obj=None):
        """Приют не видит поле shelter в форме — оно подставляется автоматически."""
        exclude = list(super().get_exclude(request) or [])
        if is_shelter(request.user) and 'shelter' not in exclude:
            exclude.append('shelter')
        return exclude or None

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        """Для поля shelter показываем только пользователей группы 'shelter'."""
        if db_field.name == 'shelter' and is_admin(request.user):
            shelter_group = Group.objects.filter(name=roles.SHELTER).first()
            if shelter_group:
                kwargs['queryset'] = shelter_group.user_set.filter(is_active=True)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def get_form(self, request, obj=None, **kwargs):
        """Для админа поле shelter обязательно при создании."""
        form = super().get_form(request, obj, **kwargs)
        if is_admin(request.user) and obj is None and 'shelter' in form.base_fields:
            form.base_fields['shelter'].required = True
        return form

    # --- Права доступа ---

    def has_module_permission(self, request):
        return is_moderator(request.user) or is_shelter(request.user)

    def has_view_permission(self, request, obj=None):
        if is_moderator(request.user):
            return True
        if is_shelter(request.user):
            return obj is None or obj.shelter_id == request.user.pk
        return False

    def has_add_permission(self, request):
        # Модератор (не админ) создавать не может
        if is_admin(request.user) or is_shelter(request.user):
            return True
        return False

    def has_change_permission(self, request, obj=None):
        if is_moderator(request.user):
            return True
        if is_shelter(request.user):
            return obj is None or obj.shelter_id == request.user.pk
        return False

    def has_delete_permission(self, request, obj=None):
        return is_admin(request.user)

    # --- Queryset ---

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if is_moderator(request.user):
            return qs
        if is_shelter(request.user):
            return qs.filter(shelter=request.user)
        return qs

    # --- Сохранение ---

    def save_model(self, request, obj, form, change):
        if not change:
            if is_shelter(request.user):
                obj.shelter = request.user
                obj.status = ModerationStatus.PENDING
            elif is_admin(request.user):
                # shelter выбран в форме и обязателен
                obj.status = ModerationStatus.APPROVED
        super().save_model(request, obj, form, change)

    # --- Экшены модерации ---

    @admin.action(description='Одобрить выбранные')
    def approve(self, request, queryset):
        if not is_moderator(request.user):
            self.message_user(request, 'Нет прав для модерации.', messages.ERROR)
            return
        updated = queryset.update(
            status=ModerationStatus.APPROVED,
            moderated_by=request.user,
            moderated_at=timezone.now(),
        )
        self.message_user(request, f'Одобрено: {updated}')

    @admin.action(description='Отклонить выбранные')
    def reject(self, request, queryset):
        if not is_moderator(request.user):
            self.message_user(request, 'Нет прав для модерации.', messages.ERROR)
            return
        updated = queryset.update(
            status=ModerationStatus.REJECTED,
            moderated_by=request.user,
            moderated_at=timezone.now(),
        )
        self.message_user(request, f'Отклонено: {updated}')

    def get_actions(self, request):
        actions = super().get_actions(request)
        if is_moderator(request.user):
            if 'approve' not in actions:
                actions['approve'] = (
                    ModeratableAdminMixin.approve, 'approve', 'Одобрить выбранные',
                )
            if 'reject' not in actions:
                actions['reject'] = (
                    ModeratableAdminMixin.reject, 'reject', 'Отклонить выбранные',
                )
        else:
            actions.pop('approve', None)
            actions.pop('reject', None)
        if not is_admin(request.user):
            actions.pop('delete_selected', None)
        return actions
