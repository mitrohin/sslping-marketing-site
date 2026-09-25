# Legal information pages: factual draft and approval boundary

`/privacy`, `/terms`, `/ru/privacy`, `/ru/terms` are real, crawlable, static documents. They are readable without JavaScript. English and Russian versions are linked explicitly; all other marketing locales link to the English document. The documents have separate privacy and legal email contacts, retained from the previously published footer.

This implementation is **not legal approval**. Before publishing these as complete policies or contractual terms, the owner must supply and approve:

- The service operator's legal name, registration/address and contact details.
- Applicable jurisdiction, legal bases and contractual/commercial terms, including cancellation/refund details where relevant.
- Complete processor/subprocessor inventory, processing locations and transfer arrangements.
- Actual retention/deletion periods by data category, handling of backups and the process for data requests.
- Contact mailbox operation and responsibility for responding (the repository only establishes the published addresses).

No company, country, deadline, payment policy, SLA, legal certification or comprehensive vendor list has been invented. The page content says which commitments it does not establish. The auth benefit formerly claiming GDPR compliance/readiness is replaced with the factual "Public status pages" in all six dashboard languages. The unused implicit consent footer is replaced by actual document links, without treating navigation as consent to unapproved terms.

## Evidence used

| Topic | Repository evidence |
| --- | --- |
| Existing privacy/legal contacts | Prior `src/App.tsx` footer: `privacy@sslping.io` and `legal@sslping.io` |
| Account inputs | `../dashboard/src/features/auth/AuthPage.tsx` |
| Session/language browser persistence | `../dashboard/src/api/session.ts`, `../dashboard/src/app/I18nProvider.tsx` |
| Security IP/browser records | `../backend/internal/store/postgres_identity.go`, `postgres_auth_lifecycle.go` |
| Page settings, consent choice and local report receipt | `../dashboard/src/features/public-status/PublicStatusPage.tsx` |
| Public problem report processing | `../backend/internal/api/handlers_statuspages.go`, `../backend/deploy/cloudflare/report-metadata-worker/src/index.ts` |
| Optional Turnstile browser connection | `../dashboard/src/features/auth/TurnstileWidget.tsx` |
| Limited web measurement payloads | `src/clientTelemetry.ts`, `../dashboard/src/lib/clientTelemetry.ts` |
| Independent checks, region and freshness scope | `../dashboard/src/features/public-status/PublicStatusPage.tsx` |

The small web measurement payload is explicitly distinguished from account/security records, problem-report metadata and general network logs. Report enrichment may include IP-derived coordinates; it is not represented as "no personal data".

## Local review

Run the regular build and test commands. `npm run preview` handles the exact document routes before Vite's directory fallback. Production Nginx has explicit routes with security headers, content language and revalidation. The site's full unfiltered regional SSR catalog remains intact.

Preview the four documents at desktop and 390px, including language links, contact links, readable text contrast and keyboard focus. Do not submit privacy/legal mail or production forms during review.
