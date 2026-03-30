import { company, mainServices } from '../data/siteContent';
import { serviceSectionMedia } from '../data/mediaAssets';
import { Button, Container, Eyebrow, Section, TextLink } from '../styles/primitives';
import {
  CheckListWrap,
  ServiceActions,
  ServiceBlock,
  ServiceBody,
  ServiceEyebrowWrap,
  ServiceIcon,
  ServiceIntro,
  ServiceStack
} from '../styles/marketing.styles';
import { ServiceMediaLayout } from '../styles/media.styles';
import { Icon } from './Icon';
import { SectionImage } from './SectionImage';
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
          {mainServices.map((service, index) => (
            <ServiceBlock
              key={service.id}
              id={service.id}
            >
              <ServiceMediaLayout $reverse={index % 2 === 1}>
                <div>
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
                      <CheckListWrap>
                        <ul>
                          {service.problems.map((problem) => (
                            <li key={problem}>
                              <Icon name="check" />
                              <span>{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </CheckListWrap>
                    </div>

                    <div>
                      <h4>Was wir übernehmen</h4>
                      <CheckListWrap>
                        <ul>
                          {service.solutions.map((solution) => (
                            <li key={solution}>
                              <Icon name="check" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </CheckListWrap>
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
                </div>

                <SectionImage
                  asset={serviceSectionMedia[service.id as keyof typeof serviceSectionMedia]}
                  caption={service.eyebrow}
                  ratio="4 / 4.6"
                />
              </ServiceMediaLayout>
            </ServiceBlock>
          ))}
        </ServiceStack>
      </Container>
    </Section>
  );
}
