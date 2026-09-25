import { renderToString } from 'react-dom/server'
import App from './App'
import { getPageData } from './page.server'
import { regions } from './regions'
export { encodePage, decodePage } from './page'
export { searchCatalog, catalogWindow, normalizedSearch, SEARCH_PAGE_SIZE } from './catalog'

export const regionCodes = regions.map((region) => region.code)

export function render(regionCode: string) {
  const page = getPageData(regionCode)
  return { html: renderToString(<App page={page} />), page }
}

export { legalPath } from './LegalPage'
import { LegalPage, legalDocument, type LegalKind, type LegalLanguage } from './LegalPage'
export function renderLegal(kind: LegalKind, language: LegalLanguage) {
  return { html: renderToString(<LegalPage kind={kind} language={language} />), page: legalDocument(kind, language) }
}
