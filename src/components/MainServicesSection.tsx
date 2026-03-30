import { company, mainServices } from '../data/siteContent';
import { Button, Container, Eyebrow, Section, TextLink } from '../styles/primitives';
import {
  CheckList,
  ServiceActions,
  ServiceBlock,
  ServiceBody,
  ServiceEyebrowWrap,
  ServiceIcon,
  ServiceIntro,
  ServiceStack
} from '../styles/marketing.styles';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

interface MainServicesSectionProps {
  onSelectInquiry: (preset: string) => void;
}

export function MainServicesSection({ onSelectInquiry }: MainServicesSectionProps) {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Leistungen"
          title="SHK-Leistungen mit klarer Relevanz für Haus, Alltag und Budget"
          text="Jeder Leistungsbereich beantwortet eine andere Kundensituation. Deshalb unterscheiden wir klar zwischen Modernisierung, neuer Technik, Sanitärprojekten und laufendem Service."
        />

        <ServiceStack>
          {mainServices.map((service) => (
            <ServiceBlock
              key={service.id}
              id={service.id}
            >
              <ServiceIntro>
                <ServiceIcon>
                  <Icon name={service.icon} />
                </ServiceIcon>
                <div>
                  <ServiceEyebrowWrap>
                    <Eyebrow>{service.eyebrow}</Eyebrow>
                  </ServiceEyebrowWrap>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </ServiceIntro>

              <ServiceBody>
                <div>
                  <h4>Typische Situationen</h4>
                  <CheckList>
                    {service.problems.map((problem) => (
                      <li key={problem}>
                        <Icon name="check" />
                        <span>{problem}</span>
                      </li>
                    ))}
                  </CheckList>
                </div>

                <div>
                  <h4>Was wir übernehmen</h4>
                  <CheckList>
                    {service.solutions.map((solution) => (
                      <li key={solution}>
                        <Icon name="check" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </CheckList>
                </div>
              </ServiceBody>

              <ServiceActions>
                <Button
                  $variant="primary"
                  type="button"
                  onClick={() => onSelectInquiry(service.preset)}
                >
                  {service.cta}
                </Button>
                <TextLink href={company.phoneHref}>
                  Mehr erfahren oder direkt anrufen
                </TextLink>
              </ServiceActions>
            </ServiceBlock>
          ))}
        </ServiceStack>
      </Container>
    </Section>
  );
}
