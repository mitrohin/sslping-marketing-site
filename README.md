# SSLPing marketing site

A responsive, privacy-first presentation site for the live SSLPing monitoring platform. It is an original light-theme implementation inspired by the information architecture of established uptime products, with a wider product story around SSL/TLS, DNS, APIs, incident response and reporting.

## Included

- Vite + React + TypeScript
- Ten localizations with persistent language selection
- RTL layout support for Arabic
- Responsive layouts from small phones to wide desktops
- Original CSS/SVG product previews with no external image dependency
- Cookie banner and preference center with opt-in categories and GPC awareness
- Accessible navigation, dialogs, accordions and reduced-motion handling
- Live dashboard signup links with clearly scoped messaging for roadmap features

## Dashboard connection

The marketing site sends login traffic to `/login` and primary conversion traffic to `/register` on the configured dashboard base URL. Copy the example environment file when the dashboard is hosted somewhere else:

```sh
cp .env.example .env.local
```

```dotenv
VITE_DASHBOARD_URL=http://127.0.0.1:5173
```

If `VITE_DASHBOARD_URL` is unset, the same local URL is used automatically.

## Local development

```sh
npm install
npm run dev
```

The development server uses `http://127.0.0.1:4175`.

## Production check

```sh
npm run check
npm run build
npm run preview
```

No analytics or marketing vendor is loaded by this prototype. Consent choices are stored locally so future integrations can be gated behind the selected categories.
