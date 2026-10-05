import { serviceIntentCards } from '../data/siteContent';
import { Container, IconBadge, Section } from '../styles/primitives';
import { IntentCard, IntentGrid, IntentTextButton } from '../styles/hero.styles';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

interface ServiceIntentGridProps {
  onSelectInquiry: (preset: string) => void;
}

// Компонент приймає callback запиту та повертає сітку швидких входів, побудовану з serviceIntentCards.
// Натискання не надсилає форму: воно лише передає preset угору для заповнення відповідного сценарію.
export function ServiceIntentGrid({ onSelectInquiry }: ServiceIntentGridProps) {
  return (
    <Section id="leistungen">
      <Container>
        <SectionHeading
          eyebrow="Schnelle Einstiege"
          title="Direkt zum passenden Anliegen"
          text="Die Startseite führt nicht nur zu einer allgemeinen Kontaktseite. Jeder Einstieg hat einen klaren Zweck und bringt Sie schneller zur passenden Anfrage."
        />

        <IntentGrid>
          {/* title є стабільним ключем, а preset визначає значення для подальшої форми запиту. */}
          {serviceIntentCards.map((card) => (
            <IntentCard key={card.title}>
              <IconBadge>
                <Icon name={card.icon} />
              </IconBadge>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <IntentTextButton
                type="button"
                onClick={() => onSelectInquiry(card.preset)}
              >
                {card.cta}
              </IntentTextButton>
            </IntentCard>
          ))}
        </IntentGrid>
      </Container>
    </Section>
  );
}
