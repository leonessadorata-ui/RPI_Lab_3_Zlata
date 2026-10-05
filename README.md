# RPI Lab 3 — Сайт преподавателей

Учебный проект: одностраничное веб-приложение (SPA) на React и Vite.
Сайт рассказывает о преподавателях, партнёрах и отзывах и содержит
разделы «Главная», «О лекторах», «О нас», «Отзывы», «Блог», «Партнёры»
и «Контакты».

## Стек и версии

- Node.js 20.x (проверить командой `node -v`)
- npm 10.x (проверить командой `npm -v`)
- React 19.2.8
- React DOM 19.2.8
- Vite 8.3.0
- ESLint 10.10.0
- @vitejs/plugin-react 6.1.1

## Установка и запуск

1. Клонировать репозиторий:
   git clone https://github.com/leonessadorata-ui/RPI_Lab_3_Zlata.git

2. Перейти в папку проекта:
   cd RPI_Lab_3_Zlata

3. Установить зависимости:
   npm install

4. Запустить проект в режиме разработки:
   npm run dev

   После запуска в терминале появится адрес — обычно http://localhost:5173.
   Открой его в браузере.

5. Собрать проект для production (по желанию):
   npm run build

   Готовые файлы появятся в папке `dist/`.

6. Предпросмотр production-сборки:
   npm run preview

7. Проверка кода линтером:
   npm run lint

## Структура проекта

    RPI_Lab_3_Zlata/
    ├── public/                 # статические файлы (доступны по URL как есть)
    │   ├── favicon.svg
    │   ├── icons.svg
    │   ├── images/             # картинки для страниц
    │   ├── lecturers/          # фото преподавателей
    │   └── partners/           # логотипы партнёров
    ├── src/                    # исходный код приложения
    │   ├── main.jsx            # точка входа, монтирует React в DOM
    │   ├── App.jsx             # корневой компонент и переключение страниц
    │   ├── index.css           # глобальные стили
    │   ├── assets/             # картинки, импортируемые в код
    │   ├── components/         # переиспользуемые компоненты
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   ├── LecturerCard.jsx
    │   │   └── LecturerModal.jsx
    │   ├── data/               # данные проекта
    │   │   └── lecturers.js
    │   └── pages/              # страницы приложения
    │       ├── HomePage.jsx
    │       ├── LecturersPage.jsx
    │       ├── AboutPage.jsx
    │       ├── ReviewsPage.jsx
    │       ├── BlogPage.jsx
    │       ├── PartnersPage.jsx
    │       └── ContactsPage.jsx
    ├── index.html              # HTML-шаблон
    ├── package.json            # зависимости и скрипты
    ├── vite.config.js          # конфигурация Vite
    └── README.md               # этот файл

## Данные и роутинг

- **Данные о преподавателях** лежат в файле `src/data/lecturers.js`.
  Это JavaScript-массив объектов: у каждого преподавателя есть имя,
  фото, описание и другие поля. Фотографии подключаются из папки
  `public/lecturers/`.

- **Навигация между страницами** реализована в `src/App.jsx` без
  сторонней библиотеки роутинга: текущая страница хранится в состоянии
  (`useState`), а компоненты страниц из `src/pages/` отображаются
  условно. Клик по пункту меню в `src/components/Header.jsx` меняет
  активную страницу.

  Соответствие разделов и компонентов:

  - Главная         → HomePage.jsx
  - О лекторах      → LecturersPage.jsx
  - О нас           → AboutPage.jsx
  - Отзывы          → ReviewsPage.jsx
  - Блог            → BlogPage.jsx
  - Партнёры        → PartnersPage.jsx
  - Контакты        → ContactsPage.jsx

  Общие элементы (шапка и подвал) вынесены в `src/components/Header.jsx`
  и `src/components/Footer.jsx` и отображаются на всех страницах.
