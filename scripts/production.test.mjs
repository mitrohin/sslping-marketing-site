import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import test from 'node:test'

const dist = new URL('../dist/', import.meta.url)

test('production bundle targets the dashboard domain and contains no retired hostname', async () => {
  const assetsDirectory = new URL('assets/', dist)
  const files = (await readdir(assetsDirectory)).filter((file) => file.endsWith('.js'))
  const javascript = (await Promise.all(files.map((file) => readFile(new URL(join('assets', file), dist), 'utf8')))).join('\n')

  assert.match(javascript, /https:\/\/dashboard\.sslping\.io/)
  assert.doesNotMatch(javascript, /app\.sslping\.io/)
  assert.doesNotMatch(javascript, /sslping\.rip/)
})

test('nginx policy separates immutable assets from revalidated HTML', async () => {
  const config = await readFile(new URL('../deploy/nginx/default.conf', import.meta.url), 'utf8')
  const headers = await readFile(new URL('../deploy/nginx/security-headers.inc', import.meta.url), 'utf8')

  assert.match(config, /max-age=31536000, immutable/)
  assert.match(config, /no-cache, max-age=0, must-revalidate/)
  assert.match(headers, /Content-Security-Policy/)
  assert.match(headers, /Strict-Transport-Security/)
})

test('deployment is restricted and binds only the dedicated HTTPS listeners', async () => {
  const manifest = await readFile(new URL('../deploy/kubernetes/marketing-site.yaml', import.meta.url), 'utf8')

  assert.doesNotMatch(manifest, /kind:\s*Namespace/)
  assert.match(manifest, /automountServiceAccountToken:\s*false/)
  assert.match(manifest, /allowPrivilegeEscalation:\s*false/)
  assert.match(manifest, /readOnlyRootFilesystem:\s*true/)
  assert.match(manifest, /runAsNonRoot:\s*true/)
  assert.match(manifest, /capabilities:\s*\{ drop: \["ALL"\] \}/)
  assert.match(manifest, /seccompProfile:\s*\{ type: RuntimeDefault \}/)
  assert.match(manifest, /sectionName:\s*marketing/)
  assert.match(manifest, /sectionName:\s*www/)
  assert.doesNotMatch(manifest, /sectionName:\s*http/)
})

test('production workflow verifies the immutable cluster identity before deployment', async () => {
  const workflow = await readFile(new URL('../.github/workflows/deploy-production.yml', import.meta.url), 'utf8')

  assert.match(workflow, /CLUSTER_ID:\s*[0-9a-f-]{36}/)
  assert.match(workflow, /Verify DigitalOcean production identity/)
  assert.match(workflow, /cluster kubeconfig save "\$\{CLUSTER_ID\}"/)
  assert.match(workflow, /persist-credentials:\s*false/)
})
