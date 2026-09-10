import assert from 'node:assert/strict'

// Read-only public checks. Never create a monitor or send a notification.
async function get(url, status = 200) {
  const response = await fetch(url, { signal: AbortSignal.timeout(20_000), redirect: 'follow' })
  assert.equal(response.status, status, `${url}: HTTP ${response.status}, expected ${status}`)
  assert.equal(new URL(response.url).protocol, 'https:', 'HTTPS must be preserved')
  return response.text()
}

for (const [host, region] of [['sslping.io', 'GLOBAL'], ['ca.sslping.io', 'CA'], ['ae.sslping.io', 'AE']]) {
  const html = await get(`https://${host}/`)
  assert.ok(html.includes(`data-region="${region}"`), `${host}: incorrect region`)
  assert.ok(html.includes(`rel="canonical" href="https://${host}/"`), `${host}: incorrect canonical`)
  assert.ok(html.includes('https://dashboard.sslping.io'), `${host}: dashboard link missing`)
  const sitemap = await get(`https://${host}/sitemap.xml`)
  assert.ok(sitemap.includes(`https://${host}/`), `${host}: sitemap missing canonical host`)
  await get(`https://${host}/__sslping_release_smoke_missing__`, 404)
  console.log(`${host}: HTTPS, region, canonical, sitemap, and real 404 passed`)
}

const canada = await get('https://ca.sslping.io/')
const statusLink = canada.match(/href="(https:\/\/status\.sslping\.io\/[a-z0-9-]+-ca)"/)?.[1]
assert.ok(statusLink, 'Canada catalog must link to a public status page')
const status = await get(statusLink)
assert.ok(status.includes('<html') && status.includes('SSLPing'), 'Status page must return application HTML')
console.log('Catalog → public status page passed')
