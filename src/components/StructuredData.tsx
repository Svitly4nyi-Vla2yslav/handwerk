import { company } from '../data/siteContent';

/**
 * Канонічний JSON-LD опис демонстраційного LocalBusiness.
 * Контакти беруться зі спільного company, а регіони, послуги та години роботи задаються статично.
 */
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: company.name,
  telephone: company.phoneDisplay,
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.addressLine1,
    postalCode: '31134',
    addressLocality: 'Hildesheim',
    addressCountry: 'DE'
  },
  areaServed: [
    'Hildesheim',
    'Sarstedt',
    'Harsum',
    'Bad Salzdetfurth',
    'Giesen',
    'Algermissen'
  ],
  makesOffer: [
    'Heizung Hildesheim',
    'Sanitär Hildesheim',
    'Wärmepumpe Hildesheim',
    'Heizungsmodernisierung Hildesheim',
    'Wartung und Reparatur'
  ],
  openingHours: 'Mo-Fr 07:30-17:30',
  url: 'https://www.nordwaerme-shk.de'
};

/**
 * Не приймає параметрів і повертає невидимий script application/ld+json з описом LocalBusiness.
 * Дані компанії, зон обслуговування та пропозицій серіалізуються з локальної константи.
 * Повернений script читають пошукові системи; dangerouslySetInnerHTML не містить користувацького вводу
 * й не виконує зовнішніх запитів або інших побічних ефектів.
 */
export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
