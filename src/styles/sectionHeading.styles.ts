import styled, { css } from 'styled-components';
import { bodyText, headingTypography } from './primitives';

export const SectionHeadingWrap = styled.div<{ $align?: 'left' | 'center' }>`
  max-width: 720px;
  margin-bottom: 36px;
  ${({ $align = 'left' }) =>
    $align === 'center'
      ? css`
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        `
      : ''}
`;

export const SectionHeadingTitle = styled.h2`
  ${headingTypography};
  font-size: clamp(2rem, 4vw, 3.25rem);
  margin: 16px 0 14px;
`;

export const SectionHeadingText = styled.p`
  ${bodyText};
`;
