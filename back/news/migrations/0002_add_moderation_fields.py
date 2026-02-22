import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='status',
            field=models.CharField(
                choices=[('pending', 'На модерации'), ('approved', 'Одобрено'), ('rejected', 'Отклонено')],
                db_index=True,
                default='pending',
                max_length=10,
                verbose_name='Статус модерации',
            ),
        ),
        migrations.AddField(
            model_name='news',
            name='shelter',
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name='%(class)s_created',
                to=settings.AUTH_USER_MODEL,
                verbose_name='Приют (автор)',
            ),
        ),
        migrations.AddField(
            model_name='news',
            name='moderated_by',
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name='%(class)s_moderated',
                to=settings.AUTH_USER_MODEL,
                verbose_name='Модератор',
            ),
        ),
        migrations.AddField(
            model_name='news',
            name='moderated_at',
            field=models.DateTimeField(blank=True, null=True, verbose_name='Дата модерации'),
        ),
    ]
