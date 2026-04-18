import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

// Load environment variables based on the current mode (development or production)
const { PUBLIC_SANITY_PROJECT_ID } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
  output: 'static',

  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID, // Use the variable we just loaded
      dataset: 'production',
      studioBasePath: process.env.NODE_ENV === 'development' ? '/admin' : undefined,
      useCdn: false,
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});