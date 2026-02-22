from django.db.models.signals import post_save
from django.dispatch import receiver

from accounts.telegram import notify_visit_request

from .models import VisitRequest


@receiver(post_save, sender=VisitRequest)
def visit_request_created(sender, instance, created, **kwargs):
    if created:
        shelter = instance.shelter
        shelter_name = shelter.get_full_name() or shelter.username if shelter else '—'
        notify_visit_request(
            name=instance.name,
            phone=instance.phone,
            email=instance.email,
            message=instance.message,
            shelter_name=shelter_name,
        )
