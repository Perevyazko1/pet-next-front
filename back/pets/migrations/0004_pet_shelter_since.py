from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0003_approve_existing'),
    ]

    operations = [
        migrations.AddField(
            model_name='pet',
            name='shelter_since',
            field=models.DateField(blank=True, null=True, verbose_name='В приюте с'),
        ),
    ]
