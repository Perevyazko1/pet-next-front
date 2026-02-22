from django.db import models

from accounts.mixins import ModeratableMixin


class VisitRequest(ModeratableMixin, models.Model):
    name = models.CharField('Имя', max_length=255)
    phone = models.CharField('Телефон', max_length=20)
    email = models.EmailField('Email', blank=True)
    message = models.TextField('Сообщение', blank=True)
    created_at = models.DateTimeField('Дата заявки', auto_now_add=True)

    class Meta:
        verbose_name = 'Заявка на посещение'
        verbose_name_plural = 'Заявки на посещение'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.name} — {self.phone}'
