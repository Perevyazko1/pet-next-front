from django.contrib.auth.models import User, UserManager

from . import roles


class ModeratorManager(UserManager):
    def get_queryset(self):
        return super().get_queryset().filter(groups__name=roles.MODERATOR)


class Moderator(User):
    objects = ModeratorManager()

    class Meta:
        proxy = True
        verbose_name = 'Модератор'
        verbose_name_plural = 'Модераторы'


class ShelterManager(UserManager):
    def get_queryset(self):
        return super().get_queryset().filter(groups__name=roles.SHELTER)


class Shelter(User):
    objects = ShelterManager()

    class Meta:
        proxy = True
        verbose_name = 'Приют'
        verbose_name_plural = 'Приюты'
