from django.contrib import admin
from django.contrib.admin.sites import NotRegistered
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from django.contrib.auth.models import User, Group
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
        ('Статус', {'fields': ('is_active',)}),
    )

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
