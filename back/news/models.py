from django.db import models

from accounts.mixins import ModeratableMixin


class News(ModeratableMixin, models.Model):
    title = models.CharField('Заголовок', max_length=255)
    description = models.TextField('Описание')
    image = models.ImageField('Фото', upload_to='news/')
    alt_image = models.CharField('Alt-текст', max_length=255)
    date = models.DateField('Дата публикации')
    views = models.PositiveIntegerField('Просмотры', default=0)
    created_at = models.DateTimeField('Дата создания', auto_now_add=True)

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ['-date']

    def __str__(self):
        return self.title
