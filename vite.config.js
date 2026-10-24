import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',

  build: {
    // Папка, куда Vite соберет готовый сайт
    outDir: 'docs',
    // Очищать папку docs перед каждой новой сборкой
    emptyOutDir: true,
  },

  // Настройки локального сервера для разработки на компьютере
  server: {
    host: '127.0.0.1',
    port: 3000,
    open: true, // Автоматически открывать сайт в браузере при старте
    cors: true, // Разрешить CORS-запросы
  }
})