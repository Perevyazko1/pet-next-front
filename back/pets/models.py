from django.db import models


class Pet(models.Model):
    title = models.CharField('Имя', max_length=255)
    description = models.TextField('Описание')
    image = models.ImageField('Фото', upload_to='pets/')
    alt_image = models.CharField('Alt-текст', max_length=255)
    views = models.PositiveIntegerField('Просмотры', default=0)
    created_at = models.DateTimeField('Дата создания', auto_now_add=True)

    class Meta:
        verbose_name = 'Питомец'
        verbose_name_plural = 'Питомцы'
        ordering = ['-created_at']

    def __str__(self):
        return self.title
