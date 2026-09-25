import type { Locale } from './copy'

export interface ExperienceCopy { showMore: string; showing: string; planNote: string; demoLabel: string }

// Kept with the regional page payload so the browser receives one language.
const messages: Record<Locale, readonly [string, string, string]> = {
  en: ['Show more', 'Showing {shown} of {total} results', 'Browse the directory without an account. For your own monitors, review current plans and limits in workspace billing after signing in.'],
  ar: ['عرض المزيد', 'عرض {shown} من أصل {total} نتيجة', 'تصفح الدليل دون حساب. لمراقبة خدماتك، راجع الخطط والحدود الحالية في قسم الفوترة بمساحة العمل بعد تسجيل الدخول.'],
  cs: ['Zobrazit další', 'Zobrazeno {shown} z {total} výsledků', 'Katalog můžete procházet bez účtu. Aktuální tarify a limity pro vlastní monitoring najdete po přihlášení ve fakturaci pracovního prostoru.'],
  da: ['Vis flere', 'Viser {shown} af {total} resultater', 'Gennemse kataloget uden en konto. Se aktuelle abonnementer og grænser for din egen overvågning under fakturering i arbejdsområdet efter login.'],
  de: ['Mehr anzeigen', '{shown} von {total} Ergebnissen angezeigt', 'Das Verzeichnis ist ohne Konto zugänglich. Aktuelle Tarife und Limits für eigene Monitore finden Sie nach der Anmeldung im Abrechnungsbereich Ihres Arbeitsbereichs.'],
  el: ['Εμφάνιση περισσότερων', 'Εμφάνιση {shown} από {total} αποτελέσματα', 'Περιηγηθείτε στον κατάλογο χωρίς λογαριασμό. Για τη δική σας παρακολούθηση, δείτε τα τρέχοντα προγράμματα και όρια στη χρέωση του χώρου εργασίας μετά τη σύνδεση.'],
  es: ['Mostrar más', 'Se muestran {shown} de {total} resultados', 'Explora el directorio sin una cuenta. Para tus propios monitores, consulta los planes y límites actuales en la facturación del espacio de trabajo tras iniciar sesión.'],
  fi: ['Näytä lisää', 'Näytetään {shown}/{total} tulosta', 'Selaa hakemistoa ilman tiliä. Omien valvontakohteiden ajantasaiset tilaukset ja rajat löytyvät kirjautumisen jälkeen työtilan laskutuksesta.'],
  fil: ['Ipakita pa', 'Ipinapakita ang {shown} sa {total} resulta', 'Mag-browse sa direktoryo nang walang account. Para sa sarili mong mga monitor, tingnan ang kasalukuyang mga plano at limitasyon sa billing ng workspace pagkatapos mag-sign in.'],
  fr: ['Afficher plus', '{shown} résultats affichés sur {total}', 'Parcourez le répertoire sans compte. Pour vos propres moniteurs, consultez les offres et limites actuelles dans la facturation de votre espace de travail après connexion.'],
  he: ['הצגת עוד', 'מוצגות {shown} מתוך {total} תוצאות', 'אפשר לעיין במדריך ללא חשבון. לניטור שירותים משלך, ניתן לבדוק את המסלולים והמגבלות העדכניים בחיוב של סביבת העבודה לאחר הכניסה.'],
  hi: ['और दिखाएँ', '{total} में से {shown} परिणाम दिखाए जा रहे हैं', 'बिना खाते के डायरेक्टरी ब्राउज़ करें। अपनी सेवाओं की निगरानी के लिए, साइन इन करने के बाद वर्कस्पेस बिलिंग में मौजूदा प्लान और सीमाएँ देखें।'],
  hr: ['Prikaži više', 'Prikazano {shown} od {total} rezultata', 'Pregledavajte katalog bez računa. Aktualne planove i ograničenja za vlastiti nadzor pronađite nakon prijave u naplati radnog prostora.'],
  hu: ['Továbbiak megjelenítése', '{shown} / {total} találat látható', 'A katalógus fiók nélkül böngészhető. Saját monitoraihoz az aktuális csomagokat és korlátokat bejelentkezés után a munkaterület számlázásánál találja.'],
  id: ['Tampilkan lagi', 'Menampilkan {shown} dari {total} hasil', 'Jelajahi direktori tanpa akun. Untuk monitor Anda sendiri, lihat paket dan batas terkini di penagihan ruang kerja setelah masuk.'],
  it: ['Mostra altri', '{shown} risultati visualizzati su {total}', 'Esplora la directory senza un account. Per i tuoi monitor, consulta i piani e i limiti attuali nella fatturazione dello spazio di lavoro dopo aver effettuato l’accesso.'],
  ja: ['さらに表示', '{total}件中{shown}件を表示', 'アカウントなしでディレクトリを閲覧できます。ご自身のサービスを監視する場合は、ログイン後にワークスペースの請求画面で現在のプランと上限をご確認ください。'],
  ms: ['Tunjukkan lagi', 'Memaparkan {shown} daripada {total} hasil', 'Layari direktori tanpa akaun. Untuk pemantauan anda sendiri, semak pelan dan had semasa dalam pengebilan ruang kerja selepas log masuk.'],
  nl: ['Meer tonen', '{shown} van {total} resultaten getoond', 'Bekijk de directory zonder account. Raadpleeg na het inloggen de actuele abonnementen en limieten voor je eigen monitors bij de facturering van je werkruimte.'],
  no: ['Vis flere', 'Viser {shown} av {total} resultater', 'Bla i katalogen uten en konto. Se gjeldende abonnementer og grenser for egen overvåking under fakturering i arbeidsområdet etter innlogging.'],
  pl: ['Pokaż więcej', 'Wyświetlono {shown} z {total} wyników', 'Przeglądaj katalog bez konta. Aktualne plany i limity własnego monitoringu znajdziesz po zalogowaniu w rozliczeniach obszaru roboczego.'],
  pt: ['Mostrar mais', 'A mostrar {shown} de {total} resultados', 'Explore o diretório sem uma conta. Para os seus próprios monitores, consulte os planos e limites atuais na faturação do espaço de trabalho após iniciar sessão.'],
  ro: ['Afișează mai multe', 'Se afișează {shown} din {total} rezultate', 'Răsfoiește catalogul fără cont. Pentru propriile monitoare, consultă planurile și limitele actuale în facturarea spațiului de lucru după autentificare.'],
  sk: ['Zobraziť ďalšie', 'Zobrazených {shown} z {total} výsledkov', 'Katalóg môžete prezerať bez účtu. Aktuálne programy a limity pre vlastné monitorovanie nájdete po prihlásení vo fakturácii pracovného priestoru.'],
  sl: ['Prikaži več', 'Prikazanih {shown} od {total} rezultatov', 'Brskajte po imeniku brez računa. Trenutne pakete in omejitve za lastno spremljanje najdete po prijavi v obračunavanju delovnega prostora.'],
  sr: ['Прикажи више', 'Приказано {shown} од {total} резултата', 'Прегледајте каталог без налога. За сопствени надзор погледајте актуелне планове и ограничења у наплати радног простора након пријављивања.'],
  sv: ['Visa fler', 'Visar {shown} av {total} resultat', 'Bläddra i katalogen utan konto. Se aktuella abonnemang och gränser för egen övervakning under fakturering i arbetsytan efter inloggning.'],
  tr: ['Daha fazla göster', '{total} sonuçtan {shown} tanesi gösteriliyor', 'Dizini hesap olmadan inceleyin. Kendi izleyicileriniz için güncel planları ve sınırları oturum açtıktan sonra çalışma alanının faturalandırma bölümünde görebilirsiniz.'],
  uk: ['Показати ще', 'Показано {shown} із {total} результатів', 'Переглядайте каталог без облікового запису. Для власних моніторів перегляньте актуальні плани та ліміти в розділі оплати робочого простору після входу.'],
  ur: ['مزید دکھائیں', '{total} میں سے {shown} نتائج دکھائے جا رہے ہیں', 'اکاؤنٹ کے بغیر ڈائریکٹری دیکھیں۔ اپنی خدمات کی نگرانی کے لیے سائن ان کرنے کے بعد ورک اسپیس کی بلنگ میں موجودہ پلان اور حدود دیکھیں۔'],
  'zh-Hant': ['顯示更多', '顯示 {total} 筆結果中的 {shown} 筆', '無需帳戶即可瀏覽目錄。如需監控自己的服務，請登入後在工作區的帳務頁面查看目前方案及限制。'],
}

const demoLabels: Record<Locale, string> = {
  en: 'Interface example · sample data', ar: 'مثال للواجهة · بيانات تجريبية', cs: 'Ukázka rozhraní · vzorová data',
  da: 'Eksempel på grænsefladen · eksempeldata', de: 'Oberflächenbeispiel · Beispieldaten', el: 'Παράδειγμα διεπαφής · ενδεικτικά δεδομένα',
  es: 'Ejemplo de interfaz · datos de muestra', fi: 'Käyttöliittymäesimerkki · esimerkkitiedot', fil: 'Halimbawa ng interface · halimbawang datos',
  fr: 'Exemple d’interface · données fictives', he: 'דוגמת ממשק · נתונים לדוגמה', hi: 'इंटरफ़ेस का उदाहरण · नमूना डेटा',
  hr: 'Primjer sučelja · ogledni podaci', hu: 'Felületi példa · mintaadatok', id: 'Contoh antarmuka · data contoh',
  it: 'Esempio di interfaccia · dati dimostrativi', ja: '画面例 · サンプルデータ', ms: 'Contoh antara muka · data contoh',
  nl: 'Interfacevoorbeeld · voorbeeldgegevens', no: 'Grensesnitteksempel · eksempeldata', pl: 'Przykład interfejsu · dane przykładowe',
  pt: 'Exemplo de interface · dados de exemplo', ro: 'Exemplu de interfață · date demonstrative', sk: 'Ukážka rozhrania · vzorové údaje',
  sl: 'Primer vmesnika · vzorčni podatki', sr: 'Пример интерфејса · пробни подаци', sv: 'Gränssnittsexempel · exempeldata',
  tr: 'Arayüz örneği · örnek veriler', uk: 'Приклад інтерфейсу · демонстраційні дані', ur: 'انٹرفیس کی مثال · نمونہ ڈیٹا',
  'zh-Hant': '介面範例 · 示範資料',
}

export const experienceCopy = Object.fromEntries(Object.entries(messages).map(([locale, [showMore, showing, planNote]]) => [locale, { showMore, showing, planNote, demoLabel: demoLabels[locale as Locale] }])) as Record<Locale, ExperienceCopy>
