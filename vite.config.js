import { defineConfig } from 'vite';

export default defineConfig({
  base: './',

  server: {
    host: '127.0.0.1',
    port: 8080,
    strictPort: true,
    open: true
  },

  build: {
    outDir: 'docs',          // Собираем в docs для Гитхаба
    emptyOutDir: true,       // Чистим папку перед сборкой
    assetsDir: 'assets',
    minify: false            // НАПИСАТЬ false (ПОЛНОСТЬЮ ОТКЛЮЧАЕТ МИНИФИКАЦИЮ)
  }
});
