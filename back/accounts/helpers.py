from . import roles


def _has_group(user, group_name):
    if not user or not user.is_authenticated:
        return False
    return user.groups.filter(name=group_name).exists()


def is_admin(user):
    return user.is_superuser or _has_group(user, roles.ADMIN)


def is_moderator(user):
    return is_admin(user) or _has_group(user, roles.MODERATOR)


def is_shelter(user):
    return _has_group(user, roles.SHELTER)
