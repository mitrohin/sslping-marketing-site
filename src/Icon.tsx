import type { ReactNode, SVGProps } from 'react'

export type IconName =
  | 'activity'
  | 'globe'
  | 'shield'
  | 'code'
  | 'server'
  | 'pulse'
  | 'check'
  | 'arrow'
  | 'menu'
  | 'close'
  | 'spark'
  | 'lock'
  | 'bell'
  | 'chart'
  | 'phone'
  | 'chat'
  | 'clock'
  | 'layers'
  | 'search'
  | 'external'
  | 'chevron'
  | 'mapPin'
  | 'signal'

const paths: Record<IconName, ReactNode> = {
  activity: <><path d="M3 12h4l2.2-6 4.2 12 2.3-6H21" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3C9.6 5.5 8.4 8.5 8.4 12s1.2 6.5 3.6 9" /></>,
  shield: <><path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  code: <><path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12" /></>,
  server: <><rect x="4" y="4" width="16" height="6" rx="2" /><rect x="4" y="14" width="16" height="6" rx="2" /><path d="M8 7h.01M8 17h.01M12 7h5M12 17h5" /></>,
  pulse: <><path d="M4 13h3l2-6 4 11 2-5h5" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  arrow: <><path d="M5 12h14m-5-5 5 5-5 5" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  spark: <><path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" /><path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" /></>,
  lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v2" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7M10 19h4" /></>,
  chart: <><path d="M4 20V10m6 10V4m6 16v-7m4 7H2" /></>,
  phone: <><rect x="7" y="2" width="10" height="20" rx="3" /><path d="M10 5h4m-3 14h2" /></>,
  chat: <><path d="M20 15a3 3 0 0 1-3 3H9l-5 3v-6a3 3 0 0 1-1-2V7a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v8Z" /><path d="M8 10h.01M12 10h.01M16 10h.01" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  external: <><path d="M14 5h5v5M19 5l-8 8" /><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
  chevron: <><path d="m8 10 4 4 4-4" /></>,
  mapPin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  signal: <><path d="M5 16.5a10 10 0 0 1 14 0M8 13a6 6 0 0 1 8 0M11 9.5a2 2 0 0 1 2 0" /><circle cx="12" cy="19" r="1" /></>,
}

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}
