from django.contrib import admin
from django.utils.html import format_html
from unfold.admin import ModelAdmin as UnfoldModelAdmin

from accounts.admin_mixins import ModeratableAdminMixin

from .models import News


@admin.register(News)
class NewsAdmin(ModeratableAdminMixin, UnfoldModelAdmin):
    list_display = ['id', 'title', 'date', 'views', 'image_preview', 'created_at']
    list_display_links = ['id', 'title']
    search_fields = ['title', 'description']
    list_filter = ['date']
    readonly_fields = ['views', 'created_at', 'image_tag']

    @admin.display(description='Превью')
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" height="50" />', obj.image.url)
        return '-'

    @admin.display(description='Фото')
    def image_tag(self, obj):
        if obj.image:
            return format_html('<img src="{}" height="200" />', obj.image.url)
        return '-'
