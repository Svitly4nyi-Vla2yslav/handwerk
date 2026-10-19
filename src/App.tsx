import { useEffect, useState } from 'react';
import { company } from './data/siteContent';
import { ContactCTASection } from './components/ContactCTASection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeatPumpLeadSection } from './components/HeatPumpLeadSection';
import { HeroSection } from './components/HeroSection';
import { LocalAreaSection } from './components/LocalAreaSection';
import { MainServicesSection } from './components/MainServicesSection';
import { MobileCtaBar } from './components/MobileCtaBar';
import { ProcessSection } from './components/ProcessSection';
import { PhoneIcon } from './components/PhoneIcon';
import { ServiceIntentGrid } from './components/ServiceIntentGrid';
import { StructuredData } from './components/StructuredData';
import { TrustSection } from './components/TrustSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { WorkGallery } from './components/WorkGallery';
import { FloatingPhoneLink } from './styles/shell.styles';
import { MainContent } from './styles/primitives';

/**
 * Збирає всі секції landing page та зберігає preset, який має отримати контактна форма.
 * Компонент також встановлює SEO-метадані документа й координує плавний перехід до форми.
 */
function App() {
  const [selectedPreset, setSelectedPreset] = useState('Angebot anfragen');

  // Одноразово синхронізує title і meta description; за відсутності meta-тега створює його в document.head.
  useEffect(() => {
    document.title = 'Heizung, Sanitär & Wärmepumpen in Hildesheim | Nordwärme SHK';

    const description =
      'Heizung Hildesheim, Sanitär Hildesheim und Wärmepumpe Hildesheim: moderne SHK-Leistungen mit schneller Kontaktmöglichkeit, lokaler Beratung und klaren Anfragewegen.';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute('content', description);
  }, []);

  /**
   * Приймає сценарій звернення, передає його контактній секції та прокручує до форми.
   * Якщо секцію ще не знайдено в DOM, preset усе одно зберігається без помилки.
   */
  function handleSelectInquiry(preset: string) {
    setSelectedPreset(preset);

    const formSection = document.getElementById('kontaktformular');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <>
      <StructuredData />
      <Header onPrimaryCta={handleSelectInquiry} />
      <MainContent>
        <HeroSection onSelectInquiry={handleSelectInquiry} />
        <ServiceIntentGrid onSelectInquiry={handleSelectInquiry} />
        <TrustSection onSelectInquiry={handleSelectInquiry} />
        <MainServicesSection onSelectInquiry={handleSelectInquiry} />
        <WorkGallery />
        <WhyChooseUsSection onSelectInquiry={handleSelectInquiry} />
        <ProcessSection />
        <HeatPumpLeadSection onSelectInquiry={handleSelectInquiry} />
        <LocalAreaSection onSelectInquiry={handleSelectInquiry} />
        <FAQSection onSelectInquiry={handleSelectInquiry} />
        <ContactCTASection
          selectedPreset={selectedPreset}
          onSelectInquiry={setSelectedPreset}
        />
      </MainContent>
      <Footer />
      <MobileCtaBar onSelectInquiry={handleSelectInquiry} />
      <FloatingPhoneLink
        href={company.phoneHref}
        aria-label={`Jetzt anrufen: ${company.phoneDisplay}`}
      >
        <PhoneIcon />
      </FloatingPhoneLink>
    </>
  );
}

export default App;
