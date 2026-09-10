import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import test from 'node:test'

const project = new URL('../', import.meta.url)
const dist = new URL('../dist/', import.meta.url)

const expectedCountryCodes = [
  'ae', 'ar', 'at', 'au', 'be', 'bh', 'ca', 'ch', 'cl', 'co', 'cz', 'de', 'dk', 'ec', 'es', 'fi', 'fr', 'gb',
  'gr', 'gt', 'hk', 'hr', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'ke', 'ma', 'mx', 'my', 'ng', 'nl', 'no',
  'nz', 'pe', 'ph', 'pk', 'pl', 'pr', 'pt', 'py', 'ro', 'rs', 'se', 'sg', 'si', 'sk', 'tr', 'tw', 'ua', 'uy', 'za',
]

function scriptJson(html) {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
  assert.ok(match, 'page must contain JSON-LD')
  return JSON.parse(match[1])
}

function catalogServiceIds(catalog) {
  return [...new Set(catalog.trim().split(/\r?\n/).slice(1).map((row) => (
    row.slice(row.lastIndexOf(',') + 1).trim().replace(/^"|"$/g, '')
  )))].sort()
}

test('production bundle targets the dashboard domain and contains no retired hostname', async () => {
  const assetsDirectory = new URL('assets/', dist)
  const files = (await readdir(assetsDirectory)).filter((file) => file.endsWith('.js'))
  const javascript = (await Promise.all(files.map((file) => readFile(new URL(join('assets', file), dist), 'utf8')))).join('\n')

  assert.match(javascript, /https:\/\/dashboard\.sslping\.io/)
  assert.doesNotMatch(javascript, /app\.sslping\.io/)
  assert.doesNotMatch(javascript, /sslping\.rip/)
})

test('every source region has a prerendered, self-canonical page and sitemap', async () => {
  for (const country of expectedCountryCodes) {
    const html = await readFile(new URL(`regions/${country}/index.html`, dist), 'utf8')
    const sitemap = await readFile(new URL(`sitemaps/${country}.xml`, dist), 'utf8')
    assert.match(html, new RegExp(`data-region="${country.toUpperCase()}"`))
    assert.match(html, new RegExp(`<link rel="canonical" href="https://${country}\\.sslping\\.io/"`))
    assert.match(html, /<main>/)
    assert.doesNotMatch(html, /\?lang=/)
    assert.match(sitemap, new RegExp(`<loc>https://${country}\\.sslping\\.io/</loc>`))
  }
})

test('root is a truthful global English directory while regional language variants are server rendered', async () => {
  const root = await readFile(new URL('index.html', dist), 'utf8')
  const ukrainian = await readFile(new URL('regions/ua/index.html', dist), 'utf8')
  const arabic = await readFile(new URL('regions/ae/index.html', dist), 'utf8')
  const norwegian = await readFile(new URL('regions/no/index.html', dist), 'utf8')
  const traditionalChinese = await readFile(new URL('regions/hk/index.html', dist), 'utf8')

  assert.match(root, /<html lang="en" dir="ltr" data-region="GLOBAL">/)
  assert.match(root, /<link rel="canonical" href="https:\/\/sslping\.io\/"/)
  assert.match(root, /A dedicated US source is not yet available/i)
  assert.match(ukrainian, /<html lang="uk" dir="ltr" data-region="UA">/)
  assert.match(ukrainian, /hreflang="uk-UA"/)
  assert.match(arabic, /<html lang="ar" dir="rtl" data-region="AE">/)
  assert.match(norwegian, /hreflang="nb-NO"/)
  assert.match(traditionalChinese, /hreflang="zh-Hant-HK"/)
})

test('structured data identifies the directory and exposes crawlable status-page items', async () => {
  const html = await readFile(new URL('regions/ua/index.html', dist), 'utf8')
  const data = scriptJson(html)
  assert.equal(data['@context'], 'https://schema.org')
  assert.ok(data['@graph'].some((entry) => entry['@type'] === 'CollectionPage'))
  const itemList = data['@graph'].find((entry) => entry['@type'] === 'ItemList')
  assert.ok(itemList.numberOfItems >= 150)
  assert.ok(itemList.itemListElement.length > 0)
  assert.match(itemList.itemListElement[0].url, /^https:\/\/status\.sslping\.io\/[a-z0-9-]+-ua$/)
})

test('interactive directory controls expose accessible state in server-rendered HTML', async () => {
  const html = await readFile(new URL('regions/ua/index.html', dist), 'utf8')
  const styles = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')

  assert.match(html, /id="primary-navigation"/)
  assert.match(html, /aria-controls="primary-navigation"/)
  assert.match(html, /aria-expanded="false"/)
  assert.match(html, /role="status" aria-live="polite"/)
  assert.match(html, /aria-pressed="true"/)
  assert.match(html, /aria-current="page"/)
  assert.match(styles, /\.primary-nav\s*\{[\s\S]*?visibility:\s*hidden;/)
  assert.match(styles, /\.primary-nav--open\s*\{[\s\S]*?visibility:\s*visible;/)
})

test('hero metrics and monitoring preview stay in normal responsive flow', async () => {
  const styles = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')
  const networkCard = styles.match(/\.network-card\s*\{([^}]*)\}/)?.[1]

  assert.ok(networkCard, 'network card styles must exist')
  assert.doesNotMatch(networkCard, /margin[^;]*-\d+px/)
  assert.match(styles, /\.hero-metrics\s*\{[\s\S]*?grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\)/)
  assert.match(styles, /@media \(max-width: 640px\)[\s\S]*?\.hero-metrics\s*\{[^}]*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/)
  assert.match(styles, /\.network-feed\s*\{[^}]*grid-template-columns:\s*1fr;[^}]*overflow:\s*visible;/)
})

test('nginx serves only allowlisted catalog hosts with host-specific SEO files and real 404s', async () => {
  const config = await readFile(new URL('../deploy/nginx/default.conf', import.meta.url), 'utf8')
  const headers = await readFile(new URL('../deploy/nginx/security-headers.inc', import.meta.url), 'utf8')

  for (const country of expectedCountryCodes) {
    assert.match(config, new RegExp(`${country}\\.sslping\\.io /regions/${country}/index\\.html;`))
  }
  assert.match(config, /location = \/robots\.txt/)
  assert.match(config, /Sitemap: https:\/\/\$host\/sitemap\.xml/)
  assert.match(config, /location \^~ \/regions\/ \{ internal; \}/)
  assert.match(config, /location \/ \{[\s\S]*return 404;/)
  assert.match(config, /max-age=31536000, immutable/)
  assert.match(config, /no-cache, max-age=0, must-revalidate/)
  assert.match(headers, /Content-Security-Policy/)
  assert.match(headers, /Strict-Transport-Security/)
})

test('service logos have exact catalog coverage, verified hashes and inert SVG content', async () => {
  const catalog = await readFile(new URL('../data/catalog.csv', import.meta.url), 'utf8')
  const manifest = JSON.parse(await readFile(new URL('../data/service-logos.json', import.meta.url), 'utf8'))
  const review = JSON.parse(await readFile(new URL('../data/service-logo-reviewed.json', import.meta.url), 'utf8'))
  const logoDirectory = new URL('../public/assets/service-logos/', import.meta.url)
  const builtLogoDirectory = new URL('assets/service-logos/', dist)
  const directoryEntries = await readdir(logoDirectory, { withFileTypes: true })
  const builtDirectoryEntries = await readdir(builtLogoDirectory, { withFileTypes: true })
  const expectedIds = catalogServiceIds(catalog)
  const manifestIds = Object.keys(manifest.services).sort()
  const idsForEntries = (entries) => entries.map((entry) => {
    assert.ok(entry.isFile(), `unexpected directory in service-logo assets: ${entry.name}`)
    assert.match(entry.name, /^[a-z0-9][a-z0-9-]*\.svg$/)
    return entry.name.slice(0, -4)
  }).sort()
  const assetIds = idsForEntries(directoryEntries)
  const builtAssetIds = idsForEntries(builtDirectoryEntries)

  assert.equal(expectedIds.length, 776)
  assert.deepEqual(manifestIds, expectedIds)
  assert.deepEqual(assetIds, expectedIds)
  assert.deepEqual(builtAssetIds, expectedIds)
  assert.equal(manifest.schema_version, 1)
  assert.equal(manifest.algorithm_version, 2)
  assert.equal(manifest.simple_icons_version, '16.28.0')

  const unsafeSVG = /<!doctype|<!entity|<\?xml-stylesheet|<\/?(?:script|style|foreignObject|iframe|object|embed|audio|video|canvas|animate|animateTransform|set)\b|\son[a-z0-9:_-]+\s*=|javascript\s*:|@import|expression\s*\(|\ssrc\s*=|\bxlink:/i
  for (const serviceId of expectedIds) {
    const entry = manifest.services[serviceId]
    const asset = await readFile(new URL(`${serviceId}.svg`, logoDirectory))
    const builtAsset = await readFile(new URL(`${serviceId}.svg`, builtLogoDirectory))
    const svg = asset.toString('utf8')

    assert.equal(entry.file, `assets/service-logos/${serviceId}.svg`)
    assert.equal(entry.mime_type, 'image/svg+xml')
    assert.ok(['official-svg', 'simple-icons', 'fallback'].includes(entry.kind))
    if (entry.kind === 'official-svg') {
      assert.equal(entry.reviewed, true)
      assert.equal(review.accepted[serviceId], entry.source_asset)
    }
    if (entry.kind === 'simple-icons') assert.equal(review.rejected_simple_icons[serviceId], undefined)
    assert.match(entry.sha256, /^[a-f0-9]{64}$/)
    assert.equal(createHash('sha256').update(asset).digest('hex'), entry.sha256)
    assert.equal(createHash('sha256').update(builtAsset).digest('hex'), entry.sha256)
    assert.match(svg, /^<svg\b/)
    assert.doesNotMatch(svg, unsafeSVG)

    for (const match of svg.matchAll(/\s(?:href|xlink:href)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)) {
      assert.ok((match[1] ?? match[2] ?? match[3] ?? '').startsWith('#'), `${serviceId} has an external SVG reference`)
    }
    for (const match of svg.matchAll(/url\(\s*(['"]?)(.*?)\1\s*\)/gi)) {
      assert.ok(match[2].startsWith('#'), `${serviceId} has an external CSS reference`)
    }
  }
})

test('prerendered catalog cards contain lazy local logos for every service', async () => {
  const catalog = await readFile(new URL('../data/catalog.csv', import.meta.url), 'utf8')
  const styles = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')
  const expectedIds = catalogServiceIds(catalog)
  const referencedIds = new Set()
  const pages = [
    new URL('index.html', dist),
    ...expectedCountryCodes.map((country) => new URL(`regions/${country}/index.html`, dist)),
  ]

  for (const page of pages) {
    const html = await readFile(page, 'utf8')
    for (const match of html.matchAll(/<img\b[^>]*\bsrc="\/assets\/service-logos\/([a-z0-9-]+)\.svg"[^>]*>/g)) {
      assert.match(match[0], /\balt=""/)
      assert.match(match[0], /\bloading="lazy"/)
      assert.match(match[0], /\bdecoding="async"/)
      referencedIds.add(match[1])
    }
  }

  assert.deepEqual([...referencedIds].sort(), expectedIds)
  const logoFrame = styles.match(/\.service-logo \{([^}]*)\}/)?.[1] ?? ''
  const logoImage = styles.match(/\.service-logo__image \{([^}]*)\}/)?.[1] ?? ''
  assert.match(logoFrame, /display:\s*flex/)
  assert.match(logoFrame, /align-items:\s*center/)
  assert.match(logoFrame, /justify-content:\s*center/)
  assert.match(logoImage, /width:\s*auto/)
  assert.match(logoImage, /height:\s*auto/)
  assert.match(logoImage, /max-width:\s*100%/)
  assert.match(logoImage, /max-height:\s*100%/)
})

test('nginx gives stable logo paths bounded caching and a terminal 404', async () => {
  const config = await readFile(new URL('../deploy/nginx/default.conf', import.meta.url), 'utf8')
  const logoLocationStart = config.indexOf('location ^~ /assets/service-logos/ {')
  const genericAssetsStart = config.indexOf('location ^~ /assets/ {')
  const logoLocation = config.match(/location \^~ \/assets\/service-logos\/ \{([\s\S]*?)\n\s*\}/)?.[1]

  assert.ok(logoLocationStart >= 0 && logoLocationStart < genericAssetsStart, 'service-logo location must precede generic hashed assets')
  assert.ok(logoLocation, 'service-logo location must exist')
  assert.match(logoLocation, /try_files \$uri @service_logo_not_found;/)
  assert.match(logoLocation, /Cache-Control "public, max-age=86400, stale-while-revalidate=604800"/)
  assert.doesNotMatch(logoLocation, /immutable/)
  assert.match(config, /location @service_logo_not_found \{[\s\S]*?Cache-Control "no-store" always;[\s\S]*?return 404;/)
})

test('deployment uses spec-compliant wildcard regional routes while nginx allowlists catalog hosts', async () => {
  const manifest = await readFile(new URL('../deploy/kubernetes/marketing-site.yaml', import.meta.url), 'utf8')

  assert.doesNotMatch(manifest, /kind:\s*Namespace/)
  assert.match(manifest, /automountServiceAccountToken:\s*false/)
  assert.match(manifest, /allowPrivilegeEscalation:\s*false/)
  assert.match(manifest, /readOnlyRootFilesystem:\s*true/)
  assert.match(manifest, /runAsNonRoot:\s*true/)
  assert.match(manifest, /capabilities:\s*\{ drop: \["ALL"\] \}/)
  assert.match(manifest, /seccompProfile:\s*\{ type: RuntimeDefault \}/)
  assert.match(manifest, /name:\s*sslping-marketing-regional/)
  assert.match(manifest, /sectionName:\s*regional/)
  assert.match(manifest, /name:\s*sslping-marketing-regional-http-redirect/)
  assert.match(manifest, /sectionName:\s*http/)
  assert.equal((manifest.match(/hostnames:\s*\["\*\.sslping\.io"\]/g) ?? []).length, 2)
  assert.doesNotMatch(manifest, /hostnames:[\s\S]*?- us\.sslping\.io/)
})

test('production workflow verifies the regional listener and immutable cluster identity before deployment', async () => {
  const workflow = await readFile(new URL('../.github/workflows/deploy-production.yml', import.meta.url), 'utf8')

  assert.match(workflow, /CLUSTER_ID:\s*[0-9a-f-]{36}/)
  assert.match(workflow, /Verify DigitalOcean production identity/)
  assert.match(workflow, /cluster kubeconfig save "\$\{CLUSTER_ID\}"/)
  assert.match(workflow, /grep -Fx regional/)
  assert.match(workflow, /persist-credentials:\s*false/)
})

test('the vendored catalog snapshot keeps the expected production scale', async () => {
  const catalog = await readFile(new URL('../data/catalog.csv', import.meta.url), 'utf8')
  const rows = catalog.trim().split(/\r?\n/)
  assert.equal(rows.length - 1, 1088)
  assert.equal(expectedCountryCodes.length, 55)
  assert.match(rows[0], /catalog_id,service_id$/)
})

function directoryBootstrap(html) {
  const match = html.match(/<script id="directory-data" type="application\/json">([\s\S]*?)<\/script>/)
  assert.ok(match, 'interactive page must contain its regional data')
  return JSON.parse(match[1])
}

const directoryRuntime = import('../.ssr/entry-server.js')

test('each page embeds only its regional catalog and matching localized payload', async () => {
  const { decodePage, normalizedSearch } = await directoryRuntime
  const locales = new Set()
  for (const country of ['global', ...expectedCountryCodes]) {
    const location = country === 'global' ? 'index.html' : `regions/${country}/index.html`
    const html = await readFile(new URL(location, dist), 'utf8')
    const { payload, regions } = directoryBootstrap(html)
    const page = decodePage(payload)
    assert.equal(page.region.code, country.toUpperCase())
    assert.equal(page.items.length, (html.match(/class="service-card"/g) ?? []).length, 'all regional cards remain crawlable before JavaScript')
    assert.ok(page.items.length > 0)
    assert.equal(Object.keys(regions).length, 56)
    assert.ok(page.experience.showMore && page.experience.showing.includes('{shown}') && page.experience.showing.includes('{total}'))
    assert.ok(page.experience.planNote.length > 30)
    locales.add(page.locale)
    for (const item of page.items) {
      if (country !== 'global') assert.equal(item.statusCountry.toLowerCase(), country)
      assert.equal(item.searchText, normalizedSearch(`${item.name} ${item.hostname}`, page.locale))
      assert.ok(html.includes(`href="${item.statusUrl}"`))
    }
  }
  assert.equal(locales.size, 31)
})

test('regional preview data has immutable hashed URLs and exactly matches embedded content', async () => {
  const root = directoryBootstrap(await readFile(new URL('index.html', dist), 'utf8'))
  for (const [code, path] of Object.entries(root.regions)) {
    assert.match(path, /^\/assets\/catalog\/[a-z]+-[a-f0-9]{16}\.json$/)
    const json = await readFile(new URL(path.slice(1), dist), 'utf8')
    const hash = createHash('sha256').update(json).digest('hex').slice(0, 16)
    assert.ok(path.endsWith(`-${hash}.json`))
    const location = code === 'GLOBAL' ? 'index.html' : `regions/${code.toLowerCase()}/index.html`
    const embedded = directoryBootstrap(await readFile(new URL(location, dist), 'utf8'))
    assert.deepEqual(JSON.parse(json), embedded.payload)
    assert.deepEqual(embedded.regions, root.regions)
  }
})

test('client no longer ships the CSV or other regional copy and stays within its bundle budget', async () => {
  const files = (await readdir(new URL('assets/', dist))).filter((name) => name.endsWith('.js'))
  const buffers = await Promise.all(files.map((name) => readFile(new URL(`assets/${name}`, dist))))
  const javascript = buffers.map(String).join('\n')
  assert.doesNotMatch(javascript, /follow_redirects,validate_tls,source,countries,catalog_id,service_id/)
  assert.doesNotMatch(javascript, /Eine eigene US-Datenquelle|Una fuente dedicada para Estados Unidos|A dedicated US source is not yet available/)
  assert.ok(buffers.reduce((sum, buffer) => sum + buffer.length, 0) < 250_000, 'initial JS budget is 250 kB including React')
})

test('the landing page has one search and clear directory and product actions', async () => {
  const html = await readFile(new URL('index.html', dist), 'utf8')
  assert.equal((html.match(/type="search"/g) ?? []).length, 1)
  assert.match(html, /id="directory-search"/)
  assert.match(html, /Website and service status worldwide/)
  assert.doesNotMatch(html, /\bin Global\b/)
  assert.match(html, /class="hero-actions"[\s\S]*?href="#directory"[\s\S]*?href="https:\/\/dashboard\.sslping\.io\/register"/)
  assert.match(html, /review current plans and limits in workspace billing after signing in/)
})

test('prepared search handles accents, locale casing, hostnames and letter filtering', async () => {
  const { searchCatalog, normalizedSearch, decodePage } = await directoryRuntime
  const { payload } = directoryBootstrap(await readFile(new URL('index.html', dist), 'utf8'))
  const page = decodePage(payload)
  const service = page.items.find((item) => item.name.startsWith('A'))
  assert.ok(service)
  assert.ok(searchCatalog(page.items, service.hostname, 'ALL', page.locale).includes(service))
  assert.deepEqual(searchCatalog(page.items, service.hostname, 'Z', page.locale), [])
  assert.equal(searchCatalog(page.items, 'this-service-does-not-exist.invalid', 'ALL', page.locale).length, 0)
  const accented = { ...service, name: 'Café İstanbul', hostname: 'cafe.example', searchText: normalizedSearch('Café İstanbul cafe.example', 'tr') }
  assert.deepEqual(searchCatalog([accented], 'cafe istanbul', 'ALL', 'tr'), [accented])
  assert.deepEqual(searchCatalog([accented], 'CAFE.EXAMPLE', 'C', 'tr'), [accented])
})

test('filtered results grow in bounded batches without truncating the unfiltered crawlable directory', async () => {
  const { catalogWindow, SEARCH_PAGE_SIZE, decodePage } = await directoryRuntime
  const { payload } = directoryBootstrap(await readFile(new URL('regions/gb/index.html', dist), 'utf8'))
  const { items } = decodePage(payload)
  assert.ok(items.length > 120)
  assert.equal(SEARCH_PAGE_SIZE, 60)
  assert.deepEqual(catalogWindow(items, true), items.slice(0, 60))
  assert.deepEqual(catalogWindow(items, true, 120), items.slice(0, 120))
  assert.deepEqual(catalogWindow(items.slice(0, 61), true, 120), items.slice(0, 61))
  assert.deepEqual(catalogWindow(items, false), items)
  assert.deepEqual(catalogWindow([], true), [])
})

test('browser telemetry CSP permits the exact first-party API origin', async () => {
  const headers = await readFile(new URL('../deploy/nginx/security-headers.inc', import.meta.url), 'utf8')
  const connect = headers.match(/connect-src ([^;]+);/)?.[1]
  assert.ok(connect)
  assert.ok(connect.split(/\s+/).includes('https://api.sslping.io'))
  assert.doesNotMatch(connect, /(?:^|\s)(?:\*|https:)(?:\s|$)/)
})
