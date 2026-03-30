import { company, trustChips, trustItems } from '../data/siteContent';
import { advisoryMedia } from '../data/mediaAssets';
import { Button, Section, TextLink } from '../styles/primitives';
import {
  InlineActions,
  PanelFooter,
  TrustChip,
  TrustChipGrid,
  TrustContentColumn,
  TrustFrame,
  TrustItem,
  TrustItemIcon,
  TrustList,
  TrustPanel,
} from '../styles/marketing.styles';
import { Icon } from './Icon';
import { SectionImage } from './SectionImage';
import { SectionHeading } from './SectionHeading';

interface TrustSectionProps {
  onSelectInquiry: (preset: string) => void;
}

export function TrustSection({ onSelectInquiry }: TrustSectionProps) {
  return (
    <Section $variant="muted">
      <TrustFrame>
        <TrustContentColumn>
          <SectionHeading
            eyebrow="Vertrauen und Orientierung"
            title="Aufgestellt wie ein moderner SHK-Fachbetrieb"
            text="Kundinnen und Kunden wollen nicht nur Technik vergleichen. Sie wollen wissen, wer erreichbar ist, sauber arbeitet und Projekte verständlich begleitet."
          />

          <TrustList>
            {trustItems.map((item) => (
              <TrustItem key={item.title}>
                <TrustItemIcon>
                  <Icon name="check" />
                </TrustItemIcon>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </TrustItem>
            ))}
          </TrustList>
        </TrustContentColumn>

        <TrustPanel>
          <SectionImage
            asset={advisoryMedia}
            caption="Beratung, Fördermittel, klarer Ablauf"
            ratio="4 / 3.2"
          />
          <TrustChipGrid>
            {trustChips.map((chip) => (
              <TrustChip key={chip.emphasis}>
                <strong>{chip.emphasis}</strong>
                <span>{chip.label}</span>
              </TrustChip>
            ))}
          </TrustChipGrid>

          <PanelFooter>
            <p>
              Sie möchten direkt klären, welche Leistung für Ihr Haus oder Ihre Immobilie passt?
            </p>
            <InlineActions>
              <Button
                $variant="primary"
                type="button"
                onClick={() => onSelectInquiry('Beratung / Fördermittel')}
              >
                Beratung anfragen
              </Button>
              <TextLink href={company.phoneHref}>
                Oder anrufen: {company.phoneDisplay}
              </TextLink>
            </InlineActions>
          </PanelFooter>
        </TrustPanel>
      </TrustFrame>
    </Section>
  );
}
