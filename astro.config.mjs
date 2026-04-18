export default defineConfig({
  output: 'static',
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: 'production',
      useCdn: false,
    }),
    react(),
  ],
});