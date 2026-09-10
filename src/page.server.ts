import { catalogStats, getCatalogItems } from './catalog.server'
import { copy as localizedCopy, directionForLocale } from './copy'
import { experienceCopy } from './experienceCopy'
import { getHreflang, getRegion, getRegionName, getRegionUrl, PRIMARY_REGION_CODE, regions } from './regions'
import { interpolate } from './page'

export function getPageData(regionCode: string) {
  const region = getRegion(regionCode)
  const regionalCopy = localizedCopy[region.locale]
  const localeCopy = region.code === PRIMARY_REGION_CODE ? {
    ...regionalCopy,
    hero: { ...regionalCopy.hero, title: 'Website and service status worldwide' },
    catalog: { ...regionalCopy.catalog, eyebrow: 'Global directory', title: 'Public status pages for global services' },
  } : regionalCopy
  const regionName = getRegionName(region)
  const items = getCatalogItems(region)
  const title = `${interpolate(localeCopy.catalog.title, { region: regionName })} | SSLPing`
  const description = interpolate(localeCopy.hero.description, { region: regionName })
  const canonical = getRegionUrl(region.code)
  const alternates = [
    ...regions.map((alternateRegion) => ({
      hreflang: getHreflang(alternateRegion),
      url: getRegionUrl(alternateRegion.code),
    })),
    { hreflang: 'x-default', url: getRegionUrl(PRIMARY_REGION_CODE) },
  ]

  return {
    region,
    locale: region.locale,
    direction: directionForLocale(region.locale),
    copy: localeCopy,
    regionName,
    items,
    stats: catalogStats,
    experience: experienceCopy[region.locale],
    title,
    description,
    canonical,
    alternates,
    ogLocale: getHreflang(region).replaceAll('-', '_'),
  }
}

