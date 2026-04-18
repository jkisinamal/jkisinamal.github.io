import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: 'production',
      studioBasePath: '/admin',
      prerender: true, 
      useCdn: false,
    }),
    react(),
  ],
});