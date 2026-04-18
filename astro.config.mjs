import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  integrations: [
    sanity({
      projectId: 'hn7poruf', // Found in your .env
      dataset: 'production',
      useCdn: false, // Set to false for static builds so it fetches fresh data
      studioBasePath: '/admin', // The dashboard will be at /admin
    }),
    react(),
  ],
});