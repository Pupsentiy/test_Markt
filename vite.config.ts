import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:4]',
    },
  },
  plugins: [svgr(), react(), tsconfigPaths()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
