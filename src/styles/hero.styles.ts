import styled from 'styled-components';
import {
  bodyText,
  Button,
  ButtonLink,
  Container,
  Eyebrow,
  headingTypography,
  PanelBase,
  SoftCardBase,
  TextButtonLink
} from './primitives';

export const HeroSectionWrap = styled.section`
  padding: 56px 0 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 34px;
  }
`;

export const HeroGrid = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: 36px;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const HeroContent = styled.div`
  padding: 36px 0 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 16px;
  }
`;

export const HeroEyebrow = styled(Eyebrow)``;

export const HeroTitle = styled.h1`
  ${headingTypography};
  font-size: clamp(2.7rem, 6vw, 5rem);
  margin: 18px 0 16px;
  max-width: 12ch;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: none;
  }
`;

export const HeroLead = styled.p`
  ${bodyText};
  max-width: 62ch;
  font-size: 1.06rem;
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin: 26px 0 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;

    ${Button}, ${ButtonLink} {
      width: 100%;
    }
  }
`;

export const GhostButton = styled(Button).attrs({ $variant: 'ghost' as const })``;

export const HeroTrustList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  li {
    position: relative;
    padding-left: 22px;
    color: ${({ theme }) => theme.colors.textSoft};
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 8px;
    height: 8px;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const HeroVisual = styled.div`
  position: relative;
  display: grid;
  gap: 18px;
`;

export const HeroPanel = styled.div`
  ${PanelBase};
  padding: 28px;
  background:
    linear-gradient(180deg, rgba(21, 33, 43, 0.96) 0%, rgba(32, 47, 59, 0.96) 100%);
  color: ${({ theme }) => theme.colors.textOnDark};
  box-shadow: ${({ theme }) => theme.shadows.strong};

  h2 {
    ${headingTypography};
    font-size: clamp(1.5rem, 3vw, 2.1rem);
    margin: 18px 0 12px;
  }

  p {
    margin: 0;
    color: rgba(238, 242, 244, 0.78);
    line-height: 1.65;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px;
  }
`;

export const HeroPanelEyebrow = styled(Eyebrow)``;

export const HeroPanelActions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 24px;
`;

export const ChipButton = styled.button`
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.colors.textOnDark};
  border: 1px solid rgba(255, 255, 255, 0.14);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const HeroStatCard = styled.article`
  ${SoftCardBase};

  strong {
    display: block;
    font-size: 1.05rem;
    margin-bottom: 8px;
  }

  span {
    color: ${({ theme }) => theme.colors.textSoft};
    line-height: 1.55;
  }
`;

export const HeroNote = styled.div`
  padding: 20px 22px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px dashed rgba(21, 33, 43, 0.16);
  background: rgba(255, 255, 255, 0.62);

  p {
    color: ${({ theme }) => theme.colors.textSoft};
    line-height: 1.55;
    margin: 0;
  }
`;

export const HeroNoteLabel = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  font-weight: 700;
`;

export const IntentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const IntentCard = styled.article`
  ${SoftCardBase};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: -0.02em;
    margin: 0;
  }

  p {
    ${bodyText};
  }
`;

export const IntentTextButton = styled(TextButtonLink)`
  cursor: pointer;
`;
