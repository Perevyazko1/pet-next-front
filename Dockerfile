# Этап 1: Сборка приложения
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
# Устанавливаем все зависимости (devDependencies включены)

RUN npm ci

COPY . .
# Собираем приложение

RUN npm run build

# Этап 2: Создание легковесного production образа
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
# Устанавливаем только production зависимости

RUN npm ci --production
# Копируем собранные файлы Next.js
COPY --from=builder /app/.next ./.next
# Копируем статические файлы (если есть)
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
# Копируем файл конфигурации Next.js
COPY --from=builder /app/next.config.ts ./
# Копируем конфигурацию, если надо
COPY --from=builder /app/tsconfig.json ./



CMD ["npm", "run", "start"]