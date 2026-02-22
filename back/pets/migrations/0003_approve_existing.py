from django.db import migrations


def approve_existing(apps, schema_editor):
    Pet = apps.get_model('pets', 'Pet')
    Pet.objects.filter(status='pending').update(status='approved')


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0002_add_moderation_fields'),
    ]

    operations = [
        migrations.RunPython(approve_existing, migrations.RunPython.noop),
    ]
