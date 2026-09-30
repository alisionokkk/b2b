import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// На GitHub Pages сайт живёт по адресу /<имя репозитория>/, локально — в корне.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/b2b/' : '/',
  plugins: [react()],
});
