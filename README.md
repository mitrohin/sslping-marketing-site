# SSLPing public status directory

The primary SSLPing website is a server-rendered directory of public monitoring
and status pages. The monitoring product remains available as the secondary
call to action.

## What is included

- 55 regional catalogs generated from 1,088 managed targets and 15,576
  service-country status pages;
- native copy for all 31 catalog languages, including RTL layouts for Arabic,
  Hebrew and Urdu;
- host-based regional URLs (`ua.sslping.io`, `de.sslping.io`, and so on);
- build-time React SSR/prerendering, so headings, service links and metadata are
  present before JavaScript runs;
- self-canonical pages, complete reciprocal `hreflang`, `x-default`, JSON-LD,
  host-specific sitemaps, and host-specific robots responses;
- client-side name/domain search and alphabet filters as progressive
  enhancement;
- locally served service logos for every catalog identity, with deterministic
  monogram artwork when an attributable vector mark is unavailable;
- real 404 responses for unsupported paths and unknown hosts;
- no analytics, marketing scripts, cookie banner, external fonts or third-party
  image requests.

The canonical status-page URL remains
`https://status.sslping.io/<service_id>-<country>`. The directory never derives
URLs from display names and does not make one API request per card.

## US data boundary

The canonical managed catalog currently has no US rows; the upstream research
records the US source as inaccessible. The root domain is therefore an honest
English global catalog of widely available services, with a visible note that
links go to the closest English regional status page. `us.sslping.io` redirects
to the root.

Do not relabel Canadian or British entries as US data. When a verified US
source is added to the backend manifest, add `US: en` to the canonical country
map, copy the refreshed catalog snapshot, switch the root region from `GLOBAL`
to `US`, and update the scale assertions.

## Catalog snapshot

The vendored build input is documented in [`data/README.md`](data/README.md).
It is intentionally static for crawlable HTML. Live incident and availability
data stays on the linked public status pages.

Catalog logos are also vendored and served from `/assets/service-logos/`; no
visitor browser contacts the monitored service to render a card. Brand names
and marks remain the property of their respective owners. They are displayed
only to identify the linked public service, and their presence does not imply
affiliation, sponsorship or endorsement.

## Local development

Use Node.js 22.22+; CI and container builds use Node.js 22.

```sh
npm ci
npm run dev
```

The development server runs at `http://127.0.0.1:4175`. Preview any supported
region without local DNS by adding `?region=UA`, `?region=AE`, and so on.

The dashboard target is configurable:

```dotenv
VITE_DASHBOARD_URL=http://127.0.0.1:5173
```

Production defaults to `https://dashboard.sslping.io`.

## Production verification

```sh
npm run check
VITE_DASHBOARD_URL=https://dashboard.sslping.io npm run build
npm test
npm run preview
```

`npm run build` creates the client bundle, an SSR bundle, and one fully rendered
HTML document plus sitemap per region. Only `dist/` is copied into the runtime
image.

## Regional infrastructure prerequisites

The application manifests expect the shared Gateway to contain the `regional`
HTTPS listener for `*.sslping.io` and the `sslping-regional-tls` wildcard
certificate. The listener is declared in the backend repository. Deploy that
Gateway change before the marketing workload; the marketing workflow fails
closed when the listener is absent.

Production DNS also needs one proxied wildcard record for `*.sslping.io`
pointing to the same public origin as `sslping.io`. Exact hosts such as
`api.sslping.io`, `dashboard.sslping.io`, `status.sslping.io`,
`units.sslping.io`, and `grafana.sslping.io` keep their exact Gateway listeners
and routes.

After launch, submit the domain property and sitemaps through Google Search
Console and Yandex Webmaster. Technical readiness is implemented here, but no
site can guarantee a particular ranking or next-day inclusion.

## Security maintenance

`npm run test:security` checks deployed image selection and release verification.
After a successful rollout and public smoke checks, production deployment polls
for up to 180 seconds for every desired replica to run the exact `DEPLOY_IMAGE`.
It rechecks the cluster endpoint and uses the same fail-closed image selector as
the security job. A mismatch, unavailable API, or missing runtime evidence fails
the release and invokes the existing rollback path. Two initial local kubeconfig
reads have separate 10-second limits; each API read is bounded by the remaining
polling budget and 15 seconds.

A successful release uploads a sanitized JSON artifact containing source SHA,
expected image, actual container imageIDs, desired/ready replica counts, and UTC
observation time. No raw Kubernetes objects or credentials enter the receipt.
Artifact upload failure also fails the job, without rolling back healthy runtime.
The receipt is retained for 90 days and describes the observed deployment only.
The scheduled/manual `Security maintenance` workflow runs three independent
jobs: dependency audit (moderate and above), freshly built runtime image, and
an image observed running in production (high/critical container findings).
A failed dependency audit does not skip either image scan.

The deployed-image job runs only on `main`, in the existing protected
`production` environment, using its `DIGITALOCEAN_ACCESS_TOKEN`. It verifies
the cluster ID and API endpoint, then reads only this deployment and its pods.
Every desired replica must be ready on the same immutable registry digest.
Missing access, incomplete rollouts, missing runtime evidence, and image
mismatches fail the job; they are never reported as a clean scan. The job
summary records the selected digest and observation time. A later rollout
requires a new scan.

Registry login is read-only and expires after 20 minutes. The scanner receives
only an exported image archive, without Kubernetes or registry credentials.
The workflow does not deploy, restart workloads, read Kubernetes Secrets, or
execute the application image. Temporary kubeconfig and registry access files
are removed even after failure. No new GitHub secret is required beyond the
existing production deployment token; that token must permit cluster reads
and a registry pull. Environment approval policies also apply to this job.
