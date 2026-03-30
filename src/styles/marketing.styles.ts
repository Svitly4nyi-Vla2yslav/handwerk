import styled from 'styled-components';
import {
  bodyText,
  Container,
  IconBadge,
  PanelBase,
  SoftCardBase,
  TextButtonLink,
  TextLink
} from './primitives';

export const TwoColumnLayout = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
  gap: 28px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const TrustFrame = styled(Container)`
  ${PanelBase};
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(340px, 0.96fr);
  gap: 32px;
  align-items: stretch;
  padding: clamp(28px, 4vw, 38px);
  background: rgba(255, 255, 255, 0.72);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const TrustContentColumn = styled.div`
  display: grid;
  align-content: start;
  gap: 10px;
`;

export const TrustList = styled.div`
  display: grid;
  gap: 16px;
`;

export const TrustItem = styled.article`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 16px;
  align-items: start;

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: -0.02em;
    margin: 0 0 8px;
  }

  p {
    ${bodyText};
  }
`;

export const TrustItemIcon = styled(IconBadge)``;

export const TrustPanel = styled.aside`
  ${PanelBase};
  padding: 28px;
  display: grid;
  gap: 18px;
  background: rgba(249, 246, 242, 0.92);
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px;
  }
`;

export const TrustChipGrid = styled.div`
  display: grid;
  gap: 14px;
  grid-auto-rows: 1fr;
`;

export const TrustChip = styled.article`
  ${SoftCardBase};

  strong {
    display: block;
    margin-bottom: 6px;
    font-size: 1rem;
  }

  span {
    color: ${({ theme }) => theme.colors.textSoft};
    line-height: 1.55;
  }
`;

export const PanelFooter = styled.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(21, 33, 43, 0.08);

  p {
    ${bodyText};
    margin-bottom: 16px;
  }
`;

export const InlineActions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ServiceStack = styled.div`
  display: grid;
  gap: 24px;
`;

export const ServiceBlock = styled.article`
  ${PanelBase};
  padding: 28px;
  background: rgba(255, 255, 255, 0.84);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px;
  }
`;

export const ServiceIntro = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 18px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: -0.02em;
    margin: 0;
  }

  p {
    ${bodyText};
    margin-top: 12px;
  }
`;

export const ServiceIcon = styled(IconBadge)``;

export const ServiceEyebrowWrap = styled.div`
  margin-bottom: 12px;
`;

export const ServiceBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-top: 28px;

  h4 {
    margin: 0 0 16px;
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const CheckListWrap = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 14px;
  }

  li {
    display: grid;
    grid-template-columns: 18px 1fr;
    gap: 12px;
    align-items: start;
    color: ${({ theme }) => theme.colors.textSoft};
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.colors.accent};
    fill: currentColor;
    margin-top: 3px;
  }
`;

export const ServiceActions = styled.div`
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(21, 33, 43, 0.08);
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const AdvantageGrid = styled.div`
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

export const AdvantageCard = styled.article`
  ${SoftCardBase};
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: none;

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: -0.02em;
    margin: 0;
  }

  p {
    color: rgba(238, 242, 244, 0.72);
    line-height: 1.7;
    margin: 0;
  }
`;

export const CtaRow = styled(InlineActions)`
  margin-top: 32px;
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ProcessCard = styled.article`
  ${SoftCardBase};
  position: relative;
  min-height: 100%;

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: -0.02em;
    margin: 0;
  }

  p {
    ${bodyText};
  }
`;

export const ProcessIndex = styled.span`
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: rgba(21, 33, 43, 0.34);
`;

export const ProcessIcon = styled(IconBadge)`
  margin-bottom: 18px;
`;

export const HeatpumpBenefits = styled.div`
  display: grid;
  gap: 18px;
  margin-top: 28px;

  article {
    padding: 22px;
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(21, 33, 43, 0.08);
    border-radius: ${({ theme }) => theme.radii.md};
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: -0.02em;
    margin: 0;
  }

  p {
    ${bodyText};
  }
`;

export const QuickCheckCard = styled.aside`
  ${PanelBase};
  padding: 28px;
  background: linear-gradient(180deg, rgba(21, 33, 43, 0.98) 0%, rgba(29, 43, 55, 0.98) 100%);
  color: ${({ theme }) => theme.colors.textOnDark};
  box-shadow: ${({ theme }) => theme.shadows.strong};

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: -0.02em;
    margin: 16px 0 12px;
  }

  p {
    color: rgba(238, 242, 244, 0.74);
    line-height: 1.7;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px;
  }
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: grid;
  gap: 12px;

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

  ${QuickCheckCard} & li {
    color: ${({ theme }) => theme.colors.textOnDark};
  }
`;

export const LocalCopy = styled.p`
  ${bodyText};
  max-width: 64ch;
  margin-bottom: 26px;
`;

export const AreaTags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 28px;
`;

export const AreaTag = styled.span`
  display: inline-flex;
  padding: 11px 14px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(21, 33, 43, 0.08);
  color: ${({ theme }) => theme.colors.textSoft};
`;

export const MapCard = styled.aside`
  ${PanelBase};
  overflow: hidden;
`;

export const MapSurface = styled.div`
  position: relative;
  min-height: 360px;
  background:
    radial-gradient(circle at 50% 50%, rgba(207, 107, 50, 0.24), transparent 22%),
    linear-gradient(180deg, #f6f1eb 0%, #ebe2d7 100%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
  }

  &::before {
    background-image:
      linear-gradient(rgba(21, 33, 43, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(21, 33, 43, 0.07) 1px, transparent 1px);
    background-size: 72px 72px;
  }

  &::after {
    inset: 15% 18%;
    border: 1px dashed rgba(21, 33, 43, 0.14);
    border-radius: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 300px;
  }
`;

export const MapMarker = styled.span<{
  $position: 'center' | 'north' | 'east' | 'south' | 'west';
}>`
  position: absolute;
  z-index: 1;
  display: inline-flex;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(21, 33, 43, 0.08);
  box-shadow: ${({ theme }) => theme.shadows.soft};
  font-weight: 700;

  ${({ $position }) =>
    $position === 'center' &&
    `
      top: 46%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
  ${({ $position }) =>
    $position === 'north' &&
    `
      top: 20%;
      left: 34%;
    `}
  ${({ $position }) =>
    $position === 'east' &&
    `
      top: 35%;
      right: 18%;
    `}
  ${({ $position }) =>
    $position === 'south' &&
    `
      bottom: 18%;
      left: 50%;
      transform: translateX(-50%);
    `}
  ${({ $position }) =>
    $position === 'west' &&
    `
      top: 55%;
      left: 16%;
    `}
`;

export const MapCaption = styled.div`
  padding: 24px;

  p {
    ${bodyText};
  }
`;

export const FaqLayout = styled(TwoColumnLayout)``;

export const FaqList = styled.div`
  display: grid;
  gap: 14px;
`;

export const FaqItem = styled.details`
  padding: 22px 24px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(21, 33, 43, 0.08);
  box-shadow: ${({ theme }) => theme.shadows.soft};

  summary {
    cursor: pointer;
    font-weight: 700;
    list-style: none;
    padding-right: 24px;
    position: relative;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: '+';
    position: absolute;
    right: 0;
    top: -1px;
    color: ${({ theme }) => theme.colors.accentDark};
    font-size: 1.2rem;
  }

  &[open] summary::after {
    content: '-';
  }

  p {
    ${bodyText};
    margin-top: 14px;
  }
`;

export const FaqPanel = styled.aside`
  ${PanelBase};
  padding: 28px;
  display: grid;
  gap: 16px;
  align-content: start;

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: -0.02em;
    margin: 0;
  }

  p {
    ${bodyText};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px;
  }
`;

export const ActionTextButton = styled(TextButtonLink)`
  cursor: pointer;
`;

export const ActionTextLink = styled(TextLink)``;
