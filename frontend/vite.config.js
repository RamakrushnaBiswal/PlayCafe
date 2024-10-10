import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },

  server: {
    host: '0.0.0.0', // allows access from all IP addresses
    port: 5173,
  },
  plugins: [react()],
});
