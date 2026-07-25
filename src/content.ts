export type Locale = 'en' | 'zh' | 'hi' | 'es' | 'fr' | 'ar' | 'bn' | 'pt' | 'ru' | 'id'

export type TextDirection = 'ltr' | 'rtl'

export interface LocaleOption {
  code: Locale
  label: string
  short: string
  dir: TextDirection
}

export interface Copy {
  metaTitle: string
  metaDescription: string
  nav: {
    platform: string
    security: string
    workflow: string
    pricing: string
    resources: string
    login: string
    start: string
    menu: string
    close: string
    language: string
  }
  hero: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    titleEnd: string
    body: string
    benefits: string[]
    placeholder: string
    primary: string
    secondary: string
    note: string
    formSuccess: string
    formError: string
    preview: {
      status: string
      endpoint: string
      uptime: string
      response: string
      certificate: string
      expires: string
      locations: string
      incident: string
    }
  }
  audiences: {
    label: string
    items: string[]
  }
  platform: {
    eyebrow: string
    title: string
    body: string
    cards: { title: string; body: string; features: string[] }[]
  }
  security: {
    eyebrow: string
    title: string
    body: string
    bullets: string[]
    cta: string
    chain: string
    expiry: string
    protocol: string
    transparency: string
  }
  network: {
    eyebrow: string
    title: string
    body: string
    benefits: string[]
    regions: string[]
    caption: string
  }
  workflow: {
    eyebrow: string
    title: string
    body: string
    steps: { title: string; body: string }[]
  }
  status: {
    eyebrow: string
    title: string
    body: string
    bullets: string[]
    cta: string
    previewTitle: string
    previewStatus: string
    previewIncident: string
  }
  analytics: {
    eyebrow: string
    title: string
    body: string
    labels: { uptime: string; latency: string; sslRisk: string; incidents: string }
    bullets: string[]
  }
  integrations: {
    eyebrow: string
    title: string
    body: string
    groups: { title: string; items: string[] }[]
    badge: string
  }
  mobile: {
    eyebrow: string
    title: string
    body: string
    bullets: string[]
    ios: string
    android: string
    coming: string
  }
  useCases: {
    eyebrow: string
    title: string
    body: string
    cards: { title: string; body: string }[]
  }
  pricing: {
    eyebrow: string
    title: string
    body: string
    monthly: string
    plans: {
      name: string
      price: string
      description: string
      features: string[]
      cta: string
      featured?: boolean
    }[]
    note: string
  }
  faq: {
    eyebrow: string
    title: string
    items: { question: string; answer: string }[]
  }
  final: {
    eyebrow: string
    title: string
    body: string
    placeholder: string
    primary: string
    secondary: string
  }
  footer: {
    tagline: string
    columns: { title: string; links: string[] }[]
    legal: string[]
    rights: string
    cookieSettings: string
  }
  cookies: {
    bannerTitle: string
    bannerBody: string
    privacy: string
    reject: string
    manage: string
    accept: string
    title: string
    body: string
    necessaryTitle: string
    necessaryBody: string
    alwaysOn: string
    analyticsTitle: string
    analyticsBody: string
    functionalTitle: string
    functionalBody: string
    marketingTitle: string
    marketingBody: string
    gpc: string
    rejectAll: string
    save: string
    acceptAll: string
    close: string
  }
  support: {
    button: string
    title: string
    body: string
    email: string
    docs: string
    close: string
  }
  common: {
    roadmap: string
    learnMore: string
    operational: string
    planned: string
  }
}

export const localeOptions: LocaleOption[] = [
  { code: 'en', label: 'English', short: 'EN', dir: 'ltr' },
  { code: 'zh', label: '简体中文', short: '中文', dir: 'ltr' },
  { code: 'hi', label: 'हिन्दी', short: 'हिं', dir: 'ltr' },
  { code: 'es', label: 'Español', short: 'ES', dir: 'ltr' },
  { code: 'fr', label: 'Français', short: 'FR', dir: 'ltr' },
  { code: 'ar', label: 'العربية', short: 'ع', dir: 'rtl' },
  { code: 'bn', label: 'বাংলা', short: 'বাং', dir: 'ltr' },
  { code: 'pt', label: 'Português', short: 'PT', dir: 'ltr' },
  { code: 'ru', label: 'Русский', short: 'RU', dir: 'ltr' },
  { code: 'id', label: 'Bahasa Indonesia', short: 'ID', dir: 'ltr' },
]

export const isLocale = (value: string): value is Locale =>
  localeOptions.some(({ code }) => code === value)

export const translations: Record<Locale, Copy> = {
  en: {
    metaTitle: 'SSLPing — uptime, certificate, and incident monitoring',
    metaDescription:
      'Explore the SSLPing roadmap for unified website, API, SSL, DNS, network, job, incident, and status-page monitoring.',
    nav: {
      platform: 'Platform',
      security: 'SSL security',
      workflow: 'Incident workflow',
      pricing: 'Pricing',
      resources: 'Resources',
      login: 'Log in',
      start: 'Create free account',
      menu: 'Open menu',
      close: 'Close menu',
      language: 'Choose language',
    },
    hero: {
      eyebrow: 'Live monitoring, with a broader roadmap in progress',
      titleLead: 'Monitor more than uptime.',
      titleAccent: 'Catch trouble early.',
      titleEnd: 'Resolve it with context.',
      body:
        'SSLPing now provides a live dashboard and monitoring backend for websites, APIs, certificates, domains, DNS, ports, heartbeats, incidents, and status communication, with more capabilities rolling out over time.',
      benefits: [
        'Website and API availability',
        'SSL, domain, and DNS lifecycle',
        'Ports, networks, and heartbeats',
        'Incidents, analytics, and status pages',
      ],
      placeholder: 'your-domain.com',
      primary: 'Start monitoring',
      secondary: 'Explore the platform',
      note: 'Live signup in the dashboard — create your workspace and first monitor.',
      formSuccess: 'Opening secure signup in the SSLPing dashboard…',
      formError: 'Enter a valid domain or URL, such as example.com.',
      preview: {
        status: 'Current status',
        endpoint: 'Primary endpoint',
        uptime: 'Uptime window',
        response: 'Response trend',
        certificate: 'Certificate health',
        expires: 'Expiry watch',
        locations: 'Check locations',
        incident: 'Incident timeline',
      },
    },
    audiences: {
      label: 'Designed for',
      items: ['Independent makers', 'Product and engineering teams', 'Agencies and operators', 'Growing enterprises'],
    },
    platform: {
      eyebrow: 'One monitoring surface',
      title: 'See availability, trust, and operations together.',
      body:
        'The roadmap brings checks that are usually scattered across tools into one consistent model, alert stream, and incident history.',
      cards: [
        {
          title: 'Website and API monitoring',
          body: 'Verify pages and endpoints from the outside, including the response behavior your users depend on.',
          features: ['HTTP and HTTPS checks', 'Headers and response codes', 'Keyword and payload rules'],
        },
        {
          title: 'SSL and domain lifecycle',
          body: 'Track the trust chain and renewal windows before a certificate or domain becomes an outage.',
          features: ['Certificate expiry', 'Chain validation', 'Domain renewal watch'],
        },
        {
          title: 'DNS integrity',
          body: 'Detect unexpected record changes and investigate resolution differences across regions.',
          features: ['Record snapshots', 'Change alerts', 'Regional resolution'],
        },
        {
          title: 'Ports and network reachability',
          body: 'Watch internet-facing services beyond the browser and separate application failures from network failures.',
          features: ['TCP port checks', 'Ping reachability', 'Timeout controls'],
        },
        {
          title: 'Heartbeats and scheduled jobs',
          body: 'Know when a backup, import, queue worker, or other expected process stops checking in.',
          features: ['Cron heartbeats', 'Grace windows', 'Missed-run alerts'],
        },
        {
          title: 'Content and critical journeys',
          body: 'Confirm that important content remains present and prepare for multi-step journey checks.',
          features: ['Keyword presence', 'Content change signals', 'Journey checks on the roadmap'],
        },
      ],
    },
    security: {
      eyebrow: 'Certificate intelligence',
      title: 'Make certificate health part of daily operations.',
      body:
        'SSLPing is planned to explain what is wrong with the certificate path, not merely count days until expiry.',
      bullets: [
        'Validate hostname, issuer, chain, and trust state',
        'Watch expiry and renewal windows with escalating reminders',
        'Record protocol and cipher observations over time',
        'Surface certificate changes inside the incident timeline',
      ],
      cta: 'Explore SSL monitoring',
      chain: 'Trust chain',
      expiry: 'Renewal window',
      protocol: 'Protocol posture',
      transparency: 'Change history',
    },
    network: {
      eyebrow: 'Global checks, planned',
      title: 'Distinguish a local glitch from a regional outage.',
      body:
        'The planned checker network will compare results from multiple regions before escalating, while keeping each location visible for investigation.',
      benefits: [
        'Confirm failures from more than one vantage point',
        'Expose regional DNS, routing, and CDN differences',
        'Choose locations that reflect your audience',
        'Keep raw location evidence with every incident',
      ],
      regions: ['North America', 'South America', 'Europe', 'Middle East', 'Asia Pacific', 'Africa'],
      caption: 'Illustrative roadmap regions; exact locations and availability are not yet committed.',
    },
    workflow: {
      eyebrow: 'From signal to resolution',
      title: 'A complete incident loop, without the tab storm.',
      body:
        'Every planned workflow step preserves context, ownership, and a clear customer-facing story.',
      steps: [
        { title: 'Detect', body: 'Run the right external, network, certificate, or heartbeat check.' },
        { title: 'Confirm', body: 'Recheck and compare locations to reduce noisy one-off failures.' },
        { title: 'Enrich', body: 'Attach timing, DNS, TLS, response, and recent-change evidence.' },
        { title: 'Route', body: 'Send the alert to the responsible person and preferred channel.' },
        { title: 'Communicate', body: 'Publish a clear incident update to the relevant status page.' },
        { title: 'Learn', body: 'Review the timeline, impact, and follow-up work after recovery.' },
      ],
    },
    status: {
      eyebrow: 'Customer communication',
      title: 'Turn monitor state into a status page people can trust.',
      body:
        'Planned status pages connect selected monitors, maintenance, and human-written updates in one accessible public view.',
      bullets: [
        'Custom branding and domain options',
        'Component-level status and incident history',
        'Maintenance notices and subscriber updates',
        'Public, private, and search-index controls',
      ],
      cta: 'Preview status pages',
      previewTitle: 'SSLPing service status',
      previewStatus: 'All preview systems operational',
      previewIncident: 'No active preview incidents',
    },
    analytics: {
      eyebrow: 'Evidence, not vanity metrics',
      title: 'Understand reliability trends and the events behind them.',
      body:
        'The analytics roadmap combines service health, response behavior, certificate risk, and incident history without hiding the underlying checks.',
      labels: {
        uptime: 'Availability',
        latency: 'Response time',
        sslRisk: 'SSL risk',
        incidents: 'Incidents',
      },
      bullets: [
        'Flexible reporting windows and timezone-aware timelines',
        'Region and monitor comparisons',
        'Exportable evidence for reviews and audits',
        'Annotations for deployments and maintenance',
      ],
    },
    integrations: {
      eyebrow: 'Fits your workflow',
      title: 'Route signals to the tools your team already watches.',
      body:
        'These connectors are roadmap candidates, not claims of currently available integrations. Priorities will follow early-user feedback.',
      groups: [
        { title: 'Chat and collaboration', items: ['Slack', 'Microsoft Teams', 'Discord', 'Google Chat'] },
        { title: 'On-call and incidents', items: ['PagerDuty', 'Opsgenie', 'Email', 'SMS and voice'] },
        { title: 'Automation', items: ['Webhooks', 'Zapier', 'n8n', 'Custom workflows'] },
        { title: 'Developer tools', items: ['REST API', 'Command line', 'Terraform', 'MCP'] },
      ],
      badge: 'Integration roadmap preview',
    },
    mobile: {
      eyebrow: 'Mobile response, planned',
      title: 'Carry the incident room without carrying the dashboard.',
      body:
        'Dedicated iOS and Android apps are planned for focused alerts, acknowledgement, monitor context, and status updates on the move.',
      bullets: [
        'Actionable push notifications',
        'Acknowledge and assign incidents',
        'Pause checks during maintenance',
        'Draft and publish status updates',
      ],
      ios: 'iOS app roadmap',
      android: 'Android app roadmap',
      coming: 'Planned — not yet available in app stores',
    },
    useCases: {
      eyebrow: 'Built for different operating realities',
      title: 'Start simple, keep the context as systems grow.',
      body: 'The same monitoring model can support a solo project, a client portfolio, or a distributed platform team.',
      cards: [
        { title: 'SaaS and APIs', body: 'Watch public journeys, dependencies, certificates, and service components from one incident view.' },
        { title: 'Agencies and portfolios', body: 'Organize client monitors, ownership, alerts, and branded status communication without mixing audiences.' },
        { title: 'Commerce and campaigns', body: 'Protect checkout, landing pages, DNS, and third-party dependencies during business-critical windows.' },
        { title: 'Infrastructure and operations', body: 'Combine network reachability, ports, jobs, maintenance, and escalation evidence.' },
      ],
    },
    pricing: {
      eyebrow: 'Pricing concept',
      title: 'A path from first monitor to complex operations.',
      body:
        'The tiers below communicate product direction. Final names, limits, availability, and prices will be validated before launch.',
      monthly: 'Roadmap pricing preview',
      plans: [
        {
          name: 'Free',
          price: 'Free preview',
          description: 'For learning the workflow and watching a small personal project.',
          features: ['Core availability checks', 'SSL expiry watch', 'Email alerts', 'Basic status page'],
          cta: 'Create free account',
        },
        {
          name: 'Builder',
          price: 'To be announced',
          description: 'For makers and growing products that need faster context and automation.',
          features: ['More monitor types', 'Regional checks', 'Workflow integrations', 'Longer history'],
          cta: 'Register interest',
          featured: true,
        },
        {
          name: 'Team',
          price: 'To be announced',
          description: 'For shared ownership, incident coordination, and multiple services.',
          features: ['Team roles', 'Escalation policies', 'Multiple status pages', 'Audit-friendly exports'],
          cta: 'Register team interest',
        },
        {
          name: 'Enterprise',
          price: 'Custom proposal',
          description: 'For advanced governance, deployment, support, and scale requirements.',
          features: ['Access controls', 'SSO roadmap', 'Custom retention options', 'Guided onboarding'],
          cta: 'Discuss requirements',
        },
      ],
      note: 'Roadmap preview only. No plan, price, quota, or release date shown here is a commercial commitment.',
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'Clear answers about the SSLPing roadmap.',
      items: [
        {
          question: 'What will SSLPing monitor?',
          answer: 'The roadmap covers websites, APIs, SSL certificates, domains, DNS records, network reachability, TCP ports, heartbeats, scheduled jobs, content rules, and later critical journeys.',
        },
        {
          question: 'How are checks expected to work?',
          answer: 'A monitor will run from one or more selected locations, preserve the result and timing evidence, confirm failures when appropriate, and open or update an incident according to its policy.',
        },
        {
          question: 'How will SSLPing reduce false alerts?',
          answer: 'The design uses confirmation checks, location comparison, configurable timeouts, maintenance windows, and recovery rules. Exact behavior will be tested before launch.',
        },
        {
          question: 'Will it inspect more than certificate expiry?',
          answer: 'Yes. The certificate roadmap includes hostname, issuer, trust chain, protocol posture, change history, and renewal-window context.',
        },
        {
          question: 'Can I monitor from specific regions?',
          answer: 'Location selection and multi-region confirmation are planned. The map on this page is illustrative; exact cities and providers are not yet committed.',
        },
        {
          question: 'Will status pages and integrations be included?',
          answer: 'Both are core roadmap areas. Public and private status communication, webhooks, APIs, and third-party connectors will be phased and validated with early users.',
        },
        {
          question: 'Is the monitoring service available now?',
          answer: 'Yes. The monitoring backend, dashboard, and account signup are live now. Create a workspace in the dashboard and add your first monitor; mobile apps and some advanced roadmap capabilities will arrive in phases.',
        },
      ],
    },
    final: {
      eyebrow: 'Start monitoring now',
      title: 'Create an account and run your first live check.',
      body: 'Create your dashboard account, set up a workspace, and add your first live monitor. You can then tell us which checks, regions, and workflows should come next.',
      placeholder: 'you@company.com',
      primary: 'Create free account',
      secondary: 'Read the roadmap',
    },
    footer: {
      tagline: 'A broader, calmer monitoring platform — live now and expanding.',
      columns: [
        { title: 'Platform', links: ['Website and API', 'SSL and domains', 'DNS and network', 'Heartbeats'] },
        { title: 'Operations', links: ['Incidents', 'Status pages', 'Analytics', 'Integrations'] },
        { title: 'Resources', links: ['Roadmap', 'Documentation preview', 'Monitoring guides', 'Service status'] },
        { title: 'Company', links: ['About SSLPing', 'Contact', 'Security', 'Accessibility'] },
      ],
      legal: ['Privacy', 'Terms', 'Data processing', 'Cookie policy'],
      rights: '© 2026 SSLPing. All rights reserved.',
      cookieSettings: 'Cookie settings',
    },
    cookies: {
      bannerTitle: 'Your privacy, your choice',
      bannerBody: 'We use necessary cookies to make this preview work. With your permission, optional cookies help us understand usage and remember preferences.',
      privacy: 'Read the privacy notice',
      reject: 'Reject optional',
      manage: 'Manage choices',
      accept: 'Accept all',
      title: 'Cookie preferences',
      body: 'Choose which optional categories SSLPing may use. You can change this choice at any time from the footer.',
      necessaryTitle: 'Strictly necessary',
      necessaryBody: 'Required for security, consent storage, language, and core site functions.',
      alwaysOn: 'Always on',
      analyticsTitle: 'Analytics',
      analyticsBody: 'Helps us understand aggregate page usage and improve the product presentation.',
      functionalTitle: 'Functional',
      functionalBody: 'Remembers optional interface choices and enhanced presentation features.',
      marketingTitle: 'Marketing',
      marketingBody: 'Supports campaign measurement and relevant launch communications.',
      gpc: 'Global Privacy Control signals are honored when detected.',
      rejectAll: 'Reject optional cookies',
      save: 'Save preferences',
      acceptAll: 'Accept all cookies',
      close: 'Close cookie preferences',
    },
    support: {
      button: 'Open support',
      title: 'How can we help?',
      body: 'The dashboard and core monitoring are live. Ask for signup help, share a monitoring need, or browse the roadmap documentation.',
      email: 'Contact the team',
      docs: 'Open documentation preview',
      close: 'Close support',
    },
    common: {
      roadmap: 'Roadmap preview',
      learnMore: 'Learn more',
      operational: 'Operational',
      planned: 'Planned',
    },
  },
  zh: {
    metaTitle: 'SSLPing — 可用性、证书与事件监控',
    metaDescription: '了解 SSLPing 的产品路线图：统一监控网站、API、SSL、DNS、网络、任务、事件和状态页。',
    nav: {
      platform: '平台',
      security: 'SSL 安全',
      workflow: '事件流程',
      pricing: '价格',
      resources: '资源',
      login: '登录',
      start: '创建免费账户',
      menu: '打开菜单',
      close: '关闭菜单',
      language: '选择语言',
    },
    hero: {
      eyebrow: '实时监控现已上线，更多功能持续扩展',
      titleLead: '不只监控在线状态。',
      titleAccent: '更早发现问题。',
      titleEnd: '带着完整上下文解决问题。',
      body: 'SSLPing 已提供实时控制台和监控后端，可监控网站、API、证书、域名、DNS、端口、心跳、事件和状态沟通，更多能力将持续上线。',
      benefits: ['网站与 API 可用性', 'SSL、域名与 DNS 生命周期', '端口、网络与心跳', '事件、分析与状态页'],
      placeholder: 'your-domain.com',
      primary: '开始监控',
      secondary: '探索平台',
      note: '在控制台中实时注册 — 创建工作区并添加第一个监控。',
      formSuccess: '正在打开 SSLPing 控制台的安全注册页面…',
      formError: '请输入有效的域名或网址，例如 example.com。',
      preview: {
        status: '当前状态',
        endpoint: '主要端点',
        uptime: '可用性周期',
        response: '响应趋势',
        certificate: '证书健康度',
        expires: '到期监测',
        locations: '检查区域',
        incident: '事件时间线',
      },
    },
    audiences: {
      label: '适用于',
      items: ['独立开发者', '产品与工程团队', '代理机构与运维人员', '成长型企业'],
    },
    platform: {
      eyebrow: '一个统一的监控界面',
      title: '同时掌握可用性、可信度与运行状况。',
      body: '路线图将通常分散在不同工具中的检查项目，整合为一致的数据模型、告警流和事件历史。',
      cards: [
        {
          title: '网站与 API 监控',
          body: '从外部验证页面和端点，包括用户真正依赖的响应行为。',
          features: ['HTTP 与 HTTPS 检查', '请求头与响应状态码', '关键词与响应内容规则'],
        },
        {
          title: 'SSL 与域名生命周期',
          body: '持续跟踪信任链和续期窗口，避免证书或域名问题演变为服务中断。',
          features: ['证书到期', '证书链验证', '域名续期监测'],
        },
        {
          title: 'DNS 完整性',
          body: '发现异常的记录变更，并调查不同区域的解析差异。',
          features: ['记录快照', '变更告警', '跨区域解析'],
        },
        {
          title: '端口与网络可达性',
          body: '监控浏览器之外的公网服务，区分应用故障与网络故障。',
          features: ['TCP 端口检查', 'Ping 可达性', '超时控制'],
        },
        {
          title: '心跳与计划任务',
          body: '及时了解备份、导入、队列工作进程或其他预期任务何时停止上报。',
          features: ['定时任务心跳', '宽限窗口', '漏跑告警'],
        },
        {
          title: '内容与关键流程',
          body: '确认重要内容始终存在，并为多步骤用户流程检查做好准备。',
          features: ['关键词存在检查', '内容变更信号', '路线图中的流程检查'],
        },
      ],
    },
    security: {
      eyebrow: '证书智能',
      title: '让证书健康成为日常运维的一部分。',
      body: 'SSLPing 计划解释证书路径中究竟哪里出了问题，而不只是计算剩余天数。',
      bullets: ['验证主机名、颁发者、证书链和信任状态', '监测到期与续期窗口，并逐级提醒', '持续记录协议与加密套件的观测结果', '在事件时间线中呈现证书变更'],
      cta: '探索 SSL 监控',
      chain: '信任链',
      expiry: '续期窗口',
      protocol: '协议状态',
      transparency: '变更历史',
    },
    network: {
      eyebrow: '全球检查，规划中',
      title: '分清本地抖动与区域性中断。',
      body: '规划中的检查网络会在升级告警前比较多个区域的结果，同时保留每个位置的数据以便调查。',
      benefits: ['从多个观测点确认故障', '发现区域性的 DNS、路由和 CDN 差异', '选择贴近用户的检查区域', '为每个事件保留原始区域证据'],
      regions: ['北美洲', '南美洲', '欧洲', '中东', '亚太地区', '非洲'],
      caption: '所示区域仅用于说明路线图，具体位置和可用性尚未确定。',
    },
    workflow: {
      eyebrow: '从信号到恢复',
      title: '无需在无数标签页间切换的完整事件闭环。',
      body: '规划中的每一步流程都会保留上下文、负责人和清晰的客户沟通记录。',
      steps: [
        { title: '检测', body: '运行合适的外部、网络、证书或心跳检查。' },
        { title: '确认', body: '重新检查并比较不同区域，减少偶发故障带来的噪声。' },
        { title: '补充上下文', body: '附上耗时、DNS、TLS、响应和近期变更证据。' },
        { title: '分派', body: '将告警发送给负责人及其首选渠道。' },
        { title: '沟通', body: '向相关状态页发布清晰的事件更新。' },
        { title: '复盘', body: '恢复后回顾时间线、影响和后续工作。' },
      ],
    },
    status: {
      eyebrow: '客户沟通',
      title: '把监控状态变成用户可信赖的状态页。',
      body: '规划中的状态页会把选定的监控项、维护信息和人工撰写的更新汇总到一个易于访问的公开视图中。',
      bullets: ['自定义品牌与域名选项', '组件级状态与事件历史', '维护通知与订阅者更新', '公开、私密和搜索收录控制'],
      cta: '预览状态页',
      previewTitle: 'SSLPing 服务状态',
      previewStatus: '所有预览系统运行正常',
      previewIncident: '当前没有预览事件',
    },
    analytics: {
      eyebrow: '有依据的数据，而非虚荣指标',
      title: '理解可靠性趋势以及背后的事件。',
      body: '分析路线图将服务健康度、响应表现、证书风险和事件历史整合在一起，同时保留底层检查证据。',
      labels: { uptime: '可用性', latency: '响应时间', sslRisk: 'SSL 风险', incidents: '事件' },
      bullets: ['灵活的报告周期与时区感知时间线', '区域和监控项对比', '可导出的评审与审计证据', '部署与维护注释'],
    },
    integrations: {
      eyebrow: '融入现有工作流程',
      title: '将信号送达团队已经在使用的工具。',
      body: '以下连接器是路线图候选项，并不代表目前已经可用。优先级将根据早期用户反馈确定。',
      groups: [
        { title: '聊天与协作', items: ['Slack', 'Microsoft Teams', 'Discord', 'Google Chat'] },
        { title: '值班与事件响应', items: ['PagerDuty', 'Opsgenie', '电子邮件', '短信与语音'] },
        { title: '自动化', items: ['Webhook', 'Zapier', 'n8n', '自定义工作流'] },
        { title: '开发者工具', items: ['REST API', '命令行', 'Terraform', 'MCP'] },
      ],
      badge: '集成路线图预览',
    },
    mobile: {
      eyebrow: '移动端响应，规划中',
      title: '随身携带事件协作能力，而不是整套控制台。',
      body: '规划中的 iOS 和 Android 应用将专注于告警、确认、监控上下文和移动状态更新。',
      bullets: ['可直接处理的推送通知', '确认并分配事件', '维护期间暂停检查', '撰写并发布状态更新'],
      ios: 'iOS 应用路线图',
      android: 'Android 应用路线图',
      coming: '规划中 — 应用商店暂未提供',
    },
    useCases: {
      eyebrow: '适应不同的运维现实',
      title: '从简单开始，系统扩张时上下文仍然完整。',
      body: '同一套监控模型既能支持个人项目，也能支持客户组合或分布式平台团队。',
      cards: [
        { title: 'SaaS 与 API', body: '在一个事件视图中监控公开流程、依赖、证书和服务组件。' },
        { title: '代理机构与项目组合', body: '分别管理客户监控、责任、告警和品牌化状态沟通，避免受众混杂。' },
        { title: '电商与营销活动', body: '在业务关键时段保护结账、落地页、DNS 和第三方依赖。' },
        { title: '基础设施与运维', body: '统一网络可达性、端口、任务、维护和升级证据。' },
      ],
    },
    pricing: {
      eyebrow: '价格构想',
      title: '从第一个监控项到复杂运维的成长路径。',
      body: '以下方案用于表达产品方向。最终名称、限额、可用性和价格将在上线前确认。',
      monthly: '路线图价格预览',
      plans: [
        {
          name: '免费版',
          price: '免费预览',
          description: '用于了解工作流程和监控小型个人项目。',
          features: ['基础可用性检查', 'SSL 到期监测', '邮件告警', '基础状态页'],
          cta: '创建免费账户',
        },
        {
          name: '构建者版',
          price: '待公布',
          description: '面向需要更快上下文和自动化能力的创作者与成长型产品。',
          features: ['更多监控类型', '区域检查', '工作流集成', '更长历史记录'],
          cta: '登记意向',
          featured: true,
        },
        {
          name: '团队版',
          price: '待公布',
          description: '用于共享责任、事件协作和多服务管理。',
          features: ['团队角色', '升级策略', '多个状态页', '便于审计的导出'],
          cta: '登记团队意向',
        },
        {
          name: '企业版',
          price: '定制方案',
          description: '满足高级治理、部署、支持与规模需求。',
          features: ['访问控制', 'SSO 路线图', '自定义保留选项', '引导式上线'],
          cta: '讨论需求',
        },
      ],
      note: '仅为路线图预览。此处展示的方案、价格、配额或发布日期均不构成商业承诺。',
    },
    faq: {
      eyebrow: '常见问题',
      title: '关于 SSLPing 路线图的明确答复。',
      items: [
        { question: 'SSLPing 将监控什么？', answer: '路线图涵盖网站、API、SSL 证书、域名、DNS 记录、网络可达性、TCP 端口、心跳、计划任务、内容规则，以及后续的关键流程。' },
        { question: '检查预计如何运行？', answer: '监控项将从一个或多个选定位置运行，保存结果与耗时证据，在适当情况下确认故障，并按照策略创建或更新事件。' },
        { question: 'SSLPing 将如何减少误报？', answer: '设计包含确认检查、区域对比、可配置超时、维护窗口和恢复规则。具体行为将在上线前完成测试。' },
        { question: '除了证书到期，还会检查其他内容吗？', answer: '会。证书路线图包括主机名、颁发者、信任链、协议状态、变更历史和续期窗口上下文。' },
        { question: '可以从指定区域监控吗？', answer: '区域选择和多区域确认已列入计划。本页地图仅作示意，具体城市和服务商尚未确定。' },
        { question: '会包含状态页和集成吗？', answer: '两者都是核心路线图领域。公开与私密状态沟通、Webhook、API 和第三方连接器将分阶段推出，并与早期用户共同验证。' },
        { question: '监控服务现在可用吗？', answer: '可以。监控后端、控制台和账户注册现已上线。请在控制台创建工作区并添加第一个监控；移动应用和部分高级路线图功能将分阶段推出。' },
      ],
    },
    final: {
      eyebrow: '立即开始监控',
      title: '创建账户并开始第一次实时检查。',
      body: '创建控制台账户和工作区，然后添加第一个实时监控。之后还可以告诉我们下一步最需要哪些检查、区域和工作流。',
      placeholder: 'you@company.com',
      primary: '创建免费账户',
      secondary: '阅读路线图',
    },
    footer: {
      tagline: '功能更广、更从容的监控平台 — 现已上线并持续扩展。',
      columns: [
        { title: '平台', links: ['网站与 API', 'SSL 与域名', 'DNS 与网络', '心跳'] },
        { title: '运维', links: ['事件', '状态页', '分析', '集成'] },
        { title: '资源', links: ['路线图', '文档预览', '监控指南', '服务状态'] },
        { title: '公司', links: ['关于 SSLPing', '联系我们', '安全', '无障碍'] },
      ],
      legal: ['隐私', '条款', '数据处理', 'Cookie 政策'],
      rights: '© 2026 SSLPing。保留所有权利。',
      cookieSettings: 'Cookie 设置',
    },
    cookies: {
      bannerTitle: '您的隐私，由您选择',
      bannerBody: '我们使用必要 Cookie 保障此预览正常运行。经您同意，可选 Cookie 将帮助我们了解使用情况并记住偏好。',
      privacy: '阅读隐私说明',
      reject: '拒绝可选项',
      manage: '管理选择',
      accept: '全部接受',
      title: 'Cookie 偏好设置',
      body: '请选择 SSLPing 可以使用的可选类别。您可随时从页脚修改此选择。',
      necessaryTitle: '严格必要',
      necessaryBody: '网站安全、同意记录、语言设置和核心功能所必需。',
      alwaysOn: '始终启用',
      analyticsTitle: '分析',
      analyticsBody: '帮助我们了解汇总后的页面使用情况并改善产品展示。',
      functionalTitle: '功能',
      functionalBody: '记住可选界面设置和增强展示功能。',
      marketingTitle: '营销',
      marketingBody: '用于衡量推广活动并提供相关的上线信息。',
      gpc: '检测到全球隐私控制信号时，我们会予以遵循。',
      rejectAll: '拒绝可选 Cookie',
      save: '保存偏好',
      acceptAll: '接受所有 Cookie',
      close: '关闭 Cookie 偏好设置',
    },
    support: {
      button: '打开支持',
      title: '我们能为您做什么？',
      body: '控制台和核心监控现已上线。获取注册帮助、分享监控需求，或浏览路线图文档。',
      email: '联系团队',
      docs: '打开文档预览',
      close: '关闭支持',
    },
    common: { roadmap: '路线图预览', learnMore: '了解更多', operational: '运行正常', planned: '规划中' },
  },
  hi: {
    metaTitle: 'SSLPing — अपटाइम, प्रमाणपत्र और घटना निगरानी',
    metaDescription: 'वेबसाइट, API, SSL, DNS, नेटवर्क, जॉब, घटना और स्टेटस पेज की एकीकृत निगरानी के लिए SSLPing का रोडमैप देखें।',
    nav: {
      platform: 'प्लेटफ़ॉर्म',
      security: 'SSL सुरक्षा',
      workflow: 'घटना कार्यप्रवाह',
      pricing: 'मूल्य',
      resources: 'संसाधन',
      login: 'लॉग इन करें',
      start: 'मुफ़्त खाता बनाएँ',
      menu: 'मेन्यू खोलें',
      close: 'मेन्यू बंद करें',
      language: 'भाषा चुनें',
    },
    hero: {
      eyebrow: 'लाइव निगरानी उपलब्ध है, और विस्तृत रोडमैप पर काम जारी है',
      titleLead: 'सिर्फ़ अपटाइम से आगे निगरानी करें।',
      titleAccent: 'समस्या जल्दी पकड़ें।',
      titleEnd: 'पूरे संदर्भ के साथ समाधान करें।',
      body: 'SSLPing अब वेबसाइट, API, प्रमाणपत्र, डोमेन, DNS, पोर्ट, हार्टबीट, घटनाओं और स्टेटस संवाद के लिए लाइव डैशबोर्ड और निगरानी बैकएंड देता है; और क्षमताएँ चरणबद्ध रूप से जुड़ेंगी।',
      benefits: ['वेबसाइट और API उपलब्धता', 'SSL, डोमेन और DNS जीवनचक्र', 'पोर्ट, नेटवर्क और हार्टबीट', 'घटनाएँ, विश्लेषण और स्टेटस पेज'],
      placeholder: 'your-domain.com',
      primary: 'निगरानी शुरू करें',
      secondary: 'प्लेटफ़ॉर्म देखें',
      note: 'डैशबोर्ड में लाइव साइनअप — अपना कार्यक्षेत्र और पहला मॉनिटर बनाएँ।',
      formSuccess: 'SSLPing डैशबोर्ड में सुरक्षित साइनअप खोला जा रहा है…',
      formError: 'example.com जैसा मान्य डोमेन या URL दर्ज करें।',
      preview: {
        status: 'मौजूदा स्थिति',
        endpoint: 'मुख्य एंडपॉइंट',
        uptime: 'उपलब्धता अवधि',
        response: 'प्रतिक्रिया रुझान',
        certificate: 'प्रमाणपत्र स्वास्थ्य',
        expires: 'समाप्ति निगरानी',
        locations: 'जाँच स्थान',
        incident: 'घटना समयरेखा',
      },
    },
    audiences: {
      label: 'इनके लिए बनाया गया',
      items: ['स्वतंत्र निर्माता', 'उत्पाद और इंजीनियरिंग टीमें', 'एजेंसियाँ और ऑपरेटर', 'विकासशील उद्यम'],
    },
    platform: {
      eyebrow: 'एक निगरानी सतह',
      title: 'उपलब्धता, भरोसा और संचालन एक साथ देखें।',
      body: 'रोडमैप अलग-अलग औज़ारों में बिखरी जाँचों को एक समान मॉडल, अलर्ट प्रवाह और घटना इतिहास में लाता है।',
      cards: [
        {
          title: 'वेबसाइट और API निगरानी',
          body: 'पेज और एंडपॉइंट को बाहर से सत्यापित करें, जिसमें वह प्रतिक्रिया व्यवहार भी शामिल है जिस पर उपयोगकर्ता निर्भर हैं।',
          features: ['HTTP और HTTPS जाँच', 'हेडर और प्रतिक्रिया कोड', 'कीवर्ड और पेलोड नियम'],
        },
        {
          title: 'SSL और डोमेन जीवनचक्र',
          body: 'प्रमाणपत्र या डोमेन की समस्या के आउटेज बनने से पहले ट्रस्ट चेन और नवीनीकरण अवधि पर नज़र रखें।',
          features: ['प्रमाणपत्र समाप्ति', 'चेन सत्यापन', 'डोमेन नवीनीकरण निगरानी'],
        },
        {
          title: 'DNS अखंडता',
          body: 'अनपेक्षित रिकॉर्ड बदलाव पहचानें और क्षेत्रों के बीच रिज़ॉल्यूशन अंतर की जाँच करें।',
          features: ['रिकॉर्ड स्नैपशॉट', 'बदलाव अलर्ट', 'क्षेत्रीय रिज़ॉल्यूशन'],
        },
        {
          title: 'पोर्ट और नेटवर्क पहुँच',
          body: 'ब्राउज़र से परे इंटरनेट सेवाओं पर नज़र रखें और ऐप की विफलता को नेटवर्क की विफलता से अलग करें।',
          features: ['TCP पोर्ट जाँच', 'Ping पहुँच', 'टाइमआउट नियंत्रण'],
        },
        {
          title: 'हार्टबीट और निर्धारित जॉब',
          body: 'बैकअप, इम्पोर्ट, क्यू वर्कर या किसी अपेक्षित प्रक्रिया के संकेत देना बंद करते ही जानें।',
          features: ['Cron हार्टबीट', 'ग्रेस अवधि', 'छूटी रन के अलर्ट'],
        },
        {
          title: 'सामग्री और महत्वपूर्ण यात्राएँ',
          body: 'ज़रूरी सामग्री की मौजूदगी पक्की करें और बहु-चरणीय उपयोगकर्ता यात्रा जाँच के लिए तैयारी करें।',
          features: ['कीवर्ड मौजूदगी', 'सामग्री बदलाव संकेत', 'रोडमैप में यात्रा जाँच'],
        },
      ],
    },
    security: {
      eyebrow: 'प्रमाणपत्र समझ',
      title: 'प्रमाणपत्र स्वास्थ्य को रोज़मर्रा के संचालन का हिस्सा बनाएँ।',
      body: 'SSLPing केवल समाप्ति तक के दिन गिनने के बजाय यह समझाने के लिए बनाया जा रहा है कि प्रमाणपत्र पथ में क्या गलत है।',
      bullets: ['होस्टनाम, जारीकर्ता, चेन और भरोसे की स्थिति सत्यापित करें', 'बढ़ते रिमाइंडर के साथ समाप्ति और नवीनीकरण अवधि देखें', 'समय के साथ प्रोटोकॉल और साइफ़र अवलोकन दर्ज करें', 'प्रमाणपत्र बदलावों को घटना समयरेखा में दिखाएँ'],
      cta: 'SSL निगरानी देखें',
      chain: 'ट्रस्ट चेन',
      expiry: 'नवीनीकरण अवधि',
      protocol: 'प्रोटोकॉल स्थिति',
      transparency: 'बदलाव इतिहास',
    },
    network: {
      eyebrow: 'वैश्विक जाँच, नियोजित',
      title: 'स्थानीय गड़बड़ी को क्षेत्रीय आउटेज से अलग पहचानें।',
      body: 'नियोजित जाँच नेटवर्क अलर्ट बढ़ाने से पहले कई क्षेत्रों के नतीजे मिलाएगा और जाँच के लिए हर स्थान का प्रमाण साफ़ रखेगा।',
      benefits: ['एक से अधिक दृष्टि-बिंदु से विफलता की पुष्टि', 'क्षेत्रीय DNS, रूटिंग और CDN अंतर उजागर करें', 'अपने उपयोगकर्ताओं से मेल खाते स्थान चुनें', 'हर घटना के साथ मूल स्थान प्रमाण रखें'],
      regions: ['उत्तरी अमेरिका', 'दक्षिणी अमेरिका', 'यूरोप', 'मध्य पूर्व', 'एशिया प्रशांत', 'अफ़्रीका'],
      caption: 'दिखाए गए क्षेत्र केवल रोडमैप के उदाहरण हैं; सटीक स्थान और उपलब्धता अभी तय नहीं हैं।',
    },
    workflow: {
      eyebrow: 'संकेत से समाधान तक',
      title: 'अनगिनत टैब खोले बिना पूरा घटना चक्र।',
      body: 'नियोजित कार्यप्रवाह का हर चरण संदर्भ, स्वामित्व और ग्राहकों के लिए साफ़ कहानी सुरक्षित रखता है।',
      steps: [
        { title: 'पता लगाएँ', body: 'सही बाहरी, नेटवर्क, प्रमाणपत्र या हार्टबीट जाँच चलाएँ।' },
        { title: 'पुष्टि करें', body: 'दोबारा जाँचें और स्थानों की तुलना करके एक बार की गड़बड़ी का शोर घटाएँ।' },
        { title: 'संदर्भ जोड़ें', body: 'समय, DNS, TLS, प्रतिक्रिया और हाल के बदलाव का प्रमाण जोड़ें।' },
        { title: 'सही जगह भेजें', body: 'अलर्ट को ज़िम्मेदार व्यक्ति और उसके पसंदीदा चैनल तक पहुँचाएँ।' },
        { title: 'सूचित करें', body: 'संबंधित स्टेटस पेज पर स्पष्ट घटना अपडेट प्रकाशित करें।' },
        { title: 'सीखें', body: 'बहाली के बाद समयरेखा, प्रभाव और आगे के काम की समीक्षा करें।' },
      ],
    },
    status: {
      eyebrow: 'ग्राहक संवाद',
      title: 'मॉनिटर स्थिति को ऐसा स्टेटस पेज बनाएँ जिस पर लोग भरोसा कर सकें।',
      body: 'नियोजित स्टेटस पेज चुने हुए मॉनिटर, रखरखाव और मानवीय अपडेट को एक सुलभ सार्वजनिक दृश्य में जोड़ेंगे।',
      bullets: ['कस्टम ब्रांडिंग और डोमेन विकल्प', 'घटक-स्तरीय स्थिति और घटना इतिहास', 'रखरखाव सूचनाएँ और सदस्य अपडेट', 'सार्वजनिक, निजी और खोज-सूची नियंत्रण'],
      cta: 'स्टेटस पेज का पूर्वावलोकन करें',
      previewTitle: 'SSLPing सेवा स्थिति',
      previewStatus: 'सभी पूर्वावलोकन सिस्टम चालू हैं',
      previewIncident: 'कोई सक्रिय पूर्वावलोकन घटना नहीं',
    },
    analytics: {
      eyebrow: 'दिखावटी आँकड़े नहीं, उपयोगी प्रमाण',
      title: 'विश्वसनीयता के रुझान और उनके पीछे की घटनाएँ समझें।',
      body: 'विश्लेषण रोडमैप सेवा स्वास्थ्य, प्रतिक्रिया व्यवहार, प्रमाणपत्र जोखिम और घटना इतिहास को जोड़ेगा, साथ ही मूल जाँच भी दिखाई देगी।',
      labels: { uptime: 'उपलब्धता', latency: 'प्रतिक्रिया समय', sslRisk: 'SSL जोखिम', incidents: 'घटनाएँ' },
      bullets: ['लचीली रिपोर्ट अवधि और समय-क्षेत्र के अनुसार समयरेखा', 'क्षेत्र और मॉनिटर तुलना', 'समीक्षा और ऑडिट के लिए निर्यात योग्य प्रमाण', 'डिप्लॉयमेंट और रखरखाव टिप्पणियाँ'],
    },
    integrations: {
      eyebrow: 'आपके कार्यप्रवाह के अनुकूल',
      title: 'संकेत उन औज़ारों तक पहुँचाएँ जिन्हें आपकी टीम पहले से देखती है।',
      body: 'ये कनेक्टर रोडमैप के उम्मीदवार हैं, अभी उपलब्ध एकीकरण का दावा नहीं। प्राथमिकताएँ शुरुआती उपयोगकर्ताओं की प्रतिक्रिया से तय होंगी।',
      groups: [
        { title: 'चैट और सहयोग', items: ['Slack', 'Microsoft Teams', 'Discord', 'Google Chat'] },
        { title: 'ऑन-कॉल और घटनाएँ', items: ['PagerDuty', 'Opsgenie', 'ईमेल', 'SMS और वॉइस'] },
        { title: 'स्वचालन', items: ['वेबहुक', 'Zapier', 'n8n', 'कस्टम कार्यप्रवाह'] },
        { title: 'डेवलपर औज़ार', items: ['REST API', 'कमांड लाइन', 'Terraform', 'MCP'] },
      ],
      badge: 'एकीकरण रोडमैप पूर्वावलोकन',
    },
    mobile: {
      eyebrow: 'मोबाइल प्रतिक्रिया, नियोजित',
      title: 'पूरा डैशबोर्ड नहीं, घटना कक्ष अपने साथ रखें।',
      body: 'समर्पित iOS और Android ऐप चलते-फिरते केंद्रित अलर्ट, स्वीकृति, मॉनिटर संदर्भ और स्टेटस अपडेट के लिए नियोजित हैं।',
      bullets: ['कार्रवाई योग्य पुश सूचनाएँ', 'घटनाएँ स्वीकारें और सौंपें', 'रखरखाव के समय जाँच रोकें', 'स्टेटस अपडेट लिखें और प्रकाशित करें'],
      ios: 'iOS ऐप रोडमैप',
      android: 'Android ऐप रोडमैप',
      coming: 'नियोजित — अभी ऐप स्टोर में उपलब्ध नहीं',
    },
    useCases: {
      eyebrow: 'अलग-अलग संचालन परिस्थितियों के लिए',
      title: 'सरल शुरुआत करें, सिस्टम बढ़ने पर संदर्भ साथ रखें।',
      body: 'एक ही निगरानी मॉडल निजी प्रोजेक्ट, ग्राहक पोर्टफोलियो या वितरित प्लेटफ़ॉर्म टीम को सहारा दे सकता है।',
      cards: [
        { title: 'SaaS और API', body: 'सार्वजनिक यात्राएँ, निर्भरताएँ, प्रमाणपत्र और सेवा घटक एक घटना दृश्य से देखें।' },
        { title: 'एजेंसियाँ और पोर्टफोलियो', body: 'दर्शकों को मिलाए बिना ग्राहक मॉनिटर, स्वामित्व, अलर्ट और ब्रांडेड स्थिति संवाद व्यवस्थित करें।' },
        { title: 'कॉमर्स और अभियान', body: 'व्यवसाय के अहम समय में चेकआउट, लैंडिंग पेज, DNS और तृतीय-पक्ष निर्भरता सुरक्षित रखें।' },
        { title: 'इन्फ्रास्ट्रक्चर और संचालन', body: 'नेटवर्क पहुँच, पोर्ट, जॉब, रखरखाव और एस्केलेशन प्रमाण एक जगह जोड़ें।' },
      ],
    },
    pricing: {
      eyebrow: 'मूल्य अवधारणा',
      title: 'पहले मॉनिटर से जटिल संचालन तक का रास्ता।',
      body: 'नीचे के स्तर उत्पाद दिशा दिखाते हैं। अंतिम नाम, सीमाएँ, उपलब्धता और मूल्य लॉन्च से पहले सत्यापित होंगे।',
      monthly: 'रोडमैप मूल्य पूर्वावलोकन',
      plans: [
        {
          name: 'निःशुल्क',
          price: 'निःशुल्क पूर्वावलोकन',
          description: 'कार्यप्रवाह सीखने और छोटे निजी प्रोजेक्ट पर नज़र रखने के लिए।',
          features: ['मुख्य उपलब्धता जाँच', 'SSL समाप्ति निगरानी', 'ईमेल अलर्ट', 'बुनियादी स्टेटस पेज'],
          cta: 'मुफ़्त खाता बनाएँ',
        },
        {
          name: 'बिल्डर',
          price: 'बाद में घोषित होगा',
          description: 'उन निर्माताओं और बढ़ते उत्पादों के लिए जिन्हें तेज़ संदर्भ और स्वचालन चाहिए।',
          features: ['अधिक मॉनिटर प्रकार', 'क्षेत्रीय जाँच', 'कार्यप्रवाह एकीकरण', 'लंबा इतिहास'],
          cta: 'रुचि दर्ज करें',
          featured: true,
        },
        {
          name: 'टीम',
          price: 'बाद में घोषित होगा',
          description: 'साझा स्वामित्व, घटना समन्वय और अनेक सेवाओं के लिए।',
          features: ['टीम भूमिकाएँ', 'एस्केलेशन नीतियाँ', 'कई स्टेटस पेज', 'ऑडिट के अनुकूल निर्यात'],
          cta: 'टीम की रुचि दर्ज करें',
        },
        {
          name: 'एंटरप्राइज़',
          price: 'कस्टम प्रस्ताव',
          description: 'उन्नत शासन, डिप्लॉयमेंट, सहायता और बड़े पैमाने की ज़रूरतों के लिए।',
          features: ['पहुँच नियंत्रण', 'SSO रोडमैप', 'कस्टम डेटा प्रतिधारण', 'मार्गदर्शित शुरुआत'],
          cta: 'ज़रूरतों पर चर्चा करें',
        },
      ],
      note: 'केवल रोडमैप पूर्वावलोकन। यहाँ दिखाया कोई प्लान, मूल्य, कोटा या रिलीज़ तारीख व्यावसायिक प्रतिबद्धता नहीं है।',
    },
    faq: {
      eyebrow: 'अक्सर पूछे जाने वाले प्रश्न',
      title: 'SSLPing रोडमैप के बारे में स्पष्ट उत्तर।',
      items: [
        { question: 'SSLPing किन चीज़ों की निगरानी करेगा?', answer: 'रोडमैप में वेबसाइट, API, SSL प्रमाणपत्र, डोमेन, DNS रिकॉर्ड, नेटवर्क पहुँच, TCP पोर्ट, हार्टबीट, निर्धारित जॉब, सामग्री नियम और बाद में महत्वपूर्ण यात्राएँ शामिल हैं।' },
        { question: 'जाँच कैसे काम करेगी?', answer: 'मॉनिटर एक या अधिक चुने हुए स्थानों से चलेगा, परिणाम और समय का प्रमाण रखेगा, उचित होने पर विफलता की पुष्टि करेगा और अपनी नीति के अनुसार घटना खोलेगा या अपडेट करेगा।' },
        { question: 'SSLPing गलत अलर्ट कैसे घटाएगा?', answer: 'डिज़ाइन में पुष्टि जाँच, स्थान तुलना, बदले जा सकने वाले टाइमआउट, रखरखाव अवधि और रिकवरी नियम हैं। सटीक व्यवहार लॉन्च से पहले परखा जाएगा।' },
        { question: 'क्या यह प्रमाणपत्र समाप्ति से आगे भी जाँच करेगा?', answer: 'हाँ। प्रमाणपत्र रोडमैप में होस्टनाम, जारीकर्ता, ट्रस्ट चेन, प्रोटोकॉल स्थिति, बदलाव इतिहास और नवीनीकरण अवधि का संदर्भ शामिल है।' },
        { question: 'क्या मैं किसी खास क्षेत्र से निगरानी कर सकता हूँ?', answer: 'स्थान चयन और बहु-क्षेत्रीय पुष्टि नियोजित हैं। इस पेज का नक्शा केवल उदाहरण है; सटीक शहर और प्रदाता अभी तय नहीं हैं।' },
        { question: 'क्या स्टेटस पेज और एकीकरण शामिल होंगे?', answer: 'दोनों रोडमैप के मुख्य हिस्से हैं। सार्वजनिक व निजी स्थिति संवाद, वेबहुक, API और तृतीय-पक्ष कनेक्टर चरणों में आएँगे और शुरुआती उपयोगकर्ताओं के साथ सत्यापित होंगे।' },
        { question: 'क्या निगरानी सेवा अभी उपलब्ध है?', answer: 'हाँ। निगरानी बैकएंड, डैशबोर्ड और खाता साइनअप अब लाइव हैं। डैशबोर्ड में कार्यक्षेत्र बनाकर पहला मॉनिटर जोड़ें; मोबाइल ऐप और कुछ उन्नत रोडमैप क्षमताएँ चरणों में आएँगी।' },
      ],
    },
    final: {
      eyebrow: 'अभी निगरानी शुरू करें',
      title: 'खाता बनाएँ और अपनी पहली लाइव जाँच शुरू करें।',
      body: 'डैशबोर्ड खाता और कार्यक्षेत्र बनाएँ, फिर अपना पहला लाइव मॉनिटर जोड़ें। इसके बाद बताएँ कि कौन-सी जाँच, क्षेत्र और कार्यप्रवाह आगे आने चाहिए।',
      placeholder: 'you@company.com',
      primary: 'मुफ़्त खाता बनाएँ',
      secondary: 'रोडमैप पढ़ें',
    },
    footer: {
      tagline: 'एक विस्तृत और शांत निगरानी प्लेटफ़ॉर्म — अब लाइव और लगातार विस्तृत हो रहा है।',
      columns: [
        { title: 'प्लेटफ़ॉर्म', links: ['वेबसाइट और API', 'SSL और डोमेन', 'DNS और नेटवर्क', 'हार्टबीट'] },
        { title: 'संचालन', links: ['घटनाएँ', 'स्टेटस पेज', 'विश्लेषण', 'एकीकरण'] },
        { title: 'संसाधन', links: ['रोडमैप', 'दस्तावेज़ पूर्वावलोकन', 'निगरानी मार्गदर्शिकाएँ', 'सेवा स्थिति'] },
        { title: 'कंपनी', links: ['SSLPing के बारे में', 'संपर्क', 'सुरक्षा', 'सुगम्यता'] },
      ],
      legal: ['गोपनीयता', 'शर्तें', 'डेटा संसाधन', 'कुकी नीति'],
      rights: '© 2026 SSLPing। सर्वाधिकार सुरक्षित।',
      cookieSettings: 'कुकी सेटिंग',
    },
    cookies: {
      bannerTitle: 'आपकी गोपनीयता, आपकी पसंद',
      bannerBody: 'इस पूर्वावलोकन को चलाने के लिए हम आवश्यक कुकी का उपयोग करते हैं। आपकी अनुमति से वैकल्पिक कुकी उपयोग समझने और पसंद याद रखने में मदद करती हैं।',
      privacy: 'गोपनीयता सूचना पढ़ें',
      reject: 'वैकल्पिक अस्वीकार करें',
      manage: 'विकल्प प्रबंधित करें',
      accept: 'सभी स्वीकार करें',
      title: 'कुकी प्राथमिकताएँ',
      body: 'चुनें कि SSLPing किन वैकल्पिक श्रेणियों का उपयोग कर सकता है। यह चुनाव आप फ़ुटर से कभी भी बदल सकते हैं।',
      necessaryTitle: 'अत्यंत आवश्यक',
      necessaryBody: 'सुरक्षा, सहमति संग्रह, भाषा और साइट के मुख्य कार्यों के लिए आवश्यक।',
      alwaysOn: 'हमेशा चालू',
      analyticsTitle: 'विश्लेषण',
      analyticsBody: 'कुल पेज उपयोग समझने और उत्पाद प्रस्तुति सुधारने में मदद करता है।',
      functionalTitle: 'कार्यात्मक',
      functionalBody: 'वैकल्पिक इंटरफ़ेस विकल्प और बेहतर प्रस्तुति सुविधाएँ याद रखता है।',
      marketingTitle: 'मार्केटिंग',
      marketingBody: 'अभियान मापन और प्रासंगिक लॉन्च संवाद में सहायता करता है।',
      gpc: 'Global Privacy Control संकेत मिलने पर उनका सम्मान किया जाता है।',
      rejectAll: 'वैकल्पिक कुकी अस्वीकार करें',
      save: 'प्राथमिकताएँ सहेजें',
      acceptAll: 'सभी कुकी स्वीकार करें',
      close: 'कुकी प्राथमिकताएँ बंद करें',
    },
    support: {
      button: 'सहायता खोलें',
      title: 'हम कैसे मदद कर सकते हैं?',
      body: 'डैशबोर्ड और मुख्य निगरानी अब लाइव हैं। साइनअप में मदद पाएँ, निगरानी की ज़रूरत साझा करें या रोडमैप दस्तावेज़ देखें।',
      email: 'टीम से संपर्क करें',
      docs: 'दस्तावेज़ पूर्वावलोकन खोलें',
      close: 'सहायता बंद करें',
    },
    common: { roadmap: 'रोडमैप पूर्वावलोकन', learnMore: 'और जानें', operational: 'चालू', planned: 'नियोजित' },
  },
  es: {
    metaTitle: 'SSLPing — monitorización de disponibilidad, certificados e incidentes',
    metaDescription: 'Descubre la hoja de ruta de SSLPing para monitorizar sitios web, API, SSL, DNS, redes, tareas, incidentes y páginas de estado en un solo lugar.',
    nav: {
      platform: 'Plataforma',
      security: 'Seguridad SSL',
      workflow: 'Flujo de incidentes',
      pricing: 'Precios',
      resources: 'Recursos',
      login: 'Iniciar sesión',
      start: 'Crear cuenta gratis',
      menu: 'Abrir menú',
      close: 'Cerrar menú',
      language: 'Elegir idioma',
    },
    hero: {
      eyebrow: 'Monitorización en vivo, con una hoja de ruta más amplia en marcha',
      titleLead: 'Monitoriza mucho más que la disponibilidad.',
      titleAccent: 'Anticípate a los problemas.',
      titleEnd: 'Resuélvelos con todo el contexto.',
      body: 'SSLPing ya ofrece un panel y un backend de monitorización en vivo para sitios web, API, certificados, dominios, DNS, puertos, señales de vida, incidentes y comunicación de estado, con más funciones en camino.',
      benefits: ['Disponibilidad de sitios web y API', 'Ciclo de vida de SSL, dominios y DNS', 'Puertos, redes y señales de vida', 'Incidentes, análisis y páginas de estado'],
      placeholder: 'tu-dominio.com',
      primary: 'Empezar a monitorizar',
      secondary: 'Explorar la plataforma',
      note: 'Registro activo en el panel: crea tu espacio de trabajo y tu primer monitor.',
      formSuccess: 'Abriendo el registro seguro en el panel de SSLPing…',
      formError: 'Introduce un dominio o una URL válidos, como ejemplo.com.',
      preview: {
        status: 'Estado actual',
        endpoint: 'Endpoint principal',
        uptime: 'Periodo de disponibilidad',
        response: 'Tendencia de respuesta',
        certificate: 'Salud del certificado',
        expires: 'Control de caducidad',
        locations: 'Ubicaciones de comprobación',
        incident: 'Cronología del incidente',
      },
    },
    audiences: {
      label: 'Diseñado para',
      items: ['Creadores independientes', 'Equipos de producto e ingeniería', 'Agencias y operadores', 'Empresas en crecimiento'],
    },
    platform: {
      eyebrow: 'Una sola vista de monitorización',
      title: 'Consulta disponibilidad, confianza y operaciones en conjunto.',
      body: 'La hoja de ruta reúne comprobaciones normalmente dispersas entre varias herramientas bajo un modelo, un flujo de alertas y un historial de incidentes coherentes.',
      cards: [
        {
          title: 'Monitorización de sitios web y API',
          body: 'Verifica páginas y endpoints desde el exterior, incluido el comportamiento de respuesta del que dependen tus usuarios.',
          features: ['Comprobaciones HTTP y HTTPS', 'Cabeceras y códigos de respuesta', 'Reglas de palabras clave y contenido'],
        },
        {
          title: 'Ciclo de vida de SSL y dominios',
          body: 'Controla la cadena de confianza y las ventanas de renovación antes de que un certificado o dominio provoque una interrupción.',
          features: ['Caducidad del certificado', 'Validación de la cadena', 'Control de renovación del dominio'],
        },
        {
          title: 'Integridad de DNS',
          body: 'Detecta cambios de registros inesperados e investiga diferencias de resolución entre regiones.',
          features: ['Instantáneas de registros', 'Alertas de cambios', 'Resolución regional'],
        },
        {
          title: 'Puertos y alcance de red',
          body: 'Vigila servicios expuestos a Internet más allá del navegador y distingue fallos de aplicación de fallos de red.',
          features: ['Comprobaciones de puertos TCP', 'Alcance mediante ping', 'Controles de tiempo de espera'],
        },
        {
          title: 'Señales de vida y tareas programadas',
          body: 'Entérate cuando una copia de seguridad, importación, cola u otro proceso esperado deja de enviar señales.',
          features: ['Señales de vida de cron', 'Periodos de gracia', 'Alertas de ejecución omitida'],
        },
        {
          title: 'Contenido y recorridos críticos',
          body: 'Confirma que el contenido importante siga presente y prepárate para comprobar recorridos de varios pasos.',
          features: ['Presencia de palabras clave', 'Señales de cambio de contenido', 'Comprobaciones de recorridos en la hoja de ruta'],
        },
      ],
    },
    security: {
      eyebrow: 'Inteligencia de certificados',
      title: 'Integra la salud de los certificados en las operaciones diarias.',
      body: 'SSLPing está pensado para explicar qué falla en la ruta del certificado, no solo para contar los días hasta su caducidad.',
      bullets: ['Validar el nombre de host, el emisor, la cadena y el estado de confianza', 'Vigilar caducidad y renovación con recordatorios progresivos', 'Registrar observaciones de protocolos y cifrados a lo largo del tiempo', 'Mostrar los cambios de certificado en la cronología del incidente'],
      cta: 'Explorar la monitorización SSL',
      chain: 'Cadena de confianza',
      expiry: 'Ventana de renovación',
      protocol: 'Estado del protocolo',
      transparency: 'Historial de cambios',
    },
    network: {
      eyebrow: 'Comprobaciones globales, previstas',
      title: 'Distingue un fallo local de una interrupción regional.',
      body: 'La red de comprobación prevista comparará resultados de varias regiones antes de escalar una alerta y mantendrá visible la evidencia de cada ubicación para investigarla.',
      benefits: ['Confirmar fallos desde más de un punto de observación', 'Revelar diferencias regionales de DNS, rutas y CDN', 'Elegir ubicaciones representativas de tu audiencia', 'Conservar la evidencia original de cada ubicación en cada incidente'],
      regions: ['Norteamérica', 'Sudamérica', 'Europa', 'Oriente Medio', 'Asia-Pacífico', 'África'],
      caption: 'Regiones ilustrativas de la hoja de ruta; las ubicaciones y su disponibilidad aún no están confirmadas.',
    },
    workflow: {
      eyebrow: 'De la señal a la resolución',
      title: 'Un ciclo de incidentes completo, sin una tormenta de pestañas.',
      body: 'Cada paso previsto conserva el contexto, la responsabilidad y un relato claro para los clientes.',
      steps: [
        { title: 'Detectar', body: 'Ejecutar la comprobación externa, de red, certificado o señal de vida adecuada.' },
        { title: 'Confirmar', body: 'Repetir la comprobación y comparar ubicaciones para reducir fallos aislados y ruidosos.' },
        { title: 'Enriquecer', body: 'Adjuntar tiempos, DNS, TLS, respuesta y evidencia de cambios recientes.' },
        { title: 'Asignar', body: 'Enviar la alerta a la persona responsable por su canal preferido.' },
        { title: 'Comunicar', body: 'Publicar una actualización clara en la página de estado correspondiente.' },
        { title: 'Aprender', body: 'Revisar la cronología, el impacto y las acciones posteriores a la recuperación.' },
      ],
    },
    status: {
      eyebrow: 'Comunicación con clientes',
      title: 'Convierte el estado de los monitores en una página que inspire confianza.',
      body: 'Las páginas de estado previstas conectarán monitores seleccionados, mantenimientos y actualizaciones escritas por personas en una vista pública accesible.',
      bullets: ['Opciones de marca y dominio personalizados', 'Estado por componente e historial de incidentes', 'Avisos de mantenimiento y novedades para suscriptores', 'Controles de acceso público, privado e indexación'],
      cta: 'Previsualizar páginas de estado',
      previewTitle: 'Estado del servicio SSLPing',
      previewStatus: 'Todos los sistemas de demostración funcionan',
      previewIncident: 'No hay incidentes de demostración activos',
    },
    analytics: {
      eyebrow: 'Evidencia, no métricas de vanidad',
      title: 'Comprende las tendencias de fiabilidad y los sucesos que las explican.',
      body: 'La hoja de ruta de análisis combina salud del servicio, respuesta, riesgo SSL e historial de incidentes sin ocultar las comprobaciones originales.',
      labels: { uptime: 'Disponibilidad', latency: 'Tiempo de respuesta', sslRisk: 'Riesgo SSL', incidents: 'Incidentes' },
      bullets: ['Periodos de informe flexibles y cronologías adaptadas a la zona horaria', 'Comparaciones entre regiones y monitores', 'Evidencia exportable para revisiones y auditorías', 'Anotaciones de despliegues y mantenimiento'],
    },
    integrations: {
      eyebrow: 'Encaja en tu forma de trabajar',
      title: 'Lleva las señales a las herramientas que tu equipo ya consulta.',
      body: 'Estos conectores son candidatos de la hoja de ruta, no integraciones disponibles actualmente. La opinión de los primeros usuarios marcará las prioridades.',
      groups: [
        { title: 'Chat y colaboración', items: ['Slack', 'Microsoft Teams', 'Discord', 'Google Chat'] },
        { title: 'Guardias e incidentes', items: ['PagerDuty', 'Opsgenie', 'Correo electrónico', 'SMS y voz'] },
        { title: 'Automatización', items: ['Webhooks', 'Zapier', 'n8n', 'Flujos personalizados'] },
        { title: 'Herramientas de desarrollo', items: ['API REST', 'Línea de comandos', 'Terraform', 'MCP'] },
      ],
      badge: 'Vista previa de la hoja de ruta de integraciones',
    },
    mobile: {
      eyebrow: 'Respuesta móvil, prevista',
      title: 'Lleva contigo la sala de incidentes, no todo el panel.',
      body: 'Se prevén aplicaciones específicas para iOS y Android centradas en alertas, confirmación, contexto del monitor y actualizaciones de estado en movilidad.',
      bullets: ['Notificaciones push con acciones', 'Confirmar y asignar incidentes', 'Pausar comprobaciones durante el mantenimiento', 'Redactar y publicar actualizaciones de estado'],
      ios: 'Hoja de ruta de la app para iOS',
      android: 'Hoja de ruta de la app para Android',
      coming: 'Prevista; todavía no disponible en las tiendas de aplicaciones',
    },
    useCases: {
      eyebrow: 'Para distintas realidades operativas',
      title: 'Empieza de forma sencilla y conserva el contexto al crecer.',
      body: 'Un mismo modelo de monitorización puede servir para un proyecto personal, una cartera de clientes o un equipo de plataforma distribuido.',
      cards: [
        { title: 'SaaS y API', body: 'Vigila recorridos públicos, dependencias, certificados y componentes desde una sola vista del incidente.' },
        { title: 'Agencias y carteras', body: 'Organiza monitores, responsables, alertas y páginas con marca por cliente sin mezclar audiencias.' },
        { title: 'Comercio y campañas', body: 'Protege el pago, las páginas de destino, el DNS y las dependencias externas en momentos críticos para el negocio.' },
        { title: 'Infraestructura y operaciones', body: 'Combina alcance de red, puertos, tareas, mantenimiento y evidencia de escalado.' },
      ],
    },
    pricing: {
      eyebrow: 'Concepto de precios',
      title: 'Un camino desde el primer monitor hasta operaciones complejas.',
      body: 'Los niveles siguientes expresan la dirección del producto. Los nombres, límites, disponibilidad y precios definitivos se validarán antes del lanzamiento.',
      monthly: 'Vista previa de precios de la hoja de ruta',
      plans: [
        {
          name: 'Gratis',
          price: 'Vista previa gratuita',
          description: 'Para aprender el flujo y vigilar un pequeño proyecto personal.',
          features: ['Comprobaciones básicas de disponibilidad', 'Control de caducidad SSL', 'Alertas por correo', 'Página de estado básica'],
          cta: 'Crear cuenta gratis',
        },
        {
          name: 'Creador',
          price: 'Por anunciar',
          description: 'Para creadores y productos en crecimiento que necesitan más contexto y automatización.',
          features: ['Más tipos de monitor', 'Comprobaciones regionales', 'Integraciones de flujo', 'Historial ampliado'],
          cta: 'Registrar mi interés',
          featured: true,
        },
        {
          name: 'Equipo',
          price: 'Por anunciar',
          description: 'Para compartir responsabilidades, coordinar incidentes y gestionar varios servicios.',
          features: ['Roles de equipo', 'Políticas de escalado', 'Varias páginas de estado', 'Exportaciones para auditoría'],
          cta: 'Registrar interés del equipo',
        },
        {
          name: 'Empresa',
          price: 'Propuesta personalizada',
          description: 'Para necesidades avanzadas de gobierno, despliegue, soporte y escala.',
          features: ['Controles de acceso', 'SSO en la hoja de ruta', 'Retención personalizable', 'Incorporación guiada'],
          cta: 'Comentar necesidades',
        },
      ],
      note: 'Solo es una vista previa de la hoja de ruta. Ningún plan, precio, cupo o fecha mostrados constituye un compromiso comercial.',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Respuestas claras sobre la hoja de ruta de SSLPing.',
      items: [
        { question: '¿Qué monitorizará SSLPing?', answer: 'La hoja de ruta abarca sitios web, API, certificados SSL, dominios, registros DNS, alcance de red, puertos TCP, señales de vida, tareas programadas, reglas de contenido y, más adelante, recorridos críticos.' },
        { question: '¿Cómo se espera que funcionen las comprobaciones?', answer: 'Un monitor se ejecutará desde una o varias ubicaciones, conservará resultados y tiempos, confirmará los fallos cuando proceda y abrirá o actualizará un incidente según su política.' },
        { question: '¿Cómo reducirá SSLPing las falsas alertas?', answer: 'El diseño usa comprobaciones de confirmación, comparación de ubicaciones, tiempos de espera configurables, ventanas de mantenimiento y reglas de recuperación. El comportamiento exacto se probará antes del lanzamiento.' },
        { question: '¿Inspeccionará algo más que la caducidad del certificado?', answer: 'Sí. La hoja de ruta incluye nombre de host, emisor, cadena de confianza, estado del protocolo, historial de cambios y contexto de renovación.' },
        { question: '¿Puedo monitorizar desde regiones concretas?', answer: 'La selección de ubicaciones y la confirmación multirregional están previstas. El mapa es ilustrativo; aún no se han confirmado ciudades ni proveedores.' },
        { question: '¿Se incluirán páginas de estado e integraciones?', answer: 'Ambas son áreas centrales de la hoja de ruta. La comunicación pública y privada, los webhooks, las API y los conectores externos se incorporarán por fases y se validarán con los primeros usuarios.' },
        { question: '¿Está disponible ya el servicio de monitorización?', answer: 'Sí. El backend de monitorización, el panel y el registro de cuentas ya están activos. Crea un espacio de trabajo y añade tu primer monitor; las aplicaciones móviles y algunas funciones avanzadas llegarán por fases.' },
      ],
    },
    final: {
      eyebrow: 'Empieza a monitorizar ahora',
      title: 'Crea una cuenta y ejecuta tu primera comprobación en vivo.',
      body: 'Crea tu cuenta y espacio de trabajo en el panel, y añade tu primer monitor en vivo. Después dinos qué comprobaciones, regiones y flujos deberían llegar a continuación.',
      placeholder: 'tu@empresa.com',
      primary: 'Crear cuenta gratis',
      secondary: 'Leer la hoja de ruta',
    },
    footer: {
      tagline: 'Una plataforma de monitorización más amplia y serena, ya activa y en expansión.',
      columns: [
        { title: 'Plataforma', links: ['Sitios web y API', 'SSL y dominios', 'DNS y red', 'Señales de vida'] },
        { title: 'Operaciones', links: ['Incidentes', 'Páginas de estado', 'Análisis', 'Integraciones'] },
        { title: 'Recursos', links: ['Hoja de ruta', 'Vista previa de documentación', 'Guías de monitorización', 'Estado del servicio'] },
        { title: 'Empresa', links: ['Acerca de SSLPing', 'Contacto', 'Seguridad', 'Accesibilidad'] },
      ],
      legal: ['Privacidad', 'Términos', 'Tratamiento de datos', 'Política de cookies'],
      rights: '© 2026 SSLPing. Todos los derechos reservados.',
      cookieSettings: 'Configuración de cookies',
    },
    cookies: {
      bannerTitle: 'Tu privacidad, tu elección',
      bannerBody: 'Usamos cookies necesarias para que esta vista previa funcione. Con tu permiso, las opcionales nos ayudan a entender el uso y recordar preferencias.',
      privacy: 'Leer el aviso de privacidad',
      reject: 'Rechazar opcionales',
      manage: 'Gestionar opciones',
      accept: 'Aceptar todas',
      title: 'Preferencias de cookies',
      body: 'Elige qué categorías opcionales puede usar SSLPing. Puedes cambiar la selección en cualquier momento desde el pie de página.',
      necessaryTitle: 'Estrictamente necesarias',
      necessaryBody: 'Imprescindibles para la seguridad, guardar el consentimiento, el idioma y las funciones básicas del sitio.',
      alwaysOn: 'Siempre activas',
      analyticsTitle: 'Analíticas',
      analyticsBody: 'Nos ayudan a entender el uso agregado de las páginas y mejorar la presentación del producto.',
      functionalTitle: 'Funcionales',
      functionalBody: 'Recuerdan opciones de interfaz y funciones de presentación mejoradas.',
      marketingTitle: 'Marketing',
      marketingBody: 'Permiten medir campañas y ofrecer comunicaciones relevantes sobre el lanzamiento.',
      gpc: 'Respetamos las señales de Global Privacy Control cuando se detectan.',
      rejectAll: 'Rechazar cookies opcionales',
      save: 'Guardar preferencias',
      acceptAll: 'Aceptar todas las cookies',
      close: 'Cerrar preferencias de cookies',
    },
    support: {
      button: 'Abrir ayuda',
      title: '¿Cómo podemos ayudarte?',
      body: 'El panel y la monitorización principal ya están activos. Pide ayuda con el registro, comparte una necesidad o consulta la documentación de la hoja de ruta.',
      email: 'Contactar con el equipo',
      docs: 'Abrir documentación preliminar',
      close: 'Cerrar ayuda',
    },
    common: { roadmap: 'Vista previa de la hoja de ruta', learnMore: 'Más información', operational: 'Operativo', planned: 'Previsto' },
  },
  fr: {
    metaTitle: 'SSLPing — surveillance de disponibilité, certificats et incidents',
    metaDescription: 'Découvrez la feuille de route SSLPing pour surveiller sites web, API, SSL, DNS, réseaux, tâches, incidents et pages de statut au même endroit.',
    nav: {
      platform: 'Plateforme',
      security: 'Sécurité SSL',
      workflow: 'Gestion des incidents',
      pricing: 'Tarifs',
      resources: 'Ressources',
      login: 'Se connecter',
      start: 'Créer un compte gratuit',
      menu: 'Ouvrir le menu',
      close: 'Fermer le menu',
      language: 'Choisir la langue',
    },
    hero: {
      eyebrow: 'Surveillance en direct, avec une feuille de route élargie en cours',
      titleLead: 'Surveillez bien plus que la disponibilité.',
      titleAccent: 'Détectez les problèmes tôt.',
      titleEnd: 'Résolvez-les avec tout le contexte.',
      body: 'SSLPing propose désormais un tableau de bord et un moteur de surveillance en direct pour les sites web, API, certificats, domaines, DNS, ports, signaux de vie, incidents et communications de statut, avec de nouvelles fonctions déployées progressivement.',
      benefits: ['Disponibilité des sites web et API', 'Cycle de vie SSL, domaines et DNS', 'Ports, réseaux et signaux de vie', 'Incidents, analyses et pages de statut'],
      placeholder: 'votre-domaine.fr',
      primary: 'Commencer la surveillance',
      secondary: 'Explorer la plateforme',
      note: 'Inscription active dans le tableau de bord — créez votre espace de travail et votre premier moniteur.',
      formSuccess: 'Ouverture de l’inscription sécurisée dans le tableau de bord SSLPing…',
      formError: 'Saisissez un domaine ou une URL valide, comme exemple.fr.',
      preview: {
        status: 'État actuel',
        endpoint: 'Point de terminaison principal',
        uptime: 'Période de disponibilité',
        response: 'Tendance des réponses',
        certificate: 'Santé du certificat',
        expires: 'Suivi de l’expiration',
        locations: 'Sites de contrôle',
        incident: 'Chronologie de l’incident',
      },
    },
    audiences: {
      label: 'Conçu pour',
      items: ['Créateurs indépendants', 'Équipes produit et ingénierie', 'Agences et exploitants', 'Entreprises en croissance'],
    },
    platform: {
      eyebrow: 'Une seule vue de surveillance',
      title: 'Regroupez disponibilité, confiance et exploitation.',
      body: 'La feuille de route réunit des contrôles habituellement dispersés entre plusieurs outils dans un modèle, un flux d’alertes et un historique d’incidents cohérents.',
      cards: [
        {
          title: 'Surveillance de sites web et API',
          body: 'Vérifiez les pages et points de terminaison depuis l’extérieur, y compris le comportement de réponse dont dépendent vos utilisateurs.',
          features: ['Contrôles HTTP et HTTPS', 'En-têtes et codes de réponse', 'Règles de mots-clés et de contenu'],
        },
        {
          title: 'Cycle de vie SSL et domaines',
          body: 'Suivez la chaîne de confiance et les fenêtres de renouvellement avant qu’un certificat ou un domaine ne provoque une interruption.',
          features: ['Expiration des certificats', 'Validation de la chaîne', 'Suivi du renouvellement des domaines'],
        },
        {
          title: 'Intégrité DNS',
          body: 'Détectez les modifications inattendues des enregistrements et analysez les différences de résolution entre régions.',
          features: ['Instantanés des enregistrements', 'Alertes de modification', 'Résolution régionale'],
        },
        {
          title: 'Ports et accessibilité réseau',
          body: 'Surveillez les services exposés à Internet au-delà du navigateur et distinguez les pannes applicatives des pannes réseau.',
          features: ['Contrôles de ports TCP', 'Accessibilité par ping', 'Réglages des délais d’attente'],
        },
        {
          title: 'Signaux de vie et tâches planifiées',
          body: 'Soyez averti lorsqu’une sauvegarde, un import, un worker de file ou un autre processus attendu cesse de se signaler.',
          features: ['Signaux de vie cron', 'Délais de grâce', 'Alertes d’exécution manquée'],
        },
        {
          title: 'Contenu et parcours critiques',
          body: 'Confirmez la présence du contenu essentiel et préparez des contrôles de parcours en plusieurs étapes.',
          features: ['Présence de mots-clés', 'Signaux de changement de contenu', 'Contrôles de parcours prévus'],
        },
      ],
    },
    security: {
      eyebrow: 'Intelligence des certificats',
      title: 'Intégrez la santé des certificats aux opérations quotidiennes.',
      body: 'SSLPing doit expliquer le problème exact sur le chemin du certificat, pas seulement compter les jours avant expiration.',
      bullets: ['Valider le nom d’hôte, l’émetteur, la chaîne et l’état de confiance', 'Surveiller expiration et renouvellement avec des rappels progressifs', 'Conserver les observations de protocoles et de chiffrements dans le temps', 'Faire apparaître les changements de certificat dans la chronologie des incidents'],
      cta: 'Explorer la surveillance SSL',
      chain: 'Chaîne de confiance',
      expiry: 'Fenêtre de renouvellement',
      protocol: 'État du protocole',
      transparency: 'Historique des changements',
    },
    network: {
      eyebrow: 'Contrôles mondiaux, prévus',
      title: 'Distinguez un problème local d’une panne régionale.',
      body: 'Le réseau de contrôle prévu comparera les résultats de plusieurs régions avant toute escalade, tout en gardant les preuves de chaque emplacement disponibles pour analyse.',
      benefits: ['Confirmer les pannes depuis plusieurs points d’observation', 'Révéler les différences régionales de DNS, routage et CDN', 'Choisir des emplacements proches de votre audience', 'Conserver les preuves brutes de chaque emplacement avec l’incident'],
      regions: ['Amérique du Nord', 'Amérique du Sud', 'Europe', 'Moyen-Orient', 'Asie-Pacifique', 'Afrique'],
      caption: 'Régions illustratives de la feuille de route ; les emplacements exacts et leur disponibilité ne sont pas encore confirmés.',
    },
    workflow: {
      eyebrow: 'Du signal à la résolution',
      title: 'Un cycle d’incident complet, sans avalanche d’onglets.',
      body: 'Chaque étape prévue conserve le contexte, la responsabilité et une explication claire pour les clients.',
      steps: [
        { title: 'Détecter', body: 'Exécuter le contrôle externe, réseau, certificat ou signal de vie adapté.' },
        { title: 'Confirmer', body: 'Relancer le contrôle et comparer les emplacements pour limiter le bruit des échecs isolés.' },
        { title: 'Enrichir', body: 'Joindre les délais, DNS, TLS, réponses et preuves de changements récents.' },
        { title: 'Acheminer', body: 'Envoyer l’alerte au bon responsable sur son canal préféré.' },
        { title: 'Communiquer', body: 'Publier une mise à jour claire sur la page de statut concernée.' },
        { title: 'Apprendre', body: 'Examiner la chronologie, les effets et les actions à mener après le rétablissement.' },
      ],
    },
    status: {
      eyebrow: 'Communication client',
      title: 'Transformez l’état des moniteurs en une page de statut digne de confiance.',
      body: 'Les pages de statut prévues relieront les moniteurs choisis, la maintenance et les mises à jour humaines dans une vue publique accessible.',
      bullets: ['Options de marque et de domaine personnalisés', 'État par composant et historique des incidents', 'Avis de maintenance et informations aux abonnés', 'Contrôles public, privé et d’indexation'],
      cta: 'Prévisualiser les pages de statut',
      previewTitle: 'État du service SSLPing',
      previewStatus: 'Tous les systèmes de démonstration sont opérationnels',
      previewIncident: 'Aucun incident de démonstration actif',
    },
    analytics: {
      eyebrow: 'Des preuves, pas des indicateurs flatteurs',
      title: 'Comprenez les tendances de fiabilité et les événements qui les expliquent.',
      body: 'La feuille de route analytique associe santé des services, réponses, risque SSL et historique des incidents sans masquer les contrôles sources.',
      labels: { uptime: 'Disponibilité', latency: 'Temps de réponse', sslRisk: 'Risque SSL', incidents: 'Incidents' },
      bullets: ['Périodes de rapport flexibles et chronologies adaptées au fuseau horaire', 'Comparaisons par région et par moniteur', 'Preuves exportables pour revues et audits', 'Annotations de déploiement et de maintenance'],
    },
    integrations: {
      eyebrow: 'S’intègre à vos habitudes',
      title: 'Envoyez les signaux vers les outils que votre équipe consulte déjà.',
      body: 'Ces connecteurs sont des candidats de la feuille de route, pas des intégrations déjà disponibles. Les retours des premiers utilisateurs guideront les priorités.',
      groups: [
        { title: 'Messagerie et collaboration', items: ['Slack', 'Microsoft Teams', 'Discord', 'Google Chat'] },
        { title: 'Astreinte et incidents', items: ['PagerDuty', 'Opsgenie', 'E-mail', 'SMS et voix'] },
        { title: 'Automatisation', items: ['Webhooks', 'Zapier', 'n8n', 'Flux personnalisés'] },
        { title: 'Outils de développement', items: ['API REST', 'Ligne de commande', 'Terraform', 'MCP'] },
      ],
      badge: 'Aperçu de la feuille de route des intégrations',
    },
    mobile: {
      eyebrow: 'Réponse mobile, prévue',
      title: 'Emportez la cellule de crise, pas tout le tableau de bord.',
      body: 'Des applications iOS et Android dédiées sont prévues pour les alertes ciblées, l’accusé de réception, le contexte des moniteurs et les mises à jour en déplacement.',
      bullets: ['Notifications push avec actions', 'Prendre en charge et attribuer les incidents', 'Suspendre les contrôles pendant la maintenance', 'Rédiger et publier des mises à jour de statut'],
      ios: 'Feuille de route de l’application iOS',
      android: 'Feuille de route de l’application Android',
      coming: 'Prévue — pas encore disponible dans les boutiques',
    },
    useCases: {
      eyebrow: 'Pour différentes réalités opérationnelles',
      title: 'Commencez simplement et gardez le contexte en grandissant.',
      body: 'Le même modèle de surveillance peut servir à un projet individuel, un portefeuille client ou une équipe plateforme distribuée.',
      cards: [
        { title: 'SaaS et API', body: 'Surveillez parcours publics, dépendances, certificats et composants depuis une seule vue d’incident.' },
        { title: 'Agences et portefeuilles', body: 'Organisez moniteurs, responsables, alertes et communication de marque par client sans mélanger les audiences.' },
        { title: 'Commerce et campagnes', body: 'Protégez paiement, pages de destination, DNS et dépendances tierces pendant les périodes critiques.' },
        { title: 'Infrastructure et exploitation', body: 'Regroupez accessibilité réseau, ports, tâches, maintenance et preuves d’escalade.' },
      ],
    },
    pricing: {
      eyebrow: 'Concept tarifaire',
      title: 'Un parcours du premier moniteur aux opérations complexes.',
      body: 'Les offres ci-dessous illustrent la direction du produit. Les noms, limites, disponibilités et tarifs définitifs seront validés avant le lancement.',
      monthly: 'Aperçu tarifaire de la feuille de route',
      plans: [
        {
          name: 'Gratuit',
          price: 'Aperçu gratuit',
          description: 'Pour découvrir le fonctionnement et surveiller un petit projet personnel.',
          features: ['Contrôles de disponibilité essentiels', 'Suivi de l’expiration SSL', 'Alertes par e-mail', 'Page de statut simple'],
          cta: 'Créer un compte gratuit',
        },
        {
          name: 'Créateur',
          price: 'À annoncer',
          description: 'Pour les créateurs et produits en croissance qui veulent plus de contexte et d’automatisation.',
          features: ['Davantage de types de moniteurs', 'Contrôles régionaux', 'Intégrations aux flux', 'Historique prolongé'],
          cta: 'Signaler mon intérêt',
          featured: true,
        },
        {
          name: 'Équipe',
          price: 'À annoncer',
          description: 'Pour partager les responsabilités, coordonner les incidents et gérer plusieurs services.',
          features: ['Rôles d’équipe', 'Politiques d’escalade', 'Plusieurs pages de statut', 'Exports adaptés aux audits'],
          cta: 'Signaler l’intérêt de mon équipe',
        },
        {
          name: 'Entreprise',
          price: 'Proposition personnalisée',
          description: 'Pour les besoins avancés de gouvernance, déploiement, assistance et montée en charge.',
          features: ['Contrôles d’accès', 'SSO dans la feuille de route', 'Rétention personnalisable', 'Accompagnement au démarrage'],
          cta: 'Discuter de vos besoins',
        },
      ],
      note: 'Aperçu de feuille de route uniquement. Aucun forfait, tarif, quota ou calendrier affiché ne constitue un engagement commercial.',
    },
    faq: {
      eyebrow: 'Questions fréquentes',
      title: 'Des réponses claires sur la feuille de route SSLPing.',
      items: [
        { question: 'Que pourra surveiller SSLPing ?', answer: 'La feuille de route couvre sites web, API, certificats SSL, domaines, enregistrements DNS, accessibilité réseau, ports TCP, signaux de vie, tâches planifiées, règles de contenu puis parcours critiques.' },
        { question: 'Comment les contrôles devraient-ils fonctionner ?', answer: 'Un moniteur sera exécuté depuis un ou plusieurs emplacements, conservera le résultat et les délais, confirmera les échecs si nécessaire et ouvrira ou actualisera un incident selon sa politique.' },
        { question: 'Comment SSLPing limitera-t-il les fausses alertes ?', answer: 'La conception prévoit contrôles de confirmation, comparaison des emplacements, délais configurables, fenêtres de maintenance et règles de rétablissement. Le comportement précis sera testé avant le lancement.' },
        { question: 'Inspectera-t-il autre chose que la date d’expiration ?', answer: 'Oui. La feuille de route des certificats comprend nom d’hôte, émetteur, chaîne de confiance, état du protocole, historique des changements et contexte de renouvellement.' },
        { question: 'Pourrai-je surveiller depuis des régions précises ?', answer: 'La sélection des emplacements et la confirmation multirégionale sont prévues. La carte est illustrative ; les villes et fournisseurs exacts ne sont pas encore arrêtés.' },
        { question: 'Les pages de statut et intégrations seront-elles incluses ?', answer: 'Ce sont deux axes majeurs de la feuille de route. Communications publiques et privées, webhooks, API et connecteurs tiers seront déployés progressivement et validés avec les premiers utilisateurs.' },
        { question: 'Le service de surveillance est-il déjà disponible ?', answer: 'Oui. Le moteur de surveillance, le tableau de bord et l’inscription sont disponibles. Créez un espace de travail et ajoutez votre premier moniteur ; les applications mobiles et certaines fonctions avancées arriveront par étapes.' },
      ],
    },
    final: {
      eyebrow: 'Commencez la surveillance maintenant',
      title: 'Créez un compte et lancez votre premier contrôle en direct.',
      body: 'Créez votre compte et votre espace de travail dans le tableau de bord, puis ajoutez votre premier moniteur. Dites-nous ensuite quels contrôles, régions et flux devraient arriver en priorité.',
      placeholder: 'vous@entreprise.fr',
      primary: 'Créer un compte gratuit',
      secondary: 'Lire la feuille de route',
    },
    footer: {
      tagline: 'Une plateforme de surveillance plus complète et plus sereine — disponible et en pleine expansion.',
      columns: [
        { title: 'Plateforme', links: ['Sites web et API', 'SSL et domaines', 'DNS et réseau', 'Signaux de vie'] },
        { title: 'Opérations', links: ['Incidents', 'Pages de statut', 'Analyses', 'Intégrations'] },
        { title: 'Ressources', links: ['Feuille de route', 'Aperçu de la documentation', 'Guides de surveillance', 'État du service'] },
        { title: 'Entreprise', links: ['À propos de SSLPing', 'Contact', 'Sécurité', 'Accessibilité'] },
      ],
      legal: ['Confidentialité', 'Conditions', 'Traitement des données', 'Politique relative aux cookies'],
      rights: '© 2026 SSLPing. Tous droits réservés.',
      cookieSettings: 'Paramètres des cookies',
    },
    cookies: {
      bannerTitle: 'Votre vie privée, votre choix',
      bannerBody: 'Nous utilisons les cookies nécessaires au fonctionnement de cet aperçu. Avec votre accord, les cookies facultatifs nous aident à comprendre les usages et mémoriser vos préférences.',
      privacy: 'Lire l’avis de confidentialité',
      reject: 'Refuser les facultatifs',
      manage: 'Gérer mes choix',
      accept: 'Tout accepter',
      title: 'Préférences de cookies',
      body: 'Choisissez les catégories facultatives que SSLPing peut utiliser. Vous pourrez modifier ce choix à tout moment depuis le pied de page.',
      necessaryTitle: 'Strictement nécessaires',
      necessaryBody: 'Indispensables à la sécurité, au stockage du consentement, au choix de langue et aux fonctions essentielles du site.',
      alwaysOn: 'Toujours actifs',
      analyticsTitle: 'Mesure d’audience',
      analyticsBody: 'Nous aide à comprendre l’usage global des pages et à améliorer la présentation du produit.',
      functionalTitle: 'Fonctionnels',
      functionalBody: 'Mémorisent les choix facultatifs de l’interface et les fonctions de présentation enrichies.',
      marketingTitle: 'Marketing',
      marketingBody: 'Permettent de mesurer les campagnes et de proposer des communications de lancement pertinentes.',
      gpc: 'Les signaux Global Privacy Control sont respectés lorsqu’ils sont détectés.',
      rejectAll: 'Refuser les cookies facultatifs',
      save: 'Enregistrer mes préférences',
      acceptAll: 'Accepter tous les cookies',
      close: 'Fermer les préférences de cookies',
    },
    support: {
      button: 'Ouvrir l’aide',
      title: 'Comment pouvons-nous vous aider ?',
      body: 'Le tableau de bord et la surveillance principale sont disponibles. Demandez de l’aide pour l’inscription, partagez un besoin ou consultez la documentation de la feuille de route.',
      email: 'Contacter l’équipe',
      docs: 'Ouvrir la documentation préliminaire',
      close: 'Fermer l’aide',
    },
    common: { roadmap: 'Aperçu de la feuille de route', learnMore: 'En savoir plus', operational: 'Opérationnel', planned: 'Prévu' },
  },
  ar: {
    metaTitle: 'SSLPing — مراقبة التوافر والشهادات والحوادث',
    metaDescription: 'استكشف خارطة طريق SSLPing لمراقبة المواقع وواجهات API وSSL وDNS والشبكات والمهام والحوادث وصفحات الحالة في مكان واحد.',
    nav: {
      platform: 'المنصة',
      security: 'أمان SSL',
      workflow: 'سير عمل الحوادث',
      pricing: 'الأسعار',
      resources: 'الموارد',
      login: 'تسجيل الدخول',
      start: 'إنشاء حساب مجاني',
      menu: 'فتح القائمة',
      close: 'إغلاق القائمة',
      language: 'اختيار اللغة',
    },
    hero: {
      eyebrow: 'المراقبة المباشرة متاحة الآن، مع خارطة طريق أوسع قيد التنفيذ',
      titleLead: 'راقب أكثر من مجرد وقت التشغيل.',
      titleAccent: 'اكتشف المشكلات مبكرًا.',
      titleEnd: 'وعالجها بسياق كامل.',
      body: 'يوفر SSLPing الآن لوحة تحكم ونظام مراقبة خلفيًا مباشرًا للمواقع وواجهات API والشهادات والنطاقات وDNS والمنافذ وإشارات النبض والحوادث وتواصل الحالة، مع إضافة قدرات أخرى تدريجيًا.',
      benefits: ['توافر المواقع وواجهات API', 'دورة حياة SSL والنطاقات وDNS', 'المنافذ والشبكات وإشارات النبض', 'الحوادث والتحليلات وصفحات الحالة'],
      placeholder: 'your-domain.com',
      primary: 'بدء المراقبة',
      secondary: 'استكشاف المنصة',
      note: 'التسجيل المباشر متاح في لوحة التحكم — أنشئ مساحة عمل وأول أداة مراقبة.',
      formSuccess: 'جارٍ فتح التسجيل الآمن في لوحة تحكم SSLPing…',
      formError: 'أدخل نطاقًا أو رابطًا صالحًا، مثل example.com.',
      preview: {
        status: 'الحالة الحالية',
        endpoint: 'نقطة النهاية الأساسية',
        uptime: 'فترة التوافر',
        response: 'اتجاه الاستجابة',
        certificate: 'سلامة الشهادة',
        expires: 'مراقبة الانتهاء',
        locations: 'مواقع الفحص',
        incident: 'الخط الزمني للحادث',
      },
    },
    audiences: {
      label: 'مصممة من أجل',
      items: ['المطورين المستقلين', 'فرق المنتجات والهندسة', 'الوكالات وفرق التشغيل', 'المؤسسات النامية'],
    },
    platform: {
      eyebrow: 'واجهة موحدة للمراقبة',
      title: 'شاهد التوافر والثقة والعمليات معًا.',
      body: 'تجمع خارطة الطريق الفحوصات المتفرقة عادةً بين أدوات متعددة ضمن نموذج متسق وتدفق تنبيهات وسجل حوادث موحد.',
      cards: [
        {
          title: 'مراقبة المواقع وواجهات API',
          body: 'تحقق من الصفحات ونقاط النهاية من الخارج، بما في ذلك سلوك الاستجابة الذي يعتمد عليه المستخدمون.',
          features: ['فحوصات HTTP وHTTPS', 'الترويسات ورموز الاستجابة', 'قواعد الكلمات المفتاحية والمحتوى'],
        },
        {
          title: 'دورة حياة SSL والنطاقات',
          body: 'تابع سلسلة الثقة وفترات التجديد قبل أن تتحول مشكلة الشهادة أو النطاق إلى انقطاع.',
          features: ['انتهاء صلاحية الشهادة', 'التحقق من السلسلة', 'مراقبة تجديد النطاق'],
        },
        {
          title: 'سلامة DNS',
          body: 'اكتشف التغييرات غير المتوقعة في السجلات وتحقق من اختلافات الحل بين المناطق.',
          features: ['لقطات السجلات', 'تنبيهات التغيير', 'حل الأسماء حسب المنطقة'],
        },
        {
          title: 'المنافذ والوصول عبر الشبكة',
          body: 'راقب الخدمات المتاحة عبر الإنترنت خارج المتصفح وميّز أعطال التطبيق عن أعطال الشبكة.',
          features: ['فحوصات منافذ TCP', 'الوصول عبر Ping', 'ضوابط المهلة الزمنية'],
        },
        {
          title: 'إشارات النبض والمهام المجدولة',
          body: 'اعرف متى تتوقف نسخة احتياطية أو عملية استيراد أو عامل طابور أو عملية متوقعة أخرى عن إرسال إشارتها.',
          features: ['إشارات نبض Cron', 'فترات السماح', 'تنبيهات التشغيل الفائت'],
        },
        {
          title: 'المحتوى والمسارات المهمة',
          body: 'تأكد من بقاء المحتوى المهم واستعد لفحوصات المسارات متعددة الخطوات.',
          features: ['وجود الكلمات المفتاحية', 'إشارات تغير المحتوى', 'فحوصات المسارات ضمن خارطة الطريق'],
        },
      ],
    },
    security: {
      eyebrow: 'معلومات ذكية عن الشهادات',
      title: 'اجعل سلامة الشهادات جزءًا من التشغيل اليومي.',
      body: 'يُخطط لـ SSLPing أن يشرح موضع الخلل في مسار الشهادة، لا أن يكتفي بعدّ الأيام حتى انتهائها.',
      bullets: ['التحقق من اسم المضيف والجهة المصدرة والسلسلة وحالة الثقة', 'مراقبة فترات الانتهاء والتجديد مع تذكيرات متدرجة', 'تسجيل ملاحظات البروتوكولات وخوارزميات التشفير بمرور الوقت', 'إظهار تغييرات الشهادة ضمن الخط الزمني للحادث'],
      cta: 'استكشاف مراقبة SSL',
      chain: 'سلسلة الثقة',
      expiry: 'فترة التجديد',
      protocol: 'وضع البروتوكول',
      transparency: 'سجل التغييرات',
    },
    network: {
      eyebrow: 'فحوصات عالمية، مخطط لها',
      title: 'ميّز الخلل المحلي عن الانقطاع الإقليمي.',
      body: 'ستقارن شبكة الفحص المخطط لها النتائج من عدة مناطق قبل تصعيد التنبيه، مع إبقاء أدلة كل موقع ظاهرة للتحقيق.',
      benefits: ['تأكيد الأعطال من أكثر من نقطة مراقبة', 'كشف اختلافات DNS والتوجيه وCDN بين المناطق', 'اختيار مواقع تمثل جمهورك', 'الاحتفاظ بأدلة الموقع الأصلية مع كل حادث'],
      regions: ['أمريكا الشمالية', 'أمريكا الجنوبية', 'أوروبا', 'الشرق الأوسط', 'آسيا والمحيط الهادئ', 'أفريقيا'],
      caption: 'المناطق المعروضة أمثلة توضيحية لخارطة الطريق؛ لم تُعتمد المواقع الدقيقة أو الإتاحة بعد.',
    },
    workflow: {
      eyebrow: 'من الإشارة إلى الحل',
      title: 'دورة حوادث متكاملة من دون فوضى علامات التبويب.',
      body: 'تحافظ كل خطوة مخطط لها على السياق والمسؤولية وقصة واضحة موجهة إلى العملاء.',
      steps: [
        { title: 'الاكتشاف', body: 'تشغيل الفحص الخارجي أو الشبكي أو فحص الشهادة أو إشارة النبض المناسب.' },
        { title: 'التأكيد', body: 'إعادة الفحص ومقارنة المواقع لتقليل ضجيج الأعطال العارضة.' },
        { title: 'إثراء السياق', body: 'إرفاق بيانات التوقيت وDNS وTLS والاستجابة وأدلة التغييرات الحديثة.' },
        { title: 'التوجيه', body: 'إرسال التنبيه إلى الشخص المسؤول عبر قناته المفضلة.' },
        { title: 'التواصل', body: 'نشر تحديث واضح للحادث في صفحة الحالة المناسبة.' },
        { title: 'التعلّم', body: 'مراجعة الخط الزمني والتأثير والعمل اللاحق بعد استعادة الخدمة.' },
      ],
    },
    status: {
      eyebrow: 'التواصل مع العملاء',
      title: 'حوّل حالة المراقبة إلى صفحة حالة جديرة بالثقة.',
      body: 'ستربط صفحات الحالة المخطط لها أدوات المراقبة المختارة وأعمال الصيانة والتحديثات البشرية في عرض عام سهل الوصول.',
      bullets: ['خيارات مخصصة للعلامة التجارية والنطاق', 'حالة على مستوى المكوّن وسجل الحوادث', 'إشعارات الصيانة وتحديثات المشتركين', 'ضوابط العرض العام والخاص والفهرسة'],
      cta: 'معاينة صفحات الحالة',
      previewTitle: 'حالة خدمة SSLPing',
      previewStatus: 'جميع أنظمة المعاينة تعمل',
      previewIncident: 'لا توجد حوادث معاينة نشطة',
    },
    analytics: {
      eyebrow: 'أدلة مفيدة لا أرقام للاستعراض',
      title: 'افهم اتجاهات الموثوقية والأحداث الكامنة وراءها.',
      body: 'تجمع خارطة طريق التحليلات بين سلامة الخدمة وسلوك الاستجابة ومخاطر SSL وسجل الحوادث من دون إخفاء الفحوصات الأصلية.',
      labels: { uptime: 'التوافر', latency: 'زمن الاستجابة', sslRisk: 'مخاطر SSL', incidents: 'الحوادث' },
      bullets: ['فترات تقارير مرنة وخطوط زمنية تراعي المنطقة الزمنية', 'مقارنات بين المناطق وأدوات المراقبة', 'أدلة قابلة للتصدير للمراجعات وعمليات التدقيق', 'تعليقات توضيحية لعمليات النشر والصيانة'],
    },
    integrations: {
      eyebrow: 'يناسب سير عملك',
      title: 'وجّه الإشارات إلى الأدوات التي يتابعها فريقك بالفعل.',
      body: 'هذه الموصلات مرشحة لخارطة الطريق وليست ادعاءً بتوافرها حاليًا. ستُحدد الأولويات وفق ملاحظات المستخدمين الأوائل.',
      groups: [
        { title: 'المحادثة والتعاون', items: ['Slack', 'Microsoft Teams', 'Discord', 'Google Chat'] },
        { title: 'المناوبات والحوادث', items: ['PagerDuty', 'Opsgenie', 'البريد الإلكتروني', 'الرسائل النصية والصوت'] },
        { title: 'الأتمتة', items: ['خطافات الويب', 'Zapier', 'n8n', 'مسارات عمل مخصصة'] },
        { title: 'أدوات المطورين', items: ['واجهة REST API', 'سطر الأوامر', 'Terraform', 'MCP'] },
      ],
      badge: 'معاينة خارطة طريق التكاملات',
    },
    mobile: {
      eyebrow: 'الاستجابة عبر الهاتف، مخطط لها',
      title: 'احمل غرفة الحوادث معك، لا لوحة التحكم كاملة.',
      body: 'توجد خطط لتطبيقين مخصصين لنظامي iOS وAndroid يركزان على التنبيهات والإقرار بها وسياق المراقبة وتحديثات الحالة أثناء التنقل.',
      bullets: ['إشعارات فورية قابلة للتنفيذ', 'الإقرار بالحوادث وتعيين المسؤولين', 'إيقاف الفحوصات أثناء الصيانة', 'صياغة تحديثات الحالة ونشرها'],
      ios: 'خارطة طريق تطبيق iOS',
      android: 'خارطة طريق تطبيق Android',
      coming: 'مخطط له — غير متاح بعد في متاجر التطبيقات',
    },
    useCases: {
      eyebrow: 'مصمم لواقع تشغيلي متنوع',
      title: 'ابدأ ببساطة واحتفظ بالسياق مع نمو الأنظمة.',
      body: 'يمكن لنموذج المراقبة نفسه دعم مشروع فردي أو مجموعة عملاء أو فريق منصة موزع.',
      cards: [
        { title: 'البرمجيات كخدمة وواجهات API', body: 'راقب مسارات المستخدم العامة والاعتماديات والشهادات ومكونات الخدمة من عرض حادث واحد.' },
        { title: 'الوكالات ومحافظ العملاء', body: 'نظّم المراقبة والمسؤولية والتنبيهات وتواصل الحالة بعلامة كل عميل من دون خلط الجماهير.' },
        { title: 'التجارة والحملات', body: 'احمِ الدفع وصفحات الهبوط وDNS والاعتماديات الخارجية خلال الفترات الحاسمة للأعمال.' },
        { title: 'البنية التحتية والتشغيل', body: 'اجمع الوصول عبر الشبكة والمنافذ والمهام والصيانة وأدلة التصعيد.' },
      ],
    },
    pricing: {
      eyebrow: 'تصور مبدئي للأسعار',
      title: 'مسار يبدأ بأول مراقبة ويصل إلى العمليات المعقدة.',
      body: 'تعبر الباقات التالية عن اتجاه المنتج. ستُعتمد الأسماء والحدود والإتاحة والأسعار النهائية قبل الإطلاق.',
      monthly: 'معاينة أسعار خارطة الطريق',
      plans: [
        {
          name: 'مجانية',
          price: 'معاينة مجانية',
          description: 'لتعلّم سير العمل ومراقبة مشروع شخصي صغير.',
          features: ['فحوصات التوافر الأساسية', 'مراقبة انتهاء SSL', 'تنبيهات البريد الإلكتروني', 'صفحة حالة أساسية'],
          cta: 'إنشاء حساب مجاني',
        },
        {
          name: 'للمطورين',
          price: 'يُعلن لاحقًا',
          description: 'للمطورين والمنتجات النامية التي تحتاج إلى سياق أسرع وأتمتة.',
          features: ['أنواع مراقبة إضافية', 'فحوصات إقليمية', 'تكاملات سير العمل', 'سجل زمني أطول'],
          cta: 'تسجيل الاهتمام',
          featured: true,
        },
        {
          name: 'للفرق',
          price: 'يُعلن لاحقًا',
          description: 'للمسؤولية المشتركة وتنسيق الحوادث وإدارة عدة خدمات.',
          features: ['أدوار الفريق', 'سياسات التصعيد', 'صفحات حالة متعددة', 'عمليات تصدير مناسبة للتدقيق'],
          cta: 'تسجيل اهتمام الفريق',
        },
        {
          name: 'للمؤسسات',
          price: 'عرض مخصص',
          description: 'لمتطلبات الحوكمة والنشر والدعم والتوسع المتقدمة.',
          features: ['ضوابط الوصول', 'تسجيل الدخول الموحد ضمن الخارطة', 'خيارات احتفاظ مخصصة', 'تهيئة بإرشاد الفريق'],
          cta: 'مناقشة المتطلبات',
        },
      ],
      note: 'هذه معاينة لخارطة الطريق فقط. لا تمثل أي باقة أو سعر أو حصة أو تاريخ إصدار معروض التزامًا تجاريًا.',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'إجابات واضحة عن خارطة طريق SSLPing.',
      items: [
        { question: 'ما الذي سيراقبه SSLPing؟', answer: 'تشمل الخارطة المواقع وواجهات API وشهادات SSL والنطاقات وسجلات DNS والوصول عبر الشبكة ومنافذ TCP وإشارات النبض والمهام المجدولة وقواعد المحتوى، ثم المسارات المهمة لاحقًا.' },
        { question: 'كيف يُتوقع أن تعمل الفحوصات؟', answer: 'ستعمل أداة المراقبة من موقع مختار واحد أو أكثر، وتحفظ النتيجة وأدلة التوقيت، وتؤكد الأعطال عند الحاجة، وتفتح حادثًا أو تحدثه وفق سياستها.' },
        { question: 'كيف سيقلل SSLPing التنبيهات الخاطئة؟', answer: 'يعتمد التصميم على فحوصات التأكيد ومقارنة المواقع ومهل قابلة للضبط وفترات الصيانة وقواعد التعافي. سيُختبر السلوك الدقيق قبل الإطلاق.' },
        { question: 'هل سيفحص أكثر من تاريخ انتهاء الشهادة؟', answer: 'نعم. تشمل خارطة الشهادات اسم المضيف والجهة المصدرة وسلسلة الثقة ووضع البروتوكول وسجل التغييرات وسياق التجديد.' },
        { question: 'هل يمكنني المراقبة من مناطق محددة؟', answer: 'اختيار المواقع والتأكيد عبر مناطق متعددة مخطط لهما. الخريطة هنا توضيحية، ولم تُحدد المدن أو الجهات المزودة بعد.' },
        { question: 'هل ستتضمن المنصة صفحات الحالة والتكاملات؟', answer: 'كلاهما من المحاور الأساسية للخارطة. سيجري طرح التواصل العام والخاص وخطافات الويب وواجهات API وموصلات الجهات الخارجية على مراحل والتحقق منها مع المستخدمين الأوائل.' },
        { question: 'هل خدمة المراقبة متاحة الآن؟', answer: 'نعم. نظام المراقبة الخلفي ولوحة التحكم وتسجيل الحسابات متاحة الآن. أنشئ مساحة عمل وأضف أول أداة مراقبة؛ وستصل تطبيقات الهاتف وبعض القدرات المتقدمة على مراحل.' },
      ],
    },
    final: {
      eyebrow: 'ابدأ المراقبة الآن',
      title: 'أنشئ حسابًا وشغّل أول فحص مباشر.',
      body: 'أنشئ حسابك ومساحة عملك في لوحة التحكم، ثم أضف أول أداة مراقبة مباشرة. وبعد ذلك أخبرنا بالفحوصات والمناطق ومسارات العمل التي ينبغي إضافتها لاحقًا.',
      placeholder: 'you@company.com',
      primary: 'إنشاء حساب مجاني',
      secondary: 'قراءة خارطة الطريق',
    },
    footer: {
      tagline: 'منصة مراقبة أوسع وأكثر هدوءًا — متاحة الآن وتتوسع باستمرار.',
      columns: [
        { title: 'المنصة', links: ['المواقع وواجهات API', 'SSL والنطاقات', 'DNS والشبكات', 'إشارات النبض'] },
        { title: 'العمليات', links: ['الحوادث', 'صفحات الحالة', 'التحليلات', 'التكاملات'] },
        { title: 'الموارد', links: ['خارطة الطريق', 'معاينة الوثائق', 'أدلة المراقبة', 'حالة الخدمة'] },
        { title: 'الشركة', links: ['عن SSLPing', 'التواصل', 'الأمان', 'إمكانية الوصول'] },
      ],
      legal: ['الخصوصية', 'الشروط', 'معالجة البيانات', 'سياسة ملفات تعريف الارتباط'],
      rights: '© 2026 SSLPing. جميع الحقوق محفوظة.',
      cookieSettings: 'إعدادات ملفات تعريف الارتباط',
    },
    cookies: {
      bannerTitle: 'خصوصيتك، خيارك',
      bannerBody: 'نستخدم ملفات ضرورية لتشغيل هذه المعاينة. وبإذنك تساعدنا الملفات الاختيارية على فهم الاستخدام وتذكر التفضيلات.',
      privacy: 'قراءة إشعار الخصوصية',
      reject: 'رفض الاختيارية',
      manage: 'إدارة الخيارات',
      accept: 'قبول الكل',
      title: 'تفضيلات ملفات تعريف الارتباط',
      body: 'اختر الفئات الاختيارية التي يمكن لـ SSLPing استخدامها. يمكنك تغيير اختيارك في أي وقت من تذييل الصفحة.',
      necessaryTitle: 'ضرورية للغاية',
      necessaryBody: 'مطلوبة للأمان وحفظ الموافقة واللغة ووظائف الموقع الأساسية.',
      alwaysOn: 'مفعلة دائمًا',
      analyticsTitle: 'التحليلات',
      analyticsBody: 'تساعدنا على فهم الاستخدام الإجمالي للصفحات وتحسين عرض المنتج.',
      functionalTitle: 'الوظيفية',
      functionalBody: 'تتذكر اختيارات الواجهة الاختيارية وميزات العرض المحسّنة.',
      marketingTitle: 'التسويق',
      marketingBody: 'تدعم قياس الحملات وإرسال معلومات ملائمة عن الإطلاق.',
      gpc: 'نحترم إشارات التحكم العالمي في الخصوصية عند اكتشافها.',
      rejectAll: 'رفض الملفات الاختيارية',
      save: 'حفظ التفضيلات',
      acceptAll: 'قبول جميع الملفات',
      close: 'إغلاق تفضيلات الملفات',
    },
    support: {
      button: 'فتح الدعم',
      title: 'كيف يمكننا مساعدتك؟',
      body: 'لوحة التحكم والمراقبة الأساسية متاحتان الآن. اطلب المساعدة في التسجيل أو شارك احتياجًا للمراقبة أو تصفح وثائق خارطة الطريق.',
      email: 'التواصل مع الفريق',
      docs: 'فتح معاينة الوثائق',
      close: 'إغلاق الدعم',
    },
    common: { roadmap: 'معاينة خارطة الطريق', learnMore: 'معرفة المزيد', operational: 'يعمل', planned: 'مخطط له' },
  },
  bn: {
    metaTitle: 'SSLPing — আপটাইম, সার্টিফিকেট ও ঘটনা পর্যবেক্ষণ',
    metaDescription: 'ওয়েবসাইট, API, SSL, DNS, নেটওয়ার্ক, কাজ, ঘটনা ও স্ট্যাটাস পেজের সমন্বিত পর্যবেক্ষণের জন্য SSLPing-এর রোডম্যাপ দেখুন।',
    nav: {
      platform: 'প্ল্যাটফর্ম',
      security: 'SSL নিরাপত্তা',
      workflow: 'ঘটনার কর্মপ্রবাহ',
      pricing: 'মূল্য',
      resources: 'রিসোর্স',
      login: 'লগ ইন করুন',
      start: 'বিনামূল্যে অ্যাকাউন্ট তৈরি করুন',
      menu: 'মেনু খুলুন',
      close: 'মেনু বন্ধ করুন',
      language: 'ভাষা বেছে নিন',
    },
    hero: {
      eyebrow: 'লাইভ পর্যবেক্ষণ এখন চালু, আরও বিস্তৃত রোডম্যাপের কাজ চলছে',
      titleLead: 'শুধু আপটাইম নয়, আরও অনেক কিছু দেখুন।',
      titleAccent: 'সমস্যা আগেই ধরুন।',
      titleEnd: 'সম্পূর্ণ প্রেক্ষাপট নিয়ে সমাধান করুন।',
      body: 'SSLPing এখন ওয়েবসাইট, API, সার্টিফিকেট, ডোমেইন, DNS, পোর্ট, হার্টবিট, ঘটনা ও স্ট্যাটাস যোগাযোগের জন্য লাইভ ড্যাশবোর্ড ও পর্যবেক্ষণ ব্যাকএন্ড দেয়; আরও সুবিধা ধাপে ধাপে যোগ হবে।',
      benefits: ['ওয়েবসাইট ও API-এর উপলভ্যতা', 'SSL, ডোমেইন ও DNS-এর জীবনচক্র', 'পোর্ট, নেটওয়ার্ক ও হার্টবিট', 'ঘটনা, বিশ্লেষণ ও স্ট্যাটাস পেজ'],
      placeholder: 'your-domain.com',
      primary: 'পর্যবেক্ষণ শুরু করুন',
      secondary: 'প্ল্যাটফর্ম ঘুরে দেখুন',
      note: 'ড্যাশবোর্ডে লাইভ সাইনআপ — আপনার কর্মক্ষেত্র ও প্রথম মনিটর তৈরি করুন।',
      formSuccess: 'SSLPing ড্যাশবোর্ডে নিরাপদ সাইনআপ খোলা হচ্ছে…',
      formError: 'example.com-এর মতো সঠিক ডোমেইন বা URL লিখুন।',
      preview: {
        status: 'বর্তমান অবস্থা',
        endpoint: 'প্রধান এন্ডপয়েন্ট',
        uptime: 'উপলভ্যতার সময়কাল',
        response: 'সাড়ার প্রবণতা',
        certificate: 'সার্টিফিকেটের স্বাস্থ্য',
        expires: 'মেয়াদ পর্যবেক্ষণ',
        locations: 'পরীক্ষার অঞ্চল',
        incident: 'ঘটনার সময়রেখা',
      },
    },
    audiences: {
      label: 'যাদের জন্য তৈরি',
      items: ['স্বাধীন নির্মাতা', 'পণ্য ও প্রকৌশল দল', 'এজেন্সি ও পরিচালনা দল', 'বর্ধনশীল প্রতিষ্ঠান'],
    },
    platform: {
      eyebrow: 'একটি সমন্বিত পর্যবেক্ষণ পর্দা',
      title: 'উপলভ্যতা, আস্থা ও পরিচালনা একসঙ্গে দেখুন।',
      body: 'রোডম্যাপে বিভিন্ন টুলে ছড়িয়ে থাকা পরীক্ষাগুলোকে একটি সামঞ্জস্যপূর্ণ মডেল, সতর্কতা প্রবাহ ও ঘটনার ইতিহাসে আনা হয়েছে।',
      cards: [
        {
          title: 'ওয়েবসাইট ও API পর্যবেক্ষণ',
          body: 'ব্যবহারকারীরা যে সাড়া পাওয়ার ওপর নির্ভর করেন, তা-সহ বাইরে থেকে পেজ ও এন্ডপয়েন্ট যাচাই করুন।',
          features: ['HTTP ও HTTPS পরীক্ষা', 'হেডার ও রেসপন্স কোড', 'কীওয়ার্ড ও কনটেন্টের নিয়ম'],
        },
        {
          title: 'SSL ও ডোমেইনের জীবনচক্র',
          body: 'সার্টিফিকেট বা ডোমেইনের সমস্যা সেবা বন্ধ করার আগেই ট্রাস্ট চেইন ও নবায়নের সময়সীমা নজরে রাখুন।',
          features: ['সার্টিফিকেটের মেয়াদ', 'চেইন যাচাই', 'ডোমেইন নবায়ন পর্যবেক্ষণ'],
        },
        {
          title: 'DNS-এর অখণ্ডতা',
          body: 'রেকর্ডের অপ্রত্যাশিত পরিবর্তন ধরুন এবং অঞ্চলভেদে রেজল্যুশনের পার্থক্য খতিয়ে দেখুন।',
          features: ['রেকর্ডের স্ন্যাপশট', 'পরিবর্তনের সতর্কতা', 'আঞ্চলিক রেজল্যুশন'],
        },
        {
          title: 'পোর্ট ও নেটওয়ার্কে পৌঁছানো',
          body: 'ব্রাউজারের বাইরের ইন্টারনেটমুখী সেবা দেখুন এবং অ্যাপের ব্যর্থতাকে নেটওয়ার্ক ব্যর্থতা থেকে আলাদা করুন।',
          features: ['TCP পোর্ট পরীক্ষা', 'Ping-এর মাধ্যমে পৌঁছানো', 'টাইমআউট নিয়ন্ত্রণ'],
        },
        {
          title: 'হার্টবিট ও নির্ধারিত কাজ',
          body: 'ব্যাকআপ, ইমপোর্ট, কিউ ওয়ার্কার বা প্রত্যাশিত অন্য কোনো প্রক্রিয়া সংকেত পাঠানো বন্ধ করলেই জানুন।',
          features: ['Cron হার্টবিট', 'অতিরিক্ত সময়সীমা', 'বাদ পড়া রানের সতর্কতা'],
        },
        {
          title: 'কনটেন্ট ও গুরুত্বপূর্ণ যাত্রাপথ',
          body: 'গুরুত্বপূর্ণ কনটেন্ট আছে কি না নিশ্চিত করুন এবং বহু ধাপের ব্যবহারকারী যাত্রা পরীক্ষার প্রস্তুতি নিন।',
          features: ['কীওয়ার্ডের উপস্থিতি', 'কনটেন্ট পরিবর্তনের সংকেত', 'রোডম্যাপে যাত্রাপথ পরীক্ষা'],
        },
      ],
    },
    security: {
      eyebrow: 'সার্টিফিকেট বুদ্ধিমত্তা',
      title: 'সার্টিফিকেটের স্বাস্থ্যকে দৈনন্দিন পরিচালনার অংশ করুন।',
      body: 'SSLPing শুধু মেয়াদ শেষ হওয়ার দিন গুনবে না; সার্টিফিকেটের পথে ঠিক কোথায় সমস্যা তা বোঝানোর পরিকল্পনা রয়েছে।',
      bullets: ['হোস্টনেম, ইস্যুকারী, চেইন ও আস্থার অবস্থা যাচাই', 'ধাপে ধাপে স্মরণবার্তাসহ মেয়াদ ও নবায়নের সময় দেখুন', 'সময়ের সঙ্গে প্রোটোকল ও সাইফারের পর্যবেক্ষণ সংরক্ষণ', 'ঘটনার সময়রেখায় সার্টিফিকেটের পরিবর্তন দেখানো'],
      cta: 'SSL পর্যবেক্ষণ দেখুন',
      chain: 'ট্রাস্ট চেইন',
      expiry: 'নবায়নের সময়সীমা',
      protocol: 'প্রোটোকলের অবস্থা',
      transparency: 'পরিবর্তনের ইতিহাস',
    },
    network: {
      eyebrow: 'বিশ্বজুড়ে পরীক্ষা, পরিকল্পনাধীন',
      title: 'স্থানীয় গোলযোগ আর আঞ্চলিক বিভ্রাট আলাদা করুন।',
      body: 'পরিকল্পিত পরীক্ষক নেটওয়ার্ক সতর্কতা বাড়ানোর আগে একাধিক অঞ্চলের ফল তুলনা করবে এবং তদন্তের জন্য প্রতিটি স্থানের প্রমাণ দেখাবে।',
      benefits: ['একাধিক পর্যবেক্ষণ স্থান থেকে ব্যর্থতা নিশ্চিত করা', 'আঞ্চলিক DNS, রাউটিং ও CDN-এর পার্থক্য দেখা', 'আপনার ব্যবহারকারীদের উপযোগী অঞ্চল বেছে নেওয়া', 'প্রতিটি ঘটনার সঙ্গে মূল আঞ্চলিক প্রমাণ রাখা'],
      regions: ['উত্তর আমেরিকা', 'দক্ষিণ আমেরিকা', 'ইউরোপ', 'মধ্যপ্রাচ্য', 'এশিয়া প্রশান্ত মহাসাগরীয় অঞ্চল', 'আফ্রিকা'],
      caption: 'দেখানো অঞ্চলগুলো রোডম্যাপের উদাহরণ; নির্দিষ্ট স্থান ও উপলভ্যতা এখনো চূড়ান্ত নয়।',
    },
    workflow: {
      eyebrow: 'সংকেত থেকে সমাধান',
      title: 'অসংখ্য ট্যাব না খুলেই সম্পূর্ণ ঘটনা চক্র।',
      body: 'পরিকল্পিত প্রতিটি ধাপে প্রেক্ষাপট, দায়িত্ব এবং গ্রাহকের জন্য পরিষ্কার বিবরণ অক্ষুণ্ণ থাকবে।',
      steps: [
        { title: 'শনাক্ত করুন', body: 'সঠিক বাহ্যিক, নেটওয়ার্ক, সার্টিফিকেট বা হার্টবিট পরীক্ষা চালান।' },
        { title: 'নিশ্চিত করুন', body: 'আবার পরীক্ষা করে অঞ্চল তুলনা করুন, যাতে বিচ্ছিন্ন ব্যর্থতার অপ্রয়োজনীয় সতর্কতা কমে।' },
        { title: 'প্রেক্ষাপট যোগ করুন', body: 'সময়, DNS, TLS, সাড়া ও সাম্প্রতিক পরিবর্তনের প্রমাণ যুক্ত করুন।' },
        { title: 'পাঠিয়ে দিন', body: 'দায়িত্বপ্রাপ্ত ব্যক্তির পছন্দের মাধ্যমে সতর্কতা পাঠান।' },
        { title: 'জানিয়ে দিন', body: 'সংশ্লিষ্ট স্ট্যাটাস পেজে স্পষ্ট ঘটনার আপডেট প্রকাশ করুন।' },
        { title: 'শিখুন', body: 'সেবা ফেরার পর সময়রেখা, প্রভাব ও পরবর্তী কাজ পর্যালোচনা করুন।' },
      ],
    },
    status: {
      eyebrow: 'গ্রাহক যোগাযোগ',
      title: 'মনিটরের অবস্থাকে বিশ্বাসযোগ্য স্ট্যাটাস পেজে রূপ দিন।',
      body: 'পরিকল্পিত স্ট্যাটাস পেজে নির্বাচিত মনিটর, রক্ষণাবেক্ষণ এবং মানুষের লেখা আপডেট একটি সহজে ব্যবহারযোগ্য প্রকাশ্য দৃশ্যে যুক্ত হবে।',
      bullets: ['নিজস্ব ব্র্যান্ড ও ডোমেইনের বিকল্প', 'কম্পোনেন্টভিত্তিক অবস্থা ও ঘটনার ইতিহাস', 'রক্ষণাবেক্ষণের নোটিশ ও সাবস্ক্রাইবার আপডেট', 'প্রকাশ্য, ব্যক্তিগত ও সার্চ ইনডেক্স নিয়ন্ত্রণ'],
      cta: 'স্ট্যাটাস পেজ প্রিভিউ করুন',
      previewTitle: 'SSLPing সেবার অবস্থা',
      previewStatus: 'সব প্রিভিউ সিস্টেম সচল',
      previewIncident: 'কোনো সক্রিয় প্রিভিউ ঘটনা নেই',
    },
    analytics: {
      eyebrow: 'দেখানোর সংখ্যা নয়, কার্যকর প্রমাণ',
      title: 'নির্ভরযোগ্যতার প্রবণতা ও তার পেছনের ঘটনা বুঝুন।',
      body: 'বিশ্লেষণের রোডম্যাপ মূল পরীক্ষাগুলো লুকিয়ে না রেখে সেবার স্বাস্থ্য, সাড়ার আচরণ, SSL ঝুঁকি ও ঘটনার ইতিহাস একত্র করবে।',
      labels: { uptime: 'উপলভ্যতা', latency: 'সাড়ার সময়', sslRisk: 'SSL ঝুঁকি', incidents: 'ঘটনা' },
      bullets: ['নমনীয় রিপোর্ট সময়কাল ও সময় অঞ্চল-সচেতন সময়রেখা', 'অঞ্চল ও মনিটরের তুলনা', 'পর্যালোচনা ও অডিটের জন্য রপ্তানিযোগ্য প্রমাণ', 'ডিপ্লয়মেন্ট ও রক্ষণাবেক্ষণের টীকা'],
    },
    integrations: {
      eyebrow: 'আপনার কর্মপ্রবাহের সঙ্গে মানানসই',
      title: 'দল যে টুলগুলো ইতিমধ্যে দেখে, সেখানে সংকেত পাঠান।',
      body: 'এই সংযোগগুলো রোডম্যাপের প্রার্থী, এখনই থাকা ইন্টিগ্রেশনের দাবি নয়। প্রাথমিক ব্যবহারকারীদের মতামত অনুযায়ী অগ্রাধিকার ঠিক হবে।',
      groups: [
        { title: 'চ্যাট ও সহযোগিতা', items: ['Slack', 'Microsoft Teams', 'Discord', 'Google Chat'] },
        { title: 'অন-কল ও ঘটনা', items: ['PagerDuty', 'Opsgenie', 'ইমেইল', 'SMS ও ভয়েস'] },
        { title: 'স্বয়ংক্রিয়তা', items: ['ওয়েবহুক', 'Zapier', 'n8n', 'নিজস্ব কর্মপ্রবাহ'] },
        { title: 'ডেভেলপার টুল', items: ['REST API', 'কমান্ড লাইন', 'Terraform', 'MCP'] },
      ],
      badge: 'ইন্টিগ্রেশন রোডম্যাপের প্রিভিউ',
    },
    mobile: {
      eyebrow: 'মোবাইল প্রতিক্রিয়া, পরিকল্পনাধীন',
      title: 'পুরো ড্যাশবোর্ড নয়, ঘটনা কক্ষ সঙ্গে রাখুন।',
      body: 'চলতি পথে নির্দিষ্ট সতর্কতা, স্বীকৃতি, মনিটরের প্রেক্ষাপট ও স্ট্যাটাস আপডেটের জন্য আলাদা iOS ও Android অ্যাপের পরিকল্পনা রয়েছে।',
      bullets: ['কাজ করা যায় এমন পুশ নোটিফিকেশন', 'ঘটনা স্বীকার ও দায়িত্ব দেওয়া', 'রক্ষণাবেক্ষণের সময় পরীক্ষা বিরতি', 'স্ট্যাটাস আপডেট লেখা ও প্রকাশ'],
      ios: 'iOS অ্যাপের রোডম্যাপ',
      android: 'Android অ্যাপের রোডম্যাপ',
      coming: 'পরিকল্পনাধীন — অ্যাপ স্টোরে এখনো নেই',
    },
    useCases: {
      eyebrow: 'ভিন্ন পরিচালন বাস্তবতার জন্য',
      title: 'সহজভাবে শুরু করুন, সিস্টেম বাড়লেও প্রেক্ষাপট রাখুন।',
      body: 'একই পর্যবেক্ষণ মডেল ব্যক্তিগত প্রকল্প, গ্রাহক পোর্টফোলিও বা বিস্তৃত প্ল্যাটফর্ম দলকে সহায়তা করতে পারে।',
      cards: [
        { title: 'SaaS ও API', body: 'একটি ঘটনা দৃশ্য থেকে প্রকাশ্য যাত্রা, নির্ভরতা, সার্টিফিকেট ও সেবার কম্পোনেন্ট দেখুন।' },
        { title: 'এজেন্সি ও পোর্টফোলিও', body: 'দর্শক না মিশিয়ে প্রতিটি গ্রাহকের মনিটর, দায়িত্ব, সতর্কতা ও নিজস্ব ব্র্যান্ডের স্ট্যাটাস যোগাযোগ সাজান।' },
        { title: 'ই-কমার্স ও প্রচারণা', body: 'ব্যবসার গুরুত্বপূর্ণ সময়ে চেকআউট, ল্যান্ডিং পেজ, DNS ও তৃতীয় পক্ষের নির্ভরতা সুরক্ষিত রাখুন।' },
        { title: 'অবকাঠামো ও পরিচালনা', body: 'নেটওয়ার্কে পৌঁছানো, পোর্ট, কাজ, রক্ষণাবেক্ষণ ও সতর্কতা বাড়ানোর প্রমাণ একত্র করুন।' },
      ],
    },
    pricing: {
      eyebrow: 'মূল্যের ধারণা',
      title: 'প্রথম মনিটর থেকে জটিল পরিচালনা পর্যন্ত একটি পথ।',
      body: 'নিচের স্তরগুলো পণ্যের পরিকল্পিত দিক বোঝায়। চূড়ান্ত নাম, সীমা, উপলভ্যতা ও মূল্য লঞ্চের আগে যাচাই হবে।',
      monthly: 'রোডম্যাপ মূল্যের প্রিভিউ',
      plans: [
        {
          name: 'বিনামূল্যে',
          price: 'বিনামূল্যের প্রিভিউ',
          description: 'কর্মপ্রবাহ শেখা ও ছোট ব্যক্তিগত প্রকল্প দেখার জন্য।',
          features: ['মূল উপলভ্যতা পরীক্ষা', 'SSL মেয়াদ পর্যবেক্ষণ', 'ইমেইল সতর্কতা', 'সাধারণ স্ট্যাটাস পেজ'],
          cta: 'বিনামূল্যে অ্যাকাউন্ট তৈরি করুন',
        },
        {
          name: 'বিল্ডার',
          price: 'পরে জানানো হবে',
          description: 'যেসব নির্মাতা ও বর্ধনশীল পণ্যের দ্রুত প্রেক্ষাপট ও স্বয়ংক্রিয়তা দরকার।',
          features: ['আরও মনিটরের ধরন', 'আঞ্চলিক পরীক্ষা', 'কর্মপ্রবাহ ইন্টিগ্রেশন', 'দীর্ঘ ইতিহাস'],
          cta: 'আগ্রহ নিবন্ধন করুন',
          featured: true,
        },
        {
          name: 'দল',
          price: 'পরে জানানো হবে',
          description: 'ভাগ করা দায়িত্ব, ঘটনা সমন্বয় ও একাধিক সেবার জন্য।',
          features: ['দলের ভূমিকা', 'এসকেলেশন নীতি', 'একাধিক স্ট্যাটাস পেজ', 'অডিট উপযোগী রপ্তানি'],
          cta: 'দলের আগ্রহ নিবন্ধন করুন',
        },
        {
          name: 'প্রতিষ্ঠান',
          price: 'নিজস্ব প্রস্তাব',
          description: 'উন্নত পরিচালন নীতি, ডিপ্লয়মেন্ট, সহায়তা ও বড় পরিসরের চাহিদার জন্য।',
          features: ['প্রবেশাধিকার নিয়ন্ত্রণ', 'রোডম্যাপে SSO', 'নিজস্ব সংরক্ষণ বিকল্প', 'নির্দেশিত শুরু'],
          cta: 'চাহিদা নিয়ে আলোচনা করুন',
        },
      ],
      note: 'এটি শুধু রোডম্যাপের প্রিভিউ। এখানে দেখানো কোনো প্ল্যান, মূল্য, কোটা বা প্রকাশের তারিখ বাণিজ্যিক অঙ্গীকার নয়।',
    },
    faq: {
      eyebrow: 'সাধারণ প্রশ্ন',
      title: 'SSLPing রোডম্যাপ সম্পর্কে স্পষ্ট উত্তর।',
      items: [
        { question: 'SSLPing কী কী পর্যবেক্ষণ করবে?', answer: 'রোডম্যাপে ওয়েবসাইট, API, SSL সার্টিফিকেট, ডোমেইন, DNS রেকর্ড, নেটওয়ার্কে পৌঁছানো, TCP পোর্ট, হার্টবিট, নির্ধারিত কাজ, কনটেন্টের নিয়ম এবং পরে গুরুত্বপূর্ণ যাত্রাপথ রয়েছে।' },
        { question: 'পরীক্ষাগুলো কীভাবে কাজ করবে?', answer: 'একটি মনিটর এক বা একাধিক নির্বাচিত স্থান থেকে চলবে, ফল ও সময়ের প্রমাণ রাখবে, প্রয়োজন হলে ব্যর্থতা নিশ্চিত করবে এবং নীতি অনুযায়ী ঘটনা খুলবে বা হালনাগাদ করবে।' },
        { question: 'SSLPing কীভাবে ভুল সতর্কতা কমাবে?', answer: 'নকশায় নিশ্চিতকরণ পরীক্ষা, অঞ্চল তুলনা, পরিবর্তনযোগ্য টাইমআউট, রক্ষণাবেক্ষণ সময় ও পুনরুদ্ধার নিয়ম রয়েছে। সঠিক আচরণ লঞ্চের আগে পরীক্ষা করা হবে।' },
        { question: 'সার্টিফিকেটের মেয়াদ ছাড়াও কি পরীক্ষা হবে?', answer: 'হ্যাঁ। সার্টিফিকেট রোডম্যাপে হোস্টনেম, ইস্যুকারী, ট্রাস্ট চেইন, প্রোটোকলের অবস্থা, পরিবর্তনের ইতিহাস ও নবায়নের প্রেক্ষাপট রয়েছে।' },
        { question: 'নির্দিষ্ট অঞ্চল থেকে কি পর্যবেক্ষণ করা যাবে?', answer: 'স্থান নির্বাচন ও বহু-অঞ্চল নিশ্চিতকরণ পরিকল্পনাধীন। এই পেজের মানচিত্রটি উদাহরণ; নির্দিষ্ট শহর ও সেবাদাতা এখনো চূড়ান্ত নয়।' },
        { question: 'স্ট্যাটাস পেজ ও ইন্টিগ্রেশন কি থাকবে?', answer: 'দুটিই রোডম্যাপের মূল ক্ষেত্র। প্রকাশ্য ও ব্যক্তিগত স্ট্যাটাস যোগাযোগ, ওয়েবহুক, API এবং তৃতীয় পক্ষের সংযোগ ধাপে ধাপে আসবে ও প্রাথমিক ব্যবহারকারীদের সঙ্গে যাচাই হবে।' },
        { question: 'পর্যবেক্ষণ সেবা কি এখন পাওয়া যাচ্ছে?', answer: 'হ্যাঁ। পর্যবেক্ষণ ব্যাকএন্ড, ড্যাশবোর্ড ও অ্যাকাউন্ট সাইনআপ এখন লাইভ। ড্যাশবোর্ডে কর্মক্ষেত্র তৈরি করে প্রথম মনিটর যোগ করুন; মোবাইল অ্যাপ ও কিছু উন্নত সুবিধা ধাপে ধাপে আসবে।' },
      ],
    },
    final: {
      eyebrow: 'এখনই পর্যবেক্ষণ শুরু করুন',
      title: 'অ্যাকাউন্ট তৈরি করে প্রথম লাইভ পরীক্ষা চালান।',
      body: 'ড্যাশবোর্ড অ্যাকাউন্ট ও কর্মক্ষেত্র তৈরি করে প্রথম লাইভ মনিটর যোগ করুন। এরপর জানান কোন পরীক্ষা, অঞ্চল ও কর্মপ্রবাহ পরবর্তী ধাপে দরকার।',
      placeholder: 'you@company.com',
      primary: 'বিনামূল্যে অ্যাকাউন্ট তৈরি করুন',
      secondary: 'রোডম্যাপ পড়ুন',
    },
    footer: {
      tagline: 'আরও বিস্তৃত ও শান্ত পর্যবেক্ষণ প্ল্যাটফর্ম — এখন লাইভ এবং ক্রমশ সম্প্রসারিত।',
      columns: [
        { title: 'প্ল্যাটফর্ম', links: ['ওয়েবসাইট ও API', 'SSL ও ডোমেইন', 'DNS ও নেটওয়ার্ক', 'হার্টবিট'] },
        { title: 'পরিচালনা', links: ['ঘটনা', 'স্ট্যাটাস পেজ', 'বিশ্লেষণ', 'ইন্টিগ্রেশন'] },
        { title: 'রিসোর্স', links: ['রোডম্যাপ', 'ডকুমেন্টেশনের প্রিভিউ', 'পর্যবেক্ষণ নির্দেশিকা', 'সেবার অবস্থা'] },
        { title: 'প্রতিষ্ঠান', links: ['SSLPing সম্পর্কে', 'যোগাযোগ', 'নিরাপত্তা', 'অ্যাক্সেসিবিলিটি'] },
      ],
      legal: ['গোপনীয়তা', 'শর্তাবলি', 'ডেটা প্রক্রিয়াকরণ', 'কুকি নীতি'],
      rights: '© 2026 SSLPing। সর্বস্বত্ব সংরক্ষিত।',
      cookieSettings: 'কুকি সেটিংস',
    },
    cookies: {
      bannerTitle: 'আপনার গোপনীয়তা, আপনার পছন্দ',
      bannerBody: 'এই প্রিভিউ চালাতে আমরা প্রয়োজনীয় কুকি ব্যবহার করি। আপনার অনুমতিতে ঐচ্ছিক কুকি ব্যবহার বুঝতে ও পছন্দ মনে রাখতে সাহায্য করে।',
      privacy: 'গোপনীয়তার নোটিশ পড়ুন',
      reject: 'ঐচ্ছিকগুলো প্রত্যাখ্যান করুন',
      manage: 'পছন্দ পরিচালনা করুন',
      accept: 'সব গ্রহণ করুন',
      title: 'কুকি পছন্দ',
      body: 'SSLPing কোন ঐচ্ছিক বিভাগ ব্যবহার করতে পারবে তা বেছে নিন। ফুটার থেকে যেকোনো সময় এই পছন্দ বদলাতে পারবেন।',
      necessaryTitle: 'অবশ্যই প্রয়োজনীয়',
      necessaryBody: 'নিরাপত্তা, সম্মতি সংরক্ষণ, ভাষা ও সাইটের মূল কাজের জন্য প্রয়োজনীয়।',
      alwaysOn: 'সবসময় চালু',
      analyticsTitle: 'বিশ্লেষণ',
      analyticsBody: 'সমষ্টিগত পেজ ব্যবহার বুঝতে ও পণ্যের উপস্থাপনা উন্নত করতে সাহায্য করে।',
      functionalTitle: 'কার্যকরী',
      functionalBody: 'ঐচ্ছিক ইন্টারফেস পছন্দ ও উন্নত উপস্থাপনার সুবিধা মনে রাখে।',
      marketingTitle: 'বিপণন',
      marketingBody: 'প্রচারণা পরিমাপ ও প্রাসঙ্গিক লঞ্চ যোগাযোগে সহায়তা করে।',
      gpc: 'Global Privacy Control সংকেত পাওয়া গেলে তা মানা হয়।',
      rejectAll: 'ঐচ্ছিক কুকি প্রত্যাখ্যান করুন',
      save: 'পছন্দ সংরক্ষণ করুন',
      acceptAll: 'সব কুকি গ্রহণ করুন',
      close: 'কুকি পছন্দ বন্ধ করুন',
    },
    support: {
      button: 'সহায়তা খুলুন',
      title: 'আমরা কীভাবে সাহায্য করতে পারি?',
      body: 'ড্যাশবোর্ড ও মূল পর্যবেক্ষণ এখন লাইভ। সাইনআপে সহায়তা নিন, পর্যবেক্ষণের প্রয়োজন জানান বা রোডম্যাপ ডকুমেন্টেশন দেখুন।',
      email: 'দলের সঙ্গে যোগাযোগ করুন',
      docs: 'ডকুমেন্টেশনের প্রিভিউ খুলুন',
      close: 'সহায়তা বন্ধ করুন',
    },
    common: { roadmap: 'রোডম্যাপের প্রিভিউ', learnMore: 'আরও জানুন', operational: 'সচল', planned: 'পরিকল্পনাধীন' },
  },
  pt: {
    metaTitle: 'SSLPing — monitoramento de disponibilidade, certificados e incidentes',
    metaDescription: 'Conheça o roteiro do SSLPing para monitorar sites, APIs, SSL, DNS, redes, tarefas, incidentes e páginas de status em um só lugar.',
    nav: {
      platform: 'Plataforma',
      security: 'Segurança SSL',
      workflow: 'Fluxo de incidentes',
      pricing: 'Preços',
      resources: 'Recursos',
      login: 'Entrar',
      start: 'Criar conta grátis',
      menu: 'Abrir menu',
      close: 'Fechar menu',
      language: 'Escolher idioma',
    },
    hero: {
      eyebrow: 'Monitoramento ao vivo, com um roteiro mais amplo em andamento',
      titleLead: 'Monitore muito além da disponibilidade.',
      titleAccent: 'Descubra problemas cedo.',
      titleEnd: 'Resolva com todo o contexto.',
      body: 'O SSLPing já oferece painel e backend de monitoramento ao vivo para sites, APIs, certificados, domínios, DNS, portas, sinais de vida, incidentes e comunicação de status, com mais recursos chegando gradualmente.',
      benefits: ['Disponibilidade de sites e APIs', 'Ciclo de vida de SSL, domínios e DNS', 'Portas, redes e sinais de vida', 'Incidentes, análises e páginas de status'],
      placeholder: 'seu-dominio.com',
      primary: 'Começar a monitorar',
      secondary: 'Explorar a plataforma',
      note: 'Cadastro ativo no painel — crie seu espaço de trabalho e o primeiro monitor.',
      formSuccess: 'Abrindo o cadastro seguro no painel do SSLPing…',
      formError: 'Digite um domínio ou URL válido, como exemplo.com.',
      preview: {
        status: 'Status atual',
        endpoint: 'Endpoint principal',
        uptime: 'Período de disponibilidade',
        response: 'Tendência de resposta',
        certificate: 'Saúde do certificado',
        expires: 'Controle de validade',
        locations: 'Locais de verificação',
        incident: 'Linha do tempo do incidente',
      },
    },
    audiences: {
      label: 'Feito para',
      items: ['Criadores independentes', 'Equipes de produto e engenharia', 'Agências e operadores', 'Empresas em crescimento'],
    },
    platform: {
      eyebrow: 'Uma única visão de monitoramento',
      title: 'Veja disponibilidade, confiança e operações em conjunto.',
      body: 'O roteiro reúne verificações normalmente espalhadas por várias ferramentas em um modelo, um fluxo de alertas e um histórico de incidentes consistentes.',
      cards: [
        {
          title: 'Monitoramento de sites e APIs',
          body: 'Verifique páginas e endpoints de fora, incluindo o comportamento de resposta do qual seus usuários dependem.',
          features: ['Verificações HTTP e HTTPS', 'Cabeçalhos e códigos de resposta', 'Regras de palavras-chave e conteúdo'],
        },
        {
          title: 'Ciclo de vida de SSL e domínios',
          body: 'Acompanhe a cadeia de confiança e os períodos de renovação antes que um certificado ou domínio provoque uma interrupção.',
          features: ['Validade do certificado', 'Validação da cadeia', 'Controle de renovação do domínio'],
        },
        {
          title: 'Integridade de DNS',
          body: 'Detecte mudanças inesperadas nos registros e investigue diferenças de resolução entre regiões.',
          features: ['Instantâneos dos registros', 'Alertas de mudança', 'Resolução regional'],
        },
        {
          title: 'Portas e alcance de rede',
          body: 'Observe serviços expostos à internet além do navegador e diferencie falhas de aplicação de falhas de rede.',
          features: ['Verificações de portas TCP', 'Alcance por ping', 'Controles de tempo limite'],
        },
        {
          title: 'Sinais de vida e tarefas agendadas',
          body: 'Saiba quando um backup, uma importação, um worker de fila ou outro processo esperado deixa de enviar sinal.',
          features: ['Sinais de vida de cron', 'Períodos de tolerância', 'Alertas de execução perdida'],
        },
        {
          title: 'Conteúdo e jornadas críticas',
          body: 'Confirme que o conteúdo importante continua presente e prepare verificações de jornadas em várias etapas.',
          features: ['Presença de palavras-chave', 'Sinais de mudança de conteúdo', 'Verificações de jornada no roteiro'],
        },
      ],
    },
    security: {
      eyebrow: 'Inteligência de certificados',
      title: 'Faça da saúde dos certificados parte da operação diária.',
      body: 'O SSLPing foi planejado para explicar o que está errado no caminho do certificado, não apenas contar os dias até o vencimento.',
      bullets: ['Validar nome do host, emissor, cadeia e estado de confiança', 'Acompanhar validade e renovação com lembretes progressivos', 'Registrar observações de protocolos e cifras ao longo do tempo', 'Exibir mudanças de certificado na linha do tempo do incidente'],
      cta: 'Explorar o monitoramento SSL',
      chain: 'Cadeia de confiança',
      expiry: 'Período de renovação',
      protocol: 'Postura do protocolo',
      transparency: 'Histórico de mudanças',
    },
    network: {
      eyebrow: 'Verificações globais, planejadas',
      title: 'Diferencie uma falha local de uma interrupção regional.',
      body: 'A rede de verificação planejada comparará resultados de várias regiões antes de escalar um alerta e manterá as evidências de cada local visíveis para investigação.',
      benefits: ['Confirmar falhas por mais de um ponto de observação', 'Revelar diferenças regionais de DNS, rotas e CDN', 'Escolher locais que representem seu público', 'Guardar a evidência original de cada local com o incidente'],
      regions: ['América do Norte', 'América do Sul', 'Europa', 'Oriente Médio', 'Ásia-Pacífico', 'África'],
      caption: 'Regiões ilustrativas do roteiro; locais exatos e disponibilidade ainda não estão confirmados.',
    },
    workflow: {
      eyebrow: 'Do sinal à resolução',
      title: 'Um ciclo completo de incidentes, sem uma tempestade de abas.',
      body: 'Cada etapa planejada preserva contexto, responsabilidade e uma narrativa clara para o cliente.',
      steps: [
        { title: 'Detectar', body: 'Executar a verificação externa, de rede, certificado ou sinal de vida adequada.' },
        { title: 'Confirmar', body: 'Verificar novamente e comparar locais para reduzir o ruído de falhas isoladas.' },
        { title: 'Enriquecer', body: 'Anexar tempos, DNS, TLS, resposta e evidências de mudanças recentes.' },
        { title: 'Encaminhar', body: 'Enviar o alerta à pessoa responsável pelo canal preferido.' },
        { title: 'Comunicar', body: 'Publicar uma atualização clara na página de status pertinente.' },
        { title: 'Aprender', body: 'Revisar a linha do tempo, o impacto e o trabalho posterior à recuperação.' },
      ],
    },
    status: {
      eyebrow: 'Comunicação com clientes',
      title: 'Transforme o estado dos monitores em uma página de status confiável.',
      body: 'As páginas de status planejadas conectarão monitores selecionados, manutenções e atualizações escritas por pessoas em uma visão pública acessível.',
      bullets: ['Opções de marca e domínio personalizados', 'Status por componente e histórico de incidentes', 'Avisos de manutenção e atualizações para assinantes', 'Controles público, privado e de indexação'],
      cta: 'Ver prévia das páginas de status',
      previewTitle: 'Status do serviço SSLPing',
      previewStatus: 'Todos os sistemas de demonstração estão operacionais',
      previewIncident: 'Nenhum incidente de demonstração ativo',
    },
    analytics: {
      eyebrow: 'Evidência, não métricas de vaidade',
      title: 'Entenda tendências de confiabilidade e os eventos por trás delas.',
      body: 'O roteiro de análises combina saúde do serviço, comportamento de resposta, risco SSL e histórico de incidentes sem esconder as verificações de origem.',
      labels: { uptime: 'Disponibilidade', latency: 'Tempo de resposta', sslRisk: 'Risco SSL', incidents: 'Incidentes' },
      bullets: ['Períodos de relatório flexíveis e linhas do tempo cientes do fuso horário', 'Comparações entre regiões e monitores', 'Evidências exportáveis para revisões e auditorias', 'Anotações de implantações e manutenções'],
    },
    integrations: {
      eyebrow: 'Combina com seu fluxo',
      title: 'Leve os sinais às ferramentas que sua equipe já acompanha.',
      body: 'Esses conectores são candidatos do roteiro, não integrações disponíveis hoje. O retorno dos primeiros usuários definirá as prioridades.',
      groups: [
        { title: 'Chat e colaboração', items: ['Slack', 'Microsoft Teams', 'Discord', 'Google Chat'] },
        { title: 'Plantão e incidentes', items: ['PagerDuty', 'Opsgenie', 'E-mail', 'SMS e voz'] },
        { title: 'Automação', items: ['Webhooks', 'Zapier', 'n8n', 'Fluxos personalizados'] },
        { title: 'Ferramentas de desenvolvimento', items: ['API REST', 'Linha de comando', 'Terraform', 'MCP'] },
      ],
      badge: 'Prévia do roteiro de integrações',
    },
    mobile: {
      eyebrow: 'Resposta móvel, planejada',
      title: 'Leve a sala de incidentes, não o painel inteiro.',
      body: 'Aplicativos dedicados para iOS e Android estão planejados para alertas focados, confirmação, contexto do monitor e atualizações em movimento.',
      bullets: ['Notificações push acionáveis', 'Confirmar e atribuir incidentes', 'Pausar verificações durante a manutenção', 'Redigir e publicar atualizações de status'],
      ios: 'Roteiro do aplicativo para iOS',
      android: 'Roteiro do aplicativo para Android',
      coming: 'Planejado — ainda não disponível nas lojas',
    },
    useCases: {
      eyebrow: 'Para diferentes realidades operacionais',
      title: 'Comece de forma simples e preserve o contexto ao crescer.',
      body: 'O mesmo modelo de monitoramento pode atender um projeto individual, uma carteira de clientes ou uma equipe de plataforma distribuída.',
      cards: [
        { title: 'SaaS e APIs', body: 'Monitore jornadas públicas, dependências, certificados e componentes em uma única visão do incidente.' },
        { title: 'Agências e carteiras', body: 'Organize monitores, responsáveis, alertas e comunicação com a marca de cada cliente sem misturar públicos.' },
        { title: 'Comércio e campanhas', body: 'Proteja checkout, landing pages, DNS e dependências externas em períodos críticos para o negócio.' },
        { title: 'Infraestrutura e operações', body: 'Combine alcance de rede, portas, tarefas, manutenção e evidências de escalonamento.' },
      ],
    },
    pricing: {
      eyebrow: 'Conceito de preços',
      title: 'Um caminho do primeiro monitor às operações complexas.',
      body: 'Os níveis abaixo mostram a direção do produto. Nomes, limites, disponibilidade e preços finais serão validados antes do lançamento.',
      monthly: 'Prévia de preços do roteiro',
      plans: [
        {
          name: 'Grátis',
          price: 'Prévia gratuita',
          description: 'Para conhecer o fluxo e observar um pequeno projeto pessoal.',
          features: ['Verificações essenciais de disponibilidade', 'Controle de validade SSL', 'Alertas por e-mail', 'Página de status básica'],
          cta: 'Criar conta grátis',
        },
        {
          name: 'Criador',
          price: 'A anunciar',
          description: 'Para criadores e produtos em crescimento que precisam de contexto rápido e automação.',
          features: ['Mais tipos de monitor', 'Verificações regionais', 'Integrações de fluxo', 'Histórico mais longo'],
          cta: 'Registrar interesse',
          featured: true,
        },
        {
          name: 'Equipe',
          price: 'A anunciar',
          description: 'Para responsabilidade compartilhada, coordenação de incidentes e vários serviços.',
          features: ['Funções de equipe', 'Políticas de escalonamento', 'Várias páginas de status', 'Exportações para auditoria'],
          cta: 'Registrar interesse da equipe',
        },
        {
          name: 'Empresarial',
          price: 'Proposta personalizada',
          description: 'Para necessidades avançadas de governança, implantação, suporte e escala.',
          features: ['Controles de acesso', 'SSO no roteiro', 'Retenção personalizável', 'Integração assistida'],
          cta: 'Conversar sobre requisitos',
        },
      ],
      note: 'Apenas uma prévia do roteiro. Nenhum plano, preço, limite ou data de lançamento exibido representa um compromisso comercial.',
    },
    faq: {
      eyebrow: 'Perguntas frequentes',
      title: 'Respostas claras sobre o roteiro do SSLPing.',
      items: [
        { question: 'O que o SSLPing vai monitorar?', answer: 'O roteiro inclui sites, APIs, certificados SSL, domínios, registros DNS, alcance de rede, portas TCP, sinais de vida, tarefas agendadas, regras de conteúdo e, mais tarde, jornadas críticas.' },
        { question: 'Como as verificações deverão funcionar?', answer: 'Um monitor será executado de um ou mais locais, guardará resultados e tempos, confirmará falhas quando necessário e abrirá ou atualizará um incidente conforme sua política.' },
        { question: 'Como o SSLPing reduzirá alertas falsos?', answer: 'O projeto usa verificações de confirmação, comparação de locais, tempos limite configuráveis, janelas de manutenção e regras de recuperação. O comportamento exato será testado antes do lançamento.' },
        { question: 'Ele verificará mais do que a validade do certificado?', answer: 'Sim. O roteiro de certificados inclui nome do host, emissor, cadeia de confiança, postura do protocolo, histórico de mudanças e contexto de renovação.' },
        { question: 'Poderei monitorar de regiões específicas?', answer: 'A seleção de locais e a confirmação multirregional estão planejadas. O mapa é ilustrativo; cidades e provedores exatos ainda não estão definidos.' },
        { question: 'Páginas de status e integrações estarão incluídas?', answer: 'As duas áreas são centrais no roteiro. Comunicação pública e privada, webhooks, APIs e conectores externos serão lançados em etapas e validados com os primeiros usuários.' },
        { question: 'O serviço de monitoramento já está disponível?', answer: 'Sim. O backend de monitoramento, o painel e o cadastro de contas já estão ativos. Crie um espaço de trabalho e adicione seu primeiro monitor; os aplicativos móveis e alguns recursos avançados chegarão em etapas.' },
      ],
    },
    final: {
      eyebrow: 'Comece a monitorar agora',
      title: 'Crie uma conta e execute sua primeira verificação ao vivo.',
      body: 'Crie sua conta e espaço de trabalho no painel e adicione seu primeiro monitor ao vivo. Depois, diga quais verificações, regiões e fluxos devem vir a seguir.',
      placeholder: 'voce@empresa.com',
      primary: 'Criar conta grátis',
      secondary: 'Ler o roteiro',
    },
    footer: {
      tagline: 'Uma plataforma de monitoramento mais ampla e tranquila — já ativa e em expansão.',
      columns: [
        { title: 'Plataforma', links: ['Sites e APIs', 'SSL e domínios', 'DNS e rede', 'Sinais de vida'] },
        { title: 'Operações', links: ['Incidentes', 'Páginas de status', 'Análises', 'Integrações'] },
        { title: 'Recursos', links: ['Roteiro', 'Prévia da documentação', 'Guias de monitoramento', 'Status do serviço'] },
        { title: 'Empresa', links: ['Sobre o SSLPing', 'Contato', 'Segurança', 'Acessibilidade'] },
      ],
      legal: ['Privacidade', 'Termos', 'Tratamento de dados', 'Política de cookies'],
      rights: '© 2026 SSLPing. Todos os direitos reservados.',
      cookieSettings: 'Configurações de cookies',
    },
    cookies: {
      bannerTitle: 'Sua privacidade, sua escolha',
      bannerBody: 'Usamos cookies necessários para esta prévia funcionar. Com sua permissão, cookies opcionais nos ajudam a entender o uso e lembrar preferências.',
      privacy: 'Ler o aviso de privacidade',
      reject: 'Rejeitar opcionais',
      manage: 'Gerenciar escolhas',
      accept: 'Aceitar todos',
      title: 'Preferências de cookies',
      body: 'Escolha quais categorias opcionais o SSLPing pode usar. Você pode mudar essa escolha a qualquer momento no rodapé.',
      necessaryTitle: 'Estritamente necessários',
      necessaryBody: 'Essenciais para segurança, armazenamento do consentimento, idioma e funções básicas do site.',
      alwaysOn: 'Sempre ativos',
      analyticsTitle: 'Análise',
      analyticsBody: 'Ajuda a entender o uso agregado das páginas e melhorar a apresentação do produto.',
      functionalTitle: 'Funcionais',
      functionalBody: 'Lembram escolhas opcionais da interface e recursos de apresentação aprimorados.',
      marketingTitle: 'Marketing',
      marketingBody: 'Apoiam a medição de campanhas e comunicações relevantes sobre o lançamento.',
      gpc: 'Sinais de Global Privacy Control são respeitados quando detectados.',
      rejectAll: 'Rejeitar cookies opcionais',
      save: 'Salvar preferências',
      acceptAll: 'Aceitar todos os cookies',
      close: 'Fechar preferências de cookies',
    },
    support: {
      button: 'Abrir suporte',
      title: 'Como podemos ajudar?',
      body: 'O painel e o monitoramento principal já estão ativos. Peça ajuda com o cadastro, compartilhe uma necessidade ou consulte a documentação do roteiro.',
      email: 'Falar com a equipe',
      docs: 'Abrir prévia da documentação',
      close: 'Fechar suporte',
    },
    common: { roadmap: 'Prévia do roteiro', learnMore: 'Saiba mais', operational: 'Operacional', planned: 'Planejado' },
  },
  ru: {
    metaTitle: 'SSLPing — мониторинг доступности, сертификатов и инцидентов',
    metaDescription: 'Изучите дорожную карту SSLPing: единый мониторинг сайтов, API, SSL, DNS, сети, фоновых задач, инцидентов и статус-страниц.',
    nav: {
      platform: 'Платформа',
      security: 'Безопасность SSL',
      workflow: 'Работа с инцидентами',
      pricing: 'Тарифы',
      resources: 'Ресурсы',
      login: 'Войти',
      start: 'Создать бесплатный аккаунт',
      menu: 'Открыть меню',
      close: 'Закрыть меню',
      language: 'Выбрать язык',
    },
    hero: {
      eyebrow: 'Мониторинг уже работает, а платформа продолжает расширяться',
      titleLead: 'Контролируйте не только доступность.',
      titleAccent: 'Находите проблемы раньше.',
      titleEnd: 'Устраняйте их с полным контекстом.',
      body: 'SSLPing уже предоставляет рабочую панель и серверную часть мониторинга сайтов, API, сертификатов, доменов, DNS, портов, контрольных сигналов, инцидентов и статус-коммуникаций. Новые возможности будут добавляться постепенно.',
      benefits: ['Доступность сайтов и API', 'Жизненный цикл SSL, доменов и DNS', 'Порты, сеть и контрольные сигналы', 'Инциденты, аналитика и статус-страницы'],
      placeholder: 'ваш-домен.рф',
      primary: 'Начать мониторинг',
      secondary: 'Изучить платформу',
      note: 'Регистрация уже доступна в панели — создайте рабочее пространство и первый монитор.',
      formSuccess: 'Открываем безопасную регистрацию в панели SSLPing…',
      formError: 'Введите корректный домен или URL, например example.com.',
      preview: {
        status: 'Текущее состояние',
        endpoint: 'Основная конечная точка',
        uptime: 'Период доступности',
        response: 'Динамика ответа',
        certificate: 'Состояние сертификата',
        expires: 'Контроль срока действия',
        locations: 'Точки проверки',
        incident: 'Хронология инцидента',
      },
    },
    audiences: {
      label: 'Для кого',
      items: ['Независимые разработчики', 'Продуктовые и инженерные команды', 'Агентства и операторы', 'Растущие компании'],
    },
    platform: {
      eyebrow: 'Единая картина мониторинга',
      title: 'Доступность, доверие и эксплуатация — в одном месте.',
      body: 'Дорожная карта объединяет проверки, которые обычно разбросаны по разным инструментам, в общую модель, поток оповещений и историю инцидентов.',
      cards: [
        {
          title: 'Мониторинг сайтов и API',
          body: 'Проверяйте страницы и конечные точки извне, включая то поведение ответа, от которого зависят пользователи.',
          features: ['Проверки HTTP и HTTPS', 'Заголовки и коды ответа', 'Правила для ключевых слов и содержимого'],
        },
        {
          title: 'Жизненный цикл SSL и доменов',
          body: 'Следите за цепочкой доверия и сроками продления до того, как сертификат или домен приведут к простою.',
          features: ['Истечение сертификата', 'Проверка цепочки', 'Контроль продления домена'],
        },
        {
          title: 'Целостность DNS',
          body: 'Обнаруживайте неожиданные изменения записей и исследуйте различия разрешения имён по регионам.',
          features: ['Снимки записей', 'Оповещения об изменениях', 'Региональное разрешение имён'],
        },
        {
          title: 'Порты и сетевая доступность',
          body: 'Контролируйте доступные из интернета сервисы за пределами браузера и отличайте сбой приложения от сбоя сети.',
          features: ['Проверки TCP-портов', 'Доступность по Ping', 'Настройка тайм-аутов'],
        },
        {
          title: 'Контрольные сигналы и плановые задания',
          body: 'Узнавайте, когда резервное копирование, импорт, обработчик очереди или другой ожидаемый процесс перестал выходить на связь.',
          features: ['Контрольные сигналы Cron', 'Допустимые задержки', 'Оповещения о пропущенном запуске'],
        },
        {
          title: 'Контент и критические сценарии',
          body: 'Проверяйте наличие важного содержимого и готовьтесь к многошаговым проверкам пользовательских сценариев.',
          features: ['Наличие ключевых слов', 'Сигналы об изменении контента', 'Проверки сценариев в дорожной карте'],
        },
      ],
    },
    security: {
      eyebrow: 'Анализ сертификатов',
      title: 'Сделайте состояние сертификатов частью ежедневной эксплуатации.',
      body: 'SSLPing должен объяснять, что именно не так в пути сертификата, а не просто считать дни до окончания срока.',
      bullets: ['Проверка имени хоста, издателя, цепочки и уровня доверия', 'Контроль срока и окна продления с поэтапными напоминаниями', 'История наблюдений за протоколами и шифрами', 'Отображение изменений сертификата в хронологии инцидента'],
      cta: 'Изучить мониторинг SSL',
      chain: 'Цепочка доверия',
      expiry: 'Окно продления',
      protocol: 'Состояние протокола',
      transparency: 'История изменений',
    },
    network: {
      eyebrow: 'Глобальные проверки — в планах',
      title: 'Отличайте локальный сбой от регионального простоя.',
      body: 'Планируемая сеть проверок будет сопоставлять результаты из нескольких регионов перед эскалацией и сохранять данные каждой точки для расследования.',
      benefits: ['Подтверждение сбоя из нескольких точек наблюдения', 'Выявление региональных различий DNS, маршрутизации и CDN', 'Выбор точек, соответствующих географии аудитории', 'Сохранение исходных данных по каждой точке в инциденте'],
      regions: ['Северная Америка', 'Южная Америка', 'Европа', 'Ближний Восток', 'Азиатско-Тихоокеанский регион', 'Африка'],
      caption: 'Регионы приведены для иллюстрации дорожной карты; конкретные точки и их доступность пока не утверждены.',
    },
    workflow: {
      eyebrow: 'От сигнала до решения',
      title: 'Полный цикл инцидента без десятков открытых вкладок.',
      body: 'Каждый планируемый этап сохраняет контекст, ответственность и понятную для клиентов историю.',
      steps: [
        { title: 'Обнаружить', body: 'Запустить подходящую внешнюю, сетевую, сертификатную проверку или контрольный сигнал.' },
        { title: 'Подтвердить', body: 'Повторить проверку и сравнить точки, чтобы снизить шум от единичных сбоев.' },
        { title: 'Дополнить', body: 'Приложить данные о времени, DNS, TLS, ответе и недавних изменениях.' },
        { title: 'Направить', body: 'Отправить оповещение ответственному сотруднику по удобному каналу.' },
        { title: 'Сообщить', body: 'Опубликовать ясное обновление на нужной статус-странице.' },
        { title: 'Сделать выводы', body: 'После восстановления разобрать хронологию, влияние и последующие задачи.' },
      ],
    },
    status: {
      eyebrow: 'Коммуникация с клиентами',
      title: 'Превратите данные мониторинга в статус-страницу, которой доверяют.',
      body: 'Планируемые статус-страницы свяжут выбранные мониторы, обслуживание и написанные человеком обновления в одном доступном публичном представлении.',
      bullets: ['Собственный бренд и домен', 'Состояние компонентов и история инцидентов', 'Уведомления об обслуживании и обновления для подписчиков', 'Публичный и закрытый доступ, управление индексацией'],
      cta: 'Посмотреть статус-страницы',
      previewTitle: 'Состояние сервисов SSLPing',
      previewStatus: 'Все демонстрационные системы работают',
      previewIncident: 'Активных демонстрационных инцидентов нет',
    },
    analytics: {
      eyebrow: 'Доказательства, а не красивые цифры',
      title: 'Понимайте тенденции надёжности и события, которые за ними стоят.',
      body: 'В планах аналитики — объединить состояние сервиса, поведение ответа, риски SSL и историю инцидентов, не скрывая исходные проверки.',
      labels: { uptime: 'Доступность', latency: 'Время ответа', sslRisk: 'Риск SSL', incidents: 'Инциденты' },
      bullets: ['Гибкие периоды отчётности и хронология с учётом часового пояса', 'Сравнение регионов и мониторов', 'Выгрузка данных для разборов и аудитов', 'Отметки развёртываний и обслуживания'],
    },
    integrations: {
      eyebrow: 'Встраивается в ваш процесс',
      title: 'Доставляйте сигналы в инструменты, за которыми уже следит команда.',
      body: 'Эти коннекторы — кандидаты в дорожную карту, а не заявление о доступных сейчас интеграциях. Приоритеты определит обратная связь ранних пользователей.',
      groups: [
        { title: 'Чаты и совместная работа', items: ['Slack', 'Microsoft Teams', 'Discord', 'Google Chat'] },
        { title: 'Дежурства и инциденты', items: ['PagerDuty', 'Opsgenie', 'Электронная почта', 'SMS и голосовые звонки'] },
        { title: 'Автоматизация', items: ['Вебхуки', 'Zapier', 'n8n', 'Собственные сценарии'] },
        { title: 'Инструменты разработчика', items: ['REST API', 'Командная строка', 'Terraform', 'MCP'] },
      ],
      badge: 'Предпросмотр дорожной карты интеграций',
    },
    mobile: {
      eyebrow: 'Мобильная реакция — в планах',
      title: 'Носите с собой комнату инцидента, а не всю панель.',
      body: 'Отдельные приложения для iOS и Android планируются для точечных оповещений, подтверждения, просмотра контекста и публикации обновлений на ходу.',
      bullets: ['Интерактивные push-уведомления', 'Подтверждение и назначение инцидентов', 'Приостановка проверок на время обслуживания', 'Подготовка и публикация обновлений статуса'],
      ios: 'Приложение для iOS в дорожной карте',
      android: 'Приложение для Android в дорожной карте',
      coming: 'Запланировано — в магазинах приложений пока недоступно',
    },
    useCases: {
      eyebrow: 'Для разных условий эксплуатации',
      title: 'Начните с простого и сохраняйте контекст по мере роста.',
      body: 'Одна модель мониторинга подойдёт личному проекту, портфелю клиентов и распределённой платформенной команде.',
      cards: [
        { title: 'SaaS и API', body: 'Следите за публичными сценариями, зависимостями, сертификатами и компонентами сервиса в едином представлении инцидента.' },
        { title: 'Агентства и портфели', body: 'Разделяйте клиентские мониторы, ответственность, оповещения и брендированные статус-страницы, не смешивая аудитории.' },
        { title: 'Торговля и кампании', body: 'Защищайте оплату, посадочные страницы, DNS и внешние зависимости в критически важные периоды.' },
        { title: 'Инфраструктура и эксплуатация', body: 'Объединяйте сетевую доступность, порты, задания, обслуживание и данные для эскалации.' },
      ],
    },
    pricing: {
      eyebrow: 'Концепция тарифов',
      title: 'Путь от первого монитора до сложной эксплуатации.',
      body: 'Варианты ниже показывают направление продукта. Окончательные названия, ограничения, доступность и цены будут подтверждены перед запуском.',
      monthly: 'Предпросмотр тарифной дорожной карты',
      plans: [
        {
          name: 'Бесплатный',
          price: 'Бесплатный предпросмотр',
          description: 'Чтобы изучить процесс и следить за небольшим личным проектом.',
          features: ['Основные проверки доступности', 'Контроль срока SSL', 'Оповещения по почте', 'Базовая статус-страница'],
          cta: 'Создать бесплатный аккаунт',
        },
        {
          name: 'Разработчик',
          price: 'Будет объявлено',
          description: 'Для авторов и растущих продуктов, которым нужны быстрый контекст и автоматизация.',
          features: ['Больше типов мониторов', 'Региональные проверки', 'Интеграции с процессами', 'Расширенная история'],
          cta: 'Сообщить об интересе',
          featured: true,
        },
        {
          name: 'Команда',
          price: 'Будет объявлено',
          description: 'Для совместной ответственности, координации инцидентов и нескольких сервисов.',
          features: ['Командные роли', 'Правила эскалации', 'Несколько статус-страниц', 'Выгрузки для аудита'],
          cta: 'Зарегистрировать интерес команды',
        },
        {
          name: 'Корпоративный',
          price: 'Индивидуальное предложение',
          description: 'Для особых требований к управлению, развёртыванию, поддержке и масштабу.',
          features: ['Управление доступом', 'SSO в дорожной карте', 'Настраиваемое хранение данных', 'Сопровождение при внедрении'],
          cta: 'Обсудить требования',
        },
      ],
      note: 'Только предварительная дорожная карта. Ни один указанный тариф, цена, лимит или срок запуска не является коммерческим обязательством.',
    },
    faq: {
      eyebrow: 'Частые вопросы',
      title: 'Честные ответы о дорожной карте SSLPing.',
      items: [
        { question: 'Что будет отслеживать SSLPing?', answer: 'В дорожной карте — сайты, API, SSL-сертификаты, домены, записи DNS, сетевая доступность, TCP-порты, контрольные сигналы, плановые задания, правила для контента и позднее критические пользовательские сценарии.' },
        { question: 'Как будут работать проверки?', answer: 'Монитор будет запускаться из одной или нескольких выбранных точек, сохранять результат и временные данные, при необходимости подтверждать сбой и открывать или обновлять инцидент по заданным правилам.' },
        { question: 'Как SSLPing будет сокращать ложные оповещения?', answer: 'В проект заложены повторные проверки, сравнение точек, настраиваемые тайм-ауты, окна обслуживания и правила восстановления. Точное поведение будет протестировано перед запуском.' },
        { question: 'Будет ли проверяться что-то кроме срока сертификата?', answer: 'Да. В планах проверка имени хоста, издателя, цепочки доверия, состояния протокола, истории изменений и контекста продления.' },
        { question: 'Можно ли будет проверять из определённых регионов?', answer: 'Выбор точек и подтверждение из нескольких регионов запланированы. Карта на странице носит иллюстративный характер; конкретные города и провайдеры пока не утверждены.' },
        { question: 'Будут ли статус-страницы и интеграции?', answer: 'Оба направления входят в основу дорожной карты. Публичные и закрытые страницы, вебхуки, API и сторонние коннекторы будут появляться поэтапно и проверяться вместе с ранними пользователями.' },
        { question: 'Сервис мониторинга уже доступен?', answer: 'Да. Серверная часть мониторинга, панель и регистрация аккаунтов уже работают. Создайте рабочее пространство и добавьте первый монитор; мобильные приложения и часть расширенных возможностей появятся поэтапно.' },
      ],
    },
    final: {
      eyebrow: 'Начните мониторинг сейчас',
      title: 'Создайте аккаунт и запустите первую настоящую проверку.',
      body: 'Создайте аккаунт и рабочее пространство в панели, затем добавьте первый монитор. После этого расскажите, какие проверки, регионы и процессы стоит реализовать следующими.',
      placeholder: 'вы@компания.рф',
      primary: 'Создать бесплатный аккаунт',
      secondary: 'Читать дорожную карту',
    },
    footer: {
      tagline: 'Более широкая и спокойная платформа мониторинга — уже работает и расширяется.',
      columns: [
        { title: 'Платформа', links: ['Сайты и API', 'SSL и домены', 'DNS и сеть', 'Контрольные сигналы'] },
        { title: 'Эксплуатация', links: ['Инциденты', 'Статус-страницы', 'Аналитика', 'Интеграции'] },
        { title: 'Ресурсы', links: ['Дорожная карта', 'Предпросмотр документации', 'Руководства по мониторингу', 'Состояние сервиса'] },
        { title: 'Компания', links: ['О SSLPing', 'Связаться с нами', 'Безопасность', 'Доступность интерфейса'] },
      ],
      legal: ['Конфиденциальность', 'Условия', 'Обработка данных', 'Политика cookie'],
      rights: '© 2026 SSLPing. Все права защищены.',
      cookieSettings: 'Настройки cookie',
    },
    cookies: {
      bannerTitle: 'Ваша конфиденциальность — ваш выбор',
      bannerBody: 'Мы используем необходимые cookie для работы демонстрации. С вашего согласия дополнительные cookie помогают понять использование сайта и запомнить настройки.',
      privacy: 'Прочитать уведомление о конфиденциальности',
      reject: 'Отклонить дополнительные',
      manage: 'Настроить выбор',
      accept: 'Принять все',
      title: 'Настройки cookie',
      body: 'Выберите, какие необязательные категории может использовать SSLPing. Вы сможете изменить решение в любое время через ссылку в подвале.',
      necessaryTitle: 'Строго необходимые',
      necessaryBody: 'Нужны для безопасности, хранения согласия, выбора языка и основных функций сайта.',
      alwaysOn: 'Всегда включены',
      analyticsTitle: 'Аналитические',
      analyticsBody: 'Помогают оценить совокупное использование страниц и улучшить презентацию продукта.',
      functionalTitle: 'Функциональные',
      functionalBody: 'Запоминают необязательные настройки интерфейса и расширенные функции презентации.',
      marketingTitle: 'Маркетинговые',
      marketingBody: 'Помогают оценивать кампании и отправлять уместные сообщения о запуске.',
      gpc: 'При обнаружении сигнала Global Privacy Control мы учитываем его.',
      rejectAll: 'Отклонить необязательные cookie',
      save: 'Сохранить настройки',
      acceptAll: 'Принять все cookie',
      close: 'Закрыть настройки cookie',
    },
    support: {
      button: 'Открыть помощь',
      title: 'Чем мы можем помочь?',
      body: 'Панель и основной мониторинг уже работают. Получите помощь с регистрацией, расскажите о задаче или изучите документацию дорожной карты.',
      email: 'Связаться с командой',
      docs: 'Открыть предварительную документацию',
      close: 'Закрыть помощь',
    },
    common: { roadmap: 'Предпросмотр дорожной карты', learnMore: 'Подробнее', operational: 'Работает', planned: 'Запланировано' },
  },
  id: {
    metaTitle: 'SSLPing — pemantauan ketersediaan, sertifikat, dan insiden',
    metaDescription: 'Jelajahi peta jalan SSLPing untuk memantau situs, API, SSL, DNS, jaringan, tugas, insiden, dan halaman status dalam satu tempat.',
    nav: {
      platform: 'Platform',
      security: 'Keamanan SSL',
      workflow: 'Alur insiden',
      pricing: 'Harga',
      resources: 'Sumber daya',
      login: 'Masuk',
      start: 'Buat akun gratis',
      menu: 'Buka menu',
      close: 'Tutup menu',
      language: 'Pilih bahasa',
    },
    hero: {
      eyebrow: 'Pemantauan live telah tersedia, dengan peta jalan lebih luas yang terus dikembangkan',
      titleLead: 'Pantau lebih dari sekadar waktu aktif.',
      titleAccent: 'Temukan masalah lebih awal.',
      titleEnd: 'Selesaikan dengan konteks lengkap.',
      body: 'SSLPing kini menyediakan dasbor dan backend pemantauan live untuk situs, API, sertifikat, domain, DNS, port, detak jantung, insiden, dan komunikasi status, dengan kemampuan lain yang ditambahkan bertahap.',
      benefits: ['Ketersediaan situs dan API', 'Siklus hidup SSL, domain, dan DNS', 'Port, jaringan, dan detak jantung', 'Insiden, analitik, dan halaman status'],
      placeholder: 'domain-anda.com',
      primary: 'Mulai memantau',
      secondary: 'Jelajahi platform',
      note: 'Pendaftaran live di dasbor — buat ruang kerja dan monitor pertama Anda.',
      formSuccess: 'Membuka pendaftaran aman di dasbor SSLPing…',
      formError: 'Masukkan domain atau URL yang valid, seperti example.com.',
      preview: {
        status: 'Status saat ini',
        endpoint: 'Endpoint utama',
        uptime: 'Periode ketersediaan',
        response: 'Tren respons',
        certificate: 'Kesehatan sertifikat',
        expires: 'Pantauan kedaluwarsa',
        locations: 'Lokasi pemeriksaan',
        incident: 'Linimasa insiden',
      },
    },
    audiences: {
      label: 'Dirancang untuk',
      items: ['Pembuat independen', 'Tim produk dan rekayasa', 'Agensi dan operator', 'Perusahaan yang berkembang'],
    },
    platform: {
      eyebrow: 'Satu tampilan pemantauan',
      title: 'Lihat ketersediaan, kepercayaan, dan operasi bersama-sama.',
      body: 'Peta jalan menyatukan pemeriksaan yang biasanya tersebar di berbagai alat ke dalam model, aliran peringatan, dan riwayat insiden yang konsisten.',
      cards: [
        {
          title: 'Pemantauan situs dan API',
          body: 'Verifikasi halaman dan endpoint dari luar, termasuk perilaku respons yang diandalkan pengguna Anda.',
          features: ['Pemeriksaan HTTP dan HTTPS', 'Header dan kode respons', 'Aturan kata kunci dan muatan'],
        },
        {
          title: 'Siklus hidup SSL dan domain',
          body: 'Pantau rantai kepercayaan dan jendela perpanjangan sebelum masalah sertifikat atau domain menjadi gangguan.',
          features: ['Masa berlaku sertifikat', 'Validasi rantai', 'Pantauan perpanjangan domain'],
        },
        {
          title: 'Integritas DNS',
          body: 'Deteksi perubahan rekaman yang tidak diharapkan dan selidiki perbedaan resolusi antarwilayah.',
          features: ['Snapshot rekaman', 'Peringatan perubahan', 'Resolusi regional'],
        },
        {
          title: 'Port dan keterjangkauan jaringan',
          body: 'Awasi layanan yang menghadap internet di luar peramban dan bedakan kegagalan aplikasi dari kegagalan jaringan.',
          features: ['Pemeriksaan port TCP', 'Keterjangkauan lewat ping', 'Kontrol batas waktu'],
        },
        {
          title: 'Detak jantung dan tugas terjadwal',
          body: 'Ketahui saat pencadangan, impor, pekerja antrean, atau proses yang diharapkan berhenti memberi kabar.',
          features: ['Detak jantung cron', 'Masa tenggang', 'Peringatan eksekusi terlewat'],
        },
        {
          title: 'Konten dan perjalanan penting',
          body: 'Pastikan konten penting tetap ada dan bersiap untuk pemeriksaan perjalanan pengguna bertahap.',
          features: ['Keberadaan kata kunci', 'Sinyal perubahan konten', 'Pemeriksaan perjalanan dalam peta jalan'],
        },
      ],
    },
    security: {
      eyebrow: 'Intelijen sertifikat',
      title: 'Jadikan kesehatan sertifikat bagian dari operasi harian.',
      body: 'SSLPing direncanakan untuk menjelaskan letak masalah pada jalur sertifikat, bukan sekadar menghitung hari menuju kedaluwarsa.',
      bullets: ['Validasi nama host, penerbit, rantai, dan status kepercayaan', 'Pantau masa berlaku dan perpanjangan dengan pengingat bertahap', 'Catat pengamatan protokol dan cipher dari waktu ke waktu', 'Tampilkan perubahan sertifikat dalam linimasa insiden'],
      cta: 'Jelajahi pemantauan SSL',
      chain: 'Rantai kepercayaan',
      expiry: 'Jendela perpanjangan',
      protocol: 'Postur protokol',
      transparency: 'Riwayat perubahan',
    },
    network: {
      eyebrow: 'Pemeriksaan global, direncanakan',
      title: 'Bedakan gangguan lokal dari pemadaman regional.',
      body: 'Jaringan pemeriksa yang direncanakan akan membandingkan hasil dari beberapa wilayah sebelum meningkatkan peringatan, sambil menjaga bukti tiap lokasi tetap terlihat untuk penyelidikan.',
      benefits: ['Konfirmasi kegagalan dari lebih dari satu titik pandang', 'Ungkap perbedaan regional pada DNS, perutean, dan CDN', 'Pilih lokasi yang mewakili audiens Anda', 'Simpan bukti mentah lokasi pada setiap insiden'],
      regions: ['Amerika Utara', 'Amerika Selatan', 'Eropa', 'Timur Tengah', 'Asia Pasifik', 'Afrika'],
      caption: 'Wilayah ini hanya ilustrasi peta jalan; lokasi dan ketersediaan pasti belum ditetapkan.',
    },
    workflow: {
      eyebrow: 'Dari sinyal hingga penyelesaian',
      title: 'Siklus insiden lengkap, tanpa tumpukan tab.',
      body: 'Setiap langkah yang direncanakan mempertahankan konteks, kepemilikan, dan cerita yang jelas bagi pelanggan.',
      steps: [
        { title: 'Deteksi', body: 'Jalankan pemeriksaan eksternal, jaringan, sertifikat, atau detak jantung yang tepat.' },
        { title: 'Konfirmasi', body: 'Periksa ulang dan bandingkan lokasi untuk mengurangi gangguan dari kegagalan sesaat.' },
        { title: 'Perkaya', body: 'Lampirkan waktu, DNS, TLS, respons, dan bukti perubahan terbaru.' },
        { title: 'Arahkan', body: 'Kirim peringatan kepada penanggung jawab melalui kanal pilihannya.' },
        { title: 'Komunikasikan', body: 'Terbitkan pembaruan insiden yang jelas pada halaman status terkait.' },
        { title: 'Pelajari', body: 'Tinjau linimasa, dampak, dan tindak lanjut setelah pemulihan.' },
      ],
    },
    status: {
      eyebrow: 'Komunikasi pelanggan',
      title: 'Ubah keadaan monitor menjadi halaman status yang dapat dipercaya.',
      body: 'Halaman status yang direncanakan akan menghubungkan monitor pilihan, pemeliharaan, dan pembaruan buatan manusia dalam satu tampilan publik yang mudah diakses.',
      bullets: ['Opsi merek dan domain khusus', 'Status per komponen dan riwayat insiden', 'Pemberitahuan pemeliharaan dan pembaruan pelanggan', 'Kontrol publik, privat, dan pengindeksan pencarian'],
      cta: 'Pratinjau halaman status',
      previewTitle: 'Status layanan SSLPing',
      previewStatus: 'Semua sistem pratinjau beroperasi',
      previewIncident: 'Tidak ada insiden pratinjau aktif',
    },
    analytics: {
      eyebrow: 'Bukti, bukan metrik untuk pamer',
      title: 'Pahami tren keandalan dan peristiwa di baliknya.',
      body: 'Peta jalan analitik menggabungkan kesehatan layanan, perilaku respons, risiko SSL, dan riwayat insiden tanpa menyembunyikan pemeriksaan sumbernya.',
      labels: { uptime: 'Ketersediaan', latency: 'Waktu respons', sslRisk: 'Risiko SSL', incidents: 'Insiden' },
      bullets: ['Periode laporan fleksibel dan linimasa yang mengikuti zona waktu', 'Perbandingan wilayah dan monitor', 'Bukti yang dapat diekspor untuk tinjauan dan audit', 'Anotasi penerapan dan pemeliharaan'],
    },
    integrations: {
      eyebrow: 'Cocok dengan alur kerja Anda',
      title: 'Kirim sinyal ke alat yang sudah dipantau tim Anda.',
      body: 'Konektor ini merupakan kandidat peta jalan, bukan klaim integrasi yang sudah tersedia. Masukan pengguna awal akan menentukan prioritas.',
      groups: [
        { title: 'Percakapan dan kolaborasi', items: ['Slack', 'Microsoft Teams', 'Discord', 'Google Chat'] },
        { title: 'Petugas siaga dan insiden', items: ['PagerDuty', 'Opsgenie', 'Email', 'SMS dan suara'] },
        { title: 'Otomatisasi', items: ['Webhook', 'Zapier', 'n8n', 'Alur kerja khusus'] },
        { title: 'Alat pengembang', items: ['REST API', 'Baris perintah', 'Terraform', 'MCP'] },
      ],
      badge: 'Pratinjau peta jalan integrasi',
    },
    mobile: {
      eyebrow: 'Respons seluler, direncanakan',
      title: 'Bawa ruang insiden, bukan seluruh dasbor.',
      body: 'Aplikasi khusus iOS dan Android direncanakan untuk peringatan terfokus, pengakuan, konteks monitor, dan pembaruan status saat bepergian.',
      bullets: ['Notifikasi push yang dapat ditindaklanjuti', 'Akui dan tetapkan insiden', 'Jeda pemeriksaan selama pemeliharaan', 'Susun dan terbitkan pembaruan status'],
      ios: 'Peta jalan aplikasi iOS',
      android: 'Peta jalan aplikasi Android',
      coming: 'Direncanakan — belum tersedia di toko aplikasi',
    },
    useCases: {
      eyebrow: 'Untuk beragam kenyataan operasional',
      title: 'Mulai dengan sederhana, pertahankan konteks saat sistem tumbuh.',
      body: 'Model pemantauan yang sama dapat mendukung proyek pribadi, portofolio klien, atau tim platform terdistribusi.',
      cards: [
        { title: 'SaaS dan API', body: 'Pantau perjalanan publik, dependensi, sertifikat, dan komponen layanan dari satu tampilan insiden.' },
        { title: 'Agensi dan portofolio', body: 'Atur monitor, kepemilikan, peringatan, dan komunikasi bermerek per klien tanpa mencampur audiens.' },
        { title: 'Perdagangan dan kampanye', body: 'Lindungi checkout, halaman arahan, DNS, dan dependensi pihak ketiga selama periode penting bisnis.' },
        { title: 'Infrastruktur dan operasi', body: 'Gabungkan keterjangkauan jaringan, port, tugas, pemeliharaan, dan bukti eskalasi.' },
      ],
    },
    pricing: {
      eyebrow: 'Konsep harga',
      title: 'Jalur dari monitor pertama hingga operasi kompleks.',
      body: 'Tingkatan berikut menunjukkan arah produk. Nama, batas, ketersediaan, dan harga akhir akan divalidasi sebelum peluncuran.',
      monthly: 'Pratinjau harga peta jalan',
      plans: [
        {
          name: 'Gratis',
          price: 'Pratinjau gratis',
          description: 'Untuk mempelajari alur dan mengawasi proyek pribadi kecil.',
          features: ['Pemeriksaan ketersediaan inti', 'Pantauan masa berlaku SSL', 'Peringatan email', 'Halaman status dasar'],
          cta: 'Buat akun gratis',
        },
        {
          name: 'Pembuat',
          price: 'Akan diumumkan',
          description: 'Untuk pembuat dan produk berkembang yang memerlukan konteks cepat dan otomatisasi.',
          features: ['Lebih banyak jenis monitor', 'Pemeriksaan regional', 'Integrasi alur kerja', 'Riwayat lebih panjang'],
          cta: 'Daftarkan minat',
          featured: true,
        },
        {
          name: 'Tim',
          price: 'Akan diumumkan',
          description: 'Untuk kepemilikan bersama, koordinasi insiden, dan beberapa layanan.',
          features: ['Peran tim', 'Kebijakan eskalasi', 'Beberapa halaman status', 'Ekspor ramah audit'],
          cta: 'Daftarkan minat tim',
        },
        {
          name: 'Perusahaan',
          price: 'Proposal khusus',
          description: 'Untuk kebutuhan tata kelola, penerapan, dukungan, dan skala tingkat lanjut.',
          features: ['Kontrol akses', 'SSO dalam peta jalan', 'Opsi retensi khusus', 'Orientasi terpandu'],
          cta: 'Bahas kebutuhan',
        },
      ],
      note: 'Hanya pratinjau peta jalan. Paket, harga, kuota, atau tanggal rilis yang ditampilkan bukan komitmen komersial.',
    },
    faq: {
      eyebrow: 'Pertanyaan umum',
      title: 'Jawaban jelas tentang peta jalan SSLPing.',
      items: [
        { question: 'Apa saja yang akan dipantau SSLPing?', answer: 'Peta jalan mencakup situs, API, sertifikat SSL, domain, rekaman DNS, keterjangkauan jaringan, port TCP, detak jantung, tugas terjadwal, aturan konten, dan kemudian perjalanan penting.' },
        { question: 'Bagaimana pemeriksaan akan bekerja?', answer: 'Monitor akan berjalan dari satu atau beberapa lokasi pilihan, menyimpan hasil dan bukti waktu, mengonfirmasi kegagalan bila sesuai, lalu membuka atau memperbarui insiden menurut kebijakannya.' },
        { question: 'Bagaimana SSLPing mengurangi peringatan palsu?', answer: 'Rancangannya memakai pemeriksaan konfirmasi, perbandingan lokasi, batas waktu yang dapat diatur, jendela pemeliharaan, dan aturan pemulihan. Perilaku pastinya akan diuji sebelum peluncuran.' },
        { question: 'Apakah akan diperiksa lebih dari masa berlaku sertifikat?', answer: 'Ya. Peta jalan sertifikat mencakup nama host, penerbit, rantai kepercayaan, postur protokol, riwayat perubahan, dan konteks perpanjangan.' },
        { question: 'Bisakah saya memantau dari wilayah tertentu?', answer: 'Pemilihan lokasi dan konfirmasi multiwilayah direncanakan. Peta pada halaman ini hanya ilustrasi; kota dan penyedia pasti belum ditetapkan.' },
        { question: 'Apakah halaman status dan integrasi akan disertakan?', answer: 'Keduanya merupakan bagian inti peta jalan. Komunikasi publik dan privat, webhook, API, serta konektor pihak ketiga akan dirilis bertahap dan divalidasi bersama pengguna awal.' },
        { question: 'Apakah layanan pemantauan sudah tersedia sekarang?', answer: 'Ya. Backend pemantauan, dasbor, dan pendaftaran akun sudah live. Buat ruang kerja lalu tambahkan monitor pertama; aplikasi seluler dan beberapa kemampuan lanjutan akan hadir bertahap.' },
      ],
    },
    final: {
      eyebrow: 'Mulai memantau sekarang',
      title: 'Buat akun dan jalankan pemeriksaan live pertama Anda.',
      body: 'Buat akun dan ruang kerja di dasbor, lalu tambahkan monitor live pertama Anda. Setelah itu, beri tahu pemeriksaan, wilayah, dan alur kerja yang perlu hadir berikutnya.',
      placeholder: 'anda@perusahaan.com',
      primary: 'Buat akun gratis',
      secondary: 'Baca peta jalan',
    },
    footer: {
      tagline: 'Platform pemantauan yang lebih luas dan tenang — sudah live dan terus berkembang.',
      columns: [
        { title: 'Platform', links: ['Situs dan API', 'SSL dan domain', 'DNS dan jaringan', 'Detak jantung'] },
        { title: 'Operasi', links: ['Insiden', 'Halaman status', 'Analitik', 'Integrasi'] },
        { title: 'Sumber daya', links: ['Peta jalan', 'Pratinjau dokumentasi', 'Panduan pemantauan', 'Status layanan'] },
        { title: 'Perusahaan', links: ['Tentang SSLPing', 'Kontak', 'Keamanan', 'Aksesibilitas'] },
      ],
      legal: ['Privasi', 'Ketentuan', 'Pemrosesan data', 'Kebijakan cookie'],
      rights: '© 2026 SSLPing. Hak cipta dilindungi.',
      cookieSettings: 'Pengaturan cookie',
    },
    cookies: {
      bannerTitle: 'Privasi Anda, pilihan Anda',
      bannerBody: 'Kami memakai cookie wajib agar pratinjau ini berfungsi. Dengan izin Anda, cookie opsional membantu kami memahami penggunaan dan mengingat preferensi.',
      privacy: 'Baca pemberitahuan privasi',
      reject: 'Tolak yang opsional',
      manage: 'Kelola pilihan',
      accept: 'Terima semua',
      title: 'Preferensi cookie',
      body: 'Pilih kategori opsional yang boleh digunakan SSLPing. Anda dapat mengubah pilihan kapan saja melalui bagian bawah halaman.',
      necessaryTitle: 'Sangat diperlukan',
      necessaryBody: 'Diperlukan untuk keamanan, penyimpanan persetujuan, bahasa, dan fungsi inti situs.',
      alwaysOn: 'Selalu aktif',
      analyticsTitle: 'Analitik',
      analyticsBody: 'Membantu kami memahami penggunaan halaman secara agregat dan memperbaiki presentasi produk.',
      functionalTitle: 'Fungsional',
      functionalBody: 'Mengingat pilihan antarmuka opsional dan fitur presentasi yang ditingkatkan.',
      marketingTitle: 'Pemasaran',
      marketingBody: 'Mendukung pengukuran kampanye dan komunikasi peluncuran yang relevan.',
      gpc: 'Sinyal Global Privacy Control dihormati saat terdeteksi.',
      rejectAll: 'Tolak cookie opsional',
      save: 'Simpan preferensi',
      acceptAll: 'Terima semua cookie',
      close: 'Tutup preferensi cookie',
    },
    support: {
      button: 'Buka bantuan',
      title: 'Bagaimana kami dapat membantu?',
      body: 'Dasbor dan pemantauan inti sudah live. Minta bantuan pendaftaran, bagikan kebutuhan pemantauan, atau baca dokumentasi peta jalan.',
      email: 'Hubungi tim',
      docs: 'Buka pratinjau dokumentasi',
      close: 'Tutup bantuan',
    },
    common: { roadmap: 'Pratinjau peta jalan', learnMore: 'Pelajari lebih lanjut', operational: 'Beroperasi', planned: 'Direncanakan' },
  },
}
