from django.db import migrations


def approve_existing(apps, schema_editor):
    VisitRequest = apps.get_model('contacts', 'VisitRequest')
    VisitRequest.objects.filter(status='pending').update(status='approved')


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0002_add_moderation_fields'),
    ]

    operations = [
        migrations.RunPython(approve_existing, migrations.RunPython.noop),
    ]
