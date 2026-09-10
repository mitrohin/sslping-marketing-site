import rawCatalog from '../data/catalog.csv?raw'
import type { RegionConfig } from './regions'

import { normalizedSearch, type CatalogItem, type CatalogTarget } from './catalog'

const expectedHeader = [
  'name',
  'type',
  'target',
  'method',
  'follow_redirects',
  'validate_tls',
  'source',
  'countries',
  'catalog_id',
  'service_id',
]

function parseCsvLine(line: string): string[] {
  const fields: string[] = []
  let value = ''
  let quoted = false

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index]
    if (character === '"') {
      if (quoted && line[index + 1] === '"') {
        value += '"'
        index += 1
      } else {
        quoted = !quoted
      }
    } else if (character === ',' && !quoted) {
      fields.push(value)
      value = ''
    } else {
      value += character
    }
  }
  fields.push(value)
  return fields
}

function parseCatalog(): CatalogTarget[] {
  const lines = rawCatalog.trim().split(/\r?\n/)
  const header = parseCsvLine(lines.shift() ?? '')
  if (header.join('\u0000') !== expectedHeader.join('\u0000')) {
    throw new Error('The bundled public catalog has an unexpected schema.')
  }

  return lines.map((line) => {
    const fields = parseCsvLine(line)
    if (fields.length !== expectedHeader.length) {
      throw new Error('The bundled public catalog contains an invalid row.')
    }
    return {
      name: fields[0].trim(),
      hostname: fields[2].trim().toLowerCase(),
      countries: fields[7].split('|').map((country) => country.trim()).filter(Boolean),
      catalogId: fields[8].trim(),
      serviceId: fields[9].trim(),
    }
  })
}

export const catalogTargets = parseCatalog()

export const catalogStats = {
  targets: catalogTargets.length,
  services: new Set(catalogTargets.map((target) => target.serviceId)).size,
  statusPages: catalogTargets.reduce((total, target) => total + target.countries.length, 0),
  regions: new Set(catalogTargets.flatMap((target) => target.countries)).size,
}

const englishStatusPreference = ['CA', 'GB', 'AU', 'IE', 'NZ', 'SG', 'ZA', 'NG', 'KE']

function toItem(target: CatalogTarget, statusCountry: string): CatalogItem {
  return {
    name: target.name,
    hostname: target.hostname,
    serviceId: target.serviceId,
    logoUrl: `/assets/service-logos/${target.serviceId}.svg`,
    statusCountry,
    statusUrl: `https://status.sslping.io/${target.serviceId}-${statusCountry.toLowerCase()}`,
    regionCoverage: target.countries.length,
    searchText: '',
  }
}

function globalEnglishCatalog(): CatalogItem[] {
  const grouped = new Map<string, CatalogTarget[]>()
  for (const target of catalogTargets) {
    const group = grouped.get(target.serviceId) ?? []
    group.push(target)
    grouped.set(target.serviceId, group)
  }

  const result: CatalogItem[] = []
  for (const targets of grouped.values()) {
    if (!targets.some((target) => target.countries.length >= 10)) continue

    let selectedTarget: CatalogTarget | undefined
    let selectedCountry: string | undefined
    for (const country of englishStatusPreference) {
      const candidate = targets
        .filter((target) => target.countries.includes(country))
        .sort((left, right) => right.countries.length - left.countries.length)[0]
      if (candidate) {
        selectedTarget = candidate
        selectedCountry = country
        break
      }
    }

    selectedTarget ??= [...targets].sort((left, right) => right.countries.length - left.countries.length)[0]
    selectedCountry ??= selectedTarget.countries[0]
    result.push(toItem(selectedTarget, selectedCountry))
  }
  return result
}

const globalItems = globalEnglishCatalog()

export function getCatalogItems(region: RegionConfig): CatalogItem[] {
  const items = region.sourceAvailable
    ? catalogTargets
        .filter((target) => target.countries.includes(region.code))
        .map((target) => toItem(target, region.code))
    : globalItems

  return items.map((item) => ({ ...item, searchText: normalizedSearch(`${item.name} ${item.hostname}`, region.locale) })).sort((left, right) => {
    const byName = left.name.localeCompare(right.name, region.locale, { sensitivity: 'base' })
    return byName || left.hostname.localeCompare(right.hostname)
  })
}

