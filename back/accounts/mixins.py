from django.conf import settings
from django.db import models


class ModerationStatus(models.TextChoices):
    PENDING = 'pending', 'На модерации'
    APPROVED = 'approved', 'Одобрено'
    REJECTED = 'rejected', 'Отклонено'


class ModeratableMixin(models.Model):
    status = models.CharField(
        'Статус модерации',
        max_length=10,
        choices=ModerationStatus.choices,
        default=ModerationStatus.PENDING,
        db_index=True,
    )
    shelter = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        verbose_name='Приют (автор)',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='%(class)s_created',
    )
    moderated_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        verbose_name='Модератор',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='%(class)s_moderated',
    )
    moderated_at = models.DateTimeField(
        'Дата модерации',
        null=True,
        blank=True,
    )

    class Meta:
        abstract = True
