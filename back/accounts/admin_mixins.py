from django.contrib import admin, messages
from django.utils import timezone

from .helpers import is_admin, is_moderator, is_shelter
from .mixins import ModerationStatus


class ModeratableAdminMixin:
    """Миксин для ModelAdmin — фильтрация, права, экшены модерации."""

    moderation_list_display = ['status']
    moderation_list_filter = ['status']
    moderation_readonly_fields = ['status', 'shelter', 'moderated_by', 'moderated_at']

    def get_list_display(self, request):
        base = list(super().get_list_display(request))
        return base + [f for f in self.moderation_list_display if f not in base]

    def get_list_filter(self, request):
        base = list(super().get_list_filter(request))
        return base + [f for f in self.moderation_list_filter if f not in base]

    def get_readonly_fields(self, request, obj=None):
        base = list(super().get_readonly_fields(request, obj))
        return base + [f for f in self.moderation_readonly_fields if f not in base]

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if is_moderator(request.user):
            return qs
        if is_shelter(request.user):
            return qs.filter(shelter=request.user)
        return qs

    def save_model(self, request, obj, form, change):
        if not change:
            if is_shelter(request.user):
                obj.status = ModerationStatus.PENDING
                obj.shelter = request.user
            elif is_moderator(request.user):
                obj.status = ModerationStatus.APPROVED
                obj.shelter = request.user
                obj.moderated_by = request.user
                obj.moderated_at = timezone.now()
        super().save_model(request, obj, form, change)

    def has_delete_permission(self, request, obj=None):
        if is_admin(request.user):
            return True
        return False

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
            # Ensure moderation actions are available
            if 'approve' not in actions:
                actions['approve'] = (
                    ModeratableAdminMixin.approve,
                    'approve',
                    'Одобрить выбранные',
                )
            if 'reject' not in actions:
                actions['reject'] = (
                    ModeratableAdminMixin.reject,
                    'reject',
                    'Отклонить выбранные',
                )
        else:
            actions.pop('approve', None)
            actions.pop('reject', None)
        if not is_admin(request.user):
            actions.pop('delete_selected', None)
        return actions
