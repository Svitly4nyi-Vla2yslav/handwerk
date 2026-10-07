import { useEffect, useState } from 'react';
import { PhoneIcon } from './PhoneIcon';
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

// Header приймає onPrimaryCta, формує навігацію й передає пресет «Angebot anfragen» батьківській формі без автоматичного надсилання.
export function Header({ onPrimaryCta }: HeaderProps) {
  const [isSolid, setIsSolid] = useState(false);

  // Ефект синхронізує контрастний стан шапки з прокруткою та прибирає passive-слухач під час демонтажу.
  useEffect(() => {
    // handleScroll вмикає суцільний фон після перших 72 px сторінки.
    const handleScroll = () => {
      setIsSolid(window.scrollY > 72);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderShell>
      <HeaderInner $solid={isSolid}>
        <HeaderBrand
          href="#start"
          aria-label={`${company.name} Startseite`}
          $solid={isSolid}
        >
          <BrandMark>NW</BrandMark>
          <BrandText>
            <strong>{company.name}</strong>
            <span>{company.claim}</span>
          </BrandText>
        </HeaderBrand>

        <SiteNav
          aria-label="Hauptnavigation"
          $solid={isSolid}
        >
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
          <PhonePill
            href={company.phoneHref}
            aria-label={`Jetzt anrufen: ${company.phoneDisplay}`}
            $solid={isSolid}
          >
            <PhoneIcon />
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
