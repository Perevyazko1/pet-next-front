import { defineConfig } from 'orval';

export default defineConfig({
  shelter: {
    input: {
      target: 'http://localhost:8000/api/schema/',
    },
    output: {
      mode: 'tags-split',
      target: './src/shared/api',
      schemas: './src/shared/api/model',
      client: 'react-query',
      override: {
        mutator: {
          path: './src/shared/lib/api-client.ts',
          name: 'apiClient',
        },
      },
    },
  },
});
