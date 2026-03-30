import { company, faqs } from '../data/siteContent';
import { Button, ButtonLink, Section } from '../styles/primitives';
import { FaqItem, FaqLayout, FaqList, FaqPanel } from '../styles/marketing.styles';
import { SectionHeading } from './SectionHeading';

interface FAQSectionProps {
  onSelectInquiry: (preset: string) => void;
}

export function FAQSection({ onSelectInquiry }: FAQSectionProps) {
  return (
    <Section
      id="faq"
      $variant="muted"
    >
      <FaqLayout>
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Häufige Fragen vor der ersten Anfrage"
            text="Kurze, klare Antworten helfen gerade mobilen Nutzerinnen und Nutzern dabei, schneller Vertrauen zu fassen und den nächsten Schritt zu gehen."
          />

          <FaqList>
            {faqs.map((item) => (
              <FaqItem key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </FaqItem>
            ))}
          </FaqList>
        </div>

        <FaqPanel>
          <h3>Noch etwas offen?</h3>
          <p>
            Wenn Sie lieber direkt sprechen möchten, sind Telefon und kurze Anfrage bewusst immer
            sichtbar gehalten.
          </p>
          <ButtonLink
            $variant="secondary"
            href={company.phoneHref}
          >
            {company.phoneDisplay}
          </ButtonLink>
          <Button
            $variant="primary"
            type="button"
            onClick={() => onSelectInquiry('Beratung')}
          >
            Kurze Beratung anfragen
          </Button>
        </FaqPanel>
      </FaqLayout>
    </Section>
  );
}
