import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://danmarshall.github.io',
  base: process.env.ASTRO_BASE || '/test-actions',
});
