import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative base so the site works from any sub-path (GitHub Pages serves it at /<repo>/)
  base: './',
  plugins: [react()],
});
