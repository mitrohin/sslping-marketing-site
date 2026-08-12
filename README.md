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

## Local development

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
