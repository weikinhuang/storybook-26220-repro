import { defineConfig, searchForWorkspaceRoot } from 'vite'
import path from 'node:path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, '../../ui'),
      },
    ],
  },
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        path.resolve(__dirname, '../../ui'),
      ],
    },
  },
})
