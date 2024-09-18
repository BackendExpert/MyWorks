// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://reactnative.dev', // The documentation site or API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // This removes the `/api` prefix
      },
    },
  },
});
