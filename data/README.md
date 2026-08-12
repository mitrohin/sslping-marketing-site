# Public catalog snapshot

`catalog.csv` is the versioned, build-time snapshot of the managed SSLPing
catalog. It was copied from
`backend/internal/catalog/data/sslping_monitor_targets_ready.csv` at catalog
manifest version 8. Its SHA-256 is:

`59e3c5af56b00658f82c150518b880aa431656c969a82a98992bfc116e4ec061`

The marketing build uses this snapshot only for service names, hostnames,
regional membership and stable status-page links. Live availability remains on
`status.sslping.io`; the directory deliberately does not issue hundreds of
per-card API requests.

When the backend catalog changes, copy the canonical CSV here, update the hash
above and rebuild. Never derive a status URL from the display name: the
`service_id` column is the immutable public URL identity.
