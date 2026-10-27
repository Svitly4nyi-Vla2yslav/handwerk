import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

/**
 * Налаштовує Vite з React SWC і відкриває dev-сервер на порту 5173 для локальної мережі.
 * Конфігурація не додає proxy, aliases або окремої production-логіки.
 */
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173
  }
});
