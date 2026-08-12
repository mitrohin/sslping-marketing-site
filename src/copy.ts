export const locales = [
  'ar', 'cs', 'da', 'de', 'el', 'en', 'es', 'fi', 'fil', 'fr', 'he', 'hi', 'hr', 'hu', 'id', 'it',
  'ja', 'ms', 'nl', 'no', 'pl', 'pt', 'ro', 'sk', 'sl', 'sr', 'sv', 'tr', 'uk', 'ur', 'zh-Hant',
] as const

export type Locale = (typeof locales)[number]
export type Direction = 'ltr' | 'rtl'

export const directionForLocale = (locale: Locale): Direction =>
  locale === 'ar' || locale === 'he' || locale === 'ur' ? 'rtl' : 'ltr'

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)

interface TextItem {
  title: string
  body: string
}

interface FaqItem {
  question: string
  answer: string
}

export interface Copy {
  skipLink: string
  nav: {
    directory: string
    how: string
    regions: string
    monitoring: string
    login: string
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    searchLabel: string
    searchPlaceholder: string
    searchButton: string
    trustNote: string
  }
  metrics: {
    services: string
    statusPages: string
    checkLocations: string
  }
  catalog: {
    eyebrow: string
    title: string
    description: string
    searchLabel: string
    filterLabel: string
    all: string
    results: string
    resultSingular: string
    openStatus: string
    verifiedPage: string
    noResults: string
    clear: string
    usFallbackNote: string
  }
  how: {
    eyebrow: string
    title: string
    body: string
    steps: readonly [TextItem, TextItem, TextItem]
  }
  regions: {
    eyebrow: string
    title: string
    body: string
    current: string
  }
  product: {
    eyebrow: string
    title: string
    body: string
    benefits: readonly [string, string, string]
    primary: string
    secondary: string
  }
  faq: {
    eyebrow: string
    title: string
    items: readonly [FaqItem, FaqItem, FaqItem, FaqItem]
  }
  footer: {
    tagline: string
    directory: string
    how: string
    regions: string
    privacy: string
    terms: string
    copyright: string
  }
  menu: {
    open: string
    close: string
  }
  regionSelectorLabel: string
}

export const copy = {
  ar: {
    skipLink: 'الانتقال إلى المحتوى الرئيسي',
    nav: { directory: 'دليل الخدمات', how: 'كيف يعمل', regions: 'المناطق', monitoring: 'راقب خدمتك', login: 'تسجيل الدخول' },
    hero: {
      eyebrow: 'دليل حالات الخدمات العامة',
      title: 'حالة المواقع والخدمات في {region}',
      description: 'اعثر على الخدمات الرقمية المتاحة في منطقتك وانتقل مباشرةً إلى صفحات حالتها العامة لمتابعة الانقطاعات وأعمال الصيانة.',
      searchLabel: 'ابحث في دليل الخدمات',
      searchPlaceholder: 'ابحث عن موقع أو تطبيق أو خدمة…',
      searchButton: 'بحث',
      trustNote: 'يفحص SSLPing اتصال HTTP(S) وعمليات إعادة التوجيه وشهادة TLS كل خمس دقائق من أربعة مواقع موزعة.',
    },
    metrics: { services: 'خدمة مدرجة', statusPages: 'صفحة حالة عامة', checkLocations: 'مواقع فحص موزعة' },
    catalog: {
      eyebrow: 'دليل {region}',
      title: 'صفحات حالة الخدمات في {region}',
      description: 'تصفح الخدمات العامة التي نتحقق منها لهذه المنطقة، ثم افتح صفحة الحالة للحصول على التفاصيل المنشورة.',
      searchLabel: 'البحث عن خدمة', filterLabel: 'تصفية الخدمات', all: 'الكل', results: '{count} نتيجة', resultSingular: '{count} نتيجة',
      openStatus: 'فتح صفحة الحالة', verifiedPage: 'صفحة حالة عامة',
      noResults: 'لم نجد خدمة تطابق بحثك.', clear: 'مسح البحث',
      usFallbackNote: 'لا يتوفر بعد مصدر مخصص للولايات المتحدة. لذلك يعرض النطاق الرئيسي خدمات عالمية واسعة الانتشار مع أقرب صفحة حالة إقليمية باللغة الإنجليزية.',
    },
    how: {
      eyebrow: 'معلومات واضحة', title: 'من البحث إلى صفحة الحالة بثلاث خطوات',
      body: 'يساعدك الدليل على الوصول إلى المصدر المناسب بسرعة من دون أن يوحي بأن بطاقات الدليل تعرض حالة لحظية.',
      steps: [
        { title: 'ابحث عن الخدمة', body: 'اكتب اسم الموقع أو التطبيق أو المزوّد الذي تعتمد عليه.' },
        { title: 'اختر النتيجة الإقليمية', body: 'نعرض النسخة المتاحة للجمهور والأقرب إلى منطقتك.' },
        { title: 'افتح صفحة الحالة', body: 'راجع الحالة والحوادث والصيانة التي تنشرها صفحة الحالة العامة.' },
      ],
    },
    regions: {
      eyebrow: 'تغطية إقليمية', title: 'دليل محلي لكل منطقة ندعمها',
      body: 'اختر منطقتك لتصفح الخدمات المناسبة بلغتك والوصول إلى صفحة الحالة الإقليمية الأقرب.', current: 'المنطقة الحالية',
    },
    product: {
      eyebrow: 'هل تدير خدمة؟', title: 'راقب خدماتك أنت باستخدام SSLPing',
      body: 'أنشئ عمليات مراقبة للخدمات التي تديرها، وانشر صفحة حالة واضحة، واحتفظ بفريقك على اطلاع عند حدوث مشكلة.',
      benefits: ['مراقبة الخدمات التي تملكها', 'صفحة حالة عامة بعلامتك', 'تنبيهات وسجل للحوادث'],
      primary: 'ابدأ المراقبة', secondary: 'تسجيل الدخول',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة', title: 'ما ينبغي معرفته عن الدليل',
      items: [
        { question: 'ماذا تعرض بطاقات الدليل؟', answer: 'تعرض كل بطاقة خدمة عامة مدرجة ورابطًا إلى صفحة حالتها العامة. البطاقة نفسها ليست مؤشر حالة لحظيًا.' },
        { question: 'كيف يتحقق SSLPing من الخدمات؟', answer: 'نجري فحص HTTP(S)، ونتبع عمليات إعادة التوجيه، ونتحقق من TLS كل خمس دقائق من أربعة مواقع موزعة.' },
        { question: 'هل SSLPing تابع للخدمات المدرجة؟', answer: 'لا. هذا دليل مستقل للتوفر؛ وتبقى العلامات التجارية والمحتوى المنشور ملكًا لأصحابها.' },
        { question: 'كيف أراقب موقعي أو خدمتي؟', answer: 'أنشئ حساب SSLPing لإعداد مراقبة خاصة بك ونشر صفحة حالة لجمهورك.' },
      ],
    },
    footer: {
      tagline: 'دليل إقليمي للخدمات العامة وصفحات حالتها.', directory: 'دليل الخدمات', how: 'كيف يعمل', regions: 'المناطق',
      privacy: 'الخصوصية', terms: 'الشروط', copyright: '© {year} SSLPing. جميع الحقوق محفوظة.',
    },
    menu: { open: 'فتح القائمة', close: 'إغلاق القائمة' }, regionSelectorLabel: 'اختر المنطقة',
  },

  cs: {
    skipLink: 'Přejít k hlavnímu obsahu',
    nav: { directory: 'Katalog', how: 'Jak to funguje', regions: 'Regiony', monitoring: 'Monitorovat vlastní službu', login: 'Přihlásit se' },
    hero: {
      eyebrow: 'Katalog veřejných stavů služeb', title: 'Stav webů a služeb v regionu {region}',
      description: 'Najděte online služby dostupné ve vašem regionu a přejděte přímo na jejich veřejné stavové stránky s informacemi o výpadcích a údržbě.',
      searchLabel: 'Hledat v katalogu služeb', searchPlaceholder: 'Hledejte web, aplikaci nebo službu…', searchButton: 'Hledat',
      trustNote: 'SSLPing každých pět minut ze čtyř distribuovaných míst kontroluje HTTP(S), přesměrování a TLS.',
    },
    metrics: { services: 'zařazených služeb', statusPages: 'veřejných stavových stránek', checkLocations: 'distribuovaná kontrolní místa' },
    catalog: {
      eyebrow: 'Katalog pro {region}', title: 'Stavové stránky služeb v regionu {region}',
      description: 'Procházejte veřejné služby, které pro tento region kontrolujeme, a otevřete jejich stavovou stránku s publikovanými podrobnostmi.',
      searchLabel: 'Hledat službu', filterLabel: 'Filtrovat služby', all: 'Vše', results: 'Počet výsledků: {count}', resultSingular: '{count} výsledek',
      openStatus: 'Otevřít stavovou stránku', verifiedPage: 'Veřejná stavová stránka', noResults: 'Vašemu hledání neodpovídá žádná služba.', clear: 'Vymazat hledání',
      usFallbackNote: 'Samostatný zdroj pro USA zatím není k dispozici. Hlavní doména proto zobrazuje široce dostupné globální služby s nejbližší anglickou regionální stavovou stránkou.',
    },
    how: {
      eyebrow: 'Srozumitelný kontext', title: 'Od hledání ke stavové stránce ve třech krocích',
      body: 'Katalog vás rychle dovede ke správnému zdroji, aniž by naznačoval, že jeho karty ukazují stav v reálném čase.',
      steps: [
        { title: 'Najděte službu', body: 'Zadejte název webu, aplikace nebo poskytovatele, kterého používáte.' },
        { title: 'Vyberte regionální výsledek', body: 'Ukážeme veřejně dostupnou variantu, která je vašemu regionu nejbližší.' },
        { title: 'Otevřete stavovou stránku', body: 'Prohlédněte si stav, incidenty a údržbu zveřejněné na veřejné stavové stránce.' },
      ],
    },
    regions: { eyebrow: 'Regionální pokrytí', title: 'Místní katalog pro každý podporovaný region', body: 'Vyberte svůj region a procházejte relevantní služby ve svém jazyce s odkazem na nejbližší regionální stavovou stránku.', current: 'Aktuální region' },
    product: {
      eyebrow: 'Provozujete vlastní službu?', title: 'Monitorujte své služby pomocí SSLPing',
      body: 'Nastavte monitoring služeb, které provozujete, zveřejněte přehlednou stavovou stránku a při problému informujte svůj tým.',
      benefits: ['Monitoring vlastních služeb', 'Veřejná stavová stránka s vaší značkou', 'Upozornění a historie incidentů'], primary: 'Spustit monitoring', secondary: 'Přihlásit se',
    },
    faq: {
      eyebrow: 'Časté otázky', title: 'Co je dobré vědět o katalogu',
      items: [
        { question: 'Co ukazují karty v katalogu?', answer: 'Každá karta představuje zařazenou veřejnou službu a odkazuje na její veřejnou stavovou stránku. Samotná karta není ukazatelem stavu v reálném čase.' },
        { question: 'Jak SSLPing služby kontroluje?', answer: 'Každých pět minut ze čtyř distribuovaných míst kontrolujeme HTTP(S), přesměrování a TLS.' },
        { question: 'Je SSLPing spojený s uvedenými službami?', answer: 'Ne. Jde o nezávislý katalog dostupnosti; ochranné známky i publikovaný obsah patří jejich vlastníkům.' },
        { question: 'Jak mohu monitorovat vlastní web nebo službu?', answer: 'Vytvořte si účet SSLPing, nastavte vlastní monitoring a publikujte stavovou stránku pro své uživatele.' },
      ],
    },
    footer: { tagline: 'Regionální katalog veřejných služeb a jejich stavových stránek.', directory: 'Katalog', how: 'Jak to funguje', regions: 'Regiony', privacy: 'Soukromí', terms: 'Podmínky', copyright: '© {year} SSLPing. Všechna práva vyhrazena.' },
    menu: { open: 'Otevřít nabídku', close: 'Zavřít nabídku' }, regionSelectorLabel: 'Vybrat region',
  },

  da: {
    skipLink: 'Gå til hovedindhold',
    nav: { directory: 'Tjenestekatalog', how: 'Sådan virker det', regions: 'Regioner', monitoring: 'Overvåg din tjeneste', login: 'Log ind' },
    hero: {
      eyebrow: 'Katalog over offentlige driftsstatusser', title: 'Status for websites og tjenester i {region}',
      description: 'Find onlinetjenester i din region, og gå direkte til deres offentlige statussider med oplysninger om nedbrud og vedligeholdelse.',
      searchLabel: 'Søg i tjenestekataloget', searchPlaceholder: 'Søg efter et website, en app eller en tjeneste…', searchButton: 'Søg',
      trustNote: 'SSLPing kontrollerer HTTP(S), omdirigeringer og TLS hvert femte minut fra fire distribuerede lokationer.',
    },
    metrics: { services: 'registrerede tjenester', statusPages: 'offentlige statussider', checkLocations: 'distribuerede kontrolsteder' },
    catalog: {
      eyebrow: 'Katalog for {region}', title: 'Statussider for tjenester i {region}',
      description: 'Se de offentlige tjenester, vi kontrollerer for regionen, og åbn statussiden for de offentliggjorte oplysninger.',
      searchLabel: 'Søg efter en tjeneste', filterLabel: 'Filtrér tjenester', all: 'Alle', results: '{count} resultater', resultSingular: '{count} resultat', openStatus: 'Åbn statusside', verifiedPage: 'Offentlig statusside',
      noResults: 'Ingen tjenester matcher din søgning.', clear: 'Ryd søgning',
      usFallbackNote: 'En særskilt amerikansk datakilde er endnu ikke tilgængelig. Roddomænet viser derfor globalt udbredte tjenester med den nærmeste engelsksprogede regionale statusside.',
    },
    how: {
      eyebrow: 'Klar sammenhæng', title: 'Fra søgning til statusside i tre trin',
      body: 'Kataloget fører dig hurtigt til den rette kilde uden at antyde, at katalogkortene viser status i realtid.',
      steps: [
        { title: 'Find tjenesten', body: 'Indtast navnet på det website, den app eller den udbyder, du bruger.' },
        { title: 'Vælg det regionale resultat', body: 'Vi viser den offentligt tilgængelige variant, der ligger tættest på din region.' },
        { title: 'Åbn statussiden', body: 'Se status, hændelser og vedligeholdelse, som er offentliggjort på den offentlige statusside.' },
      ],
    },
    regions: { eyebrow: 'Regional dækning', title: 'Et lokalt katalog til hver understøttet region', body: 'Vælg din region for at se relevante tjenester på dit sprog og finde den nærmeste regionale statusside.', current: 'Nuværende region' },
    product: {
      eyebrow: 'Driver du en tjeneste?', title: 'Overvåg dine egne tjenester med SSLPing',
      body: 'Opsæt overvågning af de tjenester, du driver, udgiv en tydelig statusside, og hold dit team orienteret, når noget går galt.',
      benefits: ['Overvågning af dine egne tjenester', 'Offentlig statusside med dit brand', 'Advarsler og hændelseshistorik'], primary: 'Start overvågning', secondary: 'Log ind',
    },
    faq: {
      eyebrow: 'Ofte stillede spørgsmål', title: 'Det skal du vide om kataloget',
      items: [
        { question: 'Hvad viser kortene i kataloget?', answer: 'Hvert kort viser en registreret offentlig tjeneste og linker til dens offentlige statusside. Selve kortet er ikke en statusindikator i realtid.' },
        { question: 'Hvordan kontrollerer SSLPing tjenesterne?', answer: 'Vi kontrollerer HTTP(S), følger omdirigeringer og validerer TLS hvert femte minut fra fire distribuerede lokationer.' },
        { question: 'Er SSLPing tilknyttet de viste tjenester?', answer: 'Nej. Dette er et uafhængigt tilgængelighedskatalog; varemærker og offentliggjort indhold tilhører deres respektive ejere.' },
        { question: 'Hvordan overvåger jeg mit eget website eller min tjeneste?', answer: 'Opret en SSLPing-konto for at opsætte din egen overvågning og udgive en statusside til dine brugere.' },
      ],
    },
    footer: { tagline: 'Et regionalt katalog over offentlige tjenester og deres statussider.', directory: 'Tjenestekatalog', how: 'Sådan virker det', regions: 'Regioner', privacy: 'Privatliv', terms: 'Vilkår', copyright: '© {year} SSLPing. Alle rettigheder forbeholdes.' },
    menu: { open: 'Åbn menu', close: 'Luk menu' }, regionSelectorLabel: 'Vælg region',
  },

  de: {
    skipLink: 'Zum Hauptinhalt springen',
    nav: { directory: 'Verzeichnis', how: 'So funktioniert es', regions: 'Regionen', monitoring: 'Eigenen Dienst überwachen', login: 'Anmelden' },
    hero: {
      eyebrow: 'Verzeichnis öffentlicher Dienststatus', title: 'Website- und Dienststatus in {region}',
      description: 'Finden Sie Onlinedienste für Ihre Region und öffnen Sie direkt deren öffentliche Statusseiten mit Informationen zu Störungen und Wartungen.',
      searchLabel: 'Dienstverzeichnis durchsuchen', searchPlaceholder: 'Website, App oder Dienst suchen…', searchButton: 'Suchen',
      trustNote: 'SSLPing prüft HTTP(S), Weiterleitungen und TLS alle fünf Minuten von vier verteilten Standorten aus.',
    },
    metrics: { services: 'gelistete Dienste', statusPages: 'öffentliche Statusseiten', checkLocations: 'verteilte Prüfstandorte' },
    catalog: {
      eyebrow: 'Verzeichnis für {region}', title: 'Statusseiten für Dienste in {region}',
      description: 'Durchsuchen Sie die öffentlichen Dienste, die wir für diese Region prüfen, und öffnen Sie deren Statusseite für veröffentlichte Details.',
      searchLabel: 'Dienst suchen', filterLabel: 'Dienste filtern', all: 'Alle', results: '{count} Ergebnisse', resultSingular: '{count} Ergebnis', openStatus: 'Statusseite öffnen', verifiedPage: 'Öffentliche Statusseite',
      noResults: 'Keine Dienste entsprechen Ihrer Suche.', clear: 'Suche löschen',
      usFallbackNote: 'Eine eigene US-Datenquelle ist noch nicht verfügbar. Deshalb zeigt die Hauptdomain weltweit verbreitete Dienste mit der nächstgelegenen englischsprachigen regionalen Statusseite.',
    },
    how: {
      eyebrow: 'Klarer Kontext', title: 'In drei Schritten von der Suche zur Statusseite',
      body: 'Das Verzeichnis führt schnell zur passenden Quelle, ohne den Eindruck zu erwecken, dass die Karten einen Echtzeitstatus zeigen.',
      steps: [
        { title: 'Dienst finden', body: 'Geben Sie den Namen der Website, App oder des Anbieters ein, den Sie nutzen.' },
        { title: 'Regionales Ergebnis wählen', body: 'Wir zeigen die öffentlich verfügbare Variante, die Ihrer Region am nächsten liegt.' },
        { title: 'Statusseite öffnen', body: 'Lesen Sie Status-, Störungs- und Wartungsinformationen auf der öffentlichen Statusseite.' },
      ],
    },
    regions: { eyebrow: 'Regionale Abdeckung', title: 'Ein lokales Verzeichnis für jede unterstützte Region', body: 'Wählen Sie Ihre Region, um passende Dienste in Ihrer Sprache zu finden und die nächstgelegene regionale Statusseite aufzurufen.', current: 'Aktuelle Region' },
    product: {
      eyebrow: 'Sie betreiben einen Dienst?', title: 'Überwachen Sie Ihre eigenen Dienste mit SSLPing',
      body: 'Richten Sie Monitoring für Ihre Dienste ein, veröffentlichen Sie eine übersichtliche Statusseite und informieren Sie Ihr Team bei Problemen.',
      benefits: ['Monitoring eigener Dienste', 'Öffentliche Statusseite in Ihrer Marke', 'Benachrichtigungen und Störungsverlauf'], primary: 'Monitoring starten', secondary: 'Anmelden',
    },
    faq: {
      eyebrow: 'Häufige Fragen', title: 'Wissenswertes zum Verzeichnis',
      items: [
        { question: 'Was zeigen die Karten im Verzeichnis?', answer: 'Jede Karte steht für einen gelisteten öffentlichen Dienst und verlinkt auf dessen öffentliche Statusseite. Die Karte selbst ist keine Echtzeit-Statusanzeige.' },
        { question: 'Wie prüft SSLPing die Dienste?', answer: 'Wir prüfen HTTP(S), folgen Weiterleitungen und validieren TLS alle fünf Minuten von vier verteilten Standorten aus.' },
        { question: 'Ist SSLPing mit den gelisteten Diensten verbunden?', answer: 'Nein. Dies ist ein unabhängiges Verfügbarkeitsverzeichnis; Marken und veröffentlichte Inhalte gehören den jeweiligen Eigentümern.' },
        { question: 'Wie überwache ich meine eigene Website oder meinen Dienst?', answer: 'Erstellen Sie ein SSLPing-Konto, richten Sie Ihr Monitoring ein und veröffentlichen Sie eine Statusseite für Ihre Nutzer.' },
      ],
    },
    footer: { tagline: 'Das regionale Verzeichnis öffentlicher Dienste und ihrer Statusseiten.', directory: 'Verzeichnis', how: 'So funktioniert es', regions: 'Regionen', privacy: 'Datenschutz', terms: 'Bedingungen', copyright: '© {year} SSLPing. Alle Rechte vorbehalten.' },
    menu: { open: 'Menü öffnen', close: 'Menü schließen' }, regionSelectorLabel: 'Region auswählen',
  },

  en: {
    skipLink: 'Skip to main content',
    nav: { directory: 'Service directory', how: 'How it works', regions: 'Regions', monitoring: 'Monitor your service', login: 'Log in' },
    hero: {
      eyebrow: 'Public service status directory', title: 'Website and service status in {region}',
      description: 'Find online services available in your region and go straight to their public status pages for outage and maintenance information.',
      searchLabel: 'Search the service directory', searchPlaceholder: 'Search for a website, app, or service…', searchButton: 'Search',
      trustNote: 'SSLPing checks HTTP(S), redirects, and TLS every five minutes from four distributed locations.',
    },
    metrics: { services: 'services listed', statusPages: 'public status pages', checkLocations: 'distributed check locations' },
    catalog: {
      eyebrow: '{region} directory', title: 'Service status pages for {region}',
      description: 'Browse the public services we check for this region, then open a status page for the details its publisher provides.',
      searchLabel: 'Search for a service', filterLabel: 'Filter services', all: 'All', results: '{count} results', resultSingular: '{count} result', openStatus: 'Open status page', verifiedPage: 'Public status page',
      noResults: 'No services match your search.', clear: 'Clear search',
      usFallbackNote: 'A dedicated US source is not yet available. The root domain therefore shows widely available global services with the closest English regional status page.',
    },
    how: {
      eyebrow: 'Clear context', title: 'From search to status page in three steps',
      body: 'The directory gets you to the right source quickly without implying that directory cards show real-time status.',
      steps: [
        { title: 'Find the service', body: 'Enter the name of the website, app, or provider you rely on.' },
        { title: 'Choose the regional result', body: 'We show the publicly available version closest to your region.' },
        { title: 'Open the status page', body: 'Review the status, incidents, and maintenance published on the public status page.' },
      ],
    },
    regions: { eyebrow: 'Regional coverage', title: 'A local directory for every supported region', body: 'Choose your region to browse relevant services in your language and reach the closest regional status page.', current: 'Current region' },
    product: {
      eyebrow: 'Run a service?', title: 'Monitor your own services with SSLPing',
      body: 'Set up monitoring for the services you operate, publish a clear status page, and keep your team informed when something goes wrong.',
      benefits: ['Monitoring for services you own', 'A branded public status page', 'Alerts and incident history'], primary: 'Start monitoring', secondary: 'Log in',
    },
    faq: {
      eyebrow: 'Frequently asked questions', title: 'What to know about the directory',
      items: [
        { question: 'What do the directory cards show?', answer: 'Each card identifies a listed public service and links to its public status page. The card itself is not a real-time status indicator.' },
        { question: 'How does SSLPing check services?', answer: 'We check HTTP(S), follow redirects, and validate TLS every five minutes from four distributed locations.' },
        { question: 'Is SSLPing affiliated with the listed services?', answer: 'No. This is an independent availability directory; trademarks and published content belong to their respective owners.' },
        { question: 'How can I monitor my own website or service?', answer: 'Create an SSLPing account to set up your own monitoring and publish a status page for your users.' },
      ],
    },
    footer: { tagline: 'A regional directory of public services and their status pages.', directory: 'Service directory', how: 'How it works', regions: 'Regions', privacy: 'Privacy', terms: 'Terms', copyright: '© {year} SSLPing. All rights reserved.' },
    menu: { open: 'Open menu', close: 'Close menu' }, regionSelectorLabel: 'Choose region',
  },

  el: {
    skipLink: 'Μετάβαση στο κύριο περιεχόμενο',
    nav: { directory: 'Κατάλογος υπηρεσιών', how: 'Πώς λειτουργεί', regions: 'Περιοχές', monitoring: 'Παρακολούθηση της υπηρεσίας σας', login: 'Σύνδεση' },
    hero: {
      eyebrow: 'Κατάλογος δημόσιας κατάστασης υπηρεσιών', title: 'Κατάσταση ιστοτόπων και υπηρεσιών στην περιοχή {region}',
      description: 'Βρείτε διαδικτυακές υπηρεσίες που είναι διαθέσιμες στην περιοχή σας και μεταβείτε απευθείας στις δημόσιες σελίδες κατάστασής τους για πληροφορίες σχετικά με διακοπές και συντήρηση.',
      searchLabel: 'Αναζήτηση στον κατάλογο υπηρεσιών', searchPlaceholder: 'Αναζητήστε ιστότοπο, εφαρμογή ή υπηρεσία…', searchButton: 'Αναζήτηση',
      trustNote: 'Το SSLPing ελέγχει HTTP(S), ανακατευθύνσεις και TLS κάθε πέντε λεπτά από τέσσερις κατανεμημένες τοποθεσίες.',
    },
    metrics: { services: 'καταχωρισμένες υπηρεσίες', statusPages: 'δημόσιες σελίδες κατάστασης', checkLocations: 'κατανεμημένες τοποθεσίες ελέγχου' },
    catalog: {
      eyebrow: 'Κατάλογος για {region}', title: 'Σελίδες κατάστασης υπηρεσιών για {region}',
      description: 'Περιηγηθείτε στις δημόσιες υπηρεσίες που ελέγχουμε για αυτή την περιοχή και ανοίξτε τη σελίδα κατάστασης για τις δημοσιευμένες λεπτομέρειες.',
      searchLabel: 'Αναζήτηση υπηρεσίας', filterLabel: 'Φιλτράρισμα υπηρεσιών', all: 'Όλες', results: '{count} αποτελέσματα', resultSingular: '{count} αποτέλεσμα', openStatus: 'Άνοιγμα σελίδας κατάστασης', verifiedPage: 'Δημόσια σελίδα κατάστασης',
      noResults: 'Καμία υπηρεσία δεν ταιριάζει στην αναζήτησή σας.', clear: 'Εκκαθάριση αναζήτησης',
      usFallbackNote: 'Δεν υπάρχει ακόμη ειδική πηγή για τις ΗΠΑ. Γι’ αυτό, ο κύριος τομέας εμφανίζει ευρέως διαθέσιμες παγκόσμιες υπηρεσίες με την πλησιέστερη αγγλόφωνη περιφερειακή σελίδα κατάστασης.',
    },
    how: {
      eyebrow: 'Σαφές πλαίσιο', title: 'Από την αναζήτηση στη σελίδα κατάστασης σε τρία βήματα',
      body: 'Ο κατάλογος σας οδηγεί γρήγορα στη σωστή πηγή, χωρίς να υπονοεί ότι οι κάρτες εμφανίζουν κατάσταση σε πραγματικό χρόνο.',
      steps: [
        { title: 'Βρείτε την υπηρεσία', body: 'Πληκτρολογήστε το όνομα του ιστοτόπου, της εφαρμογής ή του παρόχου που χρησιμοποιείτε.' },
        { title: 'Επιλέξτε το περιφερειακό αποτέλεσμα', body: 'Εμφανίζουμε τη δημόσια διαθέσιμη έκδοση που βρίσκεται πιο κοντά στην περιοχή σας.' },
        { title: 'Ανοίξτε τη σελίδα κατάστασης', body: 'Δείτε την κατάσταση, τα συμβάντα και τη συντήρηση που δημοσιεύονται στη δημόσια σελίδα κατάστασης.' },
      ],
    },
    regions: { eyebrow: 'Περιφερειακή κάλυψη', title: 'Τοπικός κατάλογος για κάθε υποστηριζόμενη περιοχή', body: 'Επιλέξτε την περιοχή σας για να δείτε σχετικές υπηρεσίες στη γλώσσα σας και να ανοίξετε την πλησιέστερη περιφερειακή σελίδα κατάστασης.', current: 'Τρέχουσα περιοχή' },
    product: {
      eyebrow: 'Διαχειρίζεστε μια υπηρεσία;', title: 'Παρακολουθήστε τις δικές σας υπηρεσίες με το SSLPing',
      body: 'Ρυθμίστε παρακολούθηση για τις υπηρεσίες που λειτουργείτε, δημοσιεύστε μια σαφή σελίδα κατάστασης και ενημερώνετε την ομάδα σας όταν προκύπτει πρόβλημα.',
      benefits: ['Παρακολούθηση των δικών σας υπηρεσιών', 'Δημόσια σελίδα κατάστασης με την επωνυμία σας', 'Ειδοποιήσεις και ιστορικό συμβάντων'], primary: 'Έναρξη παρακολούθησης', secondary: 'Σύνδεση',
    },
    faq: {
      eyebrow: 'Συχνές ερωτήσεις', title: 'Τι πρέπει να γνωρίζετε για τον κατάλογο',
      items: [
        { question: 'Τι εμφανίζουν οι κάρτες του καταλόγου;', answer: 'Κάθε κάρτα προσδιορίζει μια καταχωρισμένη δημόσια υπηρεσία και συνδέεται με τη δημόσια σελίδα κατάστασής της. Η ίδια η κάρτα δεν είναι ένδειξη κατάστασης σε πραγματικό χρόνο.' },
        { question: 'Πώς ελέγχει το SSLPing τις υπηρεσίες;', answer: 'Ελέγχουμε HTTP(S), ακολουθούμε ανακατευθύνσεις και επαληθεύουμε TLS κάθε πέντε λεπτά από τέσσερις κατανεμημένες τοποθεσίες.' },
        { question: 'Συνδέεται το SSLPing με τις καταχωρισμένες υπηρεσίες;', answer: 'Όχι. Πρόκειται για ανεξάρτητο κατάλογο διαθεσιμότητας· τα εμπορικά σήματα και το δημοσιευμένο περιεχόμενο ανήκουν στους αντίστοιχους κατόχους.' },
        { question: 'Πώς μπορώ να παρακολουθώ τον δικό μου ιστότοπο ή υπηρεσία;', answer: 'Δημιουργήστε λογαριασμό SSLPing για να ρυθμίσετε τη δική σας παρακολούθηση και να δημοσιεύσετε μια σελίδα κατάστασης για τους χρήστες σας.' },
      ],
    },
    footer: { tagline: 'Περιφερειακός κατάλογος δημόσιων υπηρεσιών και των σελίδων κατάστασής τους.', directory: 'Κατάλογος υπηρεσιών', how: 'Πώς λειτουργεί', regions: 'Περιοχές', privacy: 'Απόρρητο', terms: 'Όροι', copyright: '© {year} SSLPing. Με επιφύλαξη παντός δικαιώματος.' },
    menu: { open: 'Άνοιγμα μενού', close: 'Κλείσιμο μενού' }, regionSelectorLabel: 'Επιλογή περιοχής',
  },

  es: {
    skipLink: 'Ir al contenido principal',
    nav: { directory: 'Directorio de servicios', how: 'Cómo funciona', regions: 'Regiones', monitoring: 'Monitoriza tu servicio', login: 'Iniciar sesión' },
    hero: {
      eyebrow: 'Directorio público del estado de servicios', title: 'Estado de sitios web y servicios en {region}',
      description: 'Encuentra servicios en línea disponibles en tu región y accede directamente a sus páginas públicas de estado para consultar interrupciones y mantenimiento.',
      searchLabel: 'Buscar en el directorio de servicios', searchPlaceholder: 'Busca un sitio web, una aplicación o un servicio…', searchButton: 'Buscar',
      trustNote: 'SSLPing comprueba HTTP(S), redirecciones y TLS cada cinco minutos desde cuatro ubicaciones distribuidas.',
    },
    metrics: { services: 'servicios incluidos', statusPages: 'páginas públicas de estado', checkLocations: 'ubicaciones de comprobación distribuidas' },
    catalog: {
      eyebrow: 'Directorio de {region}', title: 'Páginas de estado de servicios en {region}',
      description: 'Explora los servicios públicos que comprobamos para esta región y abre su página de estado para ver los detalles publicados.',
      searchLabel: 'Buscar un servicio', filterLabel: 'Filtrar servicios', all: 'Todos', results: '{count} resultados', resultSingular: '{count} resultado', openStatus: 'Abrir página de estado', verifiedPage: 'Página pública de estado',
      noResults: 'Ningún servicio coincide con tu búsqueda.', clear: 'Borrar búsqueda',
      usFallbackNote: 'Todavía no hay una fuente específica para Estados Unidos. Por eso, el dominio principal muestra servicios globales de amplia disponibilidad con la página de estado regional en inglés más cercana.',
    },
    how: {
      eyebrow: 'Contexto claro', title: 'De la búsqueda a la página de estado en tres pasos',
      body: 'El directorio te lleva rápidamente a la fuente adecuada sin dar a entender que sus tarjetas muestran el estado en tiempo real.',
      steps: [
        { title: 'Encuentra el servicio', body: 'Escribe el nombre del sitio web, la aplicación o el proveedor que utilizas.' },
        { title: 'Elige el resultado regional', body: 'Mostramos la versión pública disponible más cercana a tu región.' },
        { title: 'Abre la página de estado', body: 'Consulta el estado, los incidentes y el mantenimiento publicados en la página pública.' },
      ],
    },
    regions: { eyebrow: 'Cobertura regional', title: 'Un directorio local para cada región compatible', body: 'Elige tu región para explorar servicios relevantes en tu idioma y acceder a la página de estado regional más cercana.', current: 'Región actual' },
    product: {
      eyebrow: '¿Gestionas un servicio?', title: 'Monitoriza tus propios servicios con SSLPing',
      body: 'Configura la monitorización de los servicios que gestionas, publica una página de estado clara y mantén informado a tu equipo cuando haya un problema.',
      benefits: ['Monitorización de tus propios servicios', 'Página pública de estado con tu marca', 'Alertas e historial de incidentes'], primary: 'Empezar a monitorizar', secondary: 'Iniciar sesión',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes', title: 'Lo que debes saber sobre el directorio',
      items: [
        { question: '¿Qué muestran las tarjetas del directorio?', answer: 'Cada tarjeta identifica un servicio público incluido y enlaza con su página pública de estado. La tarjeta en sí no es un indicador de estado en tiempo real.' },
        { question: '¿Cómo comprueba SSLPing los servicios?', answer: 'Comprobamos HTTP(S), seguimos las redirecciones y validamos TLS cada cinco minutos desde cuatro ubicaciones distribuidas.' },
        { question: '¿SSLPing está asociado con los servicios incluidos?', answer: 'No. Es un directorio independiente de disponibilidad; las marcas y el contenido publicado pertenecen a sus respectivos propietarios.' },
        { question: '¿Cómo puedo monitorizar mi sitio web o servicio?', answer: 'Crea una cuenta de SSLPing para configurar tu propia monitorización y publicar una página de estado para tus usuarios.' },
      ],
    },
    footer: { tagline: 'Un directorio regional de servicios públicos y sus páginas de estado.', directory: 'Directorio de servicios', how: 'Cómo funciona', regions: 'Regiones', privacy: 'Privacidad', terms: 'Condiciones', copyright: '© {year} SSLPing. Todos los derechos reservados.' },
    menu: { open: 'Abrir menú', close: 'Cerrar menú' }, regionSelectorLabel: 'Elegir región',
  },

  fi: {
    skipLink: 'Siirry pääsisältöön',
    nav: { directory: 'Palveluhakemisto', how: 'Näin se toimii', regions: 'Alueet', monitoring: 'Valvo omaa palveluasi', login: 'Kirjaudu' },
    hero: {
      eyebrow: 'Julkisten palvelutilojen hakemisto', title: 'Verkkosivustojen ja palvelujen tila alueella {region}',
      description: 'Löydä alueellasi saatavilla olevat verkkopalvelut ja siirry suoraan niiden julkisille tilasivuille tarkistamaan häiriöt ja huollot.',
      searchLabel: 'Hae palveluhakemistosta', searchPlaceholder: 'Hae sivustoa, sovellusta tai palvelua…', searchButton: 'Hae',
      trustNote: 'SSLPing tarkistaa HTTP(S)-yhteydet, uudelleenohjaukset ja TLS:n viiden minuutin välein neljästä hajautetusta sijainnista.',
    },
    metrics: { services: 'listattua palvelua', statusPages: 'julkista tilasivua', checkLocations: 'hajautettua tarkistussijaintia' },
    catalog: {
      eyebrow: 'Alueen {region} hakemisto', title: 'Palvelujen tilasivut alueella {region}',
      description: 'Selaa tälle alueelle tarkistamiamme julkisia palveluja ja avaa tilasivu nähdäksesi sen julkaisemat tiedot.',
      searchLabel: 'Hae palvelua', filterLabel: 'Suodata palveluja', all: 'Kaikki', results: '{count} tulosta', resultSingular: '{count} tulos', openStatus: 'Avaa tilasivu', verifiedPage: 'Julkinen tilasivu',
      noResults: 'Hakua vastaavia palveluja ei löytynyt.', clear: 'Tyhjennä haku',
      usFallbackNote: 'Yhdysvalloille ei ole vielä omaa tietolähdettä. Pääverkkotunnus näyttää siksi laajasti saatavilla olevia kansainvälisiä palveluja ja lähimmän englanninkielisen alueellisen tilasivun.',
    },
    how: {
      eyebrow: 'Selkeä yhteys', title: 'Hausta tilasivulle kolmessa vaiheessa',
      body: 'Hakemisto ohjaa nopeasti oikealle lähteelle antamatta ymmärtää, että hakemistokortit näyttävät reaaliaikaista tilaa.',
      steps: [
        { title: 'Etsi palvelu', body: 'Kirjoita käyttämäsi sivuston, sovelluksen tai palveluntarjoajan nimi.' },
        { title: 'Valitse alueellinen tulos', body: 'Näytämme julkisesti saatavilla olevan vaihtoehdon, joka on lähinnä aluettasi.' },
        { title: 'Avaa tilasivu', body: 'Tarkista julkisella tilasivulla julkaistut tila-, häiriö- ja huoltotiedot.' },
      ],
    },
    regions: { eyebrow: 'Alueellinen kattavuus', title: 'Paikallinen hakemisto jokaiselle tuetulle alueelle', body: 'Valitse alueesi, niin voit selata olennaisia palveluja omalla kielelläsi ja avata lähimmän alueellisen tilasivun.', current: 'Nykyinen alue' },
    product: {
      eyebrow: 'Ylläpidätkö palvelua?', title: 'Valvo omia palvelujasi SSLPingillä',
      body: 'Määritä ylläpitämiesi palvelujen valvonta, julkaise selkeä tilasivu ja pidä tiimisi ajan tasalla ongelmatilanteissa.',
      benefits: ['Omien palvelujen valvonta', 'Brändätty julkinen tilasivu', 'Hälytykset ja häiriöhistoria'], primary: 'Aloita valvonta', secondary: 'Kirjaudu',
    },
    faq: {
      eyebrow: 'Usein kysyttyä', title: 'Mitä hakemistosta on hyvä tietää',
      items: [
        { question: 'Mitä hakemiston kortit näyttävät?', answer: 'Jokainen kortti kertoo listatusta julkisesta palvelusta ja linkittää sen julkiselle tilasivulle. Kortti itsessään ei ole reaaliaikainen tilailmaisin.' },
        { question: 'Miten SSLPing tarkistaa palvelut?', answer: 'Tarkistamme HTTP(S)-yhteydet, seuraamme uudelleenohjauksia ja validoimme TLS:n viiden minuutin välein neljästä hajautetusta sijainnista.' },
        { question: 'Onko SSLPing sidoksissa listattuihin palveluihin?', answer: 'Ei. Tämä on riippumaton saatavuushakemisto; tavaramerkit ja julkaistu sisältö kuuluvat omistajilleen.' },
        { question: 'Miten voin valvoa omaa sivustoani tai palveluani?', answer: 'Luo SSLPing-tili, määritä oma valvontasi ja julkaise tilasivu käyttäjillesi.' },
      ],
    },
    footer: { tagline: 'Alueellinen hakemisto julkisille palveluille ja niiden tilasivuille.', directory: 'Palveluhakemisto', how: 'Näin se toimii', regions: 'Alueet', privacy: 'Tietosuoja', terms: 'Käyttöehdot', copyright: '© {year} SSLPing. Kaikki oikeudet pidätetään.' },
    menu: { open: 'Avaa valikko', close: 'Sulje valikko' }, regionSelectorLabel: 'Valitse alue',
  },

  fil: {
    skipLink: 'Lumaktaw sa pangunahing nilalaman',
    nav: { directory: 'Direktoryo ng serbisyo', how: 'Paano ito gumagana', regions: 'Mga rehiyon', monitoring: 'I-monitor ang serbisyo mo', login: 'Mag-log in' },
    hero: {
      eyebrow: 'Direktoryo ng pampublikong status ng serbisyo', title: 'Status ng mga website at serbisyo sa {region}',
      description: 'Hanapin ang mga online na serbisyong available sa rehiyon mo at dumiretso sa kanilang pampublikong status page para sa impormasyon tungkol sa outage at maintenance.',
      searchLabel: 'Maghanap sa direktoryo ng serbisyo', searchPlaceholder: 'Maghanap ng website, app, o serbisyo…', searchButton: 'Maghanap',
      trustNote: 'Sinusuri ng SSLPing ang HTTP(S), mga redirect, at TLS kada limang minuto mula sa apat na distributed na lokasyon.',
    },
    metrics: { services: 'serbisyong nakalista', statusPages: 'pampublikong status page', checkLocations: 'distributed na check location' },
    catalog: {
      eyebrow: 'Direktoryo ng {region}', title: 'Mga status page ng serbisyo sa {region}',
      description: 'Tingnan ang mga pampublikong serbisyong sinusuri namin para sa rehiyong ito, pagkatapos ay buksan ang status page para sa mga detalyeng inilathala nito.',
      searchLabel: 'Maghanap ng serbisyo', filterLabel: 'I-filter ang mga serbisyo', all: 'Lahat', results: '{count} resulta', resultSingular: '{count} resulta', openStatus: 'Buksan ang status page', verifiedPage: 'Pampublikong status page',
      noResults: 'Walang serbisyong tumutugma sa paghahanap mo.', clear: 'I-clear ang paghahanap',
      usFallbackNote: 'Wala pang nakalaang source para sa US. Kaya nagpapakita ang pangunahing domain ng mga serbisyong malawak na available sa buong mundo kasama ang pinakamalapit na English regional status page.',
    },
    how: {
      eyebrow: 'Malinaw na konteksto', title: 'Mula paghahanap hanggang status page sa tatlong hakbang',
      body: 'Mabilis kang dinadala ng direktoryo sa tamang source nang hindi ipinahihiwatig na real-time ang status sa mga card nito.',
      steps: [
        { title: 'Hanapin ang serbisyo', body: 'Ilagay ang pangalan ng website, app, o provider na ginagamit mo.' },
        { title: 'Piliin ang regional na resulta', body: 'Ipinapakita namin ang pampublikong bersyong pinakamalapit sa rehiyon mo.' },
        { title: 'Buksan ang status page', body: 'Tingnan ang status, mga insidente, at maintenance na inilathala sa pampublikong status page.' },
      ],
    },
    regions: { eyebrow: 'Regional na saklaw', title: 'Lokal na direktoryo para sa bawat suportadong rehiyon', body: 'Piliin ang rehiyon mo para makita ang mga kaugnay na serbisyo sa wika mo at maabot ang pinakamalapit na regional status page.', current: 'Kasalukuyang rehiyon' },
    product: {
      eyebrow: 'May pinapatakbo kang serbisyo?', title: 'I-monitor ang sarili mong mga serbisyo gamit ang SSLPing',
      body: 'Mag-set up ng monitoring para sa mga serbisyong pinapatakbo mo, maglathala ng malinaw na status page, at panatilihing may alam ang team mo kapag may problema.',
      benefits: ['Monitoring para sa sarili mong mga serbisyo', 'Pampublikong status page na may brand mo', 'Mga alert at history ng insidente'], primary: 'Simulan ang monitoring', secondary: 'Mag-log in',
    },
    faq: {
      eyebrow: 'Mga madalas itanong', title: 'Mga dapat malaman tungkol sa direktoryo',
      items: [
        { question: 'Ano ang ipinapakita ng mga card sa direktoryo?', answer: 'Tinutukoy ng bawat card ang isang nakalistang pampublikong serbisyo at nagli-link sa pampublikong status page nito. Hindi real-time na status indicator ang mismong card.' },
        { question: 'Paano sinusuri ng SSLPing ang mga serbisyo?', answer: 'Sinusuri namin ang HTTP(S), sinusundan ang mga redirect, at bina-validate ang TLS kada limang minuto mula sa apat na distributed na lokasyon.' },
        { question: 'Kaakibat ba ng SSLPing ang mga nakalistang serbisyo?', answer: 'Hindi. Isa itong hiwalay na direktoryo ng availability; pag-aari ng kani-kanilang may-ari ang mga trademark at inilathalang nilalaman.' },
        { question: 'Paano ko imo-monitor ang sarili kong website o serbisyo?', answer: 'Gumawa ng SSLPing account para mag-set up ng sarili mong monitoring at maglathala ng status page para sa mga user mo.' },
      ],
    },
    footer: { tagline: 'Regional na direktoryo ng mga pampublikong serbisyo at kanilang mga status page.', directory: 'Direktoryo ng serbisyo', how: 'Paano ito gumagana', regions: 'Mga rehiyon', privacy: 'Privacy', terms: 'Mga tuntunin', copyright: '© {year} SSLPing. Nakalaan ang lahat ng karapatan.' },
    menu: { open: 'Buksan ang menu', close: 'Isara ang menu' }, regionSelectorLabel: 'Pumili ng rehiyon',
  },

  fr: {
    skipLink: 'Aller au contenu principal',
    nav: { directory: 'Annuaire des services', how: 'Fonctionnement', regions: 'Régions', monitoring: 'Surveiller votre service', login: 'Se connecter' },
    hero: {
      eyebrow: 'Annuaire public de l’état des services', title: 'État des sites et services en {region}',
      description: 'Trouvez les services en ligne disponibles dans votre région et accédez directement à leurs pages d’état publiques pour consulter les pannes et maintenances.',
      searchLabel: 'Rechercher dans l’annuaire des services', searchPlaceholder: 'Recherchez un site, une application ou un service…', searchButton: 'Rechercher',
      trustNote: 'SSLPing vérifie HTTP(S), les redirections et TLS toutes les cinq minutes depuis quatre sites distribués.',
    },
    metrics: { services: 'services répertoriés', statusPages: 'pages d’état publiques', checkLocations: 'sites de contrôle distribués' },
    catalog: {
      eyebrow: 'Annuaire pour {region}', title: 'Pages d’état des services en {region}',
      description: 'Parcourez les services publics que nous contrôlons pour cette région, puis ouvrez leur page d’état pour consulter les informations publiées.',
      searchLabel: 'Rechercher un service', filterLabel: 'Filtrer les services', all: 'Tous', results: '{count} résultats', resultSingular: '{count} résultat', openStatus: 'Ouvrir la page d’état', verifiedPage: 'Page d’état publique',
      noResults: 'Aucun service ne correspond à votre recherche.', clear: 'Effacer la recherche',
      usFallbackNote: 'Aucune source dédiée aux États-Unis n’est encore disponible. Le domaine principal affiche donc des services mondiaux largement disponibles avec la page d’état régionale en anglais la plus proche.',
    },
    how: {
      eyebrow: 'Un contexte clair', title: 'De la recherche à la page d’état en trois étapes',
      body: 'L’annuaire vous mène rapidement à la bonne source, sans laisser entendre que ses cartes affichent un état en temps réel.',
      steps: [
        { title: 'Trouvez le service', body: 'Saisissez le nom du site, de l’application ou du fournisseur que vous utilisez.' },
        { title: 'Choisissez le résultat régional', body: 'Nous affichons la version publique disponible la plus proche de votre région.' },
        { title: 'Ouvrez la page d’état', body: 'Consultez l’état, les incidents et la maintenance publiés sur la page d’état publique.' },
      ],
    },
    regions: { eyebrow: 'Couverture régionale', title: 'Un annuaire local pour chaque région prise en charge', body: 'Choisissez votre région pour parcourir les services pertinents dans votre langue et accéder à la page d’état régionale la plus proche.', current: 'Région actuelle' },
    product: {
      eyebrow: 'Vous gérez un service ?', title: 'Surveillez vos propres services avec SSLPing',
      body: 'Configurez la surveillance des services que vous exploitez, publiez une page d’état claire et tenez votre équipe informée en cas de problème.',
      benefits: ['Surveillance de vos propres services', 'Page d’état publique à votre image', 'Alertes et historique des incidents'], primary: 'Commencer la surveillance', secondary: 'Se connecter',
    },
    faq: {
      eyebrow: 'Questions fréquentes', title: 'Ce qu’il faut savoir sur l’annuaire',
      items: [
        { question: 'Que montrent les cartes de l’annuaire ?', answer: 'Chaque carte identifie un service public répertorié et renvoie vers sa page d’état publique. La carte elle-même n’est pas un indicateur d’état en temps réel.' },
        { question: 'Comment SSLPing contrôle-t-il les services ?', answer: 'Nous contrôlons HTTP(S), suivons les redirections et validons TLS toutes les cinq minutes depuis quatre sites distribués.' },
        { question: 'SSLPing est-il affilié aux services répertoriés ?', answer: 'Non. Il s’agit d’un annuaire de disponibilité indépendant ; les marques et les contenus publiés appartiennent à leurs propriétaires respectifs.' },
        { question: 'Comment surveiller mon propre site ou service ?', answer: 'Créez un compte SSLPing pour configurer votre surveillance et publier une page d’état à destination de vos utilisateurs.' },
      ],
    },
    footer: { tagline: 'Un annuaire régional des services publics et de leurs pages d’état.', directory: 'Annuaire des services', how: 'Fonctionnement', regions: 'Régions', privacy: 'Confidentialité', terms: 'Conditions', copyright: '© {year} SSLPing. Tous droits réservés.' },
    menu: { open: 'Ouvrir le menu', close: 'Fermer le menu' }, regionSelectorLabel: 'Choisir une région',
  },

  he: {
    skipLink: 'דילוג לתוכן הראשי',
    nav: { directory: 'מדריך השירותים', how: 'איך זה עובד', regions: 'אזורים', monitoring: 'ניטור השירות שלך', login: 'כניסה' },
    hero: {
      eyebrow: 'מדריך ציבורי למצבי שירות', title: 'מצב אתרים ושירותים באזור {region}',
      description: 'מצאו שירותים מקוונים הזמינים באזורכם ועברו ישירות לדפי המצב הציבוריים שלהם לקבלת מידע על תקלות ותחזוקה.',
      searchLabel: 'חיפוש במדריך השירותים', searchPlaceholder: 'חיפוש אתר, אפליקציה או שירות…', searchButton: 'חיפוש',
      trustNote: 'SSLPing בודק HTTP(S), הפניות ו-TLS כל חמש דקות מארבעה אתרים מבוזרים.',
    },
    metrics: { services: 'שירותים במדריך', statusPages: 'דפי מצב ציבוריים', checkLocations: 'אתרי בדיקה מבוזרים' },
    catalog: {
      eyebrow: 'המדריך של {region}', title: 'דפי מצב של שירותים באזור {region}',
      description: 'עיינו בשירותים הציבוריים שאנו בודקים עבור אזור זה ופתחו את דף המצב לקבלת הפרטים שפורסמו בו.',
      searchLabel: 'חיפוש שירות', filterLabel: 'סינון שירותים', all: 'הכול', results: '{count} תוצאות', resultSingular: '{count} תוצאה', openStatus: 'פתיחת דף המצב', verifiedPage: 'דף מצב ציבורי',
      noResults: 'לא נמצאו שירותים התואמים לחיפוש.', clear: 'ניקוי החיפוש',
      usFallbackNote: 'עדיין אין מקור ייעודי לארצות הברית. לכן הדומיין הראשי מציג שירותים גלובליים הזמינים באופן נרחב, עם דף המצב האזורי הקרוב ביותר באנגלית.',
    },
    how: {
      eyebrow: 'הקשר ברור', title: 'מהחיפוש לדף המצב בשלושה צעדים',
      body: 'המדריך מוביל אתכם במהירות למקור המתאים, בלי לרמוז שכרטיסי המדריך מציגים מצב בזמן אמת.',
      steps: [
        { title: 'מצאו את השירות', body: 'הקלידו את שם האתר, האפליקציה או הספק שבהם אתם משתמשים.' },
        { title: 'בחרו את התוצאה האזורית', body: 'אנו מציגים את הגרסה הציבורית הזמינה הקרובה ביותר לאזורכם.' },
        { title: 'פתחו את דף המצב', body: 'בדקו את המצב, התקריות והתחזוקה שפורסמו בדף המצב הציבורי.' },
      ],
    },
    regions: { eyebrow: 'כיסוי אזורי', title: 'מדריך מקומי לכל אזור נתמך', body: 'בחרו את אזורכם כדי לעיין בשירותים רלוונטיים בשפתכם ולהגיע לדף המצב האזורי הקרוב ביותר.', current: 'האזור הנוכחי' },
    product: {
      eyebrow: 'מפעילים שירות?', title: 'נטרו את השירותים שלכם באמצעות SSLPing',
      body: 'הגדירו ניטור לשירותים שאתם מפעילים, פרסמו דף מצב ברור ועדכנו את הצוות כאשר מתעוררת בעיה.',
      benefits: ['ניטור השירותים שלכם', 'דף מצב ציבורי במיתוג שלכם', 'התראות והיסטוריית תקריות'], primary: 'התחלת ניטור', secondary: 'כניסה',
    },
    faq: {
      eyebrow: 'שאלות נפוצות', title: 'מה חשוב לדעת על המדריך',
      items: [
        { question: 'מה מציגים הכרטיסים במדריך?', answer: 'כל כרטיס מזהה שירות ציבורי ברשימה ומקשר לדף המצב הציבורי שלו. הכרטיס עצמו אינו מחוון מצב בזמן אמת.' },
        { question: 'איך SSLPing בודק שירותים?', answer: 'אנו בודקים HTTP(S), עוקבים אחר הפניות ומאמתים TLS כל חמש דקות מארבעה אתרים מבוזרים.' },
        { question: 'האם SSLPing קשור לשירותים המופיעים במדריך?', answer: 'לא. זהו מדריך זמינות עצמאי; הסימנים המסחריים והתוכן המפורסם שייכים לבעליהם.' },
        { question: 'איך אפשר לנטר אתר או שירות שלי?', answer: 'צרו חשבון SSLPing כדי להגדיר ניטור משלכם ולפרסם דף מצב למשתמשים.' },
      ],
    },
    footer: { tagline: 'מדריך אזורי לשירותים ציבוריים ולדפי המצב שלהם.', directory: 'מדריך השירותים', how: 'איך זה עובד', regions: 'אזורים', privacy: 'פרטיות', terms: 'תנאים', copyright: '© {year} SSLPing. כל הזכויות שמורות.' },
    menu: { open: 'פתיחת התפריט', close: 'סגירת התפריט' }, regionSelectorLabel: 'בחירת אזור',
  },

  hi: {
    skipLink: 'मुख्य सामग्री पर जाएँ',
    nav: { directory: 'सेवा निर्देशिका', how: 'यह कैसे काम करता है', regions: 'क्षेत्र', monitoring: 'अपनी सेवा मॉनिटर करें', login: 'लॉग इन करें' },
    hero: {
      eyebrow: 'सार्वजनिक सेवा स्थिति निर्देशिका', title: '{region} में वेबसाइट और सेवाओं की स्थिति',
      description: 'अपने क्षेत्र में उपलब्ध ऑनलाइन सेवाएँ खोजें और आउटेज व रखरखाव की जानकारी के लिए सीधे उनके सार्वजनिक स्टेटस पेज पर जाएँ।',
      searchLabel: 'सेवा निर्देशिका में खोजें', searchPlaceholder: 'वेबसाइट, ऐप या सेवा खोजें…', searchButton: 'खोजें',
      trustNote: 'SSLPing चार वितरित स्थानों से हर पाँच मिनट में HTTP(S), रीडायरेक्ट और TLS की जाँच करता है।',
    },
    metrics: { services: 'सूचीबद्ध सेवाएँ', statusPages: 'सार्वजनिक स्टेटस पेज', checkLocations: 'वितरित जाँच स्थान' },
    catalog: {
      eyebrow: '{region} निर्देशिका', title: '{region} के लिए सेवा स्टेटस पेज',
      description: 'इस क्षेत्र के लिए हमारे द्वारा जाँची जाने वाली सार्वजनिक सेवाएँ देखें, फिर प्रकाशित जानकारी के लिए उनका स्टेटस पेज खोलें।',
      searchLabel: 'सेवा खोजें', filterLabel: 'सेवाएँ फ़िल्टर करें', all: 'सभी', results: '{count} परिणाम', resultSingular: '{count} परिणाम', openStatus: 'स्टेटस पेज खोलें', verifiedPage: 'सार्वजनिक स्टेटस पेज',
      noResults: 'आपकी खोज से मेल खाने वाली कोई सेवा नहीं मिली।', clear: 'खोज साफ़ करें',
      usFallbackNote: 'अमेरिका के लिए समर्पित स्रोत अभी उपलब्ध नहीं है। इसलिए मुख्य डोमेन व्यापक रूप से उपलब्ध वैश्विक सेवाएँ और उनका निकटतम अंग्रेज़ी क्षेत्रीय स्टेटस पेज दिखाता है।',
    },
    how: {
      eyebrow: 'स्पष्ट संदर्भ', title: 'खोज से स्टेटस पेज तक, तीन चरणों में',
      body: 'निर्देशिका आपको सही स्रोत तक जल्दी पहुँचाती है, बिना यह संकेत दिए कि उसके कार्ड रियल-टाइम स्थिति दिखाते हैं।',
      steps: [
        { title: 'सेवा खोजें', body: 'जिस वेबसाइट, ऐप या प्रदाता का आप उपयोग करते हैं, उसका नाम दर्ज करें।' },
        { title: 'क्षेत्रीय परिणाम चुनें', body: 'हम आपके क्षेत्र के सबसे नज़दीक सार्वजनिक रूप से उपलब्ध संस्करण दिखाते हैं।' },
        { title: 'स्टेटस पेज खोलें', body: 'सार्वजनिक स्टेटस पेज पर प्रकाशित स्थिति, घटनाएँ और रखरखाव देखें।' },
      ],
    },
    regions: { eyebrow: 'क्षेत्रीय कवरेज', title: 'हर समर्थित क्षेत्र के लिए स्थानीय निर्देशिका', body: 'अपनी भाषा में प्रासंगिक सेवाएँ देखने और निकटतम क्षेत्रीय स्टेटस पेज तक पहुँचने के लिए अपना क्षेत्र चुनें।', current: 'वर्तमान क्षेत्र' },
    product: {
      eyebrow: 'क्या आप कोई सेवा चलाते हैं?', title: 'SSLPing से अपनी सेवाएँ मॉनिटर करें',
      body: 'अपनी संचालित सेवाओं के लिए मॉनिटरिंग सेट करें, स्पष्ट स्टेटस पेज प्रकाशित करें और समस्या आने पर अपनी टीम को जानकारी देते रहें।',
      benefits: ['अपनी सेवाओं की मॉनिटरिंग', 'आपके ब्रांड वाला सार्वजनिक स्टेटस पेज', 'अलर्ट और घटना इतिहास'], primary: 'मॉनिटरिंग शुरू करें', secondary: 'लॉग इन करें',
    },
    faq: {
      eyebrow: 'अक्सर पूछे जाने वाले प्रश्न', title: 'निर्देशिका के बारे में ज़रूरी बातें',
      items: [
        { question: 'निर्देशिका के कार्ड क्या दिखाते हैं?', answer: 'हर कार्ड सूचीबद्ध सार्वजनिक सेवा की पहचान करता है और उसके सार्वजनिक स्टेटस पेज से जोड़ता है। कार्ड स्वयं रियल-टाइम स्थिति संकेतक नहीं है।' },
        { question: 'SSLPing सेवाओं की जाँच कैसे करता है?', answer: 'हम चार वितरित स्थानों से हर पाँच मिनट में HTTP(S) जाँचते हैं, रीडायरेक्ट का अनुसरण करते हैं और TLS सत्यापित करते हैं।' },
        { question: 'क्या SSLPing सूचीबद्ध सेवाओं से संबद्ध है?', answer: 'नहीं। यह एक स्वतंत्र उपलब्धता निर्देशिका है; ट्रेडमार्क और प्रकाशित सामग्री उनके संबंधित स्वामियों की है।' },
        { question: 'मैं अपनी वेबसाइट या सेवा कैसे मॉनिटर करूँ?', answer: 'अपनी मॉनिटरिंग सेट करने और उपयोगकर्ताओं के लिए स्टेटस पेज प्रकाशित करने हेतु SSLPing खाता बनाएँ।' },
      ],
    },
    footer: { tagline: 'सार्वजनिक सेवाओं और उनके स्टेटस पेज की क्षेत्रीय निर्देशिका।', directory: 'सेवा निर्देशिका', how: 'यह कैसे काम करता है', regions: 'क्षेत्र', privacy: 'गोपनीयता', terms: 'शर्तें', copyright: '© {year} SSLPing. सर्वाधिकार सुरक्षित।' },
    menu: { open: 'मेन्यू खोलें', close: 'मेन्यू बंद करें' }, regionSelectorLabel: 'क्षेत्र चुनें',
  },

  hr: {
    skipLink: 'Prijeđi na glavni sadržaj',
    nav: { directory: 'Imenik usluga', how: 'Kako radi', regions: 'Regije', monitoring: 'Nadzirite svoju uslugu', login: 'Prijava' },
    hero: {
      eyebrow: 'Imenik javnih statusa usluga', title: 'Status web-stranica i usluga u regiji {region}',
      description: 'Pronađite internetske usluge dostupne u svojoj regiji i otvorite njihove javne stranice statusa s informacijama o prekidima i održavanju.',
      searchLabel: 'Pretraži imenik usluga', searchPlaceholder: 'Potražite web-stranicu, aplikaciju ili uslugu…', searchButton: 'Pretraži',
      trustNote: 'SSLPing svakih pet minuta s četiri distribuirane lokacije provjerava HTTP(S), preusmjeravanja i TLS.',
    },
    metrics: { services: 'navedenih usluga', statusPages: 'javnih stranica statusa', checkLocations: 'distribuirane lokacije provjere' },
    catalog: {
      eyebrow: 'Imenik za {region}', title: 'Stranice statusa usluga u regiji {region}',
      description: 'Pregledajte javne usluge koje provjeravamo za ovu regiju i otvorite stranicu statusa za objavljene pojedinosti.',
      searchLabel: 'Pretraži uslugu', filterLabel: 'Filtriraj usluge', all: 'Sve', results: '{count} rezultata', resultSingular: '{count} rezultat', openStatus: 'Otvori stranicu statusa', verifiedPage: 'Javna stranica statusa',
      noResults: 'Nijedna usluga ne odgovara vašem pretraživanju.', clear: 'Očisti pretraživanje',
      usFallbackNote: 'Namjenski izvor za SAD još nije dostupan. Glavna domena zato prikazuje globalne usluge široke dostupnosti s najbližom regionalnom stranicom statusa na engleskom jeziku.',
    },
    how: {
      eyebrow: 'Jasan kontekst', title: 'Od pretrage do stranice statusa u tri koraka',
      body: 'Imenik vas brzo vodi do pravog izvora, bez sugeriranja da kartice prikazuju status u stvarnom vremenu.',
      steps: [
        { title: 'Pronađite uslugu', body: 'Upišite naziv web-stranice, aplikacije ili pružatelja usluge koji koristite.' },
        { title: 'Odaberite regionalni rezultat', body: 'Prikazujemo javno dostupnu inačicu najbližu vašoj regiji.' },
        { title: 'Otvorite stranicu statusa', body: 'Pregledajte status, incidente i održavanje objavljene na javnoj stranici statusa.' },
      ],
    },
    regions: { eyebrow: 'Regionalna pokrivenost', title: 'Lokalni imenik za svaku podržanu regiju', body: 'Odaberite svoju regiju kako biste pregledali relevantne usluge na svom jeziku i otvorili najbližu regionalnu stranicu statusa.', current: 'Trenutačna regija' },
    product: {
      eyebrow: 'Vodite vlastitu uslugu?', title: 'Nadzirite svoje usluge uz SSLPing',
      body: 'Postavite nadzor usluga kojima upravljate, objavite jasnu stranicu statusa i obavijestite tim kada dođe do problema.',
      benefits: ['Nadzor vlastitih usluga', 'Javna stranica statusa s vašim brendom', 'Upozorenja i povijest incidenata'], primary: 'Pokreni nadzor', secondary: 'Prijava',
    },
    faq: {
      eyebrow: 'Česta pitanja', title: 'Što trebate znati o imeniku',
      items: [
        { question: 'Što prikazuju kartice imenika?', answer: 'Svaka kartica predstavlja navedenu javnu uslugu i povezuje se s njezinom javnom stranicom statusa. Sama kartica nije pokazatelj statusa u stvarnom vremenu.' },
        { question: 'Kako SSLPing provjerava usluge?', answer: 'Svakih pet minuta s četiri distribuirane lokacije provjeravamo HTTP(S), pratimo preusmjeravanja i potvrđujemo TLS.' },
        { question: 'Je li SSLPing povezan s navedenim uslugama?', answer: 'Ne. Ovo je neovisan imenik dostupnosti; zaštitni znakovi i objavljeni sadržaj pripadaju svojim vlasnicima.' },
        { question: 'Kako mogu nadzirati vlastitu web-stranicu ili uslugu?', answer: 'Otvorite SSLPing račun, postavite vlastiti nadzor i objavite stranicu statusa za svoje korisnike.' },
      ],
    },
    footer: { tagline: 'Regionalni imenik javnih usluga i njihovih stranica statusa.', directory: 'Imenik usluga', how: 'Kako radi', regions: 'Regije', privacy: 'Privatnost', terms: 'Uvjeti', copyright: '© {year} SSLPing. Sva prava pridržana.' },
    menu: { open: 'Otvori izbornik', close: 'Zatvori izbornik' }, regionSelectorLabel: 'Odaberite regiju',
  },

  hu: {
    skipLink: 'Ugrás a fő tartalomra',
    nav: { directory: 'Szolgáltatáskatalógus', how: 'Hogyan működik?', regions: 'Régiók', monitoring: 'Saját szolgáltatás figyelése', login: 'Bejelentkezés' },
    hero: {
      eyebrow: 'Nyilvános szolgáltatásállapot-katalógus', title: 'Webhelyek és szolgáltatások állapota itt: {region}',
      description: 'Keresse meg a régiójában elérhető online szolgáltatásokat, és lépjen közvetlenül a nyilvános állapotoldalukra a kiesésekkel és karbantartással kapcsolatos információkért.',
      searchLabel: 'Keresés a szolgáltatáskatalógusban', searchPlaceholder: 'Webhely, alkalmazás vagy szolgáltatás keresése…', searchButton: 'Keresés',
      trustNote: 'Az SSLPing ötpercenként, négy elosztott helyszínről ellenőrzi a HTTP(S)-t, az átirányításokat és a TLS-t.',
    },
    metrics: { services: 'katalógusba vett szolgáltatás', statusPages: 'nyilvános állapotoldal', checkLocations: 'elosztott ellenőrzési helyszín' },
    catalog: {
      eyebrow: '{region} katalógusa', title: 'Szolgáltatások állapotoldalai itt: {region}',
      description: 'Böngéssze az ehhez a régióhoz ellenőrzött nyilvános szolgáltatásokat, majd nyissa meg az állapotoldalt a közzétett részletekért.',
      searchLabel: 'Szolgáltatás keresése', filterLabel: 'Szolgáltatások szűrése', all: 'Összes', results: '{count} találat', resultSingular: '{count} találat', openStatus: 'Állapotoldal megnyitása', verifiedPage: 'Nyilvános állapotoldal',
      noResults: 'Nincs a keresésnek megfelelő szolgáltatás.', clear: 'Keresés törlése',
      usFallbackNote: 'Az Egyesült Államokhoz még nem érhető el külön adatforrás. A fő domain ezért széles körben elérhető globális szolgáltatásokat mutat a legközelebbi angol nyelvű regionális állapotoldallal.',
    },
    how: {
      eyebrow: 'Egyértelmű háttér', title: 'A kereséstől az állapotoldalig három lépésben',
      body: 'A katalógus gyorsan a megfelelő forráshoz vezet, de nem kelti azt a benyomást, hogy a kártyák valós idejű állapotot mutatnak.',
      steps: [
        { title: 'Keresse meg a szolgáltatást', body: 'Írja be az Ön által használt webhely, alkalmazás vagy szolgáltató nevét.' },
        { title: 'Válassza ki a regionális találatot', body: 'A régiójához legközelebbi, nyilvánosan elérhető változatot mutatjuk.' },
        { title: 'Nyissa meg az állapotoldalt', body: 'Tekintse át a nyilvános állapotoldalon közzétett állapotot, incidenseket és karbantartást.' },
      ],
    },
    regions: { eyebrow: 'Regionális lefedettség', title: 'Helyi katalógus minden támogatott régióhoz', body: 'Válassza ki régióját, böngésszen saját nyelvén a releváns szolgáltatások között, és érje el a legközelebbi regionális állapotoldalt.', current: 'Jelenlegi régió' },
    product: {
      eyebrow: 'Saját szolgáltatást üzemeltet?', title: 'Figyelje saját szolgáltatásait az SSLPinggel',
      body: 'Állítson be felügyeletet az üzemeltetett szolgáltatásokhoz, tegyen közzé áttekinthető állapotoldalt, és probléma esetén tájékoztassa csapatát.',
      benefits: ['Saját szolgáltatások felügyelete', 'Saját márkás nyilvános állapotoldal', 'Riasztások és incidenselőzmények'], primary: 'Felügyelet indítása', secondary: 'Bejelentkezés',
    },
    faq: {
      eyebrow: 'Gyakori kérdések', title: 'Tudnivalók a katalógusról',
      items: [
        { question: 'Mit mutatnak a katalógus kártyái?', answer: 'Minden kártya egy katalogizált nyilvános szolgáltatást azonosít, és annak nyilvános állapotoldalára hivatkozik. A kártya önmagában nem valós idejű állapotjelző.' },
        { question: 'Hogyan ellenőrzi az SSLPing a szolgáltatásokat?', answer: 'Ötpercenként, négy elosztott helyszínről ellenőrizzük a HTTP(S)-t, követjük az átirányításokat és validáljuk a TLS-t.' },
        { question: 'Kapcsolatban áll az SSLPing a felsorolt szolgáltatásokkal?', answer: 'Nem. Ez egy független elérhetőségi katalógus; a védjegyek és a közzétett tartalmak a tulajdonosaikhoz tartoznak.' },
        { question: 'Hogyan figyelhetem saját webhelyemet vagy szolgáltatásomat?', answer: 'Hozzon létre SSLPing-fiókot saját felügyelet beállításához és egy állapotoldal közzétételéhez.' },
      ],
    },
    footer: { tagline: 'Nyilvános szolgáltatások és állapotoldalaik regionális katalógusa.', directory: 'Szolgáltatáskatalógus', how: 'Hogyan működik?', regions: 'Régiók', privacy: 'Adatvédelem', terms: 'Feltételek', copyright: '© {year} SSLPing. Minden jog fenntartva.' },
    menu: { open: 'Menü megnyitása', close: 'Menü bezárása' }, regionSelectorLabel: 'Régió kiválasztása',
  },

  id: {
    skipLink: 'Langsung ke konten utama',
    nav: { directory: 'Direktori layanan', how: 'Cara kerja', regions: 'Wilayah', monitoring: 'Pantau layanan Anda', login: 'Masuk' },
    hero: {
      eyebrow: 'Direktori status layanan publik', title: 'Status situs web dan layanan di {region}',
      description: 'Temukan layanan online yang tersedia di wilayah Anda dan langsung buka halaman status publiknya untuk melihat informasi gangguan dan pemeliharaan.',
      searchLabel: 'Cari di direktori layanan', searchPlaceholder: 'Cari situs web, aplikasi, atau layanan…', searchButton: 'Cari',
      trustNote: 'SSLPing memeriksa HTTP(S), pengalihan, dan TLS setiap lima menit dari empat lokasi terdistribusi.',
    },
    metrics: { services: 'layanan terdaftar', statusPages: 'halaman status publik', checkLocations: 'lokasi pemeriksaan terdistribusi' },
    catalog: {
      eyebrow: 'Direktori {region}', title: 'Halaman status layanan di {region}',
      description: 'Telusuri layanan publik yang kami periksa untuk wilayah ini, lalu buka halaman statusnya untuk melihat informasi yang dipublikasikan.',
      searchLabel: 'Cari layanan', filterLabel: 'Filter layanan', all: 'Semua', results: '{count} hasil', resultSingular: '{count} hasil', openStatus: 'Buka halaman status', verifiedPage: 'Halaman status publik',
      noResults: 'Tidak ada layanan yang cocok dengan pencarian Anda.', clear: 'Hapus pencarian',
      usFallbackNote: 'Sumber khusus Amerika Serikat belum tersedia. Karena itu, domain utama menampilkan layanan global yang tersedia secara luas beserta halaman status regional berbahasa Inggris yang paling dekat.',
    },
    how: {
      eyebrow: 'Konteks yang jelas', title: 'Dari pencarian ke halaman status dalam tiga langkah',
      body: 'Direktori ini membawa Anda ke sumber yang tepat dengan cepat tanpa menyiratkan bahwa kartu direktori menampilkan status waktu nyata.',
      steps: [
        { title: 'Temukan layanan', body: 'Masukkan nama situs web, aplikasi, atau penyedia yang Anda gunakan.' },
        { title: 'Pilih hasil regional', body: 'Kami menampilkan versi publik yang tersedia dan paling dekat dengan wilayah Anda.' },
        { title: 'Buka halaman status', body: 'Lihat status, insiden, dan pemeliharaan yang dipublikasikan di halaman status publik.' },
      ],
    },
    regions: { eyebrow: 'Cakupan regional', title: 'Direktori lokal untuk setiap wilayah yang didukung', body: 'Pilih wilayah Anda untuk menelusuri layanan yang relevan dalam bahasa Anda dan membuka halaman status regional terdekat.', current: 'Wilayah saat ini' },
    product: {
      eyebrow: 'Mengelola layanan?', title: 'Pantau layanan Anda sendiri dengan SSLPing',
      body: 'Siapkan pemantauan untuk layanan yang Anda kelola, publikasikan halaman status yang jelas, dan terus beri tahu tim Anda saat terjadi masalah.',
      benefits: ['Pemantauan untuk layanan Anda sendiri', 'Halaman status publik dengan merek Anda', 'Peringatan dan riwayat insiden'], primary: 'Mulai memantau', secondary: 'Masuk',
    },
    faq: {
      eyebrow: 'Pertanyaan umum', title: 'Hal yang perlu diketahui tentang direktori',
      items: [
        { question: 'Apa yang ditampilkan kartu direktori?', answer: 'Setiap kartu mengidentifikasi layanan publik yang terdaftar dan menautkan ke halaman status publiknya. Kartu itu sendiri bukan indikator status waktu nyata.' },
        { question: 'Bagaimana SSLPing memeriksa layanan?', answer: 'Kami memeriksa HTTP(S), mengikuti pengalihan, dan memvalidasi TLS setiap lima menit dari empat lokasi terdistribusi.' },
        { question: 'Apakah SSLPing berafiliasi dengan layanan yang terdaftar?', answer: 'Tidak. Ini adalah direktori ketersediaan independen; merek dagang dan konten yang dipublikasikan adalah milik masing-masing pemilik.' },
        { question: 'Bagaimana cara memantau situs web atau layanan saya sendiri?', answer: 'Buat akun SSLPing untuk menyiapkan pemantauan Anda sendiri dan memublikasikan halaman status bagi pengguna.' },
      ],
    },
    footer: { tagline: 'Direktori regional layanan publik dan halaman statusnya.', directory: 'Direktori layanan', how: 'Cara kerja', regions: 'Wilayah', privacy: 'Privasi', terms: 'Ketentuan', copyright: '© {year} SSLPing. Seluruh hak cipta dilindungi.' },
    menu: { open: 'Buka menu', close: 'Tutup menu' }, regionSelectorLabel: 'Pilih wilayah',
  },

  it: {
    skipLink: 'Vai al contenuto principale',
    nav: { directory: 'Catalogo dei servizi', how: 'Come funziona', regions: 'Regioni', monitoring: 'Monitora il tuo servizio', login: 'Accedi' },
    hero: {
      eyebrow: 'Catalogo pubblico dello stato dei servizi', title: 'Stato di siti web e servizi in {region}',
      description: 'Trova i servizi online disponibili nella tua regione e raggiungi direttamente le loro pagine di stato pubbliche per informazioni su disservizi e manutenzione.',
      searchLabel: 'Cerca nel catalogo dei servizi', searchPlaceholder: 'Cerca un sito, un’app o un servizio…', searchButton: 'Cerca',
      trustNote: 'SSLPing controlla HTTP(S), reindirizzamenti e TLS ogni cinque minuti da quattro località distribuite.',
    },
    metrics: { services: 'servizi elencati', statusPages: 'pagine di stato pubbliche', checkLocations: 'località di controllo distribuite' },
    catalog: {
      eyebrow: 'Catalogo per {region}', title: 'Pagine di stato dei servizi in {region}',
      description: 'Esplora i servizi pubblici che controlliamo per questa regione, quindi apri la pagina di stato per consultare i dettagli pubblicati.',
      searchLabel: 'Cerca un servizio', filterLabel: 'Filtra i servizi', all: 'Tutti', results: '{count} risultati', resultSingular: '{count} risultato', openStatus: 'Apri la pagina di stato', verifiedPage: 'Pagina di stato pubblica',
      noResults: 'Nessun servizio corrisponde alla ricerca.', clear: 'Cancella ricerca',
      usFallbackNote: 'Non è ancora disponibile una fonte dedicata agli Stati Uniti. Il dominio principale mostra quindi servizi globali ampiamente disponibili con la pagina di stato regionale in inglese più vicina.',
    },
    how: {
      eyebrow: 'Contesto chiaro', title: 'Dalla ricerca alla pagina di stato in tre passaggi',
      body: 'Il catalogo ti porta rapidamente alla fonte corretta, senza suggerire che le schede mostrino lo stato in tempo reale.',
      steps: [
        { title: 'Trova il servizio', body: 'Inserisci il nome del sito, dell’app o del provider che utilizzi.' },
        { title: 'Scegli il risultato regionale', body: 'Mostriamo la versione pubblicamente disponibile più vicina alla tua regione.' },
        { title: 'Apri la pagina di stato', body: 'Consulta lo stato, gli incidenti e la manutenzione pubblicati sulla pagina di stato pubblica.' },
      ],
    },
    regions: { eyebrow: 'Copertura regionale', title: 'Un catalogo locale per ogni regione supportata', body: 'Scegli la tua regione per esplorare i servizi pertinenti nella tua lingua e raggiungere la pagina di stato regionale più vicina.', current: 'Regione attuale' },
    product: {
      eyebrow: 'Gestisci un servizio?', title: 'Monitora i tuoi servizi con SSLPing',
      body: 'Configura il monitoraggio dei servizi che gestisci, pubblica una pagina di stato chiara e tieni informato il team quando si verifica un problema.',
      benefits: ['Monitoraggio dei tuoi servizi', 'Pagina di stato pubblica con il tuo brand', 'Avvisi e cronologia degli incidenti'], primary: 'Inizia il monitoraggio', secondary: 'Accedi',
    },
    faq: {
      eyebrow: 'Domande frequenti', title: 'Cosa sapere sul catalogo',
      items: [
        { question: 'Cosa mostrano le schede del catalogo?', answer: 'Ogni scheda identifica un servizio pubblico elencato e rimanda alla sua pagina di stato pubblica. La scheda non è un indicatore di stato in tempo reale.' },
        { question: 'Come controlla i servizi SSLPing?', answer: 'Controlliamo HTTP(S), seguiamo i reindirizzamenti e convalidiamo TLS ogni cinque minuti da quattro località distribuite.' },
        { question: 'SSLPing è affiliato ai servizi elencati?', answer: 'No. È un catalogo indipendente sulla disponibilità; marchi e contenuti pubblicati appartengono ai rispettivi proprietari.' },
        { question: 'Come posso monitorare il mio sito o servizio?', answer: 'Crea un account SSLPing per configurare il tuo monitoraggio e pubblicare una pagina di stato per i tuoi utenti.' },
      ],
    },
    footer: { tagline: 'Un catalogo regionale dei servizi pubblici e delle loro pagine di stato.', directory: 'Catalogo dei servizi', how: 'Come funziona', regions: 'Regioni', privacy: 'Privacy', terms: 'Termini', copyright: '© {year} SSLPing. Tutti i diritti riservati.' },
    menu: { open: 'Apri menu', close: 'Chiudi menu' }, regionSelectorLabel: 'Scegli la regione',
  },

  ja: {
    skipLink: 'メインコンテンツへ移動',
    nav: { directory: 'サービス一覧', how: '仕組み', regions: '地域', monitoring: '自社サービスを監視', login: 'ログイン' },
    hero: {
      eyebrow: '公開サービスステータス一覧', title: '{region}のウェブサイト・サービス稼働状況',
      description: 'お住まいの地域で利用できるオンラインサービスを探し、公開ステータスページから障害やメンテナンスの情報を直接確認できます。',
      searchLabel: 'サービス一覧を検索', searchPlaceholder: 'ウェブサイト、アプリ、サービスを検索…', searchButton: '検索',
      trustNote: 'SSLPingは4か所の分散拠点から5分ごとにHTTP(S)、リダイレクト、TLSを確認します。',
    },
    metrics: { services: '掲載サービス', statusPages: '公開ステータスページ', checkLocations: '分散チェック拠点' },
    catalog: {
      eyebrow: '{region}のサービス一覧', title: '{region}のサービスステータスページ',
      description: 'この地域向けに確認している公開サービスを探し、ステータスページで発信元が公開する詳細をご覧ください。',
      searchLabel: 'サービスを検索', filterLabel: 'サービスを絞り込む', all: 'すべて', results: '{count}件', resultSingular: '{count}件', openStatus: 'ステータスページを開く', verifiedPage: '公開ステータスページ',
      noResults: '検索条件に一致するサービスはありません。', clear: '検索をクリア',
      usFallbackNote: '米国専用の情報源はまだ利用できません。そのためルートドメインでは、世界的に広く利用できるサービスと、最も近い英語圏向けステータスページを表示しています。',
    },
    how: {
      eyebrow: 'わかりやすい導線', title: '検索からステータスページまで3ステップ',
      body: '一覧カードがリアルタイムの状態を示すと誤解させることなく、適切な情報源へすばやく案内します。',
      steps: [
        { title: 'サービスを探す', body: '利用しているウェブサイト、アプリ、プロバイダーの名前を入力します。' },
        { title: '地域別の結果を選ぶ', body: 'お住まいの地域に最も近い公開版を表示します。' },
        { title: 'ステータスページを開く', body: '公開ステータスページに掲載された稼働状況、障害、メンテナンスを確認します。' },
      ],
    },
    regions: { eyebrow: '地域別カバレッジ', title: '対応する各地域にローカルなサービス一覧を', body: '地域を選ぶと、関連サービスをお使いの言語で探し、最も近い地域向けステータスページへ移動できます。', current: '現在の地域' },
    product: {
      eyebrow: 'サービスを運営していますか？', title: 'SSLPingで自社サービスを監視',
      body: '運営するサービスの監視を設定し、わかりやすいステータスページを公開して、問題発生時にチームへ情報を共有できます。',
      benefits: ['自社サービスの監視', '自社ブランドの公開ステータスページ', 'アラートと障害履歴'], primary: '監視を始める', secondary: 'ログイン',
    },
    faq: {
      eyebrow: 'よくある質問', title: 'サービス一覧について知っておきたいこと',
      items: [
        { question: '一覧のカードには何が表示されますか？', answer: '各カードは掲載中の公開サービスを示し、その公開ステータスページへリンクします。カード自体はリアルタイムの状態表示ではありません。' },
        { question: 'SSLPingはどのようにサービスを確認しますか？', answer: '4か所の分散拠点から5分ごとにHTTP(S)を確認し、リダイレクトをたどってTLSを検証します。' },
        { question: 'SSLPingは掲載サービスと提携していますか？', answer: 'いいえ。独立した可用性ディレクトリです。商標および公開コンテンツは各所有者に帰属します。' },
        { question: '自分のサイトやサービスを監視するには？', answer: 'SSLPingアカウントを作成すると、独自の監視を設定し、利用者向けのステータスページを公開できます。' },
      ],
    },
    footer: { tagline: '公開サービスとステータスページの地域別ディレクトリ。', directory: 'サービス一覧', how: '仕組み', regions: '地域', privacy: 'プライバシー', terms: '利用規約', copyright: '© {year} SSLPing. All rights reserved.' },
    menu: { open: 'メニューを開く', close: 'メニューを閉じる' }, regionSelectorLabel: '地域を選択',
  },

  ms: {
    skipLink: 'Langkau ke kandungan utama',
    nav: { directory: 'Direktori perkhidmatan', how: 'Cara ia berfungsi', regions: 'Wilayah', monitoring: 'Pantau perkhidmatan anda', login: 'Log masuk' },
    hero: {
      eyebrow: 'Direktori status perkhidmatan awam', title: 'Status laman web dan perkhidmatan di {region}',
      description: 'Cari perkhidmatan dalam talian yang tersedia di wilayah anda dan terus ke halaman status awamnya untuk maklumat gangguan dan penyelenggaraan.',
      searchLabel: 'Cari dalam direktori perkhidmatan', searchPlaceholder: 'Cari laman web, aplikasi atau perkhidmatan…', searchButton: 'Cari',
      trustNote: 'SSLPing memeriksa HTTP(S), lencongan dan TLS setiap lima minit dari empat lokasi teragih.',
    },
    metrics: { services: 'perkhidmatan disenaraikan', statusPages: 'halaman status awam', checkLocations: 'lokasi pemeriksaan teragih' },
    catalog: {
      eyebrow: 'Direktori {region}', title: 'Halaman status perkhidmatan di {region}',
      description: 'Semak imbas perkhidmatan awam yang kami periksa untuk wilayah ini, kemudian buka halaman status bagi melihat butiran yang diterbitkan.',
      searchLabel: 'Cari perkhidmatan', filterLabel: 'Tapis perkhidmatan', all: 'Semua', results: '{count} hasil', resultSingular: '{count} hasil', openStatus: 'Buka halaman status', verifiedPage: 'Halaman status awam',
      noResults: 'Tiada perkhidmatan yang sepadan dengan carian anda.', clear: 'Kosongkan carian',
      usFallbackNote: 'Sumber khusus untuk Amerika Syarikat belum tersedia. Oleh itu, domain utama memaparkan perkhidmatan global yang tersedia secara meluas bersama halaman status serantau berbahasa Inggeris yang terdekat.',
    },
    how: {
      eyebrow: 'Konteks yang jelas', title: 'Daripada carian ke halaman status dalam tiga langkah',
      body: 'Direktori membawa anda ke sumber yang betul dengan pantas tanpa memberi gambaran bahawa kad memaparkan status masa nyata.',
      steps: [
        { title: 'Cari perkhidmatan', body: 'Masukkan nama laman web, aplikasi atau penyedia yang anda gunakan.' },
        { title: 'Pilih hasil serantau', body: 'Kami memaparkan versi awam yang tersedia dan paling dekat dengan wilayah anda.' },
        { title: 'Buka halaman status', body: 'Semak status, insiden dan penyelenggaraan yang diterbitkan pada halaman status awam.' },
      ],
    },
    regions: { eyebrow: 'Liputan serantau', title: 'Direktori tempatan untuk setiap wilayah yang disokong', body: 'Pilih wilayah anda untuk melihat perkhidmatan berkaitan dalam bahasa anda dan membuka halaman status serantau yang terdekat.', current: 'Wilayah semasa' },
    product: {
      eyebrow: 'Mengendalikan perkhidmatan?', title: 'Pantau perkhidmatan anda sendiri dengan SSLPing',
      body: 'Sediakan pemantauan untuk perkhidmatan yang anda kendalikan, terbitkan halaman status yang jelas dan maklumkan pasukan anda apabila berlaku masalah.',
      benefits: ['Pemantauan perkhidmatan anda sendiri', 'Halaman status awam berjenama anda', 'Amaran dan sejarah insiden'], primary: 'Mulakan pemantauan', secondary: 'Log masuk',
    },
    faq: {
      eyebrow: 'Soalan lazim', title: 'Perkara yang perlu diketahui tentang direktori',
      items: [
        { question: 'Apakah yang dipaparkan pada kad direktori?', answer: 'Setiap kad mengenal pasti perkhidmatan awam yang disenaraikan dan memaut ke halaman status awamnya. Kad itu sendiri bukan penunjuk status masa nyata.' },
        { question: 'Bagaimanakah SSLPing memeriksa perkhidmatan?', answer: 'Kami memeriksa HTTP(S), mengikuti lencongan dan mengesahkan TLS setiap lima minit dari empat lokasi teragih.' },
        { question: 'Adakah SSLPing bergabung dengan perkhidmatan yang disenaraikan?', answer: 'Tidak. Ini ialah direktori ketersediaan bebas; tanda dagangan dan kandungan yang diterbitkan milik pemilik masing-masing.' },
        { question: 'Bagaimanakah saya memantau laman web atau perkhidmatan sendiri?', answer: 'Cipta akaun SSLPing untuk menyediakan pemantauan anda sendiri dan menerbitkan halaman status bagi pengguna anda.' },
      ],
    },
    footer: { tagline: 'Direktori serantau bagi perkhidmatan awam dan halaman statusnya.', directory: 'Direktori perkhidmatan', how: 'Cara ia berfungsi', regions: 'Wilayah', privacy: 'Privasi', terms: 'Terma', copyright: '© {year} SSLPing. Hak cipta terpelihara.' },
    menu: { open: 'Buka menu', close: 'Tutup menu' }, regionSelectorLabel: 'Pilih wilayah',
  },

  nl: {
    skipLink: 'Naar hoofdinhoud',
    nav: { directory: 'Dienstencatalogus', how: 'Zo werkt het', regions: 'Regio’s', monitoring: 'Bewaak je eigen dienst', login: 'Inloggen' },
    hero: {
      eyebrow: 'Catalogus met openbare servicestatussen', title: 'Status van websites en diensten in {region}',
      description: 'Vind onlinediensten die in jouw regio beschikbaar zijn en ga rechtstreeks naar hun openbare statuspagina voor informatie over storingen en onderhoud.',
      searchLabel: 'Zoek in de dienstencatalogus', searchPlaceholder: 'Zoek een website, app of dienst…', searchButton: 'Zoeken',
      trustNote: 'SSLPing controleert HTTP(S), omleidingen en TLS elke vijf minuten vanaf vier verspreide locaties.',
    },
    metrics: { services: 'vermelde diensten', statusPages: 'openbare statuspagina’s', checkLocations: 'verspreide controlelocaties' },
    catalog: {
      eyebrow: 'Catalogus voor {region}', title: 'Statuspagina’s voor diensten in {region}',
      description: 'Bekijk de openbare diensten die we voor deze regio controleren en open de statuspagina voor de gepubliceerde details.',
      searchLabel: 'Zoek een dienst', filterLabel: 'Filter diensten', all: 'Alle', results: '{count} resultaten', resultSingular: '{count} resultaat', openStatus: 'Statuspagina openen', verifiedPage: 'Openbare statuspagina',
      noResults: 'Geen diensten komen overeen met je zoekopdracht.', clear: 'Zoekopdracht wissen',
      usFallbackNote: 'Een speciale bron voor de Verenigde Staten is nog niet beschikbaar. Het hoofddomein toont daarom wereldwijd breed beschikbare diensten met de dichtstbijzijnde Engelstalige regionale statuspagina.',
    },
    how: {
      eyebrow: 'Duidelijke context', title: 'Van zoeken naar statuspagina in drie stappen',
      body: 'De catalogus brengt je snel naar de juiste bron zonder de indruk te wekken dat de kaarten een realtime status tonen.',
      steps: [
        { title: 'Vind de dienst', body: 'Voer de naam in van de website, app of aanbieder die je gebruikt.' },
        { title: 'Kies het regionale resultaat', body: 'We tonen de openbaar beschikbare versie die het dichtst bij jouw regio ligt.' },
        { title: 'Open de statuspagina', body: 'Bekijk de status, incidenten en onderhoud die op de openbare statuspagina zijn gepubliceerd.' },
      ],
    },
    regions: { eyebrow: 'Regionale dekking', title: 'Een lokale catalogus voor elke ondersteunde regio', body: 'Kies je regio om relevante diensten in je eigen taal te bekijken en de dichtstbijzijnde regionale statuspagina te openen.', current: 'Huidige regio' },
    product: {
      eyebrow: 'Beheer je een dienst?', title: 'Bewaak je eigen diensten met SSLPing',
      body: 'Stel monitoring in voor de diensten die je beheert, publiceer een duidelijke statuspagina en houd je team op de hoogte als er iets misgaat.',
      benefits: ['Monitoring van je eigen diensten', 'Een openbare statuspagina in je eigen huisstijl', 'Meldingen en incidentgeschiedenis'], primary: 'Monitoring starten', secondary: 'Inloggen',
    },
    faq: {
      eyebrow: 'Veelgestelde vragen', title: 'Wat je over de catalogus moet weten',
      items: [
        { question: 'Wat tonen de kaarten in de catalogus?', answer: 'Elke kaart vermeldt een openbare dienst en linkt naar de bijbehorende openbare statuspagina. De kaart zelf is geen realtime statusindicator.' },
        { question: 'Hoe controleert SSLPing de diensten?', answer: 'We controleren HTTP(S), volgen omleidingen en valideren TLS elke vijf minuten vanaf vier verspreide locaties.' },
        { question: 'Is SSLPing verbonden aan de vermelde diensten?', answer: 'Nee. Dit is een onafhankelijke beschikbaarheidscatalogus; handelsmerken en gepubliceerde inhoud blijven eigendom van hun respectieve eigenaren.' },
        { question: 'Hoe kan ik mijn eigen website of dienst bewaken?', answer: 'Maak een SSLPing-account aan om je eigen monitoring in te stellen en een statuspagina voor je gebruikers te publiceren.' },
      ],
    },
    footer: { tagline: 'Een regionale catalogus van openbare diensten en hun statuspagina’s.', directory: 'Dienstencatalogus', how: 'Zo werkt het', regions: 'Regio’s', privacy: 'Privacy', terms: 'Voorwaarden', copyright: '© {year} SSLPing. Alle rechten voorbehouden.' },
    menu: { open: 'Menu openen', close: 'Menu sluiten' }, regionSelectorLabel: 'Regio kiezen',
  },

  no: {
    skipLink: 'Gå til hovedinnhold',
    nav: { directory: 'Tjenestekatalog', how: 'Slik fungerer det', regions: 'Regioner', monitoring: 'Overvåk din egen tjeneste', login: 'Logg inn' },
    hero: {
      eyebrow: 'Katalog over offentlige tjenestestatuser', title: 'Status for nettsteder og tjenester i {region}',
      description: 'Finn nettjenester som er tilgjengelige i regionen din, og gå rett til de offentlige statussidene for informasjon om driftsavbrudd og vedlikehold.',
      searchLabel: 'Søk i tjenestekatalogen', searchPlaceholder: 'Søk etter et nettsted, en app eller en tjeneste…', searchButton: 'Søk',
      trustNote: 'SSLPing kontrollerer HTTP(S), omdirigeringer og TLS hvert femte minutt fra fire distribuerte steder.',
    },
    metrics: { services: 'oppførte tjenester', statusPages: 'offentlige statussider', checkLocations: 'distribuerte kontrollsteder' },
    catalog: {
      eyebrow: 'Katalog for {region}', title: 'Statussider for tjenester i {region}',
      description: 'Bla gjennom de offentlige tjenestene vi kontrollerer for denne regionen, og åpne statussiden for publiserte detaljer.',
      searchLabel: 'Søk etter en tjeneste', filterLabel: 'Filtrer tjenester', all: 'Alle', results: '{count} resultater', resultSingular: '{count} resultat', openStatus: 'Åpne statusside', verifiedPage: 'Offentlig statusside',
      noResults: 'Ingen tjenester samsvarer med søket ditt.', clear: 'Tøm søket',
      usFallbackNote: 'En egen kilde for USA er ennå ikke tilgjengelig. Rotdomenet viser derfor globalt utbredte tjenester med den nærmeste engelskspråklige regionale statussiden.',
    },
    how: {
      eyebrow: 'Tydelig sammenheng', title: 'Fra søk til statusside i tre trinn',
      body: 'Katalogen fører deg raskt til riktig kilde uten å antyde at katalogkortene viser status i sanntid.',
      steps: [
        { title: 'Finn tjenesten', body: 'Skriv inn navnet på nettstedet, appen eller leverandøren du bruker.' },
        { title: 'Velg det regionale resultatet', body: 'Vi viser den offentlig tilgjengelige versjonen som ligger nærmest regionen din.' },
        { title: 'Åpne statussiden', body: 'Se status, hendelser og vedlikehold som er publisert på den offentlige statussiden.' },
      ],
    },
    regions: { eyebrow: 'Regional dekning', title: 'En lokal katalog for hver støttede region', body: 'Velg regionen din for å se relevante tjenester på ditt språk og åpne den nærmeste regionale statussiden.', current: 'Nåværende region' },
    product: {
      eyebrow: 'Driver du en tjeneste?', title: 'Overvåk dine egne tjenester med SSLPing',
      body: 'Sett opp overvåking for tjenestene du driver, publiser en tydelig statusside og hold teamet informert når noe går galt.',
      benefits: ['Overvåking av dine egne tjenester', 'Offentlig statusside med din profil', 'Varsler og hendelseshistorikk'], primary: 'Start overvåking', secondary: 'Logg inn',
    },
    faq: {
      eyebrow: 'Ofte stilte spørsmål', title: 'Dette bør du vite om katalogen',
      items: [
        { question: 'Hva viser kortene i katalogen?', answer: 'Hvert kort viser en oppført offentlig tjeneste og lenker til den offentlige statussiden. Kortet i seg selv er ikke en statusindikator i sanntid.' },
        { question: 'Hvordan kontrollerer SSLPing tjenestene?', answer: 'Vi kontrollerer HTTP(S), følger omdirigeringer og validerer TLS hvert femte minutt fra fire distribuerte steder.' },
        { question: 'Er SSLPing tilknyttet de oppførte tjenestene?', answer: 'Nei. Dette er en uavhengig tilgjengelighetskatalog; varemerker og publisert innhold tilhører sine respektive eiere.' },
        { question: 'Hvordan overvåker jeg mitt eget nettsted eller min egen tjeneste?', answer: 'Opprett en SSLPing-konto for å sette opp egen overvåking og publisere en statusside for brukerne dine.' },
      ],
    },
    footer: { tagline: 'En regional katalog over offentlige tjenester og statussidene deres.', directory: 'Tjenestekatalog', how: 'Slik fungerer det', regions: 'Regioner', privacy: 'Personvern', terms: 'Vilkår', copyright: '© {year} SSLPing. Alle rettigheter forbeholdt.' },
    menu: { open: 'Åpne meny', close: 'Lukk meny' }, regionSelectorLabel: 'Velg region',
  },

  pl: {
    skipLink: 'Przejdź do głównej treści',
    nav: { directory: 'Katalog usług', how: 'Jak to działa', regions: 'Regiony', monitoring: 'Monitoruj swoją usługę', login: 'Zaloguj się' },
    hero: {
      eyebrow: 'Katalog publicznych statusów usług', title: 'Status stron i usług w regionie {region}',
      description: 'Znajdź usługi internetowe dostępne w Twoim regionie i przejdź bezpośrednio do ich publicznych stron statusu z informacjami o awariach i pracach serwisowych.',
      searchLabel: 'Przeszukaj katalog usług', searchPlaceholder: 'Wyszukaj stronę, aplikację lub usługę…', searchButton: 'Szukaj',
      trustNote: 'SSLPing co pięć minut sprawdza HTTP(S), przekierowania i TLS z czterech rozproszonych lokalizacji.',
    },
    metrics: { services: 'usług w katalogu', statusPages: 'publicznych stron statusu', checkLocations: 'rozproszone lokalizacje kontrolne' },
    catalog: {
      eyebrow: 'Katalog dla regionu {region}', title: 'Strony statusu usług w regionie {region}',
      description: 'Przeglądaj publiczne usługi sprawdzane przez nas dla tego regionu i otwórz stronę statusu, aby poznać opublikowane szczegóły.',
      searchLabel: 'Wyszukaj usługę', filterLabel: 'Filtruj usługi', all: 'Wszystkie', results: '{count} wyników', resultSingular: '{count} wynik', openStatus: 'Otwórz stronę statusu', verifiedPage: 'Publiczna strona statusu',
      noResults: 'Brak usług pasujących do wyszukiwania.', clear: 'Wyczyść wyszukiwanie',
      usFallbackNote: 'Dedykowane źródło dla Stanów Zjednoczonych nie jest jeszcze dostępne. Dlatego domena główna pokazuje powszechnie dostępne usługi globalne z najbliższą regionalną stroną statusu w języku angielskim.',
    },
    how: {
      eyebrow: 'Jasny kontekst', title: 'Od wyszukiwania do strony statusu w trzech krokach',
      body: 'Katalog szybko prowadzi do właściwego źródła, nie sugerując przy tym, że karty pokazują status w czasie rzeczywistym.',
      steps: [
        { title: 'Znajdź usługę', body: 'Wpisz nazwę strony, aplikacji lub dostawcy, z którego korzystasz.' },
        { title: 'Wybierz wynik regionalny', body: 'Pokazujemy publicznie dostępną wersję najbliższą Twojemu regionowi.' },
        { title: 'Otwórz stronę statusu', body: 'Sprawdź status, incydenty i prace serwisowe opublikowane na publicznej stronie statusu.' },
      ],
    },
    regions: { eyebrow: 'Zasięg regionalny', title: 'Lokalny katalog dla każdego obsługiwanego regionu', body: 'Wybierz region, aby przeglądać odpowiednie usługi w swoim języku i przejść do najbliższej regionalnej strony statusu.', current: 'Bieżący region' },
    product: {
      eyebrow: 'Prowadzisz usługę?', title: 'Monitoruj własne usługi z SSLPing',
      body: 'Skonfiguruj monitoring swoich usług, opublikuj przejrzystą stronę statusu i informuj zespół, gdy pojawi się problem.',
      benefits: ['Monitoring własnych usług', 'Publiczna strona statusu z Twoją marką', 'Alerty i historia incydentów'], primary: 'Rozpocznij monitoring', secondary: 'Zaloguj się',
    },
    faq: {
      eyebrow: 'Najczęstsze pytania', title: 'Co warto wiedzieć o katalogu',
      items: [
        { question: 'Co pokazują karty w katalogu?', answer: 'Każda karta przedstawia publiczną usługę z katalogu i prowadzi do jej publicznej strony statusu. Sama karta nie jest wskaźnikiem statusu w czasie rzeczywistym.' },
        { question: 'Jak SSLPing sprawdza usługi?', answer: 'Co pięć minut z czterech rozproszonych lokalizacji sprawdzamy HTTP(S), śledzimy przekierowania i weryfikujemy TLS.' },
        { question: 'Czy SSLPing jest powiązany z usługami w katalogu?', answer: 'Nie. To niezależny katalog dostępności; znaki towarowe i publikowane treści należą do ich właścicieli.' },
        { question: 'Jak monitorować własną stronę lub usługę?', answer: 'Utwórz konto SSLPing, aby skonfigurować własny monitoring i opublikować stronę statusu dla użytkowników.' },
      ],
    },
    footer: { tagline: 'Regionalny katalog publicznych usług i ich stron statusu.', directory: 'Katalog usług', how: 'Jak to działa', regions: 'Regiony', privacy: 'Prywatność', terms: 'Warunki', copyright: '© {year} SSLPing. Wszelkie prawa zastrzeżone.' },
    menu: { open: 'Otwórz menu', close: 'Zamknij menu' }, regionSelectorLabel: 'Wybierz region',
  },

  pt: {
    skipLink: 'Ir para o conteúdo principal',
    nav: { directory: 'Diretório de serviços', how: 'Como funciona', regions: 'Regiões', monitoring: 'Monitorizar o seu serviço', login: 'Iniciar sessão' },
    hero: {
      eyebrow: 'Diretório público do estado dos serviços', title: 'Estado de sites e serviços em {region}',
      description: 'Encontre serviços online disponíveis na sua região e aceda diretamente às respetivas páginas públicas de estado para consultar interrupções e manutenção.',
      searchLabel: 'Pesquisar no diretório de serviços', searchPlaceholder: 'Pesquise um site, uma aplicação ou um serviço…', searchButton: 'Pesquisar',
      trustNote: 'O SSLPing verifica HTTP(S), redirecionamentos e TLS a cada cinco minutos, a partir de quatro localizações distribuídas.',
    },
    metrics: { services: 'serviços listados', statusPages: 'páginas públicas de estado', checkLocations: 'localizações de verificação distribuídas' },
    catalog: {
      eyebrow: 'Diretório de {region}', title: 'Páginas de estado de serviços em {region}',
      description: 'Explore os serviços públicos que verificamos para esta região e abra a página de estado para consultar os detalhes publicados.',
      searchLabel: 'Pesquisar um serviço', filterLabel: 'Filtrar serviços', all: 'Todos', results: '{count} resultados', resultSingular: '{count} resultado', openStatus: 'Abrir página de estado', verifiedPage: 'Página pública de estado',
      noResults: 'Nenhum serviço corresponde à sua pesquisa.', clear: 'Limpar pesquisa',
      usFallbackNote: 'Ainda não existe uma fonte dedicada aos Estados Unidos. Por isso, o domínio principal apresenta serviços globais amplamente disponíveis com a página de estado regional em inglês mais próxima.',
    },
    how: {
      eyebrow: 'Contexto claro', title: 'Da pesquisa à página de estado em três passos',
      body: 'O diretório encaminha-o rapidamente para a fonte certa sem dar a entender que os cartões apresentam um estado em tempo real.',
      steps: [
        { title: 'Encontre o serviço', body: 'Introduza o nome do site, da aplicação ou do fornecedor que utiliza.' },
        { title: 'Escolha o resultado regional', body: 'Apresentamos a versão pública disponível mais próxima da sua região.' },
        { title: 'Abra a página de estado', body: 'Consulte o estado, os incidentes e a manutenção publicados na página pública de estado.' },
      ],
    },
    regions: { eyebrow: 'Cobertura regional', title: 'Um diretório local para cada região suportada', body: 'Escolha a sua região para explorar serviços relevantes no seu idioma e aceder à página de estado regional mais próxima.', current: 'Região atual' },
    product: {
      eyebrow: 'Gere um serviço?', title: 'Monitorize os seus serviços com o SSLPing',
      body: 'Configure a monitorização dos serviços que gere, publique uma página de estado clara e mantenha a sua equipa informada quando ocorrer um problema.',
      benefits: ['Monitorização dos seus serviços', 'Página pública de estado com a sua marca', 'Alertas e histórico de incidentes'], primary: 'Iniciar monitorização', secondary: 'Iniciar sessão',
    },
    faq: {
      eyebrow: 'Perguntas frequentes', title: 'O que deve saber sobre o diretório',
      items: [
        { question: 'O que mostram os cartões do diretório?', answer: 'Cada cartão identifica um serviço público listado e remete para a respetiva página pública de estado. O cartão não é um indicador de estado em tempo real.' },
        { question: 'Como é que o SSLPing verifica os serviços?', answer: 'Verificamos HTTP(S), seguimos redirecionamentos e validamos TLS a cada cinco minutos, a partir de quatro localizações distribuídas.' },
        { question: 'O SSLPing está associado aos serviços listados?', answer: 'Não. Este é um diretório de disponibilidade independente; as marcas e os conteúdos publicados pertencem aos respetivos proprietários.' },
        { question: 'Como posso monitorizar o meu site ou serviço?', answer: 'Crie uma conta SSLPing para configurar a sua monitorização e publicar uma página de estado para os seus utilizadores.' },
      ],
    },
    footer: { tagline: 'Um diretório regional de serviços públicos e das respetivas páginas de estado.', directory: 'Diretório de serviços', how: 'Como funciona', regions: 'Regiões', privacy: 'Privacidade', terms: 'Termos', copyright: '© {year} SSLPing. Todos os direitos reservados.' },
    menu: { open: 'Abrir menu', close: 'Fechar menu' }, regionSelectorLabel: 'Escolher região',
  },

  ro: {
    skipLink: 'Sari la conținutul principal',
    nav: { directory: 'Catalog de servicii', how: 'Cum funcționează', regions: 'Regiuni', monitoring: 'Monitorizează-ți serviciul', login: 'Autentificare' },
    hero: {
      eyebrow: 'Catalog public al stării serviciilor', title: 'Starea site-urilor și serviciilor din {region}',
      description: 'Găsește serviciile online disponibile în regiunea ta și accesează direct paginile lor publice de stare pentru informații despre întreruperi și mentenanță.',
      searchLabel: 'Caută în catalogul de servicii', searchPlaceholder: 'Caută un site, o aplicație sau un serviciu…', searchButton: 'Caută',
      trustNote: 'SSLPing verifică HTTP(S), redirecționările și TLS la fiecare cinci minute din patru locații distribuite.',
    },
    metrics: { services: 'servicii listate', statusPages: 'pagini publice de stare', checkLocations: 'locații de verificare distribuite' },
    catalog: {
      eyebrow: 'Catalog pentru {region}', title: 'Pagini de stare ale serviciilor din {region}',
      description: 'Explorează serviciile publice pe care le verificăm pentru această regiune, apoi deschide pagina de stare pentru detaliile publicate.',
      searchLabel: 'Caută un serviciu', filterLabel: 'Filtrează serviciile', all: 'Toate', results: '{count} rezultate', resultSingular: '{count} rezultat', openStatus: 'Deschide pagina de stare', verifiedPage: 'Pagină publică de stare',
      noResults: 'Niciun serviciu nu corespunde căutării.', clear: 'Șterge căutarea',
      usFallbackNote: 'O sursă dedicată pentru Statele Unite nu este încă disponibilă. De aceea, domeniul principal afișează servicii globale disponibile pe scară largă, cu cea mai apropiată pagină regională de stare în limba engleză.',
    },
    how: {
      eyebrow: 'Context clar', title: 'De la căutare la pagina de stare în trei pași',
      body: 'Catalogul te conduce rapid la sursa potrivită, fără a sugera că fișele afișează starea în timp real.',
      steps: [
        { title: 'Găsește serviciul', body: 'Introdu numele site-ului, aplicației sau furnizorului pe care îl folosești.' },
        { title: 'Alege rezultatul regional', body: 'Afișăm versiunea disponibilă public cea mai apropiată de regiunea ta.' },
        { title: 'Deschide pagina de stare', body: 'Consultă starea, incidentele și mentenanța publicate pe pagina publică de stare.' },
      ],
    },
    regions: { eyebrow: 'Acoperire regională', title: 'Un catalog local pentru fiecare regiune acceptată', body: 'Alege regiunea pentru a explora servicii relevante în limba ta și pentru a ajunge la cea mai apropiată pagină regională de stare.', current: 'Regiunea actuală' },
    product: {
      eyebrow: 'Administrezi un serviciu?', title: 'Monitorizează-ți propriile servicii cu SSLPing',
      body: 'Configurează monitorizarea serviciilor pe care le administrezi, publică o pagină de stare clară și ține-ți echipa la curent când apare o problemă.',
      benefits: ['Monitorizarea propriilor servicii', 'Pagină publică de stare cu marca ta', 'Alerte și istoric al incidentelor'], primary: 'Începe monitorizarea', secondary: 'Autentificare',
    },
    faq: {
      eyebrow: 'Întrebări frecvente', title: 'Ce trebuie să știi despre catalog',
      items: [
        { question: 'Ce arată fișele din catalog?', answer: 'Fiecare fișă identifică un serviciu public listat și trimite la pagina sa publică de stare. Fișa în sine nu este un indicator de stare în timp real.' },
        { question: 'Cum verifică SSLPing serviciile?', answer: 'Verificăm HTTP(S), urmăm redirecționările și validăm TLS la fiecare cinci minute din patru locații distribuite.' },
        { question: 'SSLPing este afiliat serviciilor listate?', answer: 'Nu. Acesta este un catalog independent de disponibilitate; mărcile și conținutul publicat aparțin proprietarilor respectivi.' },
        { question: 'Cum îmi pot monitoriza propriul site sau serviciu?', answer: 'Creează un cont SSLPing pentru a configura monitorizarea și a publica o pagină de stare pentru utilizatorii tăi.' },
      ],
    },
    footer: { tagline: 'Un catalog regional de servicii publice și paginile lor de stare.', directory: 'Catalog de servicii', how: 'Cum funcționează', regions: 'Regiuni', privacy: 'Confidențialitate', terms: 'Termeni', copyright: '© {year} SSLPing. Toate drepturile rezervate.' },
    menu: { open: 'Deschide meniul', close: 'Închide meniul' }, regionSelectorLabel: 'Alege regiunea',
  },

  sk: {
    skipLink: 'Prejsť na hlavný obsah',
    nav: { directory: 'Katalóg služieb', how: 'Ako to funguje', regions: 'Regióny', monitoring: 'Monitorovať vlastnú službu', login: 'Prihlásiť sa' },
    hero: {
      eyebrow: 'Katalóg verejných stavov služieb', title: 'Stav webov a služieb v regióne {region}',
      description: 'Nájdite online služby dostupné vo vašom regióne a prejdite priamo na ich verejné stavové stránky s informáciami o výpadkoch a údržbe.',
      searchLabel: 'Hľadať v katalógu služieb', searchPlaceholder: 'Hľadajte web, aplikáciu alebo službu…', searchButton: 'Hľadať',
      trustNote: 'SSLPing každých päť minút zo štyroch distribuovaných lokalít kontroluje HTTP(S), presmerovania a TLS.',
    },
    metrics: { services: 'služieb v katalógu', statusPages: 'verejných stavových stránok', checkLocations: 'distribuované kontrolné lokality' },
    catalog: {
      eyebrow: 'Katalóg pre {region}', title: 'Stavové stránky služieb v regióne {region}',
      description: 'Prezrite si verejné služby, ktoré kontrolujeme pre tento región, a otvorte stavovú stránku s publikovanými podrobnosťami.',
      searchLabel: 'Hľadať službu', filterLabel: 'Filtrovať služby', all: 'Všetky', results: '{count} výsledkov', resultSingular: '{count} výsledok', openStatus: 'Otvoriť stavovú stránku', verifiedPage: 'Verejná stavová stránka',
      noResults: 'Vášmu vyhľadávaniu nezodpovedá žiadna služba.', clear: 'Vymazať vyhľadávanie',
      usFallbackNote: 'Samostatný zdroj pre USA zatiaľ nie je k dispozícii. Hlavná doména preto zobrazuje široko dostupné globálne služby s najbližšou anglickou regionálnou stavovou stránkou.',
    },
    how: {
      eyebrow: 'Jasný kontext', title: 'Od vyhľadania k stavovej stránke v troch krokoch',
      body: 'Katalóg vás rýchlo privedie k správnemu zdroju bez toho, aby naznačoval, že karty zobrazujú stav v reálnom čase.',
      steps: [
        { title: 'Nájdite službu', body: 'Zadajte názov webu, aplikácie alebo poskytovateľa, ktorého používate.' },
        { title: 'Vyberte regionálny výsledok', body: 'Zobrazíme verejne dostupnú verziu, ktorá je najbližšie k vášmu regiónu.' },
        { title: 'Otvorte stavovú stránku', body: 'Pozrite si stav, incidenty a údržbu publikované na verejnej stavovej stránke.' },
      ],
    },
    regions: { eyebrow: 'Regionálne pokrytie', title: 'Miestny katalóg pre každý podporovaný región', body: 'Vyberte svoj región, prezrite si relevantné služby vo svojom jazyku a otvorte najbližšiu regionálnu stavovú stránku.', current: 'Aktuálny región' },
    product: {
      eyebrow: 'Prevádzkujete službu?', title: 'Monitorujte svoje služby pomocou SSLPing',
      body: 'Nastavte monitoring služieb, ktoré prevádzkujete, publikujte prehľadnú stavovú stránku a pri probléme informujte svoj tím.',
      benefits: ['Monitoring vlastných služieb', 'Verejná stavová stránka s vašou značkou', 'Upozornenia a história incidentov'], primary: 'Spustiť monitoring', secondary: 'Prihlásiť sa',
    },
    faq: {
      eyebrow: 'Časté otázky', title: 'Čo treba vedieť o katalógu',
      items: [
        { question: 'Čo zobrazujú karty v katalógu?', answer: 'Každá karta predstavuje zaradenú verejnú službu a odkazuje na jej verejnú stavovú stránku. Samotná karta nie je ukazovateľom stavu v reálnom čase.' },
        { question: 'Ako SSLPing kontroluje služby?', answer: 'Každých päť minút zo štyroch distribuovaných lokalít kontrolujeme HTTP(S), sledujeme presmerovania a overujeme TLS.' },
        { question: 'Je SSLPing prepojený s uvedenými službami?', answer: 'Nie. Ide o nezávislý katalóg dostupnosti; ochranné známky aj publikovaný obsah patria ich vlastníkom.' },
        { question: 'Ako môžem monitorovať vlastný web alebo službu?', answer: 'Vytvorte si účet SSLPing, nastavte vlastný monitoring a publikujte stavovú stránku pre svojich používateľov.' },
      ],
    },
    footer: { tagline: 'Regionálny katalóg verejných služieb a ich stavových stránok.', directory: 'Katalóg služieb', how: 'Ako to funguje', regions: 'Regióny', privacy: 'Súkromie', terms: 'Podmienky', copyright: '© {year} SSLPing. Všetky práva vyhradené.' },
    menu: { open: 'Otvoriť ponuku', close: 'Zavrieť ponuku' }, regionSelectorLabel: 'Vybrať región',
  },

  sl: {
    skipLink: 'Preskoči na glavno vsebino',
    nav: { directory: 'Imenik storitev', how: 'Kako deluje', regions: 'Regije', monitoring: 'Spremljajte svojo storitev', login: 'Prijava' },
    hero: {
      eyebrow: 'Imenik javnih stanj storitev', title: 'Stanje spletnih mest in storitev v regiji {region}',
      description: 'Poiščite spletne storitve, ki so na voljo v vaši regiji, in odprite njihove javne strani stanja z informacijami o izpadih in vzdrževanju.',
      searchLabel: 'Išči po imeniku storitev', searchPlaceholder: 'Poiščite spletno mesto, aplikacijo ali storitev…', searchButton: 'Išči',
      trustNote: 'SSLPing vsakih pet minut s štirih porazdeljenih lokacij preveri HTTP(S), preusmeritve in TLS.',
    },
    metrics: { services: 'navedenih storitev', statusPages: 'javnih strani stanja', checkLocations: 'porazdeljene lokacije preverjanja' },
    catalog: {
      eyebrow: 'Imenik za {region}', title: 'Strani stanja storitev v regiji {region}',
      description: 'Prebrskajte javne storitve, ki jih preverjamo za to regijo, in odprite stran stanja za objavljene podrobnosti.',
      searchLabel: 'Poišči storitev', filterLabel: 'Filtriraj storitve', all: 'Vse', results: '{count} rezultatov', resultSingular: '{count} rezultat', openStatus: 'Odpri stran stanja', verifiedPage: 'Javna stran stanja',
      noResults: 'Nobena storitev ne ustreza vašemu iskanju.', clear: 'Počisti iskanje',
      usFallbackNote: 'Namenski vir za ZDA še ni na voljo. Glavna domena zato prikazuje široko dostopne globalne storitve z najbližjo regionalno stranjo stanja v angleščini.',
    },
    how: {
      eyebrow: 'Jasen kontekst', title: 'Od iskanja do strani stanja v treh korakih',
      body: 'Imenik vas hitro pripelje do pravega vira, ne da bi namigoval, da kartice prikazujejo stanje v realnem času.',
      steps: [
        { title: 'Poiščite storitev', body: 'Vnesite ime spletnega mesta, aplikacije ali ponudnika, ki ga uporabljate.' },
        { title: 'Izberite regionalni rezultat', body: 'Prikažemo javno dostopno različico, ki je najbližja vaši regiji.' },
        { title: 'Odprite stran stanja', body: 'Oglejte si stanje, incidente in vzdrževanje, objavljene na javni strani stanja.' },
      ],
    },
    regions: { eyebrow: 'Regionalna pokritost', title: 'Lokalni imenik za vsako podprto regijo', body: 'Izberite svojo regijo, prebrskajte ustrezne storitve v svojem jeziku in odprite najbližjo regionalno stran stanja.', current: 'Trenutna regija' },
    product: {
      eyebrow: 'Upravljate storitev?', title: 'Spremljajte svoje storitve s SSLPing',
      body: 'Nastavite spremljanje storitev, ki jih upravljate, objavite pregledno stran stanja in ob težavah obvestite svojo ekipo.',
      benefits: ['Spremljanje lastnih storitev', 'Javna stran stanja z vašo blagovno znamko', 'Opozorila in zgodovina incidentov'], primary: 'Začni spremljanje', secondary: 'Prijava',
    },
    faq: {
      eyebrow: 'Pogosta vprašanja', title: 'Kaj morate vedeti o imeniku',
      items: [
        { question: 'Kaj prikazujejo kartice imenika?', answer: 'Vsaka kartica predstavlja navedeno javno storitev in vsebuje povezavo do njene javne strani stanja. Kartica sama ni kazalnik stanja v realnem času.' },
        { question: 'Kako SSLPing preverja storitve?', answer: 'Vsakih pet minut s štirih porazdeljenih lokacij preverimo HTTP(S), sledimo preusmeritvam in potrdimo TLS.' },
        { question: 'Ali je SSLPing povezan z navedenimi storitvami?', answer: 'Ne. To je neodvisen imenik razpoložljivosti; blagovne znamke in objavljena vsebina pripadajo njihovim lastnikom.' },
        { question: 'Kako lahko spremljam svoje spletno mesto ali storitev?', answer: 'Ustvarite račun SSLPing, nastavite lastno spremljanje in objavite stran stanja za svoje uporabnike.' },
      ],
    },
    footer: { tagline: 'Regionalni imenik javnih storitev in njihovih strani stanja.', directory: 'Imenik storitev', how: 'Kako deluje', regions: 'Regije', privacy: 'Zasebnost', terms: 'Pogoji', copyright: '© {year} SSLPing. Vse pravice pridržane.' },
    menu: { open: 'Odpri meni', close: 'Zapri meni' }, regionSelectorLabel: 'Izberite regijo',
  },

  sr: {
    skipLink: 'Пређи на главни садржај',
    nav: { directory: 'Каталог услуга', how: 'Како ради', regions: 'Региони', monitoring: 'Пратите своју услугу', login: 'Пријава' },
    hero: {
      eyebrow: 'Каталог јавних статуса услуга', title: 'Статус веб-сајтова и услуга у региону {region}',
      description: 'Пронађите онлајн услуге доступне у свом региону и отворите њихове јавне статусне странице са информацијама о прекидима и одржавању.',
      searchLabel: 'Претражи каталог услуга', searchPlaceholder: 'Потражите веб-сајт, апликацију или услугу…', searchButton: 'Претражи',
      trustNote: 'SSLPing сваких пет минута са четири распоређене локације проверава HTTP(S), преусмеравања и TLS.',
    },
    metrics: { services: 'услуга у каталогу', statusPages: 'јавних статусних страница', checkLocations: 'распоређене локације провере' },
    catalog: {
      eyebrow: 'Каталог за {region}', title: 'Статусне странице услуга у региону {region}',
      description: 'Прегледајте јавне услуге које проверавамо за овај регион и отворите статусну страницу за објављене детаље.',
      searchLabel: 'Претражи услугу', filterLabel: 'Филтрирај услуге', all: 'Све', results: '{count} резултата', resultSingular: '{count} резултат', openStatus: 'Отвори статусну страницу', verifiedPage: 'Јавна статусна страница',
      noResults: 'Ниједна услуга не одговара вашој претрази.', clear: 'Обриши претрагу',
      usFallbackNote: 'Наменски извор за САД још није доступан. Главни домен зато приказује широко доступне глобалне услуге са најближом регионалном статусном страницом на енглеском језику.',
    },
    how: {
      eyebrow: 'Јасан контекст', title: 'Од претраге до статусне странице у три корака',
      body: 'Каталог вас брзо води до правог извора, без наговештаја да картице приказују статус у реалном времену.',
      steps: [
        { title: 'Пронађите услугу', body: 'Унесите назив веб-сајта, апликације или добављача којег користите.' },
        { title: 'Изаберите регионални резултат', body: 'Приказујемо јавно доступну верзију најближу вашем региону.' },
        { title: 'Отворите статусну страницу', body: 'Погледајте статус, инциденте и одржавање објављене на јавној статусној страници.' },
      ],
    },
    regions: { eyebrow: 'Регионална покривеност', title: 'Локални каталог за сваки подржани регион', body: 'Изаберите свој регион да бисте прегледали релевантне услуге на свом језику и отворили најближу регионалну статусну страницу.', current: 'Тренутни регион' },
    product: {
      eyebrow: 'Управљате услугом?', title: 'Пратите своје услуге помоћу SSLPing-а',
      body: 'Подесите надзор услуга којима управљате, објавите јасну статусну страницу и обавестите тим када дође до проблема.',
      benefits: ['Надзор сопствених услуга', 'Јавна статусна страница са вашим брендом', 'Упозорења и историја инцидената'], primary: 'Покрени надзор', secondary: 'Пријава',
    },
    faq: {
      eyebrow: 'Честа питања', title: 'Шта треба да знате о каталогу',
      items: [
        { question: 'Шта приказују картице у каталогу?', answer: 'Свака картица представља наведену јавну услугу и повезује се са њеном јавном статусном страницом. Сама картица није показатељ статуса у реалном времену.' },
        { question: 'Како SSLPing проверава услуге?', answer: 'Сваких пет минута са четири распоређене локације проверавамо HTTP(S), пратимо преусмеравања и потврђујемо TLS.' },
        { question: 'Да ли је SSLPing повезан са наведеним услугама?', answer: 'Не. Ово је независан каталог доступности; жигови и објављени садржај припадају њиховим власницима.' },
        { question: 'Како могу да пратим свој веб-сајт или услугу?', answer: 'Отворите SSLPing налог, подесите сопствени надзор и објавите статусну страницу за своје кориснике.' },
      ],
    },
    footer: { tagline: 'Регионални каталог јавних услуга и њихових статусних страница.', directory: 'Каталог услуга', how: 'Како ради', regions: 'Региони', privacy: 'Приватност', terms: 'Услови', copyright: '© {year} SSLPing. Сва права задржана.' },
    menu: { open: 'Отвори мени', close: 'Затвори мени' }, regionSelectorLabel: 'Изаберите регион',
  },

  sv: {
    skipLink: 'Gå till huvudinnehållet',
    nav: { directory: 'Tjänstekatalog', how: 'Så fungerar det', regions: 'Regioner', monitoring: 'Övervaka din tjänst', login: 'Logga in' },
    hero: {
      eyebrow: 'Katalog över offentliga tjänstestatusar', title: 'Status för webbplatser och tjänster i {region}',
      description: 'Hitta onlinetjänster som är tillgängliga i din region och gå direkt till deras offentliga statussidor för information om avbrott och underhåll.',
      searchLabel: 'Sök i tjänstekatalogen', searchPlaceholder: 'Sök efter en webbplats, app eller tjänst…', searchButton: 'Sök',
      trustNote: 'SSLPing kontrollerar HTTP(S), omdirigeringar och TLS var femte minut från fyra distribuerade platser.',
    },
    metrics: { services: 'listade tjänster', statusPages: 'offentliga statussidor', checkLocations: 'distribuerade kontrollplatser' },
    catalog: {
      eyebrow: 'Katalog för {region}', title: 'Statussidor för tjänster i {region}',
      description: 'Utforska de offentliga tjänster vi kontrollerar för regionen och öppna statussidan för publicerade uppgifter.',
      searchLabel: 'Sök efter en tjänst', filterLabel: 'Filtrera tjänster', all: 'Alla', results: '{count} resultat', resultSingular: '{count} resultat', openStatus: 'Öppna statussida', verifiedPage: 'Offentlig statussida',
      noResults: 'Inga tjänster matchar din sökning.', clear: 'Rensa sökningen',
      usFallbackNote: 'En särskild källa för USA är ännu inte tillgänglig. Rotdomänen visar därför globalt spridda tjänster med den närmaste engelskspråkiga regionala statussidan.',
    },
    how: {
      eyebrow: 'Tydligt sammanhang', title: 'Från sökning till statussida i tre steg',
      body: 'Katalogen tar dig snabbt till rätt källa utan att antyda att katalogkorten visar status i realtid.',
      steps: [
        { title: 'Hitta tjänsten', body: 'Ange namnet på webbplatsen, appen eller leverantören du använder.' },
        { title: 'Välj det regionala resultatet', body: 'Vi visar den offentligt tillgängliga version som ligger närmast din region.' },
        { title: 'Öppna statussidan', body: 'Se status, incidenter och underhåll som publicerats på den offentliga statussidan.' },
      ],
    },
    regions: { eyebrow: 'Regional täckning', title: 'En lokal katalog för varje region som stöds', body: 'Välj din region för att se relevanta tjänster på ditt språk och öppna den närmaste regionala statussidan.', current: 'Aktuell region' },
    product: {
      eyebrow: 'Driver du en tjänst?', title: 'Övervaka dina egna tjänster med SSLPing',
      body: 'Konfigurera övervakning för tjänsterna du driver, publicera en tydlig statussida och håll teamet informerat när något går fel.',
      benefits: ['Övervakning av dina egna tjänster', 'Offentlig statussida med ditt varumärke', 'Aviseringar och incidenthistorik'], primary: 'Starta övervakning', secondary: 'Logga in',
    },
    faq: {
      eyebrow: 'Vanliga frågor', title: 'Det här bör du veta om katalogen',
      items: [
        { question: 'Vad visar korten i katalogen?', answer: 'Varje kort visar en listad offentlig tjänst och länkar till dess offentliga statussida. Kortet i sig är inte en statusindikator i realtid.' },
        { question: 'Hur kontrollerar SSLPing tjänsterna?', answer: 'Vi kontrollerar HTTP(S), följer omdirigeringar och validerar TLS var femte minut från fyra distribuerade platser.' },
        { question: 'Är SSLPing anslutet till de listade tjänsterna?', answer: 'Nej. Det här är en oberoende tillgänglighetskatalog; varumärken och publicerat innehåll tillhör respektive ägare.' },
        { question: 'Hur övervakar jag min egen webbplats eller tjänst?', answer: 'Skapa ett SSLPing-konto för att konfigurera egen övervakning och publicera en statussida för dina användare.' },
      ],
    },
    footer: { tagline: 'En regional katalog över offentliga tjänster och deras statussidor.', directory: 'Tjänstekatalog', how: 'Så fungerar det', regions: 'Regioner', privacy: 'Integritet', terms: 'Villkor', copyright: '© {year} SSLPing. Alla rättigheter förbehållna.' },
    menu: { open: 'Öppna meny', close: 'Stäng meny' }, regionSelectorLabel: 'Välj region',
  },

  tr: {
    skipLink: 'Ana içeriğe geç',
    nav: { directory: 'Hizmet dizini', how: 'Nasıl çalışır?', regions: 'Bölgeler', monitoring: 'Kendi hizmetinizi izleyin', login: 'Giriş yap' },
    hero: {
      eyebrow: 'Herkese açık hizmet durumu dizini', title: '{region} için web sitesi ve hizmet durumu',
      description: 'Bölgenizde kullanılabilen çevrimiçi hizmetleri bulun; kesinti ve bakım bilgileri için doğrudan herkese açık durum sayfalarına gidin.',
      searchLabel: 'Hizmet dizininde ara', searchPlaceholder: 'Web sitesi, uygulama veya hizmet arayın…', searchButton: 'Ara',
      trustNote: 'SSLPing, HTTP(S), yönlendirmeler ve TLS’yi dört dağıtılmış konumdan beş dakikada bir kontrol eder.',
    },
    metrics: { services: 'listelenen hizmet', statusPages: 'herkese açık durum sayfası', checkLocations: 'dağıtılmış kontrol konumu' },
    catalog: {
      eyebrow: '{region} dizini', title: '{region} için hizmet durum sayfaları',
      description: 'Bu bölge için kontrol ettiğimiz herkese açık hizmetlere göz atın, ardından yayımlanan ayrıntılar için durum sayfasını açın.',
      searchLabel: 'Hizmet ara', filterLabel: 'Hizmetleri filtrele', all: 'Tümü', results: '{count} sonuç', resultSingular: '{count} sonuç', openStatus: 'Durum sayfasını aç', verifiedPage: 'Herkese açık durum sayfası',
      noResults: 'Aramanızla eşleşen hizmet bulunamadı.', clear: 'Aramayı temizle',
      usFallbackNote: 'ABD’ye özel bir kaynak henüz mevcut değil. Bu nedenle ana alan adı, yaygın olarak kullanılabilen küresel hizmetleri en yakın İngilizce bölgesel durum sayfasıyla birlikte gösterir.',
    },
    how: {
      eyebrow: 'Net bağlam', title: 'Aramadan durum sayfasına üç adımda',
      body: 'Dizin, kartların gerçek zamanlı durum gösterdiği izlenimini vermeden sizi hızla doğru kaynağa ulaştırır.',
      steps: [
        { title: 'Hizmeti bulun', body: 'Kullandığınız web sitesinin, uygulamanın veya sağlayıcının adını girin.' },
        { title: 'Bölgesel sonucu seçin', body: 'Bölgenize en yakın, herkese açık sürümü gösteririz.' },
        { title: 'Durum sayfasını açın', body: 'Herkese açık durum sayfasında yayımlanan durumu, olayları ve bakımı inceleyin.' },
      ],
    },
    regions: { eyebrow: 'Bölgesel kapsam', title: 'Desteklenen her bölge için yerel bir dizin', body: 'İlgili hizmetleri kendi dilinizde incelemek ve en yakın bölgesel durum sayfasına ulaşmak için bölgenizi seçin.', current: 'Geçerli bölge' },
    product: {
      eyebrow: 'Bir hizmet mi işletiyorsunuz?', title: 'Kendi hizmetlerinizi SSLPing ile izleyin',
      body: 'İşlettiğiniz hizmetler için izleme kurun, anlaşılır bir durum sayfası yayımlayın ve sorun olduğunda ekibinizi bilgilendirin.',
      benefits: ['Kendi hizmetleriniz için izleme', 'Markanıza özel herkese açık durum sayfası', 'Uyarılar ve olay geçmişi'], primary: 'İzlemeye başla', secondary: 'Giriş yap',
    },
    faq: {
      eyebrow: 'Sık sorulan sorular', title: 'Dizin hakkında bilmeniz gerekenler',
      items: [
        { question: 'Dizin kartları ne gösterir?', answer: 'Her kart listelenen herkese açık bir hizmeti tanımlar ve bu hizmetin herkese açık durum sayfasına bağlantı verir. Kartın kendisi gerçek zamanlı bir durum göstergesi değildir.' },
        { question: 'SSLPing hizmetleri nasıl kontrol eder?', answer: 'Dört dağıtılmış konumdan beş dakikada bir HTTP(S)’yi kontrol eder, yönlendirmeleri izler ve TLS’yi doğrularız.' },
        { question: 'SSLPing listelenen hizmetlerle bağlantılı mı?', answer: 'Hayır. Bu bağımsız bir kullanılabilirlik dizinidir; ticari markalar ve yayımlanan içerik ilgili sahiplerine aittir.' },
        { question: 'Kendi web sitemi veya hizmetimi nasıl izleyebilirim?', answer: 'Kendi izlemenizi kurmak ve kullanıcılarınıza bir durum sayfası yayımlamak için SSLPing hesabı oluşturun.' },
      ],
    },
    footer: { tagline: 'Herkese açık hizmetler ve durum sayfaları için bölgesel dizin.', directory: 'Hizmet dizini', how: 'Nasıl çalışır?', regions: 'Bölgeler', privacy: 'Gizlilik', terms: 'Koşullar', copyright: '© {year} SSLPing. Tüm hakları saklıdır.' },
    menu: { open: 'Menüyü aç', close: 'Menüyü kapat' }, regionSelectorLabel: 'Bölge seçin',
  },

  uk: {
    skipLink: 'Перейти до основного вмісту',
    nav: { directory: 'Каталог сервісів', how: 'Як це працює', regions: 'Регіони', monitoring: 'Моніторинг власного сервісу', login: 'Увійти' },
    hero: {
      eyebrow: 'Каталог публічних статусів сервісів', title: 'Статус сайтів і сервісів у регіоні {region}',
      description: 'Знаходьте онлайн-сервіси, доступні у вашому регіоні, і переходьте безпосередньо на їхні публічні сторінки статусу з інформацією про збої та технічні роботи.',
      searchLabel: 'Пошук у каталозі сервісів', searchPlaceholder: 'Знайдіть сайт, застосунок або сервіс…', searchButton: 'Знайти',
      trustNote: 'SSLPing кожні п’ять хвилин із чотирьох розподілених локацій перевіряє HTTP(S), перенаправлення й TLS.',
    },
    metrics: { services: 'сервісів у каталозі', statusPages: 'публічних сторінок статусу', checkLocations: 'розподілені локації перевірки' },
    catalog: {
      eyebrow: 'Каталог для {region}', title: 'Сторінки статусу сервісів у регіоні {region}',
      description: 'Переглядайте публічні сервіси, які ми перевіряємо для цього регіону, і відкривайте сторінку статусу з опублікованими деталями.',
      searchLabel: 'Знайти сервіс', filterLabel: 'Фільтрувати сервіси', all: 'Усі', results: '{count} результатів', resultSingular: '{count} результат', openStatus: 'Відкрити сторінку статусу', verifiedPage: 'Публічна сторінка статусу',
      noResults: 'Сервісів, що відповідають запиту, не знайдено.', clear: 'Очистити пошук',
      usFallbackNote: 'Окреме джерело для США поки недоступне. Тому головний домен показує широко доступні глобальні сервіси з найближчою регіональною сторінкою статусу англійською мовою.',
    },
    how: {
      eyebrow: 'Зрозумілий контекст', title: 'Від пошуку до сторінки статусу за три кроки',
      body: 'Каталог швидко спрямовує до потрібного джерела, не створюючи враження, що картки показують статус у реальному часі.',
      steps: [
        { title: 'Знайдіть сервіс', body: 'Введіть назву сайту, застосунку або постачальника, яким користуєтеся.' },
        { title: 'Оберіть регіональний результат', body: 'Ми показуємо публічно доступну версію, найближчу до вашого регіону.' },
        { title: 'Відкрийте сторінку статусу', body: 'Перегляньте статус, інциденти й технічні роботи, опубліковані на публічній сторінці статусу.' },
      ],
    },
    regions: { eyebrow: 'Регіональне охоплення', title: 'Локальний каталог для кожного підтримуваного регіону', body: 'Оберіть свій регіон, щоб переглядати відповідні сервіси своєю мовою та перейти на найближчу регіональну сторінку статусу.', current: 'Поточний регіон' },
    product: {
      eyebrow: 'Керуєте сервісом?', title: 'Відстежуйте власні сервіси за допомогою SSLPing',
      body: 'Налаштуйте моніторинг сервісів, якими керуєте, опублікуйте зрозумілу сторінку статусу й повідомляйте команду, коли виникає проблема.',
      benefits: ['Моніторинг власних сервісів', 'Публічна сторінка статусу з вашим брендом', 'Сповіщення та історія інцидентів'], primary: 'Почати моніторинг', secondary: 'Увійти',
    },
    faq: {
      eyebrow: 'Поширені запитання', title: 'Що варто знати про каталог',
      items: [
        { question: 'Що показують картки каталогу?', answer: 'Кожна картка представляє публічний сервіс у каталозі та містить посилання на його публічну сторінку статусу. Сама картка не є індикатором статусу в реальному часі.' },
        { question: 'Як SSLPing перевіряє сервіси?', answer: 'Кожні п’ять хвилин із чотирьох розподілених локацій ми перевіряємо HTTP(S), переходимо за перенаправленнями та перевіряємо TLS.' },
        { question: 'Чи пов’язаний SSLPing із сервісами в каталозі?', answer: 'Ні. Це незалежний каталог доступності; торговельні марки й опублікований вміст належать відповідним власникам.' },
        { question: 'Як відстежувати власний сайт або сервіс?', answer: 'Створіть обліковий запис SSLPing, щоб налаштувати власний моніторинг і опублікувати сторінку статусу для користувачів.' },
      ],
    },
    footer: { tagline: 'Регіональний каталог публічних сервісів і їхніх сторінок статусу.', directory: 'Каталог сервісів', how: 'Як це працює', regions: 'Регіони', privacy: 'Конфіденційність', terms: 'Умови', copyright: '© {year} SSLPing. Усі права захищено.' },
    menu: { open: 'Відкрити меню', close: 'Закрити меню' }, regionSelectorLabel: 'Оберіть регіон',
  },

  ur: {
    skipLink: 'مرکزی مواد پر جائیں',
    nav: { directory: 'سروس ڈائریکٹری', how: 'یہ کیسے کام کرتی ہے', regions: 'علاقے', monitoring: 'اپنی سروس مانیٹر کریں', login: 'لاگ اِن' },
    hero: {
      eyebrow: 'عوامی سروس اسٹیٹس ڈائریکٹری', title: '{region} میں ویب سائٹس اور سروسز کی صورتِ حال',
      description: 'اپنے علاقے میں دستیاب آن لائن سروسز تلاش کریں اور بندش یا دیکھ بھال کی معلومات کے لیے براہِ راست ان کے عوامی اسٹیٹس صفحات پر جائیں۔',
      searchLabel: 'سروس ڈائریکٹری میں تلاش کریں', searchPlaceholder: 'ویب سائٹ، ایپ یا سروس تلاش کریں…', searchButton: 'تلاش',
      trustNote: 'SSLPing چار تقسیم شدہ مقامات سے ہر پانچ منٹ بعد HTTP(S)، ری ڈائریکٹس اور TLS کی جانچ کرتا ہے۔',
    },
    metrics: { services: 'درج سروسز', statusPages: 'عوامی اسٹیٹس صفحات', checkLocations: 'تقسیم شدہ جانچ کے مقامات' },
    catalog: {
      eyebrow: '{region} ڈائریکٹری', title: '{region} کے لیے سروس اسٹیٹس صفحات',
      description: 'اس علاقے کے لیے ہماری جانچ میں شامل عوامی سروسز دیکھیں، پھر شائع شدہ تفصیلات کے لیے اسٹیٹس صفحہ کھولیں۔',
      searchLabel: 'سروس تلاش کریں', filterLabel: 'سروسز فلٹر کریں', all: 'سب', results: '{count} نتائج', resultSingular: '{count} نتیجہ', openStatus: 'اسٹیٹس صفحہ کھولیں', verifiedPage: 'عوامی اسٹیٹس صفحہ',
      noResults: 'آپ کی تلاش سے ملتی کوئی سروس نہیں ملی۔', clear: 'تلاش صاف کریں',
      usFallbackNote: 'امریکہ کے لیے مخصوص ذریعہ ابھی دستیاب نہیں۔ اسی لیے مرکزی ڈومین وسیع پیمانے پر دستیاب عالمی سروسز کے ساتھ قریب ترین انگریزی علاقائی اسٹیٹس صفحہ دکھاتا ہے۔',
    },
    how: {
      eyebrow: 'واضح سیاق', title: 'تلاش سے اسٹیٹس صفحے تک تین مراحل میں',
      body: 'ڈائریکٹری آپ کو جلد درست ذریعے تک پہنچاتی ہے، مگر یہ تاثر نہیں دیتی کہ کارڈز اصل وقت کی صورتِ حال دکھاتے ہیں۔',
      steps: [
        { title: 'سروس تلاش کریں', body: 'اپنی استعمال کردہ ویب سائٹ، ایپ یا فراہم کنندہ کا نام درج کریں۔' },
        { title: 'علاقائی نتیجہ منتخب کریں', body: 'ہم آپ کے علاقے کے قریب ترین عوامی طور پر دستیاب ورژن کو دکھاتے ہیں۔' },
        { title: 'اسٹیٹس صفحہ کھولیں', body: 'عوامی اسٹیٹس صفحے پر شائع شدہ صورتِ حال، واقعات اور دیکھ بھال دیکھیں۔' },
      ],
    },
    regions: { eyebrow: 'علاقائی کوریج', title: 'ہر معاون علاقے کے لیے مقامی ڈائریکٹری', body: 'اپنی زبان میں متعلقہ سروسز دیکھنے اور قریب ترین علاقائی اسٹیٹس صفحے تک پہنچنے کے لیے اپنا علاقہ منتخب کریں۔', current: 'موجودہ علاقہ' },
    product: {
      eyebrow: 'کیا آپ سروس چلاتے ہیں؟', title: 'SSLPing کے ساتھ اپنی سروسز مانیٹر کریں',
      body: 'اپنی چلائی جانے والی سروسز کی مانیٹرنگ ترتیب دیں، واضح اسٹیٹس صفحہ شائع کریں اور مسئلہ آنے پر اپنی ٹیم کو باخبر رکھیں۔',
      benefits: ['اپنی سروسز کی مانیٹرنگ', 'آپ کے برانڈ کا عوامی اسٹیٹس صفحہ', 'الرٹس اور واقعات کی تاریخ'], primary: 'مانیٹرنگ شروع کریں', secondary: 'لاگ اِن',
    },
    faq: {
      eyebrow: 'اکثر پوچھے گئے سوالات', title: 'ڈائریکٹری کے بارے میں اہم باتیں',
      items: [
        { question: 'ڈائریکٹری کے کارڈز کیا دکھاتے ہیں؟', answer: 'ہر کارڈ ایک درج عوامی سروس کی شناخت کرتا اور اس کے عوامی اسٹیٹس صفحے سے جوڑتا ہے۔ کارڈ خود اصل وقت کا اسٹیٹس اشارہ نہیں۔' },
        { question: 'SSLPing سروسز کی جانچ کیسے کرتا ہے؟', answer: 'ہم چار تقسیم شدہ مقامات سے ہر پانچ منٹ بعد HTTP(S) چیک کرتے، ری ڈائریکٹس کی پیروی کرتے اور TLS کی توثیق کرتے ہیں۔' },
        { question: 'کیا SSLPing درج سروسز سے وابستہ ہے؟', answer: 'نہیں۔ یہ دستیابی کی ایک آزاد ڈائریکٹری ہے؛ تجارتی نشان اور شائع شدہ مواد اپنے متعلقہ مالکان کی ملکیت ہیں۔' },
        { question: 'میں اپنی ویب سائٹ یا سروس کیسے مانیٹر کروں؟', answer: 'اپنی مانیٹرنگ ترتیب دینے اور صارفین کے لیے اسٹیٹس صفحہ شائع کرنے کو SSLPing اکاؤنٹ بنائیں۔' },
      ],
    },
    footer: { tagline: 'عوامی سروسز اور ان کے اسٹیٹس صفحات کی علاقائی ڈائریکٹری۔', directory: 'سروس ڈائریکٹری', how: 'یہ کیسے کام کرتی ہے', regions: 'علاقے', privacy: 'رازداری', terms: 'شرائط', copyright: '© {year} SSLPing۔ جملہ حقوق محفوظ ہیں۔' },
    menu: { open: 'مینو کھولیں', close: 'مینو بند کریں' }, regionSelectorLabel: 'علاقہ منتخب کریں',
  },

  'zh-Hant': {
    skipLink: '跳至主要內容',
    nav: { directory: '服務目錄', how: '運作方式', regions: '地區', monitoring: '監控您的服務', login: '登入' },
    hero: {
      eyebrow: '公開服務狀態目錄', title: '{region}網站與服務狀態',
      description: '尋找您所在地區可用的線上服務，並直接前往其公開狀態頁面，查看中斷與維護資訊。',
      searchLabel: '搜尋服務目錄', searchPlaceholder: '搜尋網站、應用程式或服務…', searchButton: '搜尋',
      trustNote: 'SSLPing 每五分鐘從四個分散式位置檢查 HTTP(S)、重新導向與 TLS。',
    },
    metrics: { services: '項收錄服務', statusPages: '個公開狀態頁面', checkLocations: '個分散式檢查位置' },
    catalog: {
      eyebrow: '{region}服務目錄', title: '{region}服務狀態頁面',
      description: '瀏覽我們針對此地區檢查的公開服務，再開啟狀態頁面查看發布者提供的詳細資訊。',
      searchLabel: '搜尋服務', filterLabel: '篩選服務', all: '全部', results: '{count} 項結果', resultSingular: '{count} 項結果', openStatus: '開啟狀態頁面', verifiedPage: '公開狀態頁面',
      noResults: '沒有符合搜尋條件的服務。', clear: '清除搜尋',
      usFallbackNote: '目前尚無專用的美國資料來源，因此根網域會顯示全球廣泛提供的服務，以及最接近的英語區域狀態頁面。',
    },
    how: {
      eyebrow: '資訊脈絡清楚', title: '三個步驟，從搜尋前往狀態頁面',
      body: '目錄能快速帶您前往正確的資訊來源，同時不會讓人誤以為目錄卡片顯示即時狀態。',
      steps: [
        { title: '尋找服務', body: '輸入您使用的網站、應用程式或供應商名稱。' },
        { title: '選擇地區結果', body: '我們會顯示最接近您所在地區且可公開存取的版本。' },
        { title: '開啟狀態頁面', body: '查看公開狀態頁面所發布的狀態、事件與維護資訊。' },
      ],
    },
    regions: { eyebrow: '區域涵蓋範圍', title: '為每個支援地區提供在地目錄', body: '選擇您的地區，以慣用語言瀏覽相關服務，並前往最接近的區域狀態頁面。', current: '目前地區' },
    product: {
      eyebrow: '您正在營運服務嗎？', title: '使用 SSLPing 監控自己的服務',
      body: '為您營運的服務設定監控、發布清楚的狀態頁面，並在發生問題時讓團隊掌握情況。',
      benefits: ['監控您自己的服務', '具有品牌風格的公開狀態頁面', '警示與事件紀錄'], primary: '開始監控', secondary: '登入',
    },
    faq: {
      eyebrow: '常見問題', title: '關於服務目錄，您需要知道的事',
      items: [
        { question: '目錄卡片會顯示什麼？', answer: '每張卡片代表一項收錄的公開服務，並連結至其公開狀態頁面；卡片本身並非即時狀態指標。' },
        { question: 'SSLPing 如何檢查服務？', answer: '我們每五分鐘從四個分散式位置檢查 HTTP(S)、跟隨重新導向並驗證 TLS。' },
        { question: 'SSLPing 與收錄的服務有合作關係嗎？', answer: '沒有。這是獨立的可用性目錄；商標與發布內容均屬其各自擁有者。' },
        { question: '如何監控自己的網站或服務？', answer: '建立 SSLPing 帳戶，即可設定自己的監控，並為使用者發布狀態頁面。' },
      ],
    },
    footer: { tagline: '公開服務及其狀態頁面的區域目錄。', directory: '服務目錄', how: '運作方式', regions: '地區', privacy: '隱私權', terms: '條款', copyright: '© {year} SSLPing。保留所有權利。' },
    menu: { open: '開啟選單', close: '關閉選單' }, regionSelectorLabel: '選擇地區',
  },
} satisfies Record<Locale, Copy>

export const translations: Record<Locale, Copy> = copy
