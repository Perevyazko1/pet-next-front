import accounts.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0004_pet_shelter_since'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pet',
            name='image',
            field=models.ImageField(
                upload_to='pets/',
                validators=[accounts.validators.validate_landscape_image],
                verbose_name='Фото',
            ),
        ),
    ]
