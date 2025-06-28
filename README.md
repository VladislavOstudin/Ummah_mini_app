<details>
    <summary>📁 Архитектура проекта</summary>
- /src
  - app/ — входные точки, маршруты, провайдеры
    - App.tsx — корневой компонент
    - routes/
      - home/index.tsx — страница Home
      - reflect/index.tsx
      - write/index.tsx
      - routes.tsx — все маршруты
    - providers/ — обёртки: Theme, Telegram SDK и т.д.
    - config.ts — конфигурация (токены, флаги, env)

- shared/ — универсальные ресурсы и утилиты

  - ui/ — UI-компоненты (Button, Loader)
  - lib/ — хелперы (Telegram, i18n и т.д.)
  - assets/
    - animations/cat-thinking.json

- entities/ — сущности: User, Day, Reflection

  - user/
    - model.ts — username, avatar, score и т.д.
    - storage.ts — localStorage, wallet, initData
    - api.ts

- features/ — обособленные фичи

  - reflections/
    - ui/ThoughtInput.tsx
    - model.ts
  - points/ — счёт, streak, очки
  - telegram/ — MainButton, Theme, инициализация

- widgets/ — виджеты: котики, карточки и т.п.

  - AnimatedKitten/
    - index.tsx
    - styles.css
  - DailyQuranBlock/index.tsx

- index.tsx — Telegram-ready render entry
- main.tsx
</details>
