// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: SITE_URL and BASE_PATH are injected by the deploy workflow
// (actions/configure-pages). Locally they fall back to sensible defaults.
// - User/org site or custom domain: BASE_PATH = "/"
// - Project site (username.github.io/repo): BASE_PATH = "/repo"
const site = process.env.SITE_URL || 'https://contextai.it';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !/\/(privacy|404)\/?$/.test(page),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
