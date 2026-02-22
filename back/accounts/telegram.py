import json
import logging
import threading
import urllib.error
import urllib.request

from django.conf import settings

logger = logging.getLogger(__name__)


def _send(token: str, chat_id: str, text: str) -> None:
    url = f'https://api.telegram.org/bot{token}/sendMessage'
    payload = json.dumps({'chat_id': chat_id, 'text': text, 'parse_mode': 'HTML'}).encode()
    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
    try:
        urllib.request.urlopen(req, timeout=10)
    except urllib.error.URLError as e:
        logger.warning('Telegram notification failed: %s', e)


def notify_pending(entity_type: str, title: str) -> None:
    """Send a Telegram notification in a background thread. Fire-and-forget."""
    token = getattr(settings, 'TELEGRAM_BOT_TOKEN', '')
    chat_id = getattr(settings, 'TELEGRAM_CHAT_ID', '')
    if not token or not chat_id:
        return

    icons = {'pet': '🐾', 'news': '📰'}
    labels = {'pet': 'Новый питомец', 'news': 'Новая новость'}
    icon = icons.get(entity_type, '📌')
    label = labels.get(entity_type, 'Новый объект')

    text = (
        f'{icon} <b>{label} ожидает модерации</b>\n'
        f'Название: {title}'
    )
    threading.Thread(target=_send, args=(token, chat_id, text), daemon=True).start()
