from django.db.models.signals import post_save
from django.dispatch import receiver

from accounts.mixins import ModerationStatus
from accounts.telegram import notify_pending

from .models import News


@receiver(post_save, sender=News)
def news_created(sender, instance, created, **kwargs):
    if created and instance.status == ModerationStatus.PENDING:
        notify_pending('news', instance.title)
