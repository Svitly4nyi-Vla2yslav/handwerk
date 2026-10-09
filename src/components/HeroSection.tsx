import { company, heroStats, heroTrustPoints } from '../data/siteContent';
import { heroMedia } from '../data/mediaAssets';
import { Button, ButtonLink } from '../styles/primitives';
import {
  ChipButton,
  GhostButton,
  HeroActions,
  HeroBackground,
  HeroBackgroundImage,
  HeroContent,
  HeroEyebrow,
  HeroGrid,
  HeroLead,
  HeroNote,
  HeroNoteLabel,
  HeroOverlay,
  HeroQuickActions,
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

/**
 * Формує перший екран із пріоритетним hero-зображенням, контактними діями та довірою.
 * onSelectInquiry передає вибраний preset до форми, але сам компонент нічого не надсилає.
 */
export function HeroSection({ onSelectInquiry }: HeroSectionProps) {
  return (
    <HeroSectionWrap id="start">
      <HeroBackground>
        <HeroBackgroundImage
          alt={heroMedia.alt}
          decoding="async"
          fetchPriority="high"
          loading="eager"
          src={heroMedia.src}
        />
        <HeroOverlay />
      </HeroBackground>

      <HeroGrid>
        <HeroContent>
          <HeroEyebrow>Regionaler SHK-Service im Raum Hildesheim</HeroEyebrow>
          <HeroTitle>
            Heizung,
            <br />
            Sanitär &amp; Wärmepumpen
            <br />
            in Hildesheim -
            <br />
            schnell vor Ort
          </HeroTitle>
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
            {/* Текст пункту одночасно є стабільним ключем, бо список складається з унікальних тез. */}
            {heroTrustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </HeroTrustList>

          <HeroQuickActions>
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
          </HeroQuickActions>
        </HeroContent>

        <HeroVisual>
          <HeroStats>
            {/* Картки відображають підготовлені показники без додаткових обчислень або запитів. */}
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
