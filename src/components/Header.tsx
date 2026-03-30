import { company, navigation } from '../data/siteContent';
import { BrandMark, BrandText, Button } from '../styles/primitives';
import {
  HeaderActions,
  HeaderBrand,
  HeaderInner,
  HeaderShell,
  PhonePill,
  SiteNav
} from '../styles/shell.styles';

interface HeaderProps {
  onPrimaryCta: (preset: string) => void;
}

export function Header({ onPrimaryCta }: HeaderProps) {
  return (
    <HeaderShell>
      <HeaderInner>
        <HeaderBrand
          href="#start"
          aria-label={`${company.name} Startseite`}
        >
          <BrandMark>NW</BrandMark>
          <BrandText>
            <strong>{company.name}</strong>
            <span>{company.claim}</span>
          </BrandText>
        </HeaderBrand>

        <SiteNav aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </SiteNav>

        <HeaderActions>
          <PhonePill href={company.phoneHref}>
            {company.phoneDisplay}
          </PhonePill>
          <Button
            $variant="primary"
            type="button"
            onClick={() => onPrimaryCta('Angebot anfragen')}
          >
            Angebot anfragen
          </Button>
        </HeaderActions>
      </HeaderInner>
    </HeaderShell>
  );
}
