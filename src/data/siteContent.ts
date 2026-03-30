import type {
  Advantage,
  FaqItem,
  HeroStat,
  MainService,
  NavigationItem,
  ProcessStep,
  ServiceIntentCard,
  TrustChip,
  TrustItem
} from '../types/content';

export const company = {
  name: 'Nordwärme SHK',
  claim: 'Heizung, Sanitär & Wärmepumpen in Hildesheim',
  phoneDisplay: '05121 1234567',
  phoneHref: 'tel:+4951211234567',
  email: 'kontakt@nordwaerme-shk.de',
  addressLine1: 'Musterstraße 12',
  addressLine2: '31134 Hildesheim',
  openingHours: 'Mo-Fr 7:30-17:30 Uhr',
  emergencyText: 'Schnelle Rückmeldung für Anfragen, Wartung und Reparatur'
};

export const navigation: NavigationItem[] = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Wärmepumpe', href: '#waermepumpe' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Einsatzgebiet', href: '#einsatzgebiet' },
  { label: 'FAQ', href: '#faq' }
];

export const heroTrustPoints = [
  'Schnell erreichbar',
  'Persönliche Beratung',
  'Regional in Hildesheim',
  'Moderne Heizsysteme'
];

export const heroStats: HeroStat[] = [
  { value: 'Hildesheim', label: 'kurze Wege und lokale Termine' },
  { value: '1 Ansprechpartner', label: 'von der Anfrage bis zum Service' },
  { value: 'Klare Angebote', label: 'verständlich geplant und erklärt' }
];

export const serviceIntentCards: ServiceIntentCard[] = [
  {
    icon: 'pump',
    title: 'Wärmepumpe',
    description: 'Beratung, Planung und passende Systeme für Bestand, Sanierung oder Neubau.',
    cta: 'Wärmepumpe anfragen',
    preset: 'Wärmepumpe'
  },
  {
    icon: 'heat',
    title: 'Heizungsmodernisierung',
    description: 'Alte Anlage ersetzen, Verbrauch senken und die Technik fit für die nächsten Jahre machen.',
    cta: 'Modernisierung starten',
    preset: 'Heizungsmodernisierung'
  },
  {
    icon: 'bath',
    title: 'Sanitär & Bad',
    description: 'Saubere Badumbauten, funktionale Sanitärlösungen und verlässliche Ausführung.',
    cta: 'Sanitär anfragen',
    preset: 'Sanitär / Bad'
  },
  {
    icon: 'maintenance',
    title: 'Wartung',
    description: 'Regelmäßige Wartung für Heizung, Wärmeerzeuger und sensible Haustechnik.',
    cta: 'Wartung anfragen',
    preset: 'Wartung'
  },
  {
    icon: 'repair',
    title: 'Reparatur',
    description: 'Wenn die Heizung streikt oder Sanitärtechnik Probleme macht, reagieren wir pragmatisch.',
    cta: 'Reparatur melden',
    preset: 'Reparatur'
  },
  {
    icon: 'funding',
    title: 'Beratung & Fördermittel',
    description: 'Verständliche Einschätzung zu Technik, Wirtschaftlichkeit und möglichen Förderwegen.',
    cta: 'Beratung sichern',
    preset: 'Beratung / Fördermittel'
  }
];

export const trustItems: TrustItem[] = [
  {
    title: 'Verbindlich erreichbar',
    description: 'Anfragen landen nicht im Leerlauf. Wir melden uns mit einem klaren nächsten Schritt zurück.'
  },
  {
    title: 'Saubere Planung',
    description: 'Sie bekommen eine Lösung, die zu Gebäude, Nutzung und Budget passt, statt Standardverkauf.'
  },
  {
    title: 'Ordentliche Ausführung',
    description: 'Termine, Abläufe und Arbeiten werden verständlich abgestimmt und sauber umgesetzt.'
  }
];

export const trustChips: TrustChip[] = [
  { emphasis: 'kurzfristige Rückmeldung', label: 'für neue Anfragen und Servicefälle' },
  { emphasis: 'Raum Hildesheim', label: 'lokal unterwegs statt anonymer Fernvertrieb' },
  { emphasis: 'individuelle Planung', label: 'für Einfamilienhaus, Sanierung und kleine Bestände' }
];

export const mainServices: MainService[] = [
  {
    id: 'heizung',
    slug: '/leistungen/heizung',
    icon: 'heat',
    eyebrow: 'Heizung Hildesheim',
    title: 'Heizungen modernisieren, ohne den Überblick zu verlieren',
    description:
      'Wir begleiten den Austausch veralteter Heiztechnik mit sauberer Planung, verständlicher Beratung und einer Lösung, die zum Gebäude passt.',
    problems: [
      'Die bestehende Heizung ist alt, laut oder störanfällig.',
      'Der Verbrauch ist zu hoch und die Technik nicht mehr zukunftssicher.',
      'Es fehlt eine klare Empfehlung, welche Lösung wirtschaftlich sinnvoll ist.'
    ],
    solutions: [
      'Bestandsaufnahme und ehrliche Einschätzung vor Ort',
      'Austausch oder Optimierung bestehender Heizsysteme',
      'Abgestimmte Umsetzung mit Blick auf Komfort, Effizienz und Bedienbarkeit'
    ],
    cta: 'Heizungsmodernisierung anfragen',
    preset: 'Heizung'
  },
  {
    id: 'waermepumpen',
    slug: '/leistungen/waermepumpen',
    icon: 'pump',
    eyebrow: 'Wärmepumpe Hildesheim',
    title: 'Wärmepumpen verständlich geplant und regional umgesetzt',
    description:
      'Ob Altbau, Sanierung oder Neubau: Wir prüfen realistisch, welche Wärmepumpe zu Ihrem Haus und Ihrem Wärmebedarf passt.',
    problems: [
      'Sie wollen weg von fossiler Technik, sind aber unsicher wegen Eignung und Aufwand.',
      'Im Netz gibt es viele Versprechen, aber wenig klare Orientierung für Ihr Gebäude.',
      'Förderung, Hydraulik und Systemaufbau wirken unnötig kompliziert.'
    ],
    solutions: [
      'Eignungscheck für Altbau, Sanierung und Neubau',
      'Auswahl passender Systeme inklusive Warmwasser und Heizflächen',
      'Verständliche Begleitung bei Planung und Förderfragen'
    ],
    cta: 'Wärmepumpe prüfen lassen',
    preset: 'Wärmepumpe'
  },
  {
    id: 'sanitaer',
    slug: '/leistungen/sanitaer-bad',
    icon: 'bath',
    eyebrow: 'Sanitär Hildesheim',
    title: 'Sanitär und Bad mit Blick auf Alltag, Funktion und Werterhalt',
    description:
      'Von der Teilsanierung bis zur kompletten Badlösung setzen wir Sanitärarbeiten so um, dass Nutzung, Ablauf und Optik zusammenpassen.',
    problems: [
      'Das Bad ist in die Jahre gekommen oder unpraktisch im Alltag.',
      'Armaturen, Leitungen oder Anschlüsse müssen modernisiert werden.',
      'Sie möchten eine saubere Lösung ohne unnötig komplizierten Prozess.'
    ],
    solutions: [
      'Sanitärinstallationen und Badmodernisierung aus einem klaren Plan',
      'Praktische Lösungen für Komfort, Pflege und Nutzung im Alltag',
      'Abstimmung von Material, Terminen und Ausführung mit festem Ansprechpartner'
    ],
    cta: 'Sanitärprojekt besprechen',
    preset: 'Sanitär / Bad'
  },
  {
    id: 'wartung-reparatur',
    slug: '/service/wartung-reparatur',
    icon: 'maintenance',
    eyebrow: 'Wartung & Reparatur',
    title: 'Wartung und Reparatur, wenn schnelle Hilfe und klare Aussagen zählen',
    description:
      'Bei Störungen oder regelmäßigen Wartungen kümmern wir uns um nachvollziehbare Diagnosen, saubere Arbeiten und eine klare Kommunikation.',
    problems: [
      'Die Anlage meldet Störungen oder arbeitet nicht mehr zuverlässig.',
      'Wartungen werden aufgeschoben, bis es teuer oder ungemütlich wird.',
      'Sie möchten im Fall eines Problems schnell wissen, was Sache ist.'
    ],
    solutions: [
      'Wartungsintervalle sinnvoll organisieren und dokumentieren',
      'Störungen systematisch prüfen und nachvollziehbar erklären',
      'Reparaturen mit Fokus auf schnelle Wiederherstellung der Funktion'
    ],
    cta: 'Service anfragen',
    preset: 'Wartung / Reparatur'
  }
];

export const advantages: Advantage[] = [
  {
    title: 'Lokal und erreichbar',
    description: 'Kurze Wege im Raum Hildesheim bedeuten weniger Reibung bei Termin, Abstimmung und Service.'
  },
  {
    title: 'Energieeffizient gedacht',
    description: 'Wir planen Lösungen so, dass Technik, Verbrauch und Alltag sinnvoll zusammenpassen.'
  },
  {
    title: 'Klare Kommunikation',
    description: 'Sie wissen, was empfohlen wird, warum es passt und wie die nächsten Schritte aussehen.'
  },
  {
    title: 'Ein fester Kontakt',
    description: 'Von der ersten Anfrage bis nach der Umsetzung bleibt der Ablauf für Sie übersichtlich.'
  },
  {
    title: 'Saubere Ausführung',
    description: 'Ordentliches Arbeiten vor Ort ist kein Extra, sondern Teil eines guten Gesamteindrucks.'
  },
  {
    title: 'Betreuung danach',
    description: 'Auch nach Einbau oder Modernisierung bleiben Wartung, Anpassungen und Fragen gut erreichbar.'
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Anfrage',
    description: 'Sie melden sich telefonisch oder über das Formular mit Ihrem Anliegen, Ort und groben Bedarf.'
  },
  {
    title: 'Beratung',
    description: 'Wir klären die Situation telefonisch oder bei einem Termin vor Ort und sortieren die sinnvollsten Optionen.'
  },
  {
    title: 'Angebot & Planung',
    description: 'Sie erhalten eine verständliche Empfehlung mit den nächsten Schritten für Umsetzung, Modernisierung oder Service.'
  },
  {
    title: 'Umsetzung / Service',
    description: 'Montage, Inbetriebnahme, Wartung oder Reparatur laufen mit klarer Abstimmung und verlässlicher Kommunikation.'
  }
];

export const areaList = [
  'Hildesheim',
  'Himmelsthür',
  'Ochtersum',
  'Itzum',
  'Drispenstedt',
  'Sarstedt',
  'Giesen',
  'Algermissen',
  'Bad Salzdetfurth',
  'Harsum',
  'Schellerten'
];

export const faqs: FaqItem[] = [
  {
    question: 'Arbeiten Sie auch in meiner Gegend?',
    answer:
      'Ja, der Fokus liegt auf Hildesheim und den umliegenden Orten. Wenn Sie im näheren Umkreis wohnen, können Sie uns Ihr Anliegen einfach mit Ort oder Postleitzahl senden.'
  },
  {
    question: 'Wie schnell bekomme ich eine Rückmeldung?',
    answer:
      'Neue Anfragen sichten wir zeitnah und melden uns mit einer ersten Einschätzung oder einem passenden nächsten Schritt zurück.'
  },
  {
    question: 'Lohnt sich eine Wärmepumpe im Altbau?',
    answer:
      'Das hängt vom Gebäude, dem Wärmebedarf und der vorhandenen Technik ab. Genau deshalb prüfen wir Altbau und Sanierung nicht pauschal, sondern anhand Ihrer konkreten Situation.'
  },
  {
    question: 'Bieten Sie auch Wartung und Reparatur an?',
    answer:
      'Ja. Neben Modernisierung und Neuinstallation gehören Wartung, Störungsanalyse und Reparaturen zu den wichtigen Serviceleistungen.'
  },
  {
    question: 'Gibt es Unterstützung bei Förderfragen?',
    answer:
      'Wir können Fördermöglichkeiten in die Beratung einordnen und zeigen, welche Informationen für Ihren Fall relevant sind.'
  },
  {
    question: 'Wie läuft eine Anfrage ab?',
    answer:
      'Sie senden kurz Ihr Anliegen, wir melden uns zurück, besprechen den Bedarf und planen dann Angebot, Termin oder Vor-Ort-Termin passend zu Ihrem Fall.'
  }
];
