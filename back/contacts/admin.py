from django.contrib import admin

from accounts.admin_mixins import ModeratableAdminMixin

from .models import VisitRequest


@admin.register(VisitRequest)
class VisitRequestAdmin(ModeratableAdminMixin, admin.ModelAdmin):
    list_display = ['id', 'name', 'phone', 'email', 'created_at']
    list_display_links = ['id', 'name']
    search_fields = ['name', 'phone', 'email']
    readonly_fields = ['created_at']
