import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    esbuild: {
      // Disable esbuild for JSX so Babel can take over
      jsx: 'automatic',
    },
    plugins: [svgr()],
  },
});