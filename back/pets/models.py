from django.db import models

from accounts.mixins import ModeratableMixin
from accounts.validators import validate_landscape_image


class Pet(ModeratableMixin, models.Model):
    title = models.CharField('Имя', max_length=255)
    description = models.TextField('Описание')
    image = models.ImageField('Фото', upload_to='pets/', validators=[validate_landscape_image])
    alt_image = models.CharField('Alt-текст', max_length=255)
    shelter_since = models.DateField('В приюте с', null=True, blank=True)
    views = models.PositiveIntegerField('Просмотры', default=0)
    created_at = models.DateTimeField('Дата создания', auto_now_add=True)

    class Meta:
        verbose_name = 'Питомец'
        verbose_name_plural = 'Список питомцев'
        ordering = ['-created_at']

    def __str__(self):
        return self.title
