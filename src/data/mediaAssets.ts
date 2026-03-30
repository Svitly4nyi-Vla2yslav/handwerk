import heroFallback from '../assets/images/Hero fallback image.png';
import heatingSection from '../assets/images/Heizungsmodernisierung section.png';
import heatPumpSection from '../assets/images/W\u00e4rmepumpe section.png';
import sanitarySection from '../assets/images/Sanit\u00e4r  Bad section.png';
import maintenanceSection from '../assets/images/Wartung & Reparatur section.png';
import advisorySection from '../assets/images/Beratung  F\u00f6rdermittel  Klarer Ablauf.png';
import processSectionImage from '../assets/images/Ablauf  Process section.png';
import serviceAreaImage from '../assets/images/Einsatzgebiet.png';
import consultationImage from '../assets/images/Beratung.png';
import dismantlingImage from '../assets/images/Demontage-Altanlage.png';
import newHeatingImage from '../assets/images/Neue Heizung.png';
import outdoorHeatPumpImage from '../assets/images/W\u00e4rmepumpe au\u00dfen.png';
import sanitaryDetailImage from '../assets/images/Sanit\u00e4r detail.png';
import maintenanceImage from '../assets/images/Wartung.png';

export interface MediaAsset {
  alt: string;
  src: string;
}

export interface GalleryAsset extends MediaAsset {
  caption: string;
  description: string;
}

export const heroMedia: MediaAsset = {
  src: heroFallback,
  alt: 'SHK-Fachkraft bei der Arbeit an einer modernen Heizungsanlage im Kundenobjekt'
};

export const serviceSectionMedia = {
  heizung: {
    src: heatingSection,
    alt: 'Modernisierung einer Heizungsanlage mit sauber installierter neuer Technik'
  },
  waermepumpen: {
    src: heatPumpSection,
    alt: 'Wärmepumpentechnik im Einsatz bei einem Wohngebäude in modernem SHK-Umfeld'
  },
  sanitaer: {
    src: sanitarySection,
    alt: 'Sanitär- und Badbereich mit sauber ausgeführten Installationsarbeiten'
  },
  'wartung-reparatur': {
    src: maintenanceSection,
    alt: 'Wartungs- und Reparaturarbeit an einer SHK-Anlage mit Werkzeug und Technik im Fokus'
  }
} as const;

export const advisoryMedia: MediaAsset = {
  src: advisorySection,
  alt: 'Beratungssituation zu Heiztechnik, Fördermitteln und klar geplantem Ablauf'
};

export const processMedia: MediaAsset = {
  src: processSectionImage,
  alt: 'SHK-Arbeitsschritte auf der Baustelle als Bild für einen klaren Projektablauf'
};

export const localAreaMedia: MediaAsset = {
  src: serviceAreaImage,
  alt: 'SHK-Fahrzeug und Einsatzsituation als Symbol für den regionalen Service im Raum Hildesheim'
};

export const workGalleryItems: GalleryAsset[] = [
  {
    src: consultationImage,
    alt: 'Beratungstermin vor Ort zu Heizung und Modernisierung',
    caption: 'Beratung',
    description: 'Vor-Ort-Termin mit klarer Einschätzung und realistischer Empfehlung.'
  },
  {
    src: dismantlingImage,
    alt: 'Demontage einer alten Heizungsanlage während der Modernisierung',
    caption: 'Demontage',
    description: 'Sauberer Rückbau der Altanlage als erster Schritt zur Modernisierung.'
  },
  {
    src: newHeatingImage,
    alt: 'Neu installierte Heizung mit sauber montierter Technik',
    caption: 'Neue Heizung',
    description: 'Neu aufgebaute Technik mit sauberer Führung und ordentlicher Montage.'
  },
  {
    src: outdoorHeatPumpImage,
    alt: 'Außeneinheit einer Wärmepumpe an einem Wohnhaus',
    caption: 'Wärmepumpe',
    description: 'Moderne Wärmepumpentechnik im realen Wohnumfeld.'
  },
  {
    src: sanitaryDetailImage,
    alt: 'Sanitärdetail mit präziser Installation im Badbereich',
    caption: 'Sanitär',
    description: 'Präzise Sanitärarbeit mit Blick auf Funktion, Alltag und Details.'
  },
  {
    src: maintenanceImage,
    alt: 'Wartungseinsatz an einer SHK-Anlage mit Fokus auf Technik und Service',
    caption: 'Wartung',
    description: 'Regelmäßiger Service, damit Technik zuverlässig und sauber läuft.'
  }
];
