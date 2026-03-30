import { company } from '../data/siteContent';
import { Button, ButtonLink } from '../styles/primitives';
import { MobileCtaBarWrap } from '../styles/shell.styles';

interface MobileCtaBarProps {
  onSelectInquiry: (preset: string) => void;
}

export function MobileCtaBar({ onSelectInquiry }: MobileCtaBarProps) {
  return (
    <MobileCtaBarWrap>
      <ButtonLink
        $variant="secondary"
        href={company.phoneHref}
      >
        Anrufen
      </ButtonLink>
      <Button
        type="button"
        $variant="primary"
        onClick={() => onSelectInquiry('Angebot anfragen')}
      >
        Angebot
      </Button>
    </MobileCtaBarWrap>
  );
}
