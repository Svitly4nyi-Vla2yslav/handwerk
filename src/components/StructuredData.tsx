import { company } from '../data/siteContent';

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
 * Рендерить JSON-LD опис LocalBusiness із даних компанії для пошукових систем.
 * Компонент не створює видимого інтерфейсу; результат серіалізується в script-тег,
 * а `dangerouslySetInnerHTML` безпечний тут лише тому, що джерело є локальною константою.
 */
export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
