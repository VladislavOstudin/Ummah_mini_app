Архитектура проекта

/src
│
├── app/ # Входные точки, маршруты, провайдеры
│ ├── App.tsx # Корневой компонент
│ ├── routes/ # Роутинг
│ │ ├── home/ # Каждая страница — своя папка
│ │ │ └── index.tsx
│ │ ├── reflect/
│ │ │ └── index.tsx
│ │ ├── write/
│ │ │ └── index.tsx
│ │ └── routes.tsx # Все маршруты в одном массиве
│ ├── providers/ # Обёртки: Theme, Telegram SDK и т.д.
│ └── config.ts # Конфигурация (токены, флаги, env)
│
├── shared/ # Универсальные ресурсы и утилиты
│ ├── ui/ # Универсальные UI-компоненты (Button, Loader)
│ ├── lib/ # Библиотеки и хелперы (Telegram, i18n, format)
│ └── assets/ # Анимации, картинки, шрифты
│ └── animations/
│ └── cat-thinking.json
│
├── entities/ # Базовые сущности: User, Day, Reflection
│ └── user/
│ ├── model.ts # username, avatar, score и т.п.
│ ├── storage.ts # localStorage/wallet/initData
│ └── api.ts
│
├── features/ # Обособленные фичи
│ ├── reflections/ # Логика написания и сохранения
│ │ ├── ui/
│ │ │ └── ThoughtInput.tsx
│ │ └── model.ts
│ ├── points/ # Счёт, streak, очки за активность
│ └── telegram/ # Инициализация, MainButton, Theme
│
├── widgets/ # Готовые виджеты: котики, карточки и т.п.
│ ├── AnimatedKitten/
│ │ ├── index.tsx
│ │ └── styles.css
│ └── DailyQuranBlock/
│ └── index.tsx
│
├── index.tsx # Telegram-ready render entry
└── main.tsx
