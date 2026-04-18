// sanity.cli.ts
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'hn7poruf',
    dataset: 'production'
  },
  deployment: {
    appId: 'fpph3t8cwi9df9u7oo7w09ay',
  },
});