export type LegalKind = 'privacy' | 'terms'
export type LegalLanguage = 'en' | 'ru'

const content = {
  en: {
    home: 'Public status directory', language: 'Document language', contact: 'Contact', other: 'Related document',
    privacy: {
      title: 'Privacy information', description: 'How SSLPing uses account, monitoring and browser data, and how to contact us about privacy.',
      intro: 'This page describes data used by SSLPing features. It is service information, not a statement that every privacy requirement has been independently certified.',
      sections: [
        ['Account and workspace data', 'Account features use the name, email address, password credentials, language and workspace settings you provide. Monitoring features use configured targets, check results and incident history. Do not put secrets or unrelated personal information in monitor names or public page content.'],
        ['Public pages and notifications', 'Information published on a public status page can be read by its visitors. Subscriptions use the email address you submit to send confirmation and status updates. A follow link may provide access to following a monitor: share it only as intended.'],
        ['Browser storage', 'The dashboard stores session credentials and language preferences in browser storage to support signing in and your selected language. Public status pages can remember a cookie choice and a recent problem report in the browser. Clearing site data removes these local preferences and may sign you out; it does not delete server-side account data.'],
        ['Technical measurements', 'The web interface sends limited performance and error measurements: the metric name and value, mobile or desktop category, and dashboard or marketing surface. These event payloads do not include form contents, page URLs, account identifiers or error stacks. Network requests still carry technical connection information. This statement concerns measurement payloads, not every server or network log.'],
        ['Security and problem reports', 'Account security records can include an IP address and browser information. When you report a problem, SSLPing processes the selected reason, IP address and browser information. Where report enrichment is enabled, Cloudflare network data can add approximate location (including city or coordinates), timezone and internet provider details. These are separate from the limited performance measurements described above. Some forms load Cloudflare Turnstile for abuse protection when enabled; this connects your browser to Cloudflare.'],
        ['Questions about your data', 'Use the privacy contact below to ask about access, correction, deletion, retention, processing locations or service providers. Avoid sending passwords, session tokens or API keys by email. This page does not establish a single retention period or promise a deletion deadline.'],
      ],
      email: 'privacy@sslping.io', contactText: 'Privacy questions and data requests',
    },
    terms: {
      title: 'Terms of use', description: 'Practical conditions and limits for using SSLPing monitoring and its public status directory.',
      intro: 'These notes explain how to use the service and interpret its results. For the operator’s legal details, applicable law or contractual commitments, contact the legal address below. This page does not create an uptime guarantee or a contractual SLA.',
      sections: [
        ['Monitoring results', 'Checks record observations at particular times and locations. A successful website check does not confirm that every feature, app or account works. Missing or old observations cannot establish current availability. Check the observation time and scope before relying on a result.'],
        ['Independent public directory', 'SSLPing independently monitors the sites listed in its public directory. A directory status page is not the listed service’s official status page. The catalog country identifies a listing, not necessarily the location of the checking servers.'],
        ['Your account and content', 'Keep your password, API keys and session credentials private. Configure monitoring only for targets you are authorized to check. Publish only information you intend visitors to see, and protect sensitive status pages using the available access settings.'],
        ['Features, plans and notifications', 'Available features and limits are shown in the product for your workspace. Sample numbers in interface illustrations are demonstrations, not live service measurements. Alerts and public observations can be delayed or unavailable; use additional checks when making decisions that depend on availability.'],
        ['Contract and billing questions', 'Contact the legal address for the identity of the service operator, contract, jurisdiction, payment, cancellation or refund questions. This informational page does not specify company registration details, a governing jurisdiction, a refund policy or custom commercial terms.'],
      ],
      email: 'legal@sslping.io', contactText: 'Legal and contractual questions',
    },
  },
  ru: {
    home: 'Публичный каталог статусов', language: 'Язык документа', contact: 'Контакт', other: 'Связанный документ',
    privacy: {
      title: 'Информация о приватности', description: 'Какие данные используют функции SSLPing и куда обращаться по вопросам приватности.',
      intro: 'Здесь описаны данные, которые используют функции SSLPing. Это информация о сервисе, а не заявление о независимой сертификации соответствия всем требованиям к защите данных.',
      sections: [
        ['Аккаунт и рабочее пространство', 'Для работы аккаунта используются указанные вами имя, email, данные для проверки пароля, язык и настройки пространства. Мониторинг использует настроенные адреса, результаты проверок и историю инцидентов. Не добавляйте секреты и посторонние персональные данные в названия мониторов или содержимое публичных страниц.'],
        ['Публичные страницы и уведомления', 'Опубликованную на публичной странице состояния информацию могут читать её посетители. Подписки используют указанный email для подтверждения и отправки обновлений статуса. Ссылка подписки на монитор может давать возможность следить за ним: распространяйте её только намеренно.'],
        ['Хранение в браузере', 'Панель сохраняет данные сессии и выбранный язык в хранилище браузера для входа и отображения интерфейса. Публичные страницы могут запоминать выбор cookies и недавнее сообщение о проблеме в браузере. Очистка данных сайта удаляет локальные настройки и может завершить вход; она не удаляет аккаунт на сервере.'],
        ['Технические измерения', 'Веб-интерфейс передаёт ограниченные измерения скорости и ошибок: название и значение метрики, категорию устройства и раздел — панель или сайт. В эти события не входят содержимое форм, адрес страницы, идентификатор аккаунта или стек ошибки. Сетевые запросы всё равно передают технические сведения о соединении. Это описание событий измерения, а не всех серверных или сетевых журналов.'],
        ['Безопасность и сообщения о проблемах', 'Записи безопасности аккаунта могут содержать IP-адрес и сведения о браузере. При сообщении о проблеме SSLPing обрабатывает выбранную причину, IP-адрес и сведения о браузере. Если включено обогащение сообщений, сетевые данные Cloudflare могут добавить приблизительное местоположение, включая город или координаты, часовой пояс и интернет-провайдера. Это отдельные данные, которые не входят в описанные выше события измерения скорости. Некоторые формы при включённой защите загружают Cloudflare Turnstile; браузер при этом соединяется с Cloudflare.'],
        ['Вопросы о ваших данных', 'По указанному ниже адресу можно запросить информацию о доступе, исправлении, удалении, сроках хранения, местах обработки и поставщиках услуг. Не отправляйте по email пароли, токены сессий или API-ключи. Эта страница не устанавливает единый срок хранения и не обещает конкретный срок удаления.'],
      ],
      email: 'privacy@sslping.io', contactText: 'Вопросы приватности и запросы о данных',
    },
    terms: {
      title: 'Условия использования', description: 'Практические условия и ограничения использования мониторинга и публичного каталога SSLPing.',
      intro: 'Эти пояснения помогают пользоваться сервисом и понимать результаты. Реквизиты оператора, применимое право и договорные обязательства можно уточнить по юридическому контакту ниже. Эта страница не устанавливает гарантию доступности или договорный SLA.',
      sections: [
        ['Результаты мониторинга', 'Проверки фиксируют наблюдения в определённое время и из определённых мест. Успешная проверка сайта не подтверждает работу всех функций, приложений или аккаунтов. Отсутствующие или старые наблюдения не подтверждают текущую доступность. Учитывайте время и область проверки при принятии решений.'],
        ['Независимый публичный каталог', 'SSLPing независимо проверяет сайты публичного каталога. Страница каталога не является официальной страницей состояния указанного сервиса. Страна каталога относится к размещению в каталоге и не обязательно указывает местоположение проверяющих серверов.'],
        ['Ваш аккаунт и содержимое страниц', 'Храните пароли, API-ключи и данные сессий в секрете. Настраивайте проверки только для адресов, которые вы вправе проверять. Публикуйте лишь ту информацию, которую хотите показывать посетителям, и защищайте закрытые страницы доступными настройками доступа.'],
        ['Функции, планы и уведомления', 'Доступные функции и ограничения показаны в продукте для вашего пространства. Числа на иллюстрациях интерфейса являются примерами, а не текущими измерениями сервиса. Уведомления и публичные наблюдения могут задерживаться или быть недоступны; для важных решений используйте дополнительные проверки.'],
        ['Договорные и платёжные вопросы', 'По юридическому контакту можно уточнить оператора сервиса, договор, юрисдикцию, оплату, отмену и возвраты. Эта информационная страница не устанавливает реквизиты компании, применимую юрисдикцию, правила возврата или индивидуальные коммерческие условия.'],
      ],
      email: 'legal@sslping.io', contactText: 'Юридические и договорные вопросы',
    },
  },
}

export function legalPath(kind: LegalKind, language: string = 'en') {
  return `/${language === 'ru' ? 'ru/' : ''}${kind}`
}

export function legalDocument(kind: LegalKind, language: LegalLanguage) {
  const copy = content[language]
  const document = copy[kind]
  return { ...document, kind, language, title: `${document.title} — SSLPing`, canonical: `https://sslping.io${legalPath(kind, language)}`,
    alternates: (['en', 'ru'] as const).map((locale) => ({ hreflang: locale, url: `https://sslping.io${legalPath(kind, locale)}` })), ogLocale: language === 'ru' ? 'ru_RU' : 'en_US' }
}

export function LegalPage({ kind, language }: { kind: LegalKind; language: LegalLanguage }) {
  const copy = content[language]
  const document = copy[kind]
  const other = kind === 'privacy' ? 'terms' : 'privacy'
  return <div className="legal-page">
    <header className="container legal-header"><a className="legal-brand" href="/">SSLPing<span>.</span></a><a href="/">{copy.home}</a></header>
    <main className="container legal-document">
      <nav aria-label={copy.language}><a href={legalPath(kind, 'en')} hrefLang="en" lang="en" aria-current={language === 'en' ? 'page' : undefined}>English</a><a href={legalPath(kind, 'ru')} hrefLang="ru" lang="ru" aria-current={language === 'ru' ? 'page' : undefined}>Русский</a></nav>
      <h1>{document.title}</h1><p className="legal-intro">{document.intro}</p>
      {document.sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}
      <section><h2>{copy.contact}</h2><p>{document.contactText}: <a href={`mailto:${document.email}`}>{document.email}</a></p></section>
    </main>
    <footer className="container legal-footer"><span>{copy.other}: </span><a href={legalPath(other, language)}>{copy[other].title}</a></footer>
  </div>
}
