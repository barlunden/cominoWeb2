// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  site: 'https://cominoweb.no',
  output: 'server',
  adapter: netlify(),
  integrations: [
    react(),
    sitemap()
  ],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});