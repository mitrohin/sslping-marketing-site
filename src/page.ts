import type { CatalogItem } from './catalog'
import type { Copy, Direction, Locale } from './copy'
import type { ExperienceCopy } from './experienceCopy'
import type { RegionConfig } from './regions'

export interface PageData {
  region: RegionConfig
  locale: Locale
  direction: Direction
  copy: Copy
  experience: ExperienceCopy
  regionName: string
  items: CatalogItem[]
  stats: { targets: number; services: number; statusPages: number; regions: number }
  title: string
  description: string
  canonical: string
  alternates: { hreflang: string; url: string }[]
  ogLocale: string
}

export function interpolate(template: string, values: Record<string, string | number>): string {
  return Object.entries(values).reduce((result, [key, value]) => result.replaceAll(`{${key}}`, String(value)), template)
}

// URLs are deterministic, so transmit each regional service once without
// repeating URL prefixes and JSON property names hundreds of times per page.
type PackedItem = [string, string, string, string, number, string]
export interface PagePayload {
  version: 1
  page: Omit<PageData, 'items'>
  items: PackedItem[]
}

export function encodePage(page: PageData): PagePayload {
  const { items, ...metadata } = page
  return { version: 1, page: metadata, items: items.map((item) => [item.name, item.hostname, item.serviceId, item.statusCountry, item.regionCoverage, item.searchText]) }
}

export function decodePage(payload: PagePayload): PageData {
  if (payload.version !== 1 || !payload.page?.region || !Array.isArray(payload.items)) throw new Error('The directory data is unavailable. Please reload this page.')
  return {
    ...payload.page,
    items: payload.items.map(([name, hostname, serviceId, statusCountry, regionCoverage, searchText]) => ({
      name, hostname, serviceId, statusCountry, regionCoverage, searchText,
      logoUrl: `/assets/service-logos/${serviceId}.svg`,
      statusUrl: `https://status.sslping.io/${serviceId}-${statusCountry.toLowerCase()}`,
    })),
  }
}
