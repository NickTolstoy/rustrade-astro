# Rustrade.pro - Astro Website

Современный сайт компании Рустрейд на базе Astro с поддержкой мультиязычности и выбора города.

## 🚀 Технологии

- **Astro** - статическая генерация с Islands Architecture
- **TypeScript** - типизация
- **CSS Variables** - переменные для стилей
- **i18n** - мультиязычность (RU/EN)
- **Schema.org** - микроразметка для SEO

## 📁 Структура проекта

```
rustrade-astro/
├── public/              # Статические файлы
│   ├── fonts/           # Шрифты (Manrope, Onest)
│   ├── img/             # Изображения
│   └── robots.txt       # Robots.txt
├── src/
│   ├── components/      # Astro компоненты
│   │   ├── seo/         # SEO компоненты (MetaTags, SchemaOrg)
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Sidebar.astro
│   │   ├── MobileMenu.astro
│   │   └── Modals.astro
│   ├── data/            # Данные
│   │   ├── cities.ts    # Города
│   │   ├── navigation.ts # Навигация
│   │   └── news.ts      # Новости
│   ├── i18n/            # Переводы
│   │   ├── ru.json
│   │   ├── en.json
│   │   └── index.ts
│   ├── layouts/         # Layouts
│   │   ├── BaseLayout.astro
│   │   └── NewsLayout.astro
│   ├── pages/           # Страницы
│   │   ├── [lang]/[city]/ # Локализованные страницы
│   │   ├── api/         # API endpoints
│   │   └── sitemap-custom.xml.ts
│   └── styles/          # CSS стили
│       ├── components/  # Стили компонентов
│       ├── global.css
│       ├── reset.css
│       ├── typography.css
│       └── variables.css
├── astro.config.mjs     # Конфигурация Astro
├── package.json
└── tsconfig.json
```

## 🛠 Установка

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для production
npm run build

# Предпросмотр production сборки
npm run preview
```

## 🌍 Мультиязычность

Сайт поддерживает два языка:
- Русский (ru) - по умолчанию
- English (en)

URL структура: `/{lang}/{city}/page`

Примеры:
- `/ru/moscow/` - Главная (RU, Москва)
- `/en/perm/turbines` - Турбины (EN, Пермь)
- `/ru/moscow/news/article-slug` - Новость

## 🏙 Города

- Москва (moscow)
- Пермь (perm)

Каждый город имеет свои контактные данные.

## 📱 SEO Features

- ✅ Meta Tags (title, description, keywords)
- ✅ Open Graph / Twitter Cards
- ✅ Schema.org микроразметка
  - Organization
  - WebSite с SearchAction
  - LocalBusiness
  - Article (для новостей)
  - BreadcrumbList
  - FAQPage
- ✅ hreflang для мультиязычности
- ✅ Canonical URLs
- ✅ Sitemap.xml с alternates
- ✅ robots.txt

## 🎨 Стили

CSS переменные в `src/styles/variables.css`:
- Цвета
- Типографика
- Отступы
- Радиусы скругления
- Тени
- Переходы

## 📝 Добавление новости

1. Добавьте запись в `src/data/news.ts`:

```typescript
{
  id: 'unique-id',
  slug: 'url-slug',
  category: 'company', // company | articles | industry
  title: {
    ru: 'Заголовок на русском',
    en: 'English title'
  },
  excerpt: {
    ru: 'Краткое описание...',
    en: 'Short description...'
  },
  content: {
    ru: '<p>HTML контент...</p>',
    en: '<p>HTML content...</p>'
  },
  image: '/img/news/image.jpg',
  date: '2024-01-01',
  readTime: 5,
  tags: ['tag1', 'tag2']
}
```

## 📦 Deployment

### Статический хостинг (рекомендуется)

```bash
npm run build
# Загрузите содержимое папки dist/ на хостинг
```

### Docker

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔧 Переменные окружения

Создайте `.env` файл:

```env
PUBLIC_SITE_URL=https://rustrade.pro
PUBLIC_YANDEX_METRIKA_ID=98009395
PUBLIC_RECAPTCHA_SITE_KEY=your_key
```

## 📊 Performance

Ожидаемые показатели Lighthouse:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔗 Миграция с PHP

Для миграции существующих данных:

1. Скопируйте папку `/img` в `/public/img`
2. Скопируйте папку `/fonts` в `/public/fonts`
3. Обновите пути в CSS
4. Настройте редиректы на хостинге

## 📄 License

MIT

