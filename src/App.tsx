import { type CSSProperties, type FormEvent, useEffect, useMemo, useState } from 'react'
import { catalogStats, getCatalogItems, getInitial, getServiceHue, getServiceMonogram } from './catalog'
import { copy as localizedCopy, directionForLocale, type Copy } from './copy'
import { Icon } from './Icon'
import {
  getHreflang,
  getRegion,
  getRegionFlag,
  getRegionName,
  getRegionUrl,
  PRIMARY_REGION_CODE,
  regions,
  sourceRegions,
  type RegionConfig,
} from './regions'

const DASHBOARD_BASE_URL = (
  import.meta.env.VITE_DASHBOARD_URL?.trim()
  || (import.meta.env.DEV ? 'http://127.0.0.1:5173' : 'https://dashboard.sslping.io')
).replace(/\/+$/, '')

const DASHBOARD_LOGIN_URL = `${DASHBOARD_BASE_URL}/login`
const DASHBOARD_REGISTER_URL = `${DASHBOARD_BASE_URL}/register`

function interpolate(template: string, values: Record<string, string | number>): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
    template,
  )
}

function normalizedSearch(value: string, locale: string): string {
  return value.trim().toLocaleLowerCase(locale).normalize('NFKD')
}

function formatNumber(value: number): string {
  // Keep the server-rendered and hydrated value byte-for-byte identical. ICU
  // data differs between the Node and Chromium runtimes for some numbering
  // systems (notably Arabic), so use an explicit, readable grouping format.
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function getPageData(regionCode: string) {
  const region = getRegion(regionCode)
  const localeCopy = localizedCopy[region.locale]
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
    title,
    description,
    canonical,
    alternates,
    ogLocale: getHreflang(region).replaceAll('-', '_'),
  }
}

type PageData = ReturnType<typeof getPageData>

function Brand() {
  return (
    <span className="brand-lockup">
      <span className="brand-symbol" aria-hidden="true"><span /></span>
      <span className="brand-name">SSL<span>Ping</span></span>
    </span>
  )
}

function RegionPicker({ page }: { page: PageData }) {
  const options = useMemo(() => {
    const collator = new Intl.Collator(page.locale, { sensitivity: 'base' })
    const regional = [...sourceRegions].sort((left, right) => (
      collator.compare(getRegionName(left, page.locale), getRegionName(right, page.locale))
    ))
    return [regions[0], ...regional]
  }, [page.locale])

  function changeRegion(code: string) {
    if (typeof window === 'undefined') return
    const local = ['localhost', '127.0.0.1'].includes(window.location.hostname)
    window.location.assign(local ? `/?region=${code}` : getRegionUrl(code))
  }

  return (
    <label className="region-picker">
      <Icon name="mapPin" />
      <span className="sr-only">{page.copy.regionSelectorLabel}</span>
      <select
        value={page.region.code}
        onChange={(event) => changeRegion(event.target.value)}
        aria-label={page.copy.regionSelectorLabel}
      >
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {getRegionFlag(option.code)} {getRegionName(option, page.locale)}
          </option>
        ))}
      </select>
      <Icon name="chevron" />
    </label>
  )
}

function Header({ page }: { page: PageData }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigation = [
    [page.copy.nav.directory, '#directory'],
    [page.copy.nav.how, '#how-it-works'],
    [page.copy.nav.regions, '#regions'],
    [page.copy.nav.monitoring, '#monitoring'],
  ]

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand-link" href="#top" aria-label="SSLPing"><Brand /></a>
        <nav className={menuOpen ? 'primary-nav primary-nav--open' : 'primary-nav'} aria-label="Primary">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <div className="mobile-account-actions">
            <a href={DASHBOARD_LOGIN_URL}>{page.copy.nav.login}</a>
            <a className="button button--light" href={DASHBOARD_REGISTER_URL}>{page.copy.nav.monitoring}</a>
          </div>
        </nav>
        <div className="header-actions">
          <RegionPicker page={page} />
          <a className="login-link" href={DASHBOARD_LOGIN_URL}>{page.copy.nav.login}</a>
          <a className="button button--lime header-cta" href={DASHBOARD_REGISTER_URL}>{page.copy.nav.monitoring}<Icon name="arrow" /></a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? page.copy.menu.close : page.copy.menu.open}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero({ page, query, setQuery }: { page: PageData; query: string; setQuery: (value: string) => void }) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const metrics = [
    [formatNumber(page.items.length), page.copy.metrics.services],
    [formatNumber(catalogStats.statusPages), page.copy.metrics.statusPages],
    ['4', page.copy.metrics.checkLocations],
  ]

  return (
    <section className="hero" id="top">
      <div className="hero-mesh" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--dark"><span className="eyebrow-pulse" />{page.copy.hero.eyebrow}</p>
          <h1>{interpolate(page.copy.hero.title, { region: page.regionName })}</h1>
          <p className="hero-description">{interpolate(page.copy.hero.description, { region: page.regionName })}</p>
          <form className="hero-search" role="search" onSubmit={submit}>
            <label className="sr-only" htmlFor="hero-search">{page.copy.hero.searchLabel}</label>
            <Icon name="search" />
            <input
              id="hero-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={page.copy.hero.searchPlaceholder}
              autoComplete="off"
              enterKeyHint="search"
            />
            <button className="button button--coral" type="submit">{page.copy.hero.searchButton}<Icon name="arrow" /></button>
          </form>
          <p className="trust-note"><Icon name="shield" />{page.copy.hero.trustNote}</p>
          <dl className="hero-metrics">
            {metrics.map(([value, label]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
        </div>
        <div className="network-card" aria-hidden="true">
          <div className="network-card-head">
            <span><i />SSLPing</span>
            <strong>05:00</strong>
          </div>
          <div className="network-orbit">
            <span className="orbit orbit--outer" />
            <span className="orbit orbit--inner" />
            <span className="orbit-axis orbit-axis--x" />
            <span className="orbit-axis orbit-axis--y" />
            <span className="network-core"><Icon name="globe" /><i /><i /><i /></span>
            <span className="network-node network-node--one"><i />HTTP</span>
            <span className="network-node network-node--two"><i />TLS</span>
            <span className="network-node network-node--three"><i />DNS</span>
            <span className="network-node network-node--four"><i />302</span>
          </div>
          <div className="network-feed">
            <div><span className="feed-icon"><Icon name="activity" /></span><p><strong>HTTP(S)</strong><small>4 × GEO</small></p><em>200 OK</em></div>
            <div><span className="feed-icon"><Icon name="lock" /></span><p><strong>X.509</strong><small>TLS / CAA / DNS</small></p><em>TLS 1.3</em></div>
            <div><span className="feed-icon"><Icon name="signal" /></span><p><strong>STATUS.SSLPING.IO</strong><small>PUBLIC</small></p><em>↗</em></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionIntro({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body: string; light?: boolean }) {
  return (
    <div className={light ? 'section-intro section-intro--light' : 'section-intro'}>
      <p className="eyebrow"><Icon name="spark" />{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

function ServiceCard({ item, copy, global }: { item: PageData['items'][number]; copy: Copy; global: boolean }) {
  const style = { '--service-hue': getServiceHue(item.serviceId) } as CSSProperties
  return (
    <li className="service-item">
      <a className="service-card" href={item.statusUrl} style={style}>
        <span className="service-monogram" aria-hidden="true">{getServiceMonogram(item.name)}</span>
        <span className="service-copy">
          <strong>{item.name}</strong>
          <small dir="ltr">{item.hostname}</small>
          <span className="service-meta">
            <i />{copy.catalog.verifiedPage}
            {global && <em>{getRegionFlag(item.statusCountry)} {item.statusCountry}</em>}
          </span>
        </span>
        <span className="service-open">{copy.catalog.openStatus}<Icon name="external" /></span>
      </a>
    </li>
  )
}

function Directory({ page, query, setQuery }: { page: PageData; query: string; setQuery: (value: string) => void }) {
  const [letter, setLetter] = useState('ALL')
  const initials = useMemo(() => (
    [...new Set(page.items.map((item) => getInitial(item.name)))].sort((left, right) => (
      left.localeCompare(right, page.locale, { numeric: true, sensitivity: 'base' })
    ))
  ), [page.items, page.locale])

  const filtered = useMemo(() => {
    const needle = normalizedSearch(query, page.locale)
    return page.items.filter((item) => {
      const matchesLetter = letter === 'ALL' || getInitial(item.name) === letter
      if (!matchesLetter) return false
      if (!needle) return true
      return normalizedSearch(`${item.name} ${item.hostname}`, page.locale).includes(needle)
    })
  }, [letter, page.items, page.locale, query])

  function clearFilters() {
    setQuery('')
    setLetter('ALL')
  }

  return (
    <section className="section directory-section" id="directory">
      <div className="container">
        <SectionIntro
          eyebrow={interpolate(page.copy.catalog.eyebrow, { region: page.regionName })}
          title={interpolate(page.copy.catalog.title, { region: page.regionName })}
          body={interpolate(page.copy.catalog.description, { region: page.regionName })}
        />
        {!page.region.sourceAvailable && (
          <aside className="catalog-note"><Icon name="globe" /><p>{page.copy.catalog.usFallbackNote}</p></aside>
        )}
        <div className="directory-toolbar">
          <label className="directory-search">
            <span className="sr-only">{page.copy.catalog.searchLabel}</span>
            <Icon name="search" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={page.copy.hero.searchPlaceholder}
              autoComplete="off"
            />
            {query && <button type="button" onClick={() => setQuery('')} aria-label={page.copy.catalog.clear}><Icon name="close" /></button>}
          </label>
          <p>
            {interpolate(
              filtered.length === 1 ? page.copy.catalog.resultSingular : page.copy.catalog.results,
              { count: formatNumber(filtered.length) },
            )}
          </p>
        </div>
        <div className="letter-filter" role="group" aria-label={page.copy.catalog.filterLabel}>
          <button className={letter === 'ALL' ? 'is-active' : ''} type="button" onClick={() => setLetter('ALL')}>{page.copy.catalog.all}</button>
          {initials.map((initial) => (
            <button className={letter === initial ? 'is-active' : ''} key={initial} type="button" onClick={() => setLetter(initial)}>{initial}</button>
          ))}
        </div>
        {filtered.length > 0 ? (
          <ul className="service-grid">
            {filtered.map((item) => <ServiceCard key={`${item.serviceId}:${item.statusCountry}`} item={item} copy={page.copy} global={!page.region.sourceAvailable} />)}
          </ul>
        ) : (
          <div className="empty-state">
            <span><Icon name="search" /></span>
            <h3>{page.copy.catalog.noResults}</h3>
            <button className="button button--dark" type="button" onClick={clearFilters}>{page.copy.catalog.clear}</button>
          </div>
        )}
      </div>
    </section>
  )
}

function HowItWorks({ page }: { page: PageData }) {
  const icons = ['signal', 'shield', 'globe'] as const
  return (
    <section className="section how-section" id="how-it-works">
      <div className="container">
        <SectionIntro eyebrow={page.copy.how.eyebrow} title={page.copy.how.title} body={page.copy.how.body} light />
        <ol className="how-grid">
          {page.copy.how.steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <span className="step-icon"><Icon name={icons[index]} /></span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Regions({ page }: { page: PageData }) {
  const sortedRegions = useMemo(() => (
    [...sourceRegions].sort((left, right) => (
      getRegionName(left, page.locale).localeCompare(getRegionName(right, page.locale), page.locale, { sensitivity: 'base' })
    ))
  ), [page.locale])

  return (
    <section className="section regions-section" id="regions">
      <div className="container">
        <div className="regions-heading">
          <SectionIntro eyebrow={page.copy.regions.eyebrow} title={page.copy.regions.title} body={page.copy.regions.body} />
          <div className="region-count"><strong>{catalogStats.regions}</strong><span>{page.copy.nav.regions}</span></div>
        </div>
        <nav className="region-grid" aria-label={page.copy.regionSelectorLabel}>
          {sortedRegions.map((region) => {
            const active = region.code === page.region.code
            return (
              <a key={region.code} className={active ? 'region-card is-current' : 'region-card'} href={getRegionUrl(region.code)} hrefLang={getHreflang(region)}>
                <span className="region-flag" aria-hidden="true">{getRegionFlag(region.code)}</span>
                <span><strong>{getRegionName(region, page.locale)}</strong><small>{region.code}</small></span>
                {active ? <em>{page.copy.regions.current}</em> : <Icon name="arrow" />}
              </a>
            )
          })}
        </nav>
      </div>
    </section>
  )
}

function Product({ page }: { page: PageData }) {
  return (
    <section className="section product-section" id="monitoring">
      <div className="container product-panel">
        <div className="product-copy">
          <p className="eyebrow eyebrow--dark"><Icon name="activity" />{page.copy.product.eyebrow}</p>
          <h2>{page.copy.product.title}</h2>
          <p>{page.copy.product.body}</p>
          <ul>
            {page.copy.product.benefits.map((benefit) => <li key={benefit}><Icon name="check" />{benefit}</li>)}
          </ul>
          <div className="product-actions">
            <a className="button button--lime" href={DASHBOARD_REGISTER_URL}>{page.copy.product.primary}<Icon name="arrow" /></a>
            <a className="button button--outline-light" href={DASHBOARD_LOGIN_URL}>{page.copy.product.secondary}</a>
          </div>
        </div>
        <div className="product-visual" aria-hidden="true">
          <div className="visual-window-bar"><span /><span /><span /><em>dashboard.sslping.io</em></div>
          <div className="visual-title"><p><small>HTTP(S)</small><strong>api.example.com</strong></p><span><i />200 OK</span></div>
          <div className="visual-metrics"><p><small>SLA</small><strong>99.99%</strong></p><p><small>RTT</small><strong>184 ms</strong></p><p><small>TLS</small><strong>84d</strong></p></div>
          <div className="visual-chart"><span /><svg viewBox="0 0 560 170" preserveAspectRatio="none"><path d="M0 130C48 124 58 92 108 105s70-48 118-18 73 47 121 9 75-59 113-28 55 64 100 12 66-41 100-31" /></svg></div>
          <div className="visual-locations"><span><i />EU 01</span><span><i />AP 02</span><span><i />NA 03</span><span><i />EU 04</span></div>
        </div>
      </div>
    </section>
  )
}

function Faq({ page }: { page: PageData }) {
  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <SectionIntro eyebrow={page.copy.faq.eyebrow} title={page.copy.faq.title} body="" />
        <div className="faq-list">
          {page.copy.faq.items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span><Icon name="chevron" /></span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer({ page }: { page: PageData }) {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div><Brand /><p>{page.copy.footer.tagline}</p></div>
        <nav aria-label="Footer">
          <a href="#directory">{page.copy.footer.directory}</a>
          <a href="#how-it-works">{page.copy.footer.how}</a>
          <a href="#regions">{page.copy.footer.regions}</a>
          <a href="mailto:privacy@sslping.io">{page.copy.footer.privacy}</a>
          <a href="mailto:legal@sslping.io">{page.copy.footer.terms}</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>{interpolate(page.copy.footer.copyright, { year: new Date().getUTCFullYear() })}</span>
        <span><i />SSLPING · 4 × GEO · 5 MIN</span>
      </div>
    </footer>
  )
}

function StructuredData({ page }: { page: PageData }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://sslping.io/#organization',
        name: 'SSLPing',
        url: 'https://sslping.io/',
        logo: 'https://sslping.io/favicon.svg',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://sslping.io/#website',
        name: 'SSLPing Public Status Directory',
        url: 'https://sslping.io/',
        publisher: { '@id': 'https://sslping.io/#organization' },
      },
      {
        '@type': 'CollectionPage',
        '@id': `${page.canonical}#directory`,
        url: page.canonical,
        name: page.title,
        description: page.description,
        inLanguage: getHreflang(page.region),
        isPartOf: { '@id': 'https://sslping.io/#website' },
        about: {
          '@type': 'Thing',
          name: 'Public website status pages',
        },
        mainEntity: { '@id': `${page.canonical}#services` },
      },
      {
        '@type': 'ItemList',
        '@id': `${page.canonical}#services`,
        numberOfItems: page.items.length,
        itemListElement: page.items.slice(0, 100).map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          url: item.statusUrl,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: page.region.code === PRIMARY_REGION_CODE
          ? [{ '@type': 'ListItem', position: 1, name: 'SSLPing', item: 'https://sslping.io/' }]
          : [
              { '@type': 'ListItem', position: 1, name: 'SSLPing', item: 'https://sslping.io/' },
              { '@type': 'ListItem', position: 2, name: page.regionName, item: page.canonical },
            ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.copy.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  }
  const serialized = JSON.stringify(data).replaceAll('<', '\\u003c')
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialized }} />
}

export default function App({ initialRegionCode }: { initialRegionCode: string }) {
  const page = useMemo(() => getPageData(initialRegionCode), [initialRegionCode])
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.documentElement.lang = page.locale
    document.documentElement.dir = page.direction
    document.documentElement.dataset.region = page.region.code
  }, [page.direction, page.locale, page.region.code])

  return (
    <>
      <StructuredData page={page} />
      <a className="skip-link" href="#directory">{page.copy.skipLink}</a>
      <Header page={page} />
      <main>
        <Hero page={page} query={query} setQuery={setQuery} />
        <Directory page={page} query={query} setQuery={setQuery} />
        <HowItWorks page={page} />
        <Regions page={page} />
        <Product page={page} />
        <Faq page={page} />
      </main>
      <Footer page={page} />
    </>
  )
}
