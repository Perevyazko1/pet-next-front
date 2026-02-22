from django.db import migrations


def approve_existing(apps, schema_editor):
    News = apps.get_model('news', 'News')
    News.objects.filter(status='pending').update(status='approved')


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0002_add_moderation_fields'),
    ]

    operations = [
        migrations.RunPython(approve_existing, migrations.RunPython.noop),
    ]
