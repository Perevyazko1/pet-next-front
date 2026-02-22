from django.db.models.signals import post_save
from django.dispatch import receiver

from accounts.telegram import notify_visit_request

from .models import VisitRequest


@receiver(post_save, sender=VisitRequest)
def visit_request_created(sender, instance, created, **kwargs):
    if created:
        notify_visit_request(
            name=instance.name,
            phone=instance.phone,
            email=instance.email,
            message=instance.message,
        )
