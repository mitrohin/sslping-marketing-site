import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const projectRoot = resolve(import.meta.dirname, '..')
const distDirectory = resolve(projectRoot, 'dist')
const template = await readFile(resolve(distDirectory, 'index.html'), 'utf8')
const serverEntry = await import(pathToFileURL(resolve(projectRoot, '.ssr/entry-server.js')).href)

function escapeAttribute(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function escapeXml(value) {
  return escapeAttribute(value).replaceAll("'", '&apos;')
}

function renderHead(page) {
  const alternates = page.alternates
    .map(({ hreflang, url }) => `    <link rel="alternate" hreflang="${escapeAttribute(hreflang)}" href="${escapeAttribute(url)}" />`)
    .join('\n')

  return [
    `    <meta name="description" content="${escapeAttribute(page.description)}" />`,
    '    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />',
    `    <link rel="canonical" href="${escapeAttribute(page.canonical)}" />`,
    alternates,
    '    <meta property="og:type" content="website" />',
    '    <meta property="og:site_name" content="SSLPing" />',
    `    <meta property="og:locale" content="${escapeAttribute(page.ogLocale)}" />`,
    `    <meta property="og:title" content="${escapeAttribute(page.title)}" />`,
    `    <meta property="og:description" content="${escapeAttribute(page.description)}" />`,
    `    <meta property="og:url" content="${escapeAttribute(page.canonical)}" />`,
    '    <meta property="og:image" content="https://sslping.io/directory-card.svg" />',
    '    <meta property="og:image:width" content="1200" />',
    '    <meta property="og:image:height" content="630" />',
    '    <meta name="twitter:card" content="summary_large_image" />',
    `    <meta name="twitter:title" content="${escapeAttribute(page.title)}" />`,
    `    <meta name="twitter:description" content="${escapeAttribute(page.description)}" />`,
    '    <meta name="twitter:image" content="https://sslping.io/directory-card.svg" />',
  ].join('\n')
}

function renderDocument(page, html, payload, regionalPayloads) {
  const bootstrap = JSON.stringify({ payload, regions: regionalPayloads }).replaceAll('<', '\\u003c')
  return template
    .replace('<html lang="en" dir="ltr" data-region="GLOBAL">', `<html lang="${escapeAttribute(page.locale)}" dir="${escapeAttribute(page.direction)}" data-region="${escapeAttribute(page.region.code)}">`)
    .replace('    <!--app-head-->', renderHead(page))
    .replace('<title>SSLPing Public Status Directory</title>', `<title>${escapeAttribute(page.title)}</title>`)
    .replace('<!--app-html-->', html)
    .replace('</body>', `    <script id="directory-data" type="application/json">${bootstrap}</script>\n  </body>`)
}

function renderSitemap(page) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${escapeXml(page.canonical)}</loc>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`
}

await mkdir(resolve(distDirectory, 'regions'), { recursive: true })
await mkdir(resolve(distDirectory, 'sitemaps'), { recursive: true })
await mkdir(resolve(distDirectory, 'assets', 'catalog'), { recursive: true })

const pages = serverEntry.regionCodes.map((regionCode) => serverEntry.render(regionCode))
const regionalPayloads = {}
for (const { page } of pages) {
  const json = JSON.stringify(serverEntry.encodePage(page))
  const hash = createHash('sha256').update(json).digest('hex').slice(0, 16)
  const path = `/assets/catalog/${page.region.code.toLowerCase()}-${hash}.json`
  regionalPayloads[page.region.code] = path
  await writeFile(resolve(distDirectory, path.slice(1)), json)
}

for (const { html, page } of pages) {
  const regionCode = page.region.code
  const destination = regionCode === 'GLOBAL'
    ? resolve(distDirectory, 'index.html')
    : resolve(distDirectory, 'regions', regionCode.toLowerCase(), 'index.html')
  await mkdir(resolve(destination, '..'), { recursive: true })
  await writeFile(destination, renderDocument(page, html, serverEntry.encodePage(page), regionalPayloads))
  await writeFile(resolve(distDirectory, 'sitemaps', `${regionCode.toLowerCase()}.xml`), renderSitemap(page))
}
