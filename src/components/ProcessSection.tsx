import { processSteps } from '../data/siteContent';
import { processMedia } from '../data/mediaAssets';
import { Container, Section } from '../styles/primitives';
import {
  ProcessCard,
  ProcessGrid,
  ProcessIcon,
  ProcessIndex
} from '../styles/marketing.styles';
import { ProcessMediaLayout } from '../styles/media.styles';
import { SectionImage } from './SectionImage';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

export function ProcessSection() {
  return (
    <Section id="ablauf">
      <Container>
        <SectionHeading
          eyebrow="Ablauf"
          title="So läuft die Anfrage transparent und ohne unnötige Schleifen"
          text="Gerade bei Heizung, Sanitär und Wärmepumpe ist ein klarer Prozess wichtig. Er nimmt Unsicherheit raus und macht die nächsten Schritte greifbar."
        />

        <ProcessMediaLayout>
          <SectionImage
            asset={processMedia}
            caption="Ablauf vor Ort"
            ratio="4 / 4.3"
          />

          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessCard key={step.title}>
                <ProcessIndex>0{index + 1}</ProcessIndex>
                <ProcessIcon>
                  <Icon name="process" />
                </ProcessIcon>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </ProcessCard>
            ))}
          </ProcessGrid>
        </ProcessMediaLayout>
      </Container>
    </Section>
  );
}
