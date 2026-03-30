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
