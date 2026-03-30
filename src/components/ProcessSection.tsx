import { processSteps } from '../data/siteContent';
import { Container, Section } from '../styles/primitives';
import { ProcessCard, ProcessGrid, ProcessIcon, ProcessIndex } from '../styles/marketing.styles';
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
      </Container>
    </Section>
  );
}
