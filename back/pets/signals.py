from django.db.models.signals import post_save
from django.dispatch import receiver

from accounts.mixins import ModerationStatus
from accounts.telegram import notify_pending

from .models import Pet


@receiver(post_save, sender=Pet)
def pet_created(sender, instance, created, **kwargs):
    if created and instance.status == ModerationStatus.PENDING:
        notify_pending('pet', instance.title)
