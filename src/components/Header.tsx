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

/**
 * Формує шапку з якірною навігацією, телефонною дією та головним CTA.
 * Приймає onPrimaryCta й передає йому пресет «Angebot anfragen» без надсилання форми;
 * локальний isSolid керує лише контрастом шапки залежно від прокрутки.
 */
export function Header({ onPrimaryCta }: HeaderProps) {
  const [isSolid, setIsSolid] = useState(false);

  // Синхронізує контрастний стан одразу після монтування та на кожній прокрутці; cleanup прибирає глобальний слухач.
  useEffect(() => {
    // Повертає isSolid=true лише після проходження порога 72 px; інших DOM-властивостей не змінює.
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
