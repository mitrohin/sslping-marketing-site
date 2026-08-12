import assert from 'node:assert/strict'
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

test('deployment declares explicit regional HTTPS and HTTP redirect routes', async () => {
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
  assert.match(manifest, /- us\.sslping\.io/)
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
