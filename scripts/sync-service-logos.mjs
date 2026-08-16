import { createHash } from 'node:crypto'
import { promises as dns } from 'node:dns'
import { promises as fs } from 'node:fs'
import https from 'node:https'
import net from 'node:net'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as simpleIcons from 'simple-icons'

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const catalogPath = path.join(repositoryRoot, 'data/catalog.csv')
const matchPath = path.join(repositoryRoot, 'data/simple-icons-matches.json')
const manifestPath = path.join(repositoryRoot, 'data/service-logos.json')
const reviewPath = path.join(repositoryRoot, 'data/service-logo-reviewed.json')
const assetDirectory = path.join(repositoryRoot, 'public/assets/service-logos')
const refreshOfficial = process.argv.includes('--refresh-official')
const checkOnly = process.argv.includes('--check')
const simpleIconsVersion = '16.28.0'
const algorithmVersion = 2
const maxHTMLBytes = 512 * 1024
const maxManifestBytes = 128 * 1024
const maxSVGBytes = 256 * 1024

function parseCSVLine(line) {
  const fields = []
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

async function loadCatalog() {
  const lines = (await fs.readFile(catalogPath, 'utf8')).trim().split(/\r?\n/)
  const header = parseCSVLine(lines.shift() ?? '')
  const expected = ['name', 'type', 'target', 'method', 'follow_redirects', 'validate_tls', 'source', 'countries', 'catalog_id', 'service_id']
  if (header.join('\0') !== expected.join('\0')) throw new Error('unexpected catalog schema')
  const services = new Map()
  for (const line of lines) {
    const row = parseCSVLine(line)
    if (row.length !== expected.length) throw new Error('invalid catalog row')
    const serviceId = row[9].trim()
    if (!/^[a-z0-9][a-z0-9-]*$/.test(serviceId)) throw new Error(`unsafe service_id: ${serviceId}`)
    const service = services.get(serviceId) ?? { serviceId, names: new Set(), targets: [] }
    service.names.add(row[0].trim())
    service.targets.push({ hostname: row[2].trim().toLowerCase(), countryCount: row[7].split('|').filter(Boolean).length })
    services.set(serviceId, service)
  }
  for (const service of services.values()) {
    service.targets.sort((left, right) => right.countryCount - left.countryCount || left.hostname.localeCompare(right.hostname))
  }
  return [...services.values()].sort((left, right) => left.serviceId.localeCompare(right.serviceId))
}

function identity(value) {
  return value.normalize('NFKC').trim().toLocaleLowerCase('en-US')
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex')
}

function escapeXML(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;')
}

function serviceHue(serviceId) {
  let hash = 0
  for (const character of serviceId) hash = ((hash << 5) - hash + character.charCodeAt(0)) | 0
  return Math.abs(hash) % 360
}

function hslToHex(hue, saturation, lightness) {
  const s = saturation / 100
  const l = lightness / 100
  const chroma = (1 - Math.abs(2 * l - 1)) * s
  const x = chroma * (1 - Math.abs((hue / 60) % 2 - 1))
  const match = l - chroma / 2
  let red = 0
  let green = 0
  let blue = 0
  if (hue < 60) [red, green] = [chroma, x]
  else if (hue < 120) [red, green] = [x, chroma]
  else if (hue < 180) [green, blue] = [chroma, x]
  else if (hue < 240) [green, blue] = [x, chroma]
  else if (hue < 300) [red, blue] = [x, chroma]
  else [red, blue] = [chroma, x]
  return `#${[red, green, blue].map((part) => Math.round((part + match) * 255).toString(16).padStart(2, '0')).join('')}`
}

function monogram(name) {
  const words = name.trim().split(/[\s._-]+/u).filter(Boolean)
  if (words.length === 0) return '•'
  if (words.length === 1) return [...words[0]].slice(0, 2).join('').toLocaleUpperCase()
  return `${[...words[0]][0]}${[...words[1]][0]}`.toLocaleUpperCase()
}

function fallbackSVG(service) {
  const title = [...service.names].sort((left, right) => left.localeCompare(right))[0]
  const hue = serviceHue(service.serviceId)
  const background = hslToHex(hue, 58, 90)
  const foreground = hslToHex(hue, 48, 25)
  const letters = escapeXML(monogram(title))
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>${escapeXML(title)}</title><rect width="64" height="64" rx="16" fill="${background}"/><text x="32" y="34" fill="${foreground}" font-family="Arial,Helvetica,sans-serif" font-size="20" font-weight="800" text-anchor="middle" dominant-baseline="middle">${letters}</text></svg>\n`
}

function simpleIconSVG(icon) {
  const color = `#${icon.hex}`
  const red = Number.parseInt(icon.hex.slice(0, 2), 16) / 255
  const green = Number.parseInt(icon.hex.slice(2, 4), 16) / 255
  const blue = Number.parseInt(icon.hex.slice(4, 6), 16) / 255
  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue
  const fill = luminance > 0.88 ? '#202428' : color
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>${escapeXML(icon.title)}</title><path fill="${fill}" d="${icon.path}"/></svg>\n`
}

function extractAttribute(source, name) {
  const pattern = new RegExp(`(?:^|\\s)${name.replace(':', '\\:')}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i')
  const match = source.match(pattern)
  return match ? (match[1] ?? match[2] ?? match[3] ?? '') : ''
}

function inlineSVGStyleElements(source) {
  const rules = []
  for (const styleMatch of source.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    const css = styleMatch[1].replace(/\/\*[\s\S]*?\*\//g, '')
    let cursor = 0
    while (cursor < css.length) {
      const opening = css.indexOf('{', cursor)
      if (opening < 0) break
      const selector = css.slice(cursor, opening).trim()
      let depth = 1
      let closing = opening + 1
      while (closing < css.length && depth > 0) {
        if (css[closing] === '{') depth += 1
        else if (css[closing] === '}') depth -= 1
        closing += 1
      }
      if (depth !== 0) throw new Error('SVG CSS block is malformed')
      const body = css.slice(opening + 1, closing - 1)
      cursor = closing
      // Media queries can make a mark disappear against an unknown host page.
      // Keep the source's base presentation and ignore conditional branches.
      if (selector.startsWith('@') || body.includes('{')) continue
      const declarations = body.split(';').map((value) => value.trim()).filter(Boolean).map((declaration) => {
        const separator = declaration.indexOf(':')
        if (separator <= 0) throw new Error('SVG CSS declaration is malformed')
        const property = declaration.slice(0, separator).trim().toLowerCase()
        const value = declaration.slice(separator + 1).trim()
        if (!/^(?:fill|fill-opacity|fill-rule|stroke|stroke-opacity|stroke-width|stroke-linecap|stroke-linejoin|stroke-miterlimit|opacity|clip-path|clip-rule|stop-color|stop-opacity)$/.test(property)) return ''
        return `${property}:${value}`
      }).filter(Boolean).join(';')
      if (!declarations) continue
      for (const part of selector.split(',')) {
        const value = part.trim()
        if (/^\.[a-z0-9_-]+$/i.test(value)) rules.push({ kind: 'class', selector: value.slice(1), declarations })
        else if (/^[a-z][a-z0-9_-]*$/i.test(value)) rules.push({ kind: 'tag', selector: value.toLowerCase(), declarations })
      }
    }
  }
  source = source.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
  if (rules.length === 0) return source
  return source.replace(/<([a-z][a-z0-9:-]*)([^<>]*?)(\/?)>/gi, (whole, rawTag, rawAttributes, slash) => {
    const tag = rawTag.toLowerCase()
    const classes = new Set(extractAttribute(rawAttributes, 'class').split(/\s+/).filter(Boolean))
    const declarations = rules.filter((rule) => rule.kind === 'tag' ? rule.selector === tag : classes.has(rule.selector)).map((rule) => rule.declarations)
    if (declarations.length === 0) return whole
    const existingStyle = extractAttribute(rawAttributes, 'style')
    const attributes = rawAttributes.replace(/\sstyle\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/i, '')
    const style = [...declarations, existingStyle].filter(Boolean).join(';')
    return `<${rawTag}${attributes} style="${escapeXML(style)}"${slash}>`
  })
}

function sanitizeSVG(input) {
  let source = input.toString('utf8').replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n').replace(/<!--([\s\S]*?)-->/g, '').trim()
  if (Buffer.byteLength(source) > maxSVGBytes) throw new Error('SVG exceeds size limit')
  if (/<!doctype|<!entity|<\?xml-stylesheet/i.test(source)) throw new Error('SVG contains document directives')
  if (/<\/?(?:script|foreignObject|iframe|object|embed|audio|video|canvas|animate|animateTransform|set)\b/i.test(source)) throw new Error('SVG contains active elements')
  if (/\son[a-z0-9:_-]+\s*=/i.test(source) || /javascript\s*:/i.test(source) || /@import|expression\s*\(/i.test(source)) throw new Error('SVG contains active attributes')
  if (/\s(?:src)\s*=/i.test(source)) throw new Error('SVG contains external source attributes')
  for (const match of source.matchAll(/\s(?:href|xlink:href)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)) {
    const value = match[1] ?? match[2] ?? match[3] ?? ''
    if (!value.startsWith('#')) throw new Error('SVG contains an external reference')
  }
  for (const match of source.matchAll(/url\(\s*(['"]?)(.*?)\1\s*\)/gi)) {
    if (!match[2].startsWith('#')) throw new Error('SVG contains an external CSS reference')
  }
  source = inlineSVGStyleElements(source)
  // SVG 2 supports plain href. Normalizing the deprecated xlink spelling lets
  // us rebuild a minimal root without retaining an otherwise-unused namespace.
  source = source.replace(/\bxlink:href\b/gi, 'href')
  const allowedTags = new Set(['svg', 'g', 'path', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon', 'defs', 'lineargradient', 'radialgradient', 'stop', 'clippath', 'mask', 'title', 'desc', 'symbol', 'use', 'text', 'tspan'])
  let nodeCount = 0
  for (const match of source.matchAll(/<\/?([a-z][a-z0-9:-]*)\b/gi)) {
    const tag = match[1].split(':').at(-1).toLowerCase()
    if (!allowedTags.has(tag)) throw new Error(`SVG contains unsupported <${tag}>`)
    nodeCount += 1
  }
  if (nodeCount === 0 || nodeCount > 4000) throw new Error('SVG node count is invalid')
  source = source.replace(/^<\?xml[^>]*>\s*/i, '')
  const root = source.match(/^<svg\b([^>]*)>([\s\S]*)<\/svg>\s*$/i)
  if (!root) throw new Error('SVG root is invalid')
  const viewBoxValue = extractAttribute(root[1], 'viewBox')
  const dimensions = viewBoxValue.trim().split(/[\s,]+/).map(Number)
  let viewBox = viewBoxValue
  if (dimensions.length !== 4 || dimensions.some((value) => !Number.isFinite(value)) || dimensions[2] <= 0 || dimensions[3] <= 0 || dimensions[2] > 100000 || dimensions[3] > 100000) {
    const width = Number.parseFloat(extractAttribute(root[1], 'width'))
    const height = Number.parseFloat(extractAttribute(root[1], 'height'))
    if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0 || width > 100000 || height > 100000) throw new Error('SVG has no safe viewBox')
    viewBox = `0 0 ${width} ${height}`
  }
  const rootAttributes = ['fill', 'stroke', 'fill-rule', 'clip-rule', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'class', 'style', 'preserveAspectRatio']
    .map((name) => [name, extractAttribute(root[1], name)])
    .filter(([, value]) => value !== '')
    .map(([name, value]) => `${name}="${escapeXML(value)}"`)
    .join(' ')
  const body = root[2].replace(/[ \t]+$/gm, '')
  const result = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${escapeXML(viewBox)}"${rootAttributes ? ` ${rootAttributes}` : ''}>${body}</svg>\n`
  if (Buffer.byteLength(result) > maxSVGBytes) throw new Error('sanitized SVG exceeds size limit')
  return result
}

function isBlockedIPv4(address) {
  const parts = address.split('.').map(Number)
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) return true
  const [a, b, c] = parts
  return a === 0 || a === 10 || a === 127 || a >= 224 ||
    (a === 100 && b >= 64 && b <= 127) || (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) ||
    (a === 198 && (b === 18 || b === 19)) ||
    (a === 192 && b === 0 && (c === 0 || c === 2)) ||
    (a === 198 && b === 51 && c === 100) || (a === 203 && b === 0 && c === 113)
}

function isBlockedAddress(address) {
  const version = net.isIP(address)
  if (version === 4) return isBlockedIPv4(address)
  if (version !== 6) return true
  const normalized = address.toLowerCase()
  if (normalized.startsWith('::ffff:')) return isBlockedIPv4(normalized.slice(7))
  return normalized === '::' || normalized === '::1' || normalized.startsWith('fc') || normalized.startsWith('fd') || /^fe[89ab]/.test(normalized) || normalized.startsWith('ff') || normalized.startsWith('2001:db8:')
}

async function assertPublicURL(url) {
  if (url.protocol !== 'https:' || url.username || url.password || (url.port && url.port !== '443')) throw new Error('only credential-free HTTPS URLs are allowed')
  if (url.hostname.endsWith('.local') || net.isIP(url.hostname) !== 0) throw new Error('literal and local hosts are not allowed')
  const addresses = await dns.lookup(url.hostname, { all: true, verbatim: true })
  if (addresses.length === 0 || addresses.some(({ address }) => isBlockedAddress(address))) throw new Error('host does not resolve exclusively to public addresses')
  return addresses[0]
}

function requestPinned(url, address, maximumBytes, accept) {
  return new Promise((resolve, reject) => {
    let timeout
    const finish = (callback) => (value) => {
      clearTimeout(timeout)
      callback(value)
    }
    const request = https.request(url, {
      method: 'GET',
      servername: url.hostname,
      lookup: (_hostname, _options, callback) => callback(null, address.address, address.family),
      headers: { Accept: accept, 'User-Agent': 'SSLPing-Catalog-Logo-Curator/1.0 (+https://sslping.io)' },
    }, (response) => {
      const status = response.statusCode ?? 0
      const declared = Number(Array.isArray(response.headers['content-length']) ? response.headers['content-length'][0] : response.headers['content-length'] ?? '0')
      if (declared > maximumBytes) {
        response.destroy()
        finish(reject)(new Error('response exceeds declared size limit'))
        return
      }
      if ([301, 302, 303, 307, 308].includes(status)) {
        response.resume()
        finish(resolve)({ status, headers: response.headers, body: Buffer.alloc(0) })
        return
      }
      if (status < 200 || status >= 300) {
        response.resume()
        finish(reject)(new Error(`HTTP ${status}`))
        return
      }
      const chunks = []
      let total = 0
      response.on('data', (chunk) => {
        total += chunk.byteLength
        if (total > maximumBytes) response.destroy(new Error('response exceeds streamed size limit'))
        else chunks.push(Buffer.from(chunk))
      })
      response.on('end', finish(() => resolve({ status, headers: response.headers, body: Buffer.concat(chunks) })))
      response.on('error', finish(reject))
    })
    timeout = setTimeout(() => request.destroy(new Error('request timeout')), 8000)
    request.on('error', finish(reject))
    request.end()
  })
}

async function fetchBounded(initialURL, maximumBytes, accept) {
  let current = new URL(initialURL)
  for (let redirects = 0; redirects <= 5; redirects += 1) {
    const address = await assertPublicURL(current)
    const response = await requestPinned(current, address, maximumBytes, accept)
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = Array.isArray(response.headers.location) ? response.headers.location[0] : response.headers.location
      if (!location) throw new Error('redirect has no location')
      const next = new URL(location, current)
      if (next.protocol !== 'https:') throw new Error('HTTPS downgrade is not allowed')
      current = next
      continue
    }
    const contentType = Array.isArray(response.headers['content-type']) ? response.headers['content-type'][0] : response.headers['content-type'] ?? ''
    return { body: response.body, contentType, url: current.href }
  }
  throw new Error('redirect limit exceeded')
}

function parseAttributes(tag) {
  const attributes = {}
  for (const match of tag.matchAll(/([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) attributes[match[1].toLowerCase()] = match[2] ?? match[3] ?? match[4] ?? ''
  return attributes
}

function candidateURLs(html, pageURL) {
  const candidates = []
  let manifestURL = ''
  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    const attributes = parseAttributes(match[0])
    const rel = (attributes.rel ?? '').toLowerCase().split(/\s+/)
    if (rel.includes('manifest') && attributes.href) manifestURL = new URL(attributes.href, pageURL).href
    if (!attributes.href || !/\.svg(?:$|[?#])/i.test(attributes.href) && !/image\/svg\+xml/i.test(attributes.type ?? '')) continue
    if (rel.some((value) => ['icon', 'mask-icon', 'apple-touch-icon', 'preload'].includes(value))) candidates.push({ url: new URL(attributes.href, pageURL).href, via: `link:${rel.join('+')}` })
  }
  for (const match of html.matchAll(/<(?:img|source)\b[^>]*>/gi)) {
    const attributes = parseAttributes(match[0])
    const source = attributes.src ?? attributes['data-src'] ?? attributes.srcset?.split(/[\s,]+/)[0]
    const hint = `${attributes.alt ?? ''} ${attributes.class ?? ''} ${attributes.id ?? ''} ${source ?? ''}`
    if (source && /\.svg(?:$|[?#])/i.test(source) && /logo|brand|mark|icon/i.test(hint)) candidates.push({ url: new URL(source, pageURL).href, via: 'page-logo' })
  }
  candidates.push({ url: new URL('/favicon.svg', pageURL).href, via: 'favicon.svg' })
  return { candidates: [...new Map(candidates.map((item) => [item.url, item])).values()].slice(0, 10), manifestURL }
}

async function discoverOfficialSVG(service) {
  const homepage = `https://${service.targets[0].hostname}/`
  const page = await fetchBounded(homepage, maxHTMLBytes, 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.1')
  const html = page.body.toString('utf8')
  const discovered = candidateURLs(html, page.url)
  if (discovered.manifestURL) {
    try {
      const manifestResponse = await fetchBounded(discovered.manifestURL, maxManifestBytes, 'application/manifest+json,application/json;q=0.9')
      const webManifest = JSON.parse(manifestResponse.body.toString('utf8'))
      for (const icon of Array.isArray(webManifest.icons) ? webManifest.icons : []) {
        if (typeof icon.src === 'string' && (/\.svg(?:$|[?#])/i.test(icon.src) || /image\/svg\+xml/i.test(icon.type ?? ''))) discovered.candidates.push({ url: new URL(icon.src, manifestResponse.url).href, via: 'web-manifest' })
      }
    } catch {
      // A broken optional web manifest must not discard page-level candidates.
    }
  }
  for (const candidate of discovered.candidates.slice(0, 12)) {
    try {
      const asset = await fetchBounded(candidate.url, maxSVGBytes, 'image/svg+xml,text/plain;q=0.5')
      if (!/svg/i.test(asset.contentType) && !/<svg\b/i.test(asset.body.subarray(0, 512).toString('utf8'))) continue
      return { svg: sanitizeSVG(asset.body), sourcePage: page.url, sourceAsset: asset.url, discoveredVia: candidate.via }
    } catch {
      // Continue through bounded candidates; provenance records only accepted assets.
    }
  }
  return null
}

async function mapWithConcurrency(items, concurrency, worker) {
  const results = new Array(items.length)
  let next = 0
  async function run() {
    while (next < items.length) {
      const index = next
      next += 1
      results[index] = await worker(items[index], index)
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, run))
  return results
}

async function existingOfficialAssets(reviewedAssets) {
  try {
    const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'))
    const entries = new Map()
    for (const [serviceId, entry] of Object.entries(manifest.services ?? {})) {
      if (entry.kind !== 'official-svg' || reviewedAssets.get(serviceId) !== entry.source_asset) continue
      const filename = path.basename(entry.file)
      const bytes = await fs.readFile(path.join(assetDirectory, filename))
      if (sha256(bytes) === entry.sha256) entries.set(serviceId, { entry: { ...entry, reviewed: true }, svg: sanitizeSVG(bytes) })
    }
    return entries
  } catch {
    return new Map()
  }
}

async function buildEntries(services) {
  const matchDocument = JSON.parse(await fs.readFile(matchPath, 'utf8'))
  if (matchDocument.version !== simpleIconsVersion) throw new Error(`Simple Icons mapping must stay pinned to ${simpleIconsVersion}`)
  const matchesByName = new Map(matchDocument.matches.map((entry) => [identity(entry.service_name), entry]))
  const iconsBySlug = new Map(Object.values(simpleIcons).filter((entry) => entry && typeof entry === 'object' && typeof entry.slug === 'string').map((entry) => [entry.slug, entry]))
  const reviewDocument = JSON.parse(await fs.readFile(reviewPath, 'utf8'))
  const reviewedAssets = new Map(Object.entries(reviewDocument.accepted ?? {}))
  const rejectedSimpleIcons = new Set(Object.keys(reviewDocument.rejected_simple_icons ?? {}))
  const previousOfficial = await existingOfficialAssets(reviewedAssets)
  const matchForService = new Map()
  for (const service of services) {
    if (rejectedSimpleIcons.has(service.serviceId)) continue
    const match = [...service.names].map((name) => matchesByName.get(identity(name))).find(Boolean)
    if (match) matchForService.set(service.serviceId, match)
  }
  const official = new Map(previousOfficial)
  const crawlTargets = refreshOfficial ? services.filter((service) => !matchForService.has(service.serviceId) && !official.has(service.serviceId)) : []
  if (crawlTargets.length > 0) {
    let completed = 0
    let discoveredCount = 0
    const found = await mapWithConcurrency(crawlTargets, 8, async (service) => {
      let result = null
      try {
        result = await discoverOfficialSVG(service)
      } catch {
        result = null
      }
      completed += 1
      if (result) discoveredCount += 1
      if (completed % 20 === 0 || completed === crawlTargets.length) process.stdout.write(`official discovery ${completed}/${crawlTargets.length}, found ${official.size + discoveredCount}\n`)
      return { service, result }
    })
    for (const { service, result } of found) {
      if (!result) continue
      if (reviewedAssets.get(service.serviceId) !== result.sourceAsset) continue
      official.set(service.serviceId, {
        svg: result.svg,
        entry: {
          kind: 'official-svg',
          source_page: result.sourcePage,
          source_asset: result.sourceAsset,
          discovered_via: result.discoveredVia,
          reviewed: true,
        },
      })
    }
  }
  const entries = new Map()
  for (const service of services) {
    let svg
    let provenance
    const officialAsset = official.get(service.serviceId)
    const simpleMatch = matchForService.get(service.serviceId)
    if (officialAsset) {
      svg = officialAsset.svg
      provenance = officialAsset.entry
    } else if (simpleMatch) {
      const icon = iconsBySlug.get(simpleMatch.icon_slug)
      if (!icon) throw new Error(`Simple Icons has no ${simpleMatch.icon_slug}`)
      svg = simpleIconSVG(icon)
      provenance = {
        kind: 'simple-icons',
        source_page: simpleMatch.source_url,
        source_asset: `simple-icons@${simpleIconsVersion}/${simpleMatch.icon_slug}`,
        discovered_via: 'curated-exact-name-match',
        ...(simpleMatch.guidelines_url ? { guidelines_url: simpleMatch.guidelines_url } : {}),
      }
    } else {
      svg = fallbackSVG(service)
      provenance = {
        kind: 'fallback',
        source_page: `https://${service.targets[0].hostname}/`,
        source_asset: '',
        discovered_via: 'deterministic-monogram',
      }
    }
    const bytes = Buffer.from(svg)
    entries.set(service.serviceId, {
      svg,
      manifest: {
        file: `assets/service-logos/${service.serviceId}.svg`,
        mime_type: 'image/svg+xml',
        sha256: sha256(bytes),
        ...provenance,
      },
    })
  }
  return entries
}

async function validate(services) {
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'))
  if (manifest.schema_version !== 1 || manifest.algorithm_version !== algorithmVersion || manifest.simple_icons_version !== simpleIconsVersion) throw new Error('logo manifest version is invalid')
  const reviewDocument = JSON.parse(await fs.readFile(reviewPath, 'utf8'))
  if (reviewDocument.schema_version !== 1) throw new Error('logo review lock version is invalid')
  const reviewedAssets = new Map(Object.entries(reviewDocument.accepted ?? {}))
  const rejectedSimpleIcons = new Map(Object.entries(reviewDocument.rejected_simple_icons ?? {}))
  const expected = services.map(({ serviceId }) => serviceId)
  const expectedSet = new Set(expected)
  const actual = Object.keys(manifest.services ?? {}).sort()
  if (expected.join('\0') !== actual.join('\0')) throw new Error(`logo manifest coverage differs: expected ${expected.length}, got ${actual.length}`)
  for (const serviceId of reviewedAssets.keys()) {
    if (!expectedSet.has(serviceId)) throw new Error(`review lock contains unknown service ${serviceId}`)
  }
  for (const [serviceId, reason] of rejectedSimpleIcons) {
    if (!expectedSet.has(serviceId) || typeof reason !== 'string' || reason.trim() === '') throw new Error(`invalid rejected Simple Icons review for ${serviceId}`)
  }
  const files = (await fs.readdir(assetDirectory)).filter((name) => name.endsWith('.svg')).sort()
  const expectedFiles = expected.map((serviceId) => `${serviceId}.svg`).sort()
  if (files.join('\0') !== expectedFiles.join('\0')) throw new Error(`logo asset coverage differs: expected ${expectedFiles.length}, got ${files.length}`)
  for (const serviceId of expected) {
    const entry = manifest.services[serviceId]
    if (entry.file !== `assets/service-logos/${serviceId}.svg` || entry.mime_type !== 'image/svg+xml' || !['official-svg', 'simple-icons', 'fallback'].includes(entry.kind)) throw new Error(`invalid manifest entry for ${serviceId}`)
    if (entry.kind === 'official-svg' && (entry.reviewed !== true || reviewedAssets.get(serviceId) !== entry.source_asset)) throw new Error(`unreviewed official logo for ${serviceId}`)
    if (entry.kind === 'simple-icons' && rejectedSimpleIcons.has(serviceId)) throw new Error(`rejected Simple Icons logo used for ${serviceId}`)
    const bytes = await fs.readFile(path.join(assetDirectory, `${serviceId}.svg`))
    if (bytes.byteLength > maxSVGBytes || sha256(bytes) !== entry.sha256) throw new Error(`invalid hash or size for ${serviceId}`)
    sanitizeSVG(bytes)
  }
  process.stdout.write(`validated ${expected.length} service logos\n`)
}

async function main() {
  const services = await loadCatalog()
  if (checkOnly) return validate(services)
  const entries = await buildEntries(services)
  await fs.mkdir(assetDirectory, { recursive: true })
  for (const [serviceId, entry] of entries) await fs.writeFile(path.join(assetDirectory, `${serviceId}.svg`), entry.svg)
  const manifestServices = {}
  for (const [serviceId, entry] of entries) {
    const writtenAsset = await fs.readFile(path.join(assetDirectory, `${serviceId}.svg`))
    manifestServices[serviceId] = { ...entry.manifest, sha256: sha256(writtenAsset) }
  }
  const manifest = {
    schema_version: 1,
    algorithm_version: algorithmVersion,
    simple_icons_version: simpleIconsVersion,
    services: manifestServices,
  }
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
  const kinds = Object.values(manifest.services).reduce((counts, entry) => ({ ...counts, [entry.kind]: (counts[entry.kind] ?? 0) + 1 }), {})
  process.stdout.write(`wrote ${entries.size} service logos ${JSON.stringify(kinds)}\n`)
  await validate(services)
}

await main()
