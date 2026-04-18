import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes'; // We will create this next

export default defineConfig({
  name: 'default',
  title: 'JKisinamal Portfolio Admin',

  projectId: 'hn7poruf', // Replace with your actual ID
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});