from django.contrib.auth.models import Group, User
from django.core.management.base import BaseCommand

from accounts import roles


class Command(BaseCommand):
    help = 'Создаёт группы ролей и привязывает суперюзеров к группе admin'

    def handle(self, *args, **options):
        for name in roles.ALL_ROLES:
            group, created = Group.objects.get_or_create(name=name)
            if created:
                self.stdout.write(f'Группа "{name}" создана')
            else:
                self.stdout.write(f'Группа "{name}" уже существует')

        admin_group = Group.objects.get(name=roles.ADMIN)
        for user in User.objects.filter(is_superuser=True):
            if not user.groups.filter(name=roles.ADMIN).exists():
                user.groups.add(admin_group)
                self.stdout.write(f'Суперюзер "{user.username}" добавлен в группу admin')

        self.stdout.write(self.style.SUCCESS('Роли настроены'))
