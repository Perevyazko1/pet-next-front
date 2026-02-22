import accounts.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0003_approve_existing'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='image',
            field=models.ImageField(
                upload_to='news/',
                validators=[accounts.validators.validate_landscape_image],
                verbose_name='Фото',
            ),
        ),
    ]
