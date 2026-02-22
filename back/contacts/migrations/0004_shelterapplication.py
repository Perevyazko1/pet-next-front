from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0003_approve_existing'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShelterApplication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contact_name', models.CharField(max_length=255, verbose_name='Имя контакта')),
                ('phone', models.CharField(max_length=20, verbose_name='Телефон')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='Email')),
                ('city', models.CharField(max_length=255, verbose_name='Город')),
                ('address', models.CharField(max_length=500, verbose_name='Адрес')),
                ('website', models.URLField(blank=True, verbose_name='Сайт')),
                ('comment', models.TextField(blank=True, verbose_name='Комментарий')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата заявки')),
            ],
            options={
                'verbose_name': 'Заявка на подключение приюта',
                'verbose_name_plural': 'Заявки на подключение приюта',
                'ordering': ['-created_at'],
            },
        ),
    ]
