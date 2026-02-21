# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## О проекте

Сайт приюта для животных «Лапки» (paws-pets.ru). Русскоязычный проект на Next.js 15 (App Router) + React 19 + TypeScript.

## Команды

- `npm run dev` — запуск dev-сервера
- `npm run build` — сборка production
- `npm run start` — запуск production-сервера
- `npm run lint` — линтинг (ESLint)
- `docker compose up --build` — сборка и запуск в Docker (порт 3000)

## Архитектура

### Структура `src/`

Проект следует упрощённому Feature-Sliced Design:

- `app/` — Next.js App Router: layout'ы, страницы, провайдеры, API-роуты, шрифты
- `pages/` — компоненты страниц (main, pets, news) — логика и вёрстка конкретных страниц
- `entities/` — доменные модели и интерфейсы (например `InfoCardInterface`)
- `shared/` — переиспользуемые компоненты, хуки, утилиты, константы, иконки
- `features/`, `widgets/` — зарезервированные слои FSD (пока пустые)

### Маршрутизация

App Router с route groups: `(main)/` содержит страницы `/`, `/pets`, `/news`. Константы маршрутов в `src/app/routes.ts`.

### Провайдеры (`src/app/providers.tsx`)

Клиентская обёртка с `QueryClientProvider` (React Query) и `NuqsAdapter` (управление query-параметрами через nuqs).

### API-слой

Серверный прокси `POST /api/proxy` — принимает `{ url, method, headers, body }`, добавляет Bearer-токен из cookie `access_token` и проксирует запрос к бэкенду (`NEXT_PUBLIC_BACKEND_URL`).

### Стилизация

- **Tailwind CSS** с кастомными брейкпоинтами: `sm` (375px), `sm1` (640px), `md` (768px), `lg1` (940px), `lg2` (1080px), `lg` (1280px), `xl` (1920px)
- **CVA** (class-variance-authority) — варианты компонентов (кнопки)
- **HeroUI** + **Radix UI** — UI-примитивы
- **shadcn/ui** — CLI настроен через `components.json`, компоненты добавляются в `@/shared/ui`
- Утилита `cn()` из `@/shared/lib/tw-merge` — объединение классов через clsx + tailwind-merge
- Основные цвета: primary/secondary `#2C5F42` (зелёный), accent `#E8E7E7`
- Шрифты: CeraPro (основной), Airfool (декоративный)

### Тексты

Все UI-строки на русском, централизованы в `src/shared/constants/texts.ts`. Библиотека i18n не используется.

### Управление состоянием

- **React Query** — серверное состояние
- **nuqs** — состояние URL query-параметров (например `infoId` для модалок)
- **useState** — локальное состояние компонентов

## Конвенции

- Алиас путей: `@/*` → `./src/*`
- Prettier: одинарные кавычки, точки с запятой, trailing commas, ширина 80 символов, tailwind-сортировка классов
- Переменные окружения: `NEXT_PUBLIC_BACKEND_URL` — URL бэкенда
