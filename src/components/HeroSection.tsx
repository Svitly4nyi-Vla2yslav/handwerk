import { company, heroStats, heroTrustPoints } from '../data/siteContent';
import { Button, ButtonLink } from '../styles/primitives';
import {
  ChipButton,
  GhostButton,
  HeroActions,
  HeroContent,
  HeroEyebrow,
  HeroGrid,
  HeroLead,
  HeroNote,
  HeroNoteLabel,
  HeroPanel,
  HeroPanelActions,
  HeroPanelEyebrow,
  HeroSectionWrap,
  HeroStatCard,
  HeroStats,
  HeroTitle,
  HeroTrustList,
  HeroVisual
} from '../styles/hero.styles';

interface HeroSectionProps {
  onSelectInquiry: (preset: string) => void;
}

export function HeroSection({ onSelectInquiry }: HeroSectionProps) {
  return (
    <HeroSectionWrap id="start">
      <HeroGrid>
        <HeroContent>
          <HeroEyebrow>Regionaler SHK-Service im Raum Hildesheim</HeroEyebrow>
          <HeroTitle>Heizung, Sanitär &amp; Wärmepumpen in Hildesheim – schnell vor Ort</HeroTitle>
          <HeroLead>
            Moderne Heizsysteme, verlässliche Installation, saubere Bad- und Sanitärarbeiten
            sowie schnelle Unterstützung bei Wartung und Reparatur.
          </HeroLead>

          <HeroActions>
            <Button
              $variant="primary"
              type="button"
              onClick={() => onSelectInquiry('Angebot anfragen')}
            >
              Angebot anfragen
            </Button>
            <ButtonLink
              $variant="secondary"
              href={company.phoneHref}
            >
              Jetzt anrufen
            </ButtonLink>
          </HeroActions>

          <GhostButton
            type="button"
            onClick={() => onSelectInquiry('Wärmepumpe')}
          >
            Wärmepumpe anfragen
          </GhostButton>

          <HeroTrustList>
            {heroTrustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </HeroTrustList>
        </HeroContent>

        <HeroVisual>
          <HeroPanel>
            <HeroPanelEyebrow>Schnellanfrage</HeroPanelEyebrow>
            <h2>Klare Wege statt langem Warten</h2>
            <p>
              Für Heizungsmodernisierung, Wärmepumpe, Sanitär, Wartung oder Reparatur führen wir
              Sie direkt in den passenden nächsten Schritt.
            </p>
            <HeroPanelActions>
              <ChipButton
                type="button"
                onClick={() => onSelectInquiry('Heizung')}
              >
                Heizung
              </ChipButton>
              <ChipButton
                type="button"
                onClick={() => onSelectInquiry('Wärmepumpe')}
              >
                Wärmepumpe
              </ChipButton>
              <ChipButton
                type="button"
                onClick={() => onSelectInquiry('Wartung / Reparatur')}
              >
                Service
              </ChipButton>
            </HeroPanelActions>
          </HeroPanel>

          <HeroStats>
            {heroStats.map((stat) => (
              <HeroStatCard key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </HeroStatCard>
            ))}
          </HeroStats>

          <HeroNote>
            <HeroNoteLabel>Vor Ort in Hildesheim</HeroNoteLabel>
            <p>{company.emergencyText}</p>
          </HeroNote>
        </HeroVisual>
      </HeroGrid>
    </HeroSectionWrap>
  );
}
