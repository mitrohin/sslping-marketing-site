import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

const root = document.getElementById('root')
if (!root) throw new Error('Missing application root')
const localPreview = ['localhost', '127.0.0.1'].includes(window.location.hostname)
const previewRegion = localPreview ? new URLSearchParams(window.location.search).get('region') : null
const initialRegionCode = previewRegion ?? document.documentElement.dataset.region ?? 'GLOBAL'

const application = (
  <StrictMode>
    <App initialRegionCode={initialRegionCode} />
  </StrictMode>
)

if (root.querySelector('main')) hydrateRoot(root, application)
else createRoot(root).render(application)
