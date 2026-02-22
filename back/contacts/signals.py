from django.db.models.signals import post_save
from django.dispatch import receiver

from accounts.telegram import notify_shelter_application, notify_visit_request

from .models import ShelterApplication, VisitRequest


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


@receiver(post_save, sender=ShelterApplication)
def shelter_application_created(sender, instance, created, **kwargs):
    if created:
        notify_shelter_application(
            contact_name=instance.contact_name,
            phone=instance.phone,
            city=instance.city,
            address=instance.address,
            email=instance.email,
            website=instance.website,
            comment=instance.comment,
        )
