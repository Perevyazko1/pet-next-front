from django.core.exceptions import ValidationError
from PIL import Image


def validate_landscape_image(image):
    """Разрешает загрузку только горизонтальных фото (ширина >= высота)."""
    try:
        img = Image.open(image)
        width, height = img.size
    except Exception:
        return
    if height > width:
        raise ValidationError(
            'Загрузите горизонтальное фото (ширина должна быть не меньше высоты).'
        )
