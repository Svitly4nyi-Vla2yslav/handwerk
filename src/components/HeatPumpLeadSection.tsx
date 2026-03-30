import { company } from '../data/siteContent';
import { Button, Eyebrow, Section, TextLink } from '../styles/primitives';
import {
  BulletList,
  CtaRow,
  HeatpumpBenefits,
  QuickCheckCard,
  TwoColumnLayout
} from '../styles/marketing.styles';
import { SectionHeading } from './SectionHeading';

interface HeatPumpLeadSectionProps {
  onSelectInquiry: (preset: string) => void;
}

export function HeatPumpLeadSection({ onSelectInquiry }: HeatPumpLeadSectionProps) {
  return (
    <Section
      id="waermepumpe"
      $variant="accent"
    >
      <TwoColumnLayout>
        <div>
          <SectionHeading
            eyebrow="Wärmepumpe im Fokus"
            title="Wärmepumpe in Hildesheim anfragen und die Eignung sauber prüfen lassen"
            text="Viele Eigentümerinnen und Eigentümer fragen sich, ob eine Wärmepumpe im Altbau sinnvoll ist. Die Antwort hängt weniger von Schlagworten ab als von Gebäudedaten, Heizflächen und Ihrem Modernisierungsziel."
          />

          <HeatpumpBenefits>
            <article>
              <h3>Altbau und Sanierung</h3>
              <p>
                Wir prüfen, was mit Ihrem Bestand realistisch möglich ist und welche Anpassungen
                sinnvoll wären.
              </p>
            </article>
            <article>
              <h3>Neubau</h3>
              <p>
                Für moderne Neubauten planen wir Wärmepumpen mit Blick auf Komfort, Effizienz und
                alltagstaugliche Bedienung.
              </p>
            </article>
            <article>
              <h3>Förderhinweise</h3>
              <p>
                Förderthemen ordnen wir verständlich ein, damit Sie wissen, welche Informationen
                für die weitere Planung relevant sind.
              </p>
            </article>
          </HeatpumpBenefits>

          <CtaRow>
            <Button
              $variant="primary"
              type="button"
              onClick={() => onSelectInquiry('Wärmepumpe')}
            >
              Wärmepumpe anfragen
            </Button>
            <TextLink href={company.phoneHref}>
              Schnell Rückfragen klären: {company.phoneDisplay}
            </TextLink>
          </CtaRow>
        </div>

        <QuickCheckCard>
          <Eyebrow>Schnellcheck</Eyebrow>
          <h3>Ist eine Wärmepumpe bei Ihnen ein realistischer nächster Schritt?</h3>
          <BulletList>
            <li>Bestandsgebäude, Sanierung oder Neubau</li>
            <li>Heizkörper oder Flächenheizung</li>
            <li>Wunsch nach Modernisierung oder Komplettaustausch</li>
            <li>Fragen zu Förderung, Warmwasser oder Zeitplan</li>
          </BulletList>
          <p>
            Dieser Bereich ist bewusst als Teaser für einen späteren Eignungs- oder
            Förderrechner vorbereitet.
          </p>
          <Button
            $variant="secondary"
            type="button"
            onClick={() => onSelectInquiry('Wärmepumpe Schnellcheck')}
          >
            Schnellcheck anstoßen
          </Button>
        </QuickCheckCard>
      </TwoColumnLayout>
    </Section>
  );
}
