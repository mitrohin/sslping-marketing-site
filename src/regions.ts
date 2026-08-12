import type { Locale } from './copy'

export interface RegionConfig {
  code: string
  locale: Locale
  sourceAvailable: boolean
}

export const PRIMARY_REGION_CODE = 'GLOBAL'

export const regions: RegionConfig[] = [
  { code: 'GLOBAL', locale: 'en', sourceAvailable: false },
  { code: 'AE', locale: 'ar', sourceAvailable: true },
  { code: 'AR', locale: 'es', sourceAvailable: true },
  { code: 'AT', locale: 'de', sourceAvailable: true },
  { code: 'AU', locale: 'en', sourceAvailable: true },
  { code: 'BE', locale: 'nl', sourceAvailable: true },
  { code: 'BH', locale: 'ar', sourceAvailable: true },
  { code: 'CA', locale: 'en', sourceAvailable: true },
  { code: 'CH', locale: 'de', sourceAvailable: true },
  { code: 'CL', locale: 'es', sourceAvailable: true },
  { code: 'CO', locale: 'es', sourceAvailable: true },
  { code: 'CZ', locale: 'cs', sourceAvailable: true },
  { code: 'DE', locale: 'de', sourceAvailable: true },
  { code: 'DK', locale: 'da', sourceAvailable: true },
  { code: 'EC', locale: 'es', sourceAvailable: true },
  { code: 'ES', locale: 'es', sourceAvailable: true },
  { code: 'FI', locale: 'fi', sourceAvailable: true },
  { code: 'FR', locale: 'fr', sourceAvailable: true },
  { code: 'GB', locale: 'en', sourceAvailable: true },
  { code: 'GR', locale: 'el', sourceAvailable: true },
  { code: 'GT', locale: 'es', sourceAvailable: true },
  { code: 'HK', locale: 'zh-Hant', sourceAvailable: true },
  { code: 'HR', locale: 'hr', sourceAvailable: true },
  { code: 'HU', locale: 'hu', sourceAvailable: true },
  { code: 'ID', locale: 'id', sourceAvailable: true },
  { code: 'IE', locale: 'en', sourceAvailable: true },
  { code: 'IL', locale: 'he', sourceAvailable: true },
  { code: 'IN', locale: 'hi', sourceAvailable: true },
  { code: 'IT', locale: 'it', sourceAvailable: true },
  { code: 'JP', locale: 'ja', sourceAvailable: true },
  { code: 'KE', locale: 'en', sourceAvailable: true },
  { code: 'MA', locale: 'ar', sourceAvailable: true },
  { code: 'MX', locale: 'es', sourceAvailable: true },
  { code: 'MY', locale: 'ms', sourceAvailable: true },
  { code: 'NG', locale: 'en', sourceAvailable: true },
  { code: 'NL', locale: 'nl', sourceAvailable: true },
  { code: 'NO', locale: 'no', sourceAvailable: true },
  { code: 'NZ', locale: 'en', sourceAvailable: true },
  { code: 'PE', locale: 'es', sourceAvailable: true },
  { code: 'PH', locale: 'fil', sourceAvailable: true },
  { code: 'PK', locale: 'ur', sourceAvailable: true },
  { code: 'PL', locale: 'pl', sourceAvailable: true },
  { code: 'PR', locale: 'es', sourceAvailable: true },
  { code: 'PT', locale: 'pt', sourceAvailable: true },
  { code: 'PY', locale: 'es', sourceAvailable: true },
  { code: 'RO', locale: 'ro', sourceAvailable: true },
  { code: 'RS', locale: 'sr', sourceAvailable: true },
  { code: 'SE', locale: 'sv', sourceAvailable: true },
  { code: 'SG', locale: 'en', sourceAvailable: true },
  { code: 'SI', locale: 'sl', sourceAvailable: true },
  { code: 'SK', locale: 'sk', sourceAvailable: true },
  { code: 'TR', locale: 'tr', sourceAvailable: true },
  { code: 'TW', locale: 'zh-Hant', sourceAvailable: true },
  { code: 'UA', locale: 'uk', sourceAvailable: true },
  { code: 'UY', locale: 'es', sourceAvailable: true },
  { code: 'ZA', locale: 'en', sourceAvailable: true },
]

export const sourceRegions = regions.filter((region) => region.sourceAvailable)

export function getRegion(code: string | null | undefined): RegionConfig {
  const normalized = code?.trim().toUpperCase()
  return regions.find((region) => region.code === normalized) ?? regions[0]
}

export function getRegionUrl(code: string): string {
  return code === PRIMARY_REGION_CODE
    ? 'https://sslping.io/'
    : `https://${code.toLowerCase()}.sslping.io/`
}

export function getRegionName(region: RegionConfig, displayLocale = region.locale): string {
  if (region.code === PRIMARY_REGION_CODE) return 'Global'
  try {
    // Node and Chromium currently ship different CLDR long names for Hong Kong
    // (for example, "Hong Kong SAR China" vs "Hong Kong"). The short form is
    // localized, stable in both runtimes, and prevents an SSR hydration mismatch.
    const style = region.code === 'HK' ? 'short' : 'long'
    return new Intl.DisplayNames([displayLocale], { type: 'region', style }).of(region.code) ?? region.code
  } catch {
    return region.code
  }
}

export function getRegionFlag(code: string): string {
  if (code === PRIMARY_REGION_CODE) return '◎'
  return code
    .toUpperCase()
    .replace(/[A-Z]/g, (letter) => String.fromCodePoint(127397 + letter.charCodeAt(0)))
}

export function getHreflang(region: RegionConfig): string {
  if (region.code === PRIMARY_REGION_CODE) return 'en'
  if (region.code === 'NO') return 'nb-NO'
  return `${region.locale}-${region.code}`
}
