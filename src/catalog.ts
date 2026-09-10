export interface CatalogTarget {
  name: string
  hostname: string
  countries: string[]
  catalogId: string
  serviceId: string
}

export interface CatalogItem {
  name: string
  hostname: string
  serviceId: string
  logoUrl: string
  statusCountry: string
  statusUrl: string
  regionCoverage: number
  searchText: string
}

export function getInitial(value: string): string {
  const initial = value.trim().charAt(0).toLocaleUpperCase()
  return /[\p{L}\p{N}]/u.test(initial) ? initial : '#'
}

export function getServiceMonogram(name: string): string {
  const words = name.trim().split(/[\s._-]+/).filter(Boolean)
  if (words.length === 0) return '•'
  if (words.length === 1) return words[0].slice(0, 2).toLocaleUpperCase()
  return `${words[0][0]}${words[1][0]}`.toLocaleUpperCase()
}

export function getServiceHue(serviceId: string): number {
  let hash = 0
  for (const character of serviceId) hash = ((hash << 5) - hash + character.charCodeAt(0)) | 0
  return Math.abs(hash) % 360
}

/** Build-time keys and input use the same locale-aware normalization. */
export function normalizedSearch(value: string, locale: string): string {
  return value.trim().toLocaleLowerCase(locale).normalize('NFKD').replace(/\p{M}/gu, '')
}

export const SEARCH_PAGE_SIZE = 60

export function searchCatalog(items: readonly CatalogItem[], query: string, letter: string, locale: string): CatalogItem[] {
  const needle = normalizedSearch(query, locale)
  return items.filter((item) => (letter === 'ALL' || getInitial(item.name) === letter) && (!needle || item.searchText.includes(needle)))
}

export function catalogWindow(items: readonly CatalogItem[], filtered: boolean, limit = SEARCH_PAGE_SIZE): readonly CatalogItem[] {
  // The full unfiltered directory stays server rendered and crawlable. Search
  // results are rendered in bounded batches after the visitor narrows the list.
  return filtered ? items.slice(0, Math.max(SEARCH_PAGE_SIZE, limit)) : items
}
