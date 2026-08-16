# Public catalog snapshot

`catalog.csv` is the versioned, build-time snapshot of the managed SSLPing
catalog. It was copied from
`backend/internal/catalog/data/sslping_monitor_targets_ready.csv` at catalog
manifest version 8. Its SHA-256 is:

`59e3c5af56b00658f82c150518b880aa431656c969a82a98992bfc116e4ec061`

Backend catalog version 9 keeps this target snapshot unchanged and adds the
derived service-logo branding contract. A future target CSV change still
requires updating the snapshot hash and logo coverage together.

The marketing build uses this snapshot only for service names, hostnames,
regional membership and stable status-page links. Live availability remains on
`status.sslping.io`; the directory deliberately does not issue hundreds of
per-card API requests.

When the backend catalog changes, copy the canonical CSV here, update the hash
above and rebuild. Never derive a status URL from the display name: the
`service_id` column is the immutable public URL identity.

## Service logo provenance

`service-logos.json` records one local SVG asset and SHA-256 digest for every
unique `service_id` in the snapshot. Its `kind`, `source_page`, `source_asset`
and `discovered_via` fields preserve how each mark was selected. The sync
process prefers a safely sanitized SVG published by the monitored site, then a
curated exact-name match from the pinned Simple Icons release. When neither is
available, it creates a deterministic monogram so every catalog card still has
a local visual identity. `service-logo-reviewed.json` locks manually accepted
official assets and rejects known same-name collisions, so an unrelated brand
cannot silently replace a service logo during a deterministic rebuild.

Run `npm run logos:check` to verify exact catalog coverage, hashes and SVG
safety without changing files. `npm run logos:sync` rebuilds deterministic
assets from the pinned inputs; `npm run logos:refresh` also rechecks official
sites and therefore requires network access and source review.

The same manifest and SVG directory must be copied byte-for-byte into
`dashboard/data/service-logos.json` and
`dashboard/public/assets/service-logos/`. Deploy that dashboard/status asset
pack before backend catalog version 9 publishes its branding URLs. Both
frontends verify all 776 hashes in CI, and missing files are served as
non-cacheable 404 responses.

All assets are vendored to avoid runtime requests to monitored sites. Names and
logos are trademarks or other property of their respective owners, are used
only for service identification, and do not imply affiliation, sponsorship or
endorsement by SSLPing. Source and brand usage guidelines in the manifest
should be reviewed whenever a mark is refreshed.
