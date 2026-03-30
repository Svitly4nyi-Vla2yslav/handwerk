import styled from 'styled-components';
import { bodyText, Container, PanelBase, SoftCardBase, headingTypography } from './primitives';

export const MediaFigure = styled.figure<{ $ratio?: string; $overlay?: 'dark' | 'soft' | 'none' }>`
  ${PanelBase};
  position: relative;
  overflow: hidden;
  margin: 0;
  aspect-ratio: ${({ $ratio = '4 / 3' }) => $ratio};
  min-height: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ $overlay = 'soft' }) =>
      $overlay === 'dark'
        ? 'linear-gradient(180deg, rgba(8, 14, 20, 0.16) 0%, rgba(8, 14, 20, 0.68) 100%)'
        : $overlay === 'soft'
          ? 'linear-gradient(180deg, rgba(12, 20, 28, 0.04) 0%, rgba(12, 20, 28, 0.28) 100%)'
          : 'none'};
    pointer-events: none;
  }
`;

export const MediaImageElement = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const MediaOverlay = styled.div`
  position: absolute;
  inset: auto 24px 24px 24px;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    inset: auto 18px 18px 18px;
  }
`;

export const MediaCaption = styled.figcaption`
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 16px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 9px 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(21, 33, 43, 0.78);
  color: ${({ theme }) => theme.colors.textOnDark};
  font-size: 0.92rem;
  font-weight: 700;
`;

export const HeroMediaWrap = styled.div`
  position: relative;
`;

export const HeroMediaFigure = styled(MediaFigure).attrs({
  $ratio: '4 / 4.8',
  $overlay: 'dark'
})`
  min-height: 540px;
  box-shadow: ${({ theme }) => theme.shadows.strong};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 420px;
  }
`;

export const HeroMediaCard = styled.div`
  ${SoftCardBase};
  max-width: 360px;
  background: rgba(18, 28, 35, 0.82);
  border-color: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.colors.textOnDark};
  box-shadow: ${({ theme }) => theme.shadows.strong};
  backdrop-filter: blur(12px);

  h2 {
    ${headingTypography};
    font-size: clamp(1.4rem, 3vw, 2rem);
    margin: 0 0 12px;
  }

  p {
    margin: 0;
    color: rgba(238, 242, 244, 0.82);
    line-height: 1.65;
  }
`;

export const HeroMediaMeta = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 18px;
`;

export const HeroMediaBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: ${({ theme }) => theme.colors.textOnDark};
  font-size: 0.9rem;
  font-weight: 600;
`;

export const ServiceMediaLayout = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 28px;
  align-items: start;

  ${({ $reverse }) =>
    $reverse
      ? `
        > :first-child {
          order: 2;
        }
        > :last-child {
          order: 1;
        }
      `
      : ''}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceMediaFigure = styled(MediaFigure).attrs({
  $ratio: '4 / 4.6',
  $overlay: 'soft'
})`
  min-height: 100%;
`;

export const ServiceMediaAside = styled.div`
  display: grid;
  gap: 16px;
`;

export const ServiceMediaNote = styled.div`
  ${SoftCardBase};
  padding: 18px;
  background: rgba(255, 255, 255, 0.92);

  strong {
    display: block;
    margin-bottom: 6px;
  }

  p {
    ${bodyText};
  }
`;

export const TrustMediaFigure = styled(MediaFigure).attrs({
  $ratio: '4 / 3.2',
  $overlay: 'soft'
})`
  margin-bottom: 18px;
`;

export const ProcessMediaLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 0.92fr) minmax(0, 1.08fr);
  gap: 28px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ProcessMediaFigure = styled(MediaFigure).attrs({
  $ratio: '4 / 4.3',
  $overlay: 'soft'
})``;

export const LocalMediaFigure = styled(MediaFigure).attrs({
  $ratio: '4 / 4.25',
  $overlay: 'dark'
})``;

export const LocalMediaChips = styled.div`
  position: absolute;
  inset: auto 18px 18px 18px;
  z-index: 1;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const LocalMediaChip = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.9);
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.92rem;
  font-weight: 700;
`;

export const GalleryContainer = styled(Container)`
  overflow: hidden;
`;

export const GalleryIntro = styled.div`
  max-width: 680px;
  margin-bottom: 28px;

  h2 {
    ${headingTypography};
    font-size: clamp(2rem, 4vw, 3rem);
    margin: 0 0 14px;
  }

  p {
    ${bodyText};
  }
`;

export const GalleryTrack = styled.div`
  display: flex;
  gap: 18px;
  overflow-x: auto;
  padding-bottom: 10px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%);

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    mask-image: none;
  }
`;

export const GalleryCard = styled.article`
  ${PanelBase};
  position: relative;
  flex: 0 0 clamp(290px, 31vw, 380px);
  overflow: hidden;
  scroll-snap-align: start;
  background: rgba(255, 255, 255, 0.92);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.strong};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-basis: min(46vw, 360px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-basis: 84vw;
  }
`;

export const GalleryImageWrap = styled.div`
  position: relative;
  aspect-ratio: 4 / 4.4;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(16, 24, 31, 0.02) 0%, rgba(16, 24, 31, 0.24) 100%);
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;

  ${GalleryCard}:hover & {
    transform: scale(1.02);
  }
`;

export const GalleryCardBody = styled.div`
  padding: 18px 18px 20px;

  h3 {
    ${headingTypography};
    font-size: 1.1rem;
    margin: 0;
  }

  p {
    ${bodyText};
    margin-top: 8px;
  }
`;
