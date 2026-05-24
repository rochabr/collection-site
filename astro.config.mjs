import { defineConfig } from 'astro/config';

// Update `site` to your real GitHub username before the first deploy.
// For a project page (default), keep `base: '/collection-site'`.
// For a user/org page (repo named <user>.github.io), set base: '/'.
export default defineConfig({
  site: 'https://rochabr.github.io',
  base: '/collection-site',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
