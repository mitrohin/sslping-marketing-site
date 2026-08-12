import { renderToString } from 'react-dom/server'
import App, { getPageData } from './App'
import { regions } from './regions'

export const regionCodes = regions.map((region) => region.code)

export function render(regionCode: string) {
  const page = getPageData(regionCode)
  return {
    html: renderToString(<App initialRegionCode={page.region.code} />),
    page,
  }
}
