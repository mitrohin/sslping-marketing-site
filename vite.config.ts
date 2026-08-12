import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: isSsrBuild ? undefined : {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.indexOf('/node_modules/') !== -1) return 'vendor'
        },
      },
    },
  },
  server: {
    host: '127.0.0.1',
    port: 4175,
  },
  preview: {
    host: '127.0.0.1',
    port: 4176,
  },
}))
