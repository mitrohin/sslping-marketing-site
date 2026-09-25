import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), {
    name: 'legal-document-preview',
    // Match production's exact document routes before Vite's SPA fallback.
    configurePreviewServer(server) {
      server.middlewares.use((request, _response, next) => {
        const [path, query] = (request.url ?? '').split('?', 2)
        if (/^\/(?:ru\/)?(?:privacy|terms)\/?$/.test(path)) {
          request.url = `${path.replace(/\/$/, '')}/index.html${query ? `?${query}` : ''}`
        }
        next()
      })
    },
  }],
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
