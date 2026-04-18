// astro.config.mjs
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static', // <--- ADD THIS LINE
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: 'production',
      studioBasePath: '/admin', // This tells Astro /admin is a special case
      useCdn: false,
    }),
    react(),
  ],
});