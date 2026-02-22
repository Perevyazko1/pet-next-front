from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_create_groups'),
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Moderator',
            fields=[],
            options={
                'proxy': True,
                'verbose_name': 'Модератор',
                'verbose_name_plural': 'Модераторы',
            },
            bases=('auth.user',),
        ),
        migrations.CreateModel(
            name='Shelter',
            fields=[],
            options={
                'proxy': True,
                'verbose_name': 'Приют',
                'verbose_name_plural': 'Приюты',
            },
            bases=('auth.user',),
        ),
    ]
