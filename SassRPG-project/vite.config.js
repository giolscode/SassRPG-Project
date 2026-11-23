import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// Plusieurs pages : il faut les déclarer pour que `npm run build` les génère
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        giovanni: resolve(import.meta.dirname, 'src/giovanni/index.html'),
        joseph: resolve(import.meta.dirname, 'src/joseph/index.html'),
      },
    },
  },
})
