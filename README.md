# freetree

Fullstack-проект: **frontend (Vite + React)** + **backend (NestJS + Prisma)** + **PostgreSQL (Docker)**.

## Быстрый старт (локально)

### Требования
- **Node.js + npm**
- **Docker Desktop** (для Postgres)

### 1) Поднять базу данных

```bash
docker compose up -d
```

Сервисы:
- **Postgres**: `localhost:5432`
- **pgAdmin**: `http://localhost:5050` (логин/пароль см. `docker-compose.yml`)

### 2) Настроить переменные окружения backend

Создай файл `backend/.env`:

```bash
DATABASE_URL="postgresql://freetree_user:freetree_password_123@localhost:5432/freetree_db?schema=public"
# опционально:
# PORT=3000
```

### 3) Применить миграции Prisma и сгенерировать клиент

```bash
cd .\backend
npm ci
npx prisma migrate deploy
npx prisma generate
```

### 4) Запустить backend

```bash
cd .\backend
npm run start:dev
```

API по умолчанию: `http://localhost:3000` (CORS включён на `*`).

### 5) Запустить frontend

```bash
cd .\frontend
npm ci
npm run dev
```

UI обычно доступен на `http://localhost:5173`.

## Скрипты (npm)

### Backend (`backend/package.json`)
- **start:dev**: `npm run start:dev`
- **build**: `npm run build`
- **lint**: `npm run lint`
- **test / test:e2e**: `npm run test` / `npm run test:e2e`

### Frontend (`frontend/package.json`)
- **dev**: `npm run dev`
- **build**: `npm run build`
- **preview**: `npm run preview`
- **lint**: `npm run lint`

## Prisma (миграции, изменения данных, “инъекции”)

Все команды выполняй из папки `backend/`.

### Миграции

Применить существующие миграции (без интерактива, подходит для “первого запуска”):

```bash
npx prisma migrate deploy
```

Создать новую миграцию после изменения `prisma/schema.prisma` и применить её:

```bash
npx prisma migrate dev --name <migration_name>
```

Полный сброс БД (удалит данные) + прогон миграций заново:

```bash
npx prisma migrate reset
```

Синхронизировать схему с БД **без миграций** (полезно для прототипов, аккуратно):

```bash
npx prisma db push
```

### Генерация клиента

```bash
npx prisma generate
```

### Быстро “внести/поправить данные” (инъекции)

Открыть GUI для редактирования данных:

```bash
npx prisma studio
```

Выполнить SQL-файл (например, для инъекции тестовых данных):

```bash
npx prisma db execute --file .\path\to\data.sql
```

Выполнить SQL из stdin:

```bash
echo "INSERT INTO users(email, username) VALUES ('demo@demo.com','demo');" | npx prisma db execute --stdin
```

## Полезное

Остановить инфраструктуру:

```bash
docker compose down
```
