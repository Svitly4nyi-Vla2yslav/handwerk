import { company } from '../data/siteContent';
import { Button, ButtonLink } from '../styles/primitives';
import { MobileCtaBarWrap } from '../styles/shell.styles';

interface MobileCtaBarProps {
  onSelectInquiry: (preset: string) => void;
}

// Компонент приймає callback вибору запиту й повертає мобільну панель із дзвінком та переходом до пропозиції.
// Телефон відкривається через company.phoneHref, а кнопка Angebot передає батьківському workflow фіксований preset.
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
