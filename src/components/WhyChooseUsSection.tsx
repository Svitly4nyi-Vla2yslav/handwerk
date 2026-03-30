import { advantages } from '../data/siteContent';
import { Button, Container, Section } from '../styles/primitives';
import { AdvantageCard, AdvantageGrid, CtaRow } from '../styles/marketing.styles';
import { SectionHeading } from './SectionHeading';

interface WhyChooseUsSectionProps {
  onSelectInquiry: (preset: string) => void;
}

export function WhyChooseUsSection({ onSelectInquiry }: WhyChooseUsSectionProps) {
  return (
    <Section $variant="dark">
      <Container>
        <SectionHeading
          eyebrow="Warum wir"
          title="Warum lokale SHK-Kundschaft genau auf diese Punkte achtet"
          text="Nicht die lauteste Website überzeugt, sondern ein Auftritt, der erreichbar wirkt, klar erklärt und den Weg zur Anfrage leicht macht."
        />

        <AdvantageGrid>
          {advantages.map((advantage) => (
            <AdvantageCard key={advantage.title}>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </AdvantageCard>
          ))}
        </AdvantageGrid>

        <CtaRow>
          <Button
            $variant="primary"
            type="button"
            onClick={() => onSelectInquiry('Angebot anfragen')}
          >
            Projekt besprechen
          </Button>
          <Button
            $variant="ghostLight"
            type="button"
            onClick={() => onSelectInquiry('Wärmepumpe')}
          >
            Wärmepumpe unverbindlich prüfen
          </Button>
        </CtaRow>
      </Container>
    </Section>
  );
}
