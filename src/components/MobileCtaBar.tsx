import { company } from '../data/siteContent';
import { Button, ButtonLink } from '../styles/primitives';
import { MobileCtaBarWrap } from '../styles/shell.styles';

interface MobileCtaBarProps {
  onSelectInquiry: (preset: string) => void;
}

/**
 * Показує мобільну панель із прямим дзвінком і швидким вибором запиту на пропозицію.
 *
 * @param onSelectInquiry — callback батьківського workflow для заповнення контактної форми.
 * @returns Дві CTA-дії: телефон із company.phoneHref та кнопку з фіксованим preset.
 * @sideEffects Клік Angebot викликає onSelectInquiry; компонент сам не прокручує сторінку й не надсилає форму.
 */
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
