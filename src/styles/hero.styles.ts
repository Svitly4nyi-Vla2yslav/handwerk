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
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  min-height: 100dvh;
  overflow: visible;
  isolation: isolate;
`;

export const HeroGrid = styled(Container)`
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  gap: 28px;
  min-height: inherit;
  position: relative;
  z-index: 1;
  padding-top: clamp(118px, 15vh, 168px);
  padding-bottom: clamp(48px, 9vh, 92px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 22px;
    padding-top: clamp(104px, 14vh, 132px);
    padding-bottom: 56px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 760px;
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
`;

export const HeroBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(6, 10, 14, 0.88) 0%, rgba(9, 14, 18, 0.78) 32%, rgba(9, 14, 18, 0.44) 64%, rgba(9, 14, 18, 0.18) 100%),
    radial-gradient(circle at 72% 44%, rgba(255, 255, 255, 0.06), transparent 34%),
    radial-gradient(circle at center, transparent 54%, rgba(0, 0, 0, 0.22) 100%);
`;

export const HeroEyebrow = styled(Eyebrow)`
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.12);
  color: ${({ theme }) => theme.colors.textOnDark};
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

export const HeroTitle = styled.h1`
  ${headingTypography};
  font-size: clamp(2.7rem, 6vw, 5rem);
  margin: 18px 0 16px;
  max-width: 12ch;
  color: ${({ theme }) => theme.colors.textOnDark};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: none;
  }
`;

export const HeroLead = styled.p`
  color: rgba(238, 242, 244, 0.82);
  line-height: 1.72;
  margin: 0;
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
    color: rgba(238, 242, 244, 0.76);
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

export const HeroQuickActions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 18px;
`;

export const HeroVisual = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(240px, 1fr);
  gap: 16px;
  align-items: stretch;
  max-width: 1080px;
  padding-bottom: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
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
  background: rgba(255, 255, 255, 0.12);
  color: ${({ theme }) => theme.colors.textOnDark};
  border: 1px solid rgba(255, 255, 255, 0.16);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const HeroStatCard = styled.article`
  ${PanelBase};
  padding: 20px 22px;
  background: rgba(13, 20, 26, 0.58);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: none;
  backdrop-filter: blur(12px);

  strong {
    display: block;
    font-size: 1.05rem;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.textOnDark};
  }

  span {
    color: rgba(238, 242, 244, 0.72);
    line-height: 1.55;
  }
`;

export const HeroNote = styled.div`
  padding: 20px 22px;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(13, 20, 26, 0.58);
  backdrop-filter: blur(12px);

  p {
    color: rgba(238, 242, 244, 0.72);
    line-height: 1.55;
    margin: 0;
  }
`;

export const HeroNoteLabel = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textOnDark};
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
