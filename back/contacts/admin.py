from django.contrib import admin
from unfold.admin import ModelAdmin as UnfoldModelAdmin

from accounts.admin_mixins import ModeratableAdminMixin

from .models import ShelterApplication, VisitRequest


@admin.register(VisitRequest)
class VisitRequestAdmin(ModeratableAdminMixin, UnfoldModelAdmin):
    list_display = ['id', 'name', 'phone', 'email', 'created_at']
    list_display_links = ['id', 'name']
    search_fields = ['name', 'phone', 'email']
    readonly_fields = ['created_at']


@admin.register(ShelterApplication)
class ShelterApplicationAdmin(UnfoldModelAdmin):
    list_display = ['id', 'contact_name', 'phone', 'city', 'created_at']
    list_display_links = ['id', 'contact_name']
    search_fields = ['contact_name', 'phone', 'email', 'city']
    readonly_fields = ['created_at']
