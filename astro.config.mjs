import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://rustrade.pro',
  devToolbar: {
    enabled: false
  },
  output: 'hybrid',
  adapter: node({
    mode: 'standalone'
  }),
  trailingSlash: 'never',
  build: {
    format: 'directory',
    assets: '_astro'
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ru',
        locales: {
          ru: 'ru-RU',
          en: 'en-US'
        }
      },
      filter: (page) => !page.includes('/api/')
    })
  ],
  // Custom routing - no built-in i18n prefixing
  // Russian: /{city}/page (no prefix)
  // English: /eng/page (no city)
  vite: {
    css: {
      devSourcemap: true
    },
    build: {
      cssMinify: true,
      minify: 'esbuild'
    }
  }
});
