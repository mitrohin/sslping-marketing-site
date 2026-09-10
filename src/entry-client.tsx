import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import { decodePage, type PagePayload } from './page'
import { getRegion } from './regions'
import './styles.css'
import { startClientTelemetry } from './clientTelemetry'

startClientTelemetry('marketing')

interface Bootstrap { payload: PagePayload; regions: Record<string, string> }

async function start() {
  const root = document.getElementById('root')
  if (!root) throw new Error('Missing application root')
  const localPreview = ['localhost', '127.0.0.1'].includes(window.location.hostname)
  const previewRegion = localPreview ? new URLSearchParams(window.location.search).get('region') : null
  const region = getRegion(previewRegion ?? document.documentElement.dataset.region)
  const embedded = document.getElementById('directory-data')?.textContent
  let page
  let sameDocument = true
  if (embedded) {
    const bootstrap: Bootstrap = JSON.parse(embedded)
    let payload = bootstrap.payload
    if (localPreview && payload.page.region.code !== region.code) {
      const url = bootstrap.regions[region.code]
      if (!url) throw new Error('The selected regional directory is unavailable.')
      const response = await fetch(url, { signal: AbortSignal.timeout(15_000) })
      if (!response.ok) throw new Error('The selected regional directory could not be loaded. Please reload this page.')
      payload = await response.json()
      if (payload.page.region.code !== region.code) throw new Error('The regional directory did not match the selected region.')
      sameDocument = false
    }
    page = decodePage(payload)
  } else if (import.meta.env.DEV) {
    // The CSV and all translations are development/build inputs only; Vite
    // removes this branch and its import from the production client graph.
    page = (await import('./page.server')).getPageData(region.code)
    sameDocument = false
  } else {
    throw new Error('The directory data is unavailable. Please reload this page.')
  }
  document.title = page.title
  const application = <StrictMode><App page={page} /></StrictMode>
  if (sameDocument && root.querySelector('main')) hydrateRoot(root, application)
  else createRoot(root).render(application)
}

void start().catch((error: unknown) => {
  window.dispatchEvent(new CustomEvent('sslping:client-event', { detail: { name: 'render_error', value: 1 } }))
  // Prerendered content and links remain usable if enhancement cannot start.
  const notice = document.createElement('p')
  notice.className = 'directory-load-error'
  notice.role = 'alert'
  notice.textContent = error instanceof Error ? error.message : 'Please reload this page to use directory search.'
  document.getElementById('root')?.prepend(notice)
})
