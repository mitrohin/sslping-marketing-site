import { FormEvent, type ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { Icon, type IconName } from './Icon'
import {
  isLocale,
  localeOptions,
  translations,
  type Copy,
  type Locale,
} from './content'

const CONSENT_KEY = 'sslping-consent-v1'
const CONSENT_VERSION = '2026-07-25'
const DASHBOARD_BASE_URL = (
  import.meta.env.VITE_DASHBOARD_URL?.trim()
  || (import.meta.env.DEV ? 'http://127.0.0.1:5173' : 'https://dashboard.sslping.io')
).replace(/\/+$/, '')
const DASHBOARD_LOGIN_URL = `${DASHBOARD_BASE_URL}/login`
const DASHBOARD_REGISTER_URL = `${DASHBOARD_BASE_URL}/register`

type ConsentChoices = {
  analytics: boolean
  functional: boolean
  marketing: boolean
}

type ConsentRecord = {
  version: string
  timestamp: string
  locale: Locale
  gpc: boolean
  categories: ConsentChoices
}

function safeStorageGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function safeStorageSet(key: string, value: string): boolean {
  try {
    window.localStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}

const monitorIcons: IconName[] = ['activity', 'shield', 'globe', 'code', 'server', 'pulse']
const useCaseIcons: IconName[] = ['code', 'layers', 'chart', 'server']

function readConsent(): ConsentRecord | null {
  try {
    const stored = safeStorageGet(CONSENT_KEY)
    if (!stored) return null
    const parsed = JSON.parse(stored) as ConsentRecord
    if (
      parsed.version !== CONSENT_VERSION ||
      !isLocale(parsed.locale) ||
      typeof parsed.timestamp !== 'string' ||
      typeof parsed.gpc !== 'boolean' ||
      typeof parsed.categories?.analytics !== 'boolean' ||
      typeof parsed.categories?.functional !== 'boolean' ||
      typeof parsed.categories?.marketing !== 'boolean'
    ) return null
    return parsed
  } catch {
    return null
  }
}

function detectInitialLocale(): Locale {
  const urlLocale = new URLSearchParams(window.location.search).get('lang')
  if (urlLocale && isLocale(urlLocale)) return urlLocale

  const saved = safeStorageGet('sslping-locale')
  if (saved && isLocale(saved)) return saved

  for (const candidate of navigator.languages ?? [navigator.language]) {
    const normalized = candidate.toLowerCase().split('-')[0]
    if (isLocale(normalized)) return normalized
  }

  return 'en'
}

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="SSLPing home">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-pulse" />
      </span>
      <span>SSL<span>Ping</span></span>
    </a>
  )
}

function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'center',
}: {
  eyebrow: string
  title: string
  body: string
  align?: 'center' | 'start'
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="eyebrow"><Icon name="spark" />{eyebrow}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

function ArrowLink({ children, href = '#platform' }: { children: ReactNode; href?: string }) {
  return (
    <a className="arrow-link" href={href}>
      {children}<Icon name="arrow" />
    </a>
  )
}

function CheckList({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={compact ? 'check-list check-list--compact' : 'check-list'}>
      {items.map((item) => (
        <li key={item}><span><Icon name="check" /></span>{item}</li>
      ))}
    </ul>
  )
}

function MonitorForm({
  copy,
  final = false,
  registerUrl,
}: {
  copy: Copy['hero'] | Copy['final']
  final?: boolean
  registerUrl: string
}) {
  const [value, setValue] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const feedback = status === 'success'
    ? ('formSuccess' in copy ? copy.formSuccess : `✓ ${copy.primary}`)
    : status === 'error'
      ? ('formError' in copy ? copy.formError : copy.placeholder)
      : ''

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const candidate = value.trim()
    try {
      const normalized = /^https?:\/\//i.test(candidate) ? candidate : `https://${candidate}`
      const url = new URL(normalized)
      if (final) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidate)) throw new Error('invalid')
      } else if (!url.hostname.includes('.') && url.hostname !== 'localhost') {
        throw new Error('invalid')
      }
      setStatus('success')
      window.location.assign(registerUrl)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={final ? 'monitor-form-wrap monitor-form-wrap--final' : 'monitor-form-wrap'}>
      <form className="monitor-form" onSubmit={submit} noValidate>
        <label className="sr-only" htmlFor={final ? 'final-url' : 'hero-url'}>{copy.placeholder}</label>
        <span className="url-prefix" aria-hidden="true"><Icon name="globe" /></span>
        <input
          id={final ? 'final-url' : 'hero-url'}
          type={final ? 'email' : 'text'}
          inputMode={final ? 'email' : 'url'}
          autoCapitalize="none"
          autoCorrect="off"
          value={value}
          onChange={(event) => { setValue(event.target.value); setStatus('idle') }}
          placeholder={copy.placeholder}
          autoComplete={final ? 'email' : 'url'}
          required
          dir="ltr"
          aria-invalid={status === 'error'}
          aria-describedby={feedback ? (final ? 'final-feedback' : 'hero-feedback') : undefined}
        />
        <button className="button button--primary" type="submit">{copy.primary}<Icon name="arrow" /></button>
      </form>
      {feedback && <p className="form-feedback" id={final ? 'final-feedback' : 'hero-feedback'} role="status">{feedback}</p>}
    </div>
  )
}

function ProductPreview({ copy }: { copy: Copy['hero']['preview'] }) {
  return (
    <div className="product-preview" aria-hidden="true">
      <div className="preview-glow preview-glow--one" />
      <div className="preview-glow preview-glow--two" />
      <aside className="preview-sidebar">
        <span className="mini-brand"><span className="mini-brand-dot" />SP</span>
        <span className="sidebar-item sidebar-item--active"><Icon name="activity" /></span>
        <span className="sidebar-item"><Icon name="shield" /></span>
        <span className="sidebar-item"><Icon name="bell" /></span>
        <span className="sidebar-spacer" />
        <span className="avatar">AM</span>
      </aside>
      <div className="preview-main">
        <div className="preview-topline">
          <div>
            <span className="preview-kicker">{copy.endpoint}</span>
            <strong>dashboard.sslping.io</strong>
          </div>
          <span className="status-pill"><span />{copy.status}</span>
        </div>
        <div className="metric-row">
          <article className="mini-metric">
            <span>{copy.uptime}</span>
            <strong>99.99%</strong>
            <small>30d</small>
          </article>
          <article className="mini-metric">
            <span>{copy.response}</span>
            <strong>182 <small>ms</small></strong>
            <small className="trend">↓ 14%</small>
          </article>
          <article className="mini-metric">
            <span>{copy.locations}</span>
            <strong>12 / 12</strong>
            <small>{copy.status}</small>
          </article>
        </div>
        <div className="preview-grid">
          <article className="chart-card">
            <div className="card-heading"><span>{copy.response}</span><strong>24h</strong></div>
            <svg className="line-chart" viewBox="0 0 520 150" role="img" aria-label={copy.response}>
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#5069f4" stopOpacity=".28" />
                  <stop offset="1" stopColor="#5069f4" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="chart-grid-line" d="M0 30H520M0 75H520M0 120H520" />
              <path className="chart-area" d="M0 118C35 113 42 89 78 97s49-28 82-19 42 24 73 10 48-48 79-37 54 60 91 45 61-66 117-52v106H0Z" />
              <path className="chart-line" d="M0 118C35 113 42 89 78 97s49-28 82-19 42 24 73 10 48-48 79-37 54 60 91 45 61-66 117-52" />
              <circle cx="403" cy="96" r="5" />
            </svg>
          </article>
          <article className="certificate-card">
            <div className="card-heading"><span>{copy.certificate}</span><span className="verified-dot"><Icon name="check" /></span></div>
            <div className="certificate-ring"><strong>92</strong><span>/100</span></div>
            <div className="certificate-meta"><span>{copy.expires}</span><strong>84d</strong></div>
          </article>
        </div>
        <div className="incident-strip">
          <span className="incident-icon"><Icon name="shield" /></span>
          <div><strong>{copy.incident}</strong><small>{copy.status}</small></div>
        </div>
      </div>
    </div>
  )
}

function Header({
  copy,
  locale,
  onLocale,
  menuOpen,
  setMenuOpen,
  loginUrl,
  registerUrl,
}: {
  copy: Copy
  locale: Locale
  onLocale: (locale: Locale) => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  loginUrl: string
  registerUrl: string
}) {
  const navLinks = [
    [copy.nav.platform, '#platform'],
    [copy.nav.security, '#security'],
    [copy.nav.workflow, '#workflow'],
    [copy.nav.pricing, '#pricing'],
    [copy.nav.resources, '#faq'],
  ]

  return (
    <header className="site-header">
      <div className="header-shell">
        <Logo />
        <nav className={menuOpen ? 'main-nav main-nav--open' : 'main-nav'} aria-label="Primary navigation">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <div className="mobile-nav-actions">
            <a className="button button--ghost" href={loginUrl} onClick={() => setMenuOpen(false)}>{copy.nav.login}</a>
            <a className="button button--primary" href={registerUrl} onClick={() => setMenuOpen(false)}>{copy.nav.start}<Icon name="arrow" /></a>
          </div>
        </nav>
        <div className="header-actions">
          <label className="language-picker">
            <Icon name="globe" />
            <span className="sr-only">{copy.nav.language}</span>
            <select value={locale} onChange={(event) => onLocale(event.target.value as Locale)} aria-label={copy.nav.language}>
              {localeOptions.map((option) => <option key={option.code} value={option.code}>{option.short}</option>)}
            </select>
          </label>
          <a className="header-login" href={loginUrl}>{copy.nav.login}</a>
          <a className="button button--primary header-cta" href={registerUrl}>{copy.nav.start}</a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? copy.nav.close : copy.nav.menu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}

function SecurityVisual({ copy }: { copy: Copy['security'] }) {
  return (
    <div className="security-visual">
      <div className="security-toolbar">
        <span><Icon name="shield" /> dashboard.sslping.io</span>
        <span className="status-pill"><span />A+</span>
      </div>
      <div className="certificate-path">
        <div className="certificate-node certificate-node--root"><Icon name="lock" /><span>{copy.chain}</span><small>Root CA</small></div>
        <span className="path-line"><i /></span>
        <div className="certificate-node"><Icon name="shield" /><span>{copy.protocol}</span><small>TLS 1.3</small></div>
        <span className="path-line"><i /></span>
        <div className="certificate-node"><Icon name="globe" /><span>{copy.transparency}</span><small>CT logs</small></div>
      </div>
      <div className="security-bottom">
        <div className="expiry-card">
          <span>{copy.expiry}</span>
          <div className="expiry-value"><strong>84</strong></div>
          <div className="progress-track"><span /></div>
        </div>
        <div className="policy-card">
          <div><span>OCSP</span><strong><Icon name="check" /></strong></div>
          <div><span>CAA</span><strong><Icon name="check" /></strong></div>
          <div><span>DNSSEC</span><strong><Icon name="check" /></strong></div>
        </div>
      </div>
    </div>
  )
}

function NetworkVisual({ copy }: { copy: Copy['network'] }) {
  const points = [
    [16, 43], [28, 34], [38, 58], [50, 42], [60, 28], [70, 52], [82, 39], [89, 61],
  ]
  return (
    <div className="network-visual">
      <div className="world-grid" aria-hidden="true">
        <svg viewBox="0 0 100 70" preserveAspectRatio="none">
          <path d="M5 35h90M50 3v64M18 12c19 12 45 12 64 0M18 58c19-12 45-12 64 0M15 35C15 18 31 5 50 5s35 13 35 30-16 30-35 30-35-13-35-30ZM34 5c-8 18-8 42 0 60M66 5c8 18 8 42 0 60" />
          {points.map(([x, y], index) => <circle key={index} cx={x} cy={y} r={index % 3 === 0 ? 2 : 1.5} />)}
        </svg>
      </div>
      <span className="network-center"><span className="network-wave" /><Icon name="activity" /></span>
      <div className="region-list">
        {copy.regions.map((region, index) => <span key={region}><i className={`flag-dot flag-dot--${index + 1}`} />{region}<strong>{[118, 83, 142, 96][index] ?? 104} ms</strong></span>)}
      </div>
      <p>{copy.caption}</p>
    </div>
  )
}

function StatusPreview({ copy, operational }: { copy: Copy['status']; operational: string }) {
  return (
    <div className="status-preview" aria-hidden="true">
      <div className="browser-chrome"><span /><span /><span /><div>status.sslping.io</div></div>
      <div className="status-page-body">
        <div className="status-page-head"><span className="preview-static-brand"><span className="brand-mark"><span className="brand-pulse" /></span>SSLPing</span><span className="preview-action">{copy.cta}</span></div>
        <div className="status-hero">
          <span className="big-check"><Icon name="check" /></span>
          <div><strong>{copy.previewStatus}</strong><small>{copy.previewTitle}</small></div>
        </div>
        <div className="component-status"><span>API</span><i /><strong>{operational}</strong></div>
        <div className="component-status"><span>SSL/TLS</span><i /><strong>{operational}</strong></div>
        <div className="component-status"><span>DNS</span><i /><strong>{operational}</strong></div>
        <div className="status-history">
          <strong>{copy.previewIncident}</strong>
          <div className="history-bars">{Array.from({ length: 34 }).map((_, index) => <i key={index} className={index === 11 ? 'warn' : ''} />)}</div>
        </div>
      </div>
    </div>
  )
}

function AnalyticsVisual({ copy }: { copy: Copy['analytics'] }) {
  return (
    <div className="analytics-visual" aria-hidden="true">
      <div className="analytics-title"><div><span>{copy.eyebrow}</span><strong>{copy.title}</strong></div><span className="analytics-year">2026</span></div>
      <div className="analytics-metrics">
        <article><span>{copy.labels.uptime}</span><strong>99.982%</strong><small className="positive">+0.04%</small></article>
        <article><span>{copy.labels.latency}</span><strong>184 ms</strong><small className="positive">-18 ms</small></article>
        <article><span>{copy.labels.sslRisk}</span><strong>A</strong><small>2</small></article>
        <article><span>{copy.labels.incidents}</span><strong>3</strong><small>8m</small></article>
      </div>
      <div className="analytics-chart">
        <div className="bar-grid"><span /><span /><span /></div>
        {[48, 62, 55, 78, 71, 85, 66, 88, 92, 76, 96, 89].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
      </div>
    </div>
  )
}

function PhonePreview({ copy }: { copy: Copy['mobile'] }) {
  return (
    <div className="phones" aria-hidden="true">
      <div className="phone phone--back">
        <div className="phone-notch" />
        <div className="phone-screen phone-screen--alert">
          <span className="app-icon"><Icon name="activity" /></span>
          <small>SSLPing</small>
          <strong>{copy.bullets[1]}</strong>
          <p>api.example.com · 7 days</p>
          <button type="button">{copy.coming}</button>
        </div>
      </div>
      <div className="phone phone--front">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="mobile-appbar"><span>9:41</span><Icon name="bell" /></div>
          <small>{copy.coming}</small>
          <h3>{copy.eyebrow}</h3>
          <div className="mobile-health"><span><Icon name="check" /></span><div><strong>{copy.bullets[0]}</strong><small>{copy.coming}</small></div></div>
          <div className="mobile-monitor"><i /><div><strong>api.sslping.io</strong><small>112 ms</small></div><span>99.99%</span></div>
          <div className="mobile-monitor"><i /><div><strong>sslping.io</strong><small>148 ms</small></div><span>100%</span></div>
          <div className="mobile-tabbar"><Icon name="activity" /><Icon name="bell" /><Icon name="shield" /></div>
        </div>
      </div>
    </div>
  )
}

function CookieCenter({
  copy,
  choices,
  setChoices,
  gpc,
  onClose,
  onSave,
  onReject,
  onAccept,
}: {
  copy: Copy['cookies']
  choices: ConsentChoices
  setChoices: (choices: ConsentChoices) => void
  gpc: boolean
  onClose: () => void
  onSave: () => void
  onReject: () => void
  onAccept: () => void
}) {
  const dialogRef = useRef<HTMLElement>(null)
  const categories = [
    { key: 'necessary', title: copy.necessaryTitle, body: copy.necessaryBody },
    { key: 'analytics', title: copy.analyticsTitle, body: copy.analyticsBody },
    { key: 'functional', title: copy.functionalTitle, body: copy.functionalBody },
    { key: 'marketing', title: copy.marketingTitle, body: copy.marketingBody },
  ] as const

  useEffect(() => {
    const dialog = dialogRef.current
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    if (!dialog) return

    const focusable = Array.from(dialog.querySelectorAll<HTMLElement>('button, input, a[href], select, [tabindex]:not([tabindex="-1"])'))
      .filter((element) => !element.hasAttribute('disabled'))
    focusable[0]?.focus()

    function trapFocus(event: KeyboardEvent) {
      if (event.key !== 'Tab' || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    dialog.addEventListener('keydown', trapFocus)
    return () => {
      dialog.removeEventListener('keydown', trapFocus)
      previousFocus?.focus()
    }
  }, [])

  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.currentTarget === event.target) onClose() }}>
      <section ref={dialogRef} className="cookie-center" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label={copy.close}><Icon name="close" /></button>
        <span className="modal-icon"><Icon name="shield" /></span>
        <h2 id="cookie-title">{copy.title}</h2>
        <p>{copy.body}</p>
        {gpc && <div className="gpc-notice"><Icon name="shield" />{copy.gpc}</div>}
        <div className="cookie-categories">
          {categories.map((category) => {
            const necessary = category.key === 'necessary'
            const gpcBlocked = gpc && (category.key === 'analytics' || category.key === 'marketing')
            const checked = necessary ? true : gpcBlocked ? false : choices[category.key]
            return (
              <label className="cookie-category" key={category.key}>
                <span><strong>{category.title}</strong><small>{category.body}</small></span>
                {necessary ? <em>{copy.alwaysOn}</em> : (
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={gpcBlocked}
                    onChange={(event) => setChoices({ ...choices, [category.key]: event.target.checked })}
                  />
                )}
              </label>
            )
          })}
        </div>
        <div className="modal-actions">
          <button className="button button--ghost" type="button" onClick={onReject}>{copy.rejectAll}</button>
          <button className="button button--secondary" type="button" onClick={onSave}>{copy.save}</button>
          <button className="button button--primary" type="button" onClick={onAccept}>{copy.acceptAll}</button>
        </div>
      </section>
    </div>
  )
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(detectInitialLocale)
  const [menuOpen, setMenuOpen] = useState(false)
  const [consent, setConsent] = useState<ConsentRecord | null>(readConsent)
  const [cookieBanner, setCookieBanner] = useState(() => readConsent() === null)
  const [cookieCenter, setCookieCenter] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
  const gpc = Boolean((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl)
  const [choices, setChoices] = useState<ConsentChoices>(() => consent?.categories ?? {
    analytics: false,
    functional: false,
    marketing: false,
  })
  const copy = translations[locale]

  const structuredData = useMemo(() => JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SSLPing',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    description: copy.metaDescription,
    releaseNotes: copy.common.roadmap,
  }), [copy.common.roadmap, copy.metaDescription])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = localeOptions.find((option) => option.code === locale)?.dir ?? 'ltr'
    document.title = copy.metaTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.metaDescription)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', copy.metaTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', copy.metaDescription)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', copy.metaTitle)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', copy.metaDescription)
    safeStorageSet('sslping-locale', locale)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', locale)
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)

    document.querySelectorAll('[data-sslping-seo]').forEach((element) => element.remove())
    const canonical = document.createElement('link')
    canonical.rel = 'canonical'
    canonical.href = `${url.origin}${url.pathname}?lang=${locale}`
    canonical.dataset.sslpingSeo = 'true'
    document.head.appendChild(canonical)
    for (const option of localeOptions) {
      const alternate = document.createElement('link')
      alternate.rel = 'alternate'
      alternate.setAttribute('hreflang', option.code)
      alternate.href = `${url.origin}${url.pathname}?lang=${option.code}`
      alternate.dataset.sslpingSeo = 'true'
      document.head.appendChild(alternate)
    }
    const fallback = document.createElement('link')
    fallback.rel = 'alternate'
    fallback.setAttribute('hreflang', 'x-default')
    fallback.href = `${url.origin}${url.pathname}?lang=en`
    fallback.dataset.sslpingSeo = 'true'
    document.head.appendChild(fallback)
  }, [copy.metaDescription, copy.metaTitle, locale])

  useEffect(() => {
    const locked = cookieCenter || menuOpen
    document.body.classList.toggle('no-scroll', locked)
    return () => document.body.classList.remove('no-scroll')
  }, [cookieCenter, menuOpen])

  useEffect(() => {
    const background = Array.from(document.querySelectorAll<HTMLElement>('header, main, footer, .support-widget'))
    if (cookieCenter) background.forEach((element) => element.setAttribute('inert', ''))
    return () => background.forEach((element) => element.removeAttribute('inert'))
  }, [cookieCenter])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1121px)')
    const closeDesktopMenu = () => { if (media.matches) setMenuOpen(false) }
    closeDesktopMenu()
    media.addEventListener('change', closeDesktopMenu)
    return () => media.removeEventListener('change', closeDesktopMenu)
  }, [])

  useEffect(() => {
    if (!consent) return
    const effective = gpc
      ? { ...consent.categories, analytics: false, marketing: false }
      : consent.categories
    document.documentElement.dataset.analyticsConsent = String(effective.analytics)
    document.documentElement.dataset.functionalConsent = String(effective.functional)
    document.documentElement.dataset.marketingConsent = String(effective.marketing)
  }, [consent, gpc])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setCookieCenter(false)
      setSupportOpen(false)
      setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  function saveConsent(categories: ConsentChoices) {
    const effectiveCategories = gpc
      ? { ...categories, analytics: false, marketing: false }
      : categories
    const record: ConsentRecord = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      locale,
      gpc,
      categories: effectiveCategories,
    }
    safeStorageSet(CONSENT_KEY, JSON.stringify(record))
    setConsent(record)
    setChoices(effectiveCategories)
    setCookieBanner(false)
    setCookieCenter(false)
  }

  const rejectConsent = () => saveConsent({ analytics: false, functional: false, marketing: false })
  const acceptConsent = () => saveConsent({ analytics: !gpc, functional: true, marketing: !gpc })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      <a className="skip-link" href="#main">{copy.nav.platform}</a>
      <Header
        copy={copy}
        locale={locale}
        onLocale={setLocale}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        loginUrl={DASHBOARD_LOGIN_URL}
        registerUrl={DASHBOARD_REGISTER_URL}
      />

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-orb hero-orb--one" />
          <div className="hero-orb hero-orb--two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow"><Icon name="spark" />{copy.hero.eyebrow}</span>
              <h1>{copy.hero.titleLead} <span>{copy.hero.titleAccent}</span> {copy.hero.titleEnd}</h1>
              <p className="hero-body">{copy.hero.body}</p>
              <ul className="hero-benefits">
                {copy.hero.benefits.map((benefit) => <li key={benefit}><Icon name="check" />{benefit}</li>)}
              </ul>
              <MonitorForm copy={copy.hero} registerUrl={DASHBOARD_REGISTER_URL} />
              <div className="hero-actions-row">
                <a className="text-button" href="#platform">{copy.hero.secondary}<Icon name="arrow" /></a>
                <span><Icon name="shield" />{copy.hero.note}</span>
              </div>
            </div>
            <ProductPreview copy={copy.hero.preview} />
          </div>
        </section>

        <section className="audience-rail" aria-label={copy.audiences.label}>
          <div className="container audience-inner">
            <span>{copy.audiences.label}</span>
            <div>{copy.audiences.items.map((item, index) => <strong key={item}><Icon name={useCaseIcons[index] ?? 'activity'} />{item}</strong>)}</div>
          </div>
        </section>

        <section className="section platform" id="platform">
          <div className="container">
            <SectionHeading eyebrow={copy.platform.eyebrow} title={copy.platform.title} body={copy.platform.body} />
            <div className="feature-grid">
              {copy.platform.cards.map((card, index) => (
                <article className="feature-card" key={card.title}>
                  <span className={`feature-icon feature-icon--${index + 1}`}><Icon name={monitorIcons[index] ?? 'activity'} /></span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <ul>{card.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <ArrowLink href={['#workflow', '#security', '#security', '#workflow', '#workflow', '#workflow'][index]}>{copy.common.learnMore}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="enterprise-callout">
          <div className="container enterprise-inner">
            <div className="enterprise-icon"><Icon name="layers" /></div>
            <div><span>{copy.common.roadmap}</span><h2>{copy.pricing.plans[3]?.description}</h2></div>
            <div className="enterprise-points">{copy.pricing.plans[3]?.features.slice(0, 4).map((feature) => <span key={feature}>{feature}</span>)}</div>
            <a className="button button--light" href={DASHBOARD_REGISTER_URL}>{copy.pricing.plans[3]?.cta}<Icon name="arrow" /></a>
          </div>
        </section>

        <section className="section split-section" id="security">
          <div className="container split-grid">
            <div className="split-copy">
              <SectionHeading eyebrow={copy.security.eyebrow} title={copy.security.title} body={copy.security.body} align="start" />
              <CheckList items={copy.security.bullets} />
              <ArrowLink href={DASHBOARD_REGISTER_URL}>{copy.security.cta}</ArrowLink>
            </div>
            <SecurityVisual copy={copy.security} />
          </div>
        </section>

        <section className="section section--tinted network-section">
          <div className="container split-grid split-grid--reverse">
            <NetworkVisual copy={copy.network} />
            <div className="split-copy">
              <SectionHeading eyebrow={copy.network.eyebrow} title={copy.network.title} body={copy.network.body} align="start" />
              <CheckList items={copy.network.benefits} />
            </div>
          </div>
        </section>

        <section className="section workflow-section" id="workflow">
          <div className="container">
            <SectionHeading eyebrow={copy.workflow.eyebrow} title={copy.workflow.title} body={copy.workflow.body} />
            <div className="workflow">
              {copy.workflow.steps.map((step, index) => (
                <article key={step.title}>
                  <span className="workflow-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="workflow-icon"><Icon name={['activity', 'globe', 'bell', 'chat', 'layers', 'check'][index] as IconName} /></span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tinted status-section">
          <div className="container split-grid">
            <div className="split-copy">
              <SectionHeading eyebrow={copy.status.eyebrow} title={copy.status.title} body={copy.status.body} align="start" />
              <CheckList items={copy.status.bullets} />
              <ArrowLink href={DASHBOARD_REGISTER_URL}>{copy.status.cta}</ArrowLink>
            </div>
            <StatusPreview copy={copy.status} operational={copy.common.operational} />
          </div>
        </section>

        <section className="section analytics-section">
          <div className="container split-grid split-grid--reverse">
            <AnalyticsVisual copy={copy.analytics} />
            <div className="split-copy">
              <SectionHeading eyebrow={copy.analytics.eyebrow} title={copy.analytics.title} body={copy.analytics.body} align="start" />
              <CheckList items={copy.analytics.bullets} compact />
            </div>
          </div>
        </section>

        <section className="section integrations-section">
          <div className="container">
            <SectionHeading eyebrow={copy.integrations.eyebrow} title={copy.integrations.title} body={copy.integrations.body} />
            <div className="integration-canvas">
              <div className="integration-core"><span><Icon name="activity" /></span><strong>SSLPing</strong><small>{copy.integrations.badge}</small></div>
              {copy.integrations.groups.map((group, index) => (
                <article className={`integration-group integration-group--${index + 1}`} key={group.title}>
                  <span className="integration-line" />
                  <div className="integration-group-title"><Icon name={['chat', 'bell', 'layers', 'code'][index] as IconName} /><strong>{group.title}</strong></div>
                  <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tinted mobile-section">
          <div className="container split-grid split-grid--phones">
            <div className="split-copy">
              <SectionHeading eyebrow={copy.mobile.eyebrow} title={copy.mobile.title} body={copy.mobile.body} align="start" />
              <CheckList items={copy.mobile.bullets} />
              <div className="store-buttons">
                <button type="button" disabled><Icon name="phone" /><span><small>{copy.mobile.coming}</small>{copy.mobile.ios}</span></button>
                <button type="button" disabled><Icon name="phone" /><span><small>{copy.mobile.coming}</small>{copy.mobile.android}</span></button>
              </div>
            </div>
            <PhonePreview copy={copy.mobile} />
          </div>
        </section>

        <section className="section use-cases-section">
          <div className="container">
            <SectionHeading eyebrow={copy.useCases.eyebrow} title={copy.useCases.title} body={copy.useCases.body} />
            <div className="use-case-grid">
              {copy.useCases.cards.map((card, index) => (
                <article key={card.title}><span><Icon name={useCaseIcons[index] ?? 'activity'} /></span><h3>{card.title}</h3><p>{card.body}</p><ArrowLink href="#platform">{copy.common.learnMore}</ArrowLink></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tinted pricing-section" id="pricing">
          <div className="container">
            <SectionHeading eyebrow={copy.pricing.eyebrow} title={copy.pricing.title} body={copy.pricing.body} />
            <div className="pricing-grid">
              {copy.pricing.plans.map((plan) => (
                <article className={plan.featured ? 'price-card price-card--featured' : 'price-card'} key={plan.name}>
                  {plan.featured && <span className="popular-badge">{copy.common.planned}</span>}
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <div className="price"><strong>{plan.price}</strong><span>{copy.pricing.monthly}</span></div>
                  <CheckList items={plan.features} compact />
                  <a className={plan.featured ? 'button button--primary button--wide' : 'button button--ghost button--wide'} href={DASHBOARD_REGISTER_URL}>{plan.cta}</a>
                </article>
              ))}
            </div>
            <p className="pricing-note"><Icon name="spark" />{copy.pricing.note}</p>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <SectionHeading eyebrow={copy.faq.eyebrow} title={copy.faq.title} body="" align="start" />
            <div className="faq-list">
              {copy.faq.items.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary><span>{item.question}</span><i /></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" id="final">
          <div className="final-orb final-orb--one" /><div className="final-orb final-orb--two" />
          <div className="container final-inner">
            <span className="eyebrow eyebrow--light"><Icon name="spark" />{copy.final.eyebrow}</span>
            <h2>{copy.final.title}</h2>
            <p>{copy.final.body}</p>
            <MonitorForm copy={copy.final} final registerUrl={DASHBOARD_REGISTER_URL} />
            <a className="final-secondary" href="#pricing">{copy.final.secondary}<Icon name="arrow" /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand"><Logo /><p>{copy.footer.tagline}</p><div className="socials"><a href="#" aria-label="X">X</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="GitHub">GH</a></div></div>
          {copy.footer.columns.map((column, index) => (
            <div className="footer-column" key={column.title}><strong>{column.title}</strong>{column.links.map((link) => <a href={index === 0 ? '#platform' : '#faq'} key={link}>{link}</a>)}</div>
          ))}
        </div>
        <div className="container footer-bottom">
          <span>{copy.footer.rights}</span>
          <div>{copy.footer.legal.map((link) => <span className="footer-roadmap-link" title={copy.common.roadmap} key={link}>{link}</span>)}<button type="button" onClick={() => setCookieCenter(true)}>{copy.footer.cookieSettings}</button></div>
          <label className="footer-language"><Icon name="globe" /><select value={locale} onChange={(event) => setLocale(event.target.value as Locale)} aria-label={copy.nav.language}>{localeOptions.map((option) => <option key={option.code} value={option.code}>{option.label}</option>)}</select></label>
        </div>
      </footer>

      {cookieBanner && (
        <aside className="cookie-banner" aria-label={copy.cookies.bannerTitle}>
          <div className="cookie-banner-icon"><Icon name="shield" /></div>
          <div className="cookie-copy"><strong>{copy.cookies.bannerTitle}</strong><p>{copy.cookies.bannerBody} <button type="button" onClick={() => setCookieCenter(true)}>{copy.cookies.privacy}</button></p></div>
          <div className="cookie-actions">
            <button type="button" onClick={rejectConsent}>{copy.cookies.reject}</button>
            <button type="button" onClick={() => setCookieCenter(true)}>{copy.cookies.manage}</button>
            <button className="cookie-accept" type="button" onClick={acceptConsent}>{copy.cookies.accept}</button>
          </div>
        </aside>
      )}

      {cookieCenter && (
        <CookieCenter
          copy={copy.cookies}
          choices={choices}
          setChoices={setChoices}
          gpc={gpc}
          onClose={() => setCookieCenter(false)}
          onSave={() => saveConsent(choices)}
          onReject={rejectConsent}
          onAccept={acceptConsent}
        />
      )}

      {!cookieBanner && !cookieCenter && <div className="support-widget">
        {supportOpen && (
          <section className="support-panel" role="region" aria-label={copy.support.title}>
            <button type="button" className="support-close" onClick={() => setSupportOpen(false)} aria-label={copy.support.close}><Icon name="close" /></button>
            <span><Icon name="chat" /></span><h3>{copy.support.title}</h3><p>{copy.support.body}</p>
            <a href="mailto:hello@sslping.io">{copy.support.email}<Icon name="arrow" /></a>
            <a href="#faq">{copy.support.docs}<Icon name="arrow" /></a>
          </section>
        )}
        <button className="support-fab" type="button" aria-label={copy.support.button} aria-expanded={supportOpen} onClick={() => setSupportOpen(!supportOpen)}><Icon name={supportOpen ? 'close' : 'chat'} /></button>
      </div>}
    </>
  )
}
