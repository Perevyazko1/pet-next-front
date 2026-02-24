from django import forms
from django.contrib import admin
from django.contrib.admin.sites import NotRegistered
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from django.contrib.auth.models import User, Group
from django.contrib.auth.password_validation import validate_password
from unfold.admin import ModelAdmin as UnfoldModelAdmin

from .helpers import is_admin, is_moderator
from .models import Moderator, Shelter
from . import roles

# --- Скрываем стандартную модель User и Group ---
try:
    admin.site.unregister(User)
except NotRegistered:
    pass

try:
    admin.site.unregister(Group)
except NotRegistered:
    pass


# --- Базовый класс для прокси-админок ролей ---
class RoleUserAdmin(UnfoldModelAdmin, DjangoUserAdmin):
    """Базовый админ для прокси-моделей ролей.
    Подклассы задают role_group_name для автопривязки группы."""

    role_group_name = None

    list_display = ['username', 'first_name', 'last_name', 'email', 'is_active']
    list_filter = ['is_active']
    search_fields = ['username', 'first_name', 'last_name', 'email']

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2'),
        }),
        ('Личные данные', {
            'fields': ('first_name', 'last_name', 'email'),
        }),
    )

    fieldsets = (
        (None, {'fields': ('username',)}),
        ('Личные данные', {'fields': ('first_name', 'last_name', 'email')}),
        ('Новый пароль', {
            'fields': ('new_password1', 'new_password2'),
            'description': 'Оставьте пустым, если не хотите менять пароль.',
        }),
        ('Статус', {'fields': ('is_active',)}),
    )

    def get_fieldsets(self, request, obj=None):
        if obj is None:
            return self.add_fieldsets
        return self.fieldsets

    def get_form(self, request, obj=None, **kwargs):
        # Exclude password fields so super() doesn't reject them
        # as unknown model fields; we add them manually after.
        if obj is not None:
            kwargs['fields'] = [
                f
                for fieldset in self.fieldsets
                for f in fieldset[1]['fields']
                if f not in ('new_password1', 'new_password2')
            ]
        form_class = super().get_form(request, obj, **kwargs)

        if obj is not None:
            class FormWithPassword(form_class):
                new_password1 = forms.CharField(
                    label='Новый пароль',
                    widget=forms.PasswordInput,
                    required=False,
                )
                new_password2 = forms.CharField(
                    label='Подтверждение пароля',
                    widget=forms.PasswordInput,
                    required=False,
                )

                def clean(self):
                    cleaned = super().clean()
                    p1 = cleaned.get('new_password1')
                    p2 = cleaned.get('new_password2')
                    if p1 or p2:
                        if p1 != p2:
                            raise forms.ValidationError(
                                'Пароли не совпадают.'
                            )
                        validate_password(p1)
                    return cleaned

            return FormWithPassword
        return form_class

    def get_queryset(self, request):
        return self.model.objects.all()

    def save_model(self, request, obj, form, change):
        if not change:
            obj.is_staff = True
        super().save_model(request, obj, form, change)
        if not change and self.role_group_name:
            group = Group.objects.filter(name=self.role_group_name).first()
            if group:
                obj.groups.add(group)
        new_password = form.cleaned_data.get('new_password1')
        if new_password:
            obj.set_password(new_password)
            obj.save()

    def has_module_permission(self, request):
        return is_moderator(request.user)

    def has_view_permission(self, request, obj=None):
        return is_moderator(request.user)

    def has_add_permission(self, request):
        return is_moderator(request.user)

    def has_change_permission(self, request, obj=None):
        return is_moderator(request.user)

    def has_delete_permission(self, request, obj=None):
        return is_admin(request.user)


# --- Модераторы (только для админа) ---
@admin.register(Moderator)
class ModeratorAdmin(RoleUserAdmin):
    role_group_name = roles.MODERATOR

    def has_module_permission(self, request):
        return is_admin(request.user)

    def has_view_permission(self, request, obj=None):
        return is_admin(request.user)

    def has_add_permission(self, request):
        return is_admin(request.user)

    def has_change_permission(self, request, obj=None):
        return is_admin(request.user)


# --- Приюты (для админа и модератора) ---
@admin.register(Shelter)
class ShelterAdmin(RoleUserAdmin):
    role_group_name = roles.SHELTER
