import { Eyebrow } from '../styles/primitives';
import {
  SectionHeadingText,
  SectionHeadingTitle,
  SectionHeadingWrap
} from '../styles/sectionHeading.styles';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  text: string;
  align?: 'left' | 'center';
}

/**
 * Формує однаковий заголовок маркетингової секції з необов'язковим eyebrow.
 * Приймає title, пояснювальний text і вирівнювання; повертає лише презентаційну
 * розмітку без локального стану та побічних ефектів.
 */
export function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'left'
}: SectionHeadingProps) {
  return (
    <SectionHeadingWrap $align={align}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <SectionHeadingTitle>{title}</SectionHeadingTitle>
      <SectionHeadingText>{text}</SectionHeadingText>
    </SectionHeadingWrap>
  );
}
