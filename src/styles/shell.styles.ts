import styled from 'styled-components';
import { bodyText, BrandLink, Container, headingTypography } from './primitives';

export const HeaderShell = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  padding: 12px 12px 0;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 8px 0;
  }
`;

export const HeaderInner = styled(Container)<{ $solid?: boolean }>`
  min-height: ${({ theme }) => theme.layout.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0 18px;
  border-radius: 24px;
  border: 1px solid
    ${({ $solid }) =>
      $solid ? 'rgba(255, 255, 255, 0.34)' : 'rgba(255, 255, 255, 0.16)'};
  background: ${({ $solid }) =>
    $solid ? 'rgba(247, 243, 238, 0.76)' : 'rgba(20, 28, 36, 0.28)'};
  backdrop-filter: blur(28px) saturate(160%);
  -webkit-backdrop-filter: blur(28px) saturate(160%);
  box-shadow: ${({ $solid }) =>
    $solid
      ? '0 18px 44px rgba(16, 24, 31, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.22)'
      : '0 18px 44px rgba(8, 12, 16, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.08)'};
  pointer-events: auto;
  transition:
    background 0.24s ease,
    border-color 0.24s ease,
    box-shadow 0.24s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 14px;
    padding: 0 14px;
    border-radius: 20px;
  }
`;

export const HeaderBrand = styled(BrandLink)<{ $solid?: boolean }>`
  flex: 0 0 auto;
  min-width: 0;

  strong {
    color: ${({ theme, $solid }) =>
      $solid ? theme.colors.text : 'rgba(255, 255, 255, 0.96)'};
  }

  span span {
    color: ${({ theme, $solid }) =>
      $solid ? theme.colors.textSoft : 'rgba(255, 255, 255, 0.72)'};
  }
`;

export const SiteNav = styled.nav<{ $solid?: boolean }>`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex-wrap: nowrap;
  min-width: 0;
  white-space: nowrap;

  a {
    color: ${({ theme, $solid }) =>
      $solid ? theme.colors.textSoft : 'rgba(255, 255, 255, 0.78)'};
    flex: 0 0 auto;
    transition:
      color 0.2s ease,
      transform 0.2s ease;

    &:hover {
      color: ${({ theme, $solid }) =>
        $solid ? theme.colors.text : 'rgba(255, 255, 255, 0.98)'};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const HeaderActions = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const PhonePill = styled.a<{ $solid?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border: 1px solid
    ${({ $solid }) =>
      $solid ? 'rgba(21, 33, 43, 0.1)' : 'rgba(255, 255, 255, 0.18)'};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ $solid }) =>
    $solid ? 'rgba(255, 255, 255, 0.62)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${({ theme, $solid }) =>
    $solid ? theme.colors.text : 'rgba(255, 255, 255, 0.92)'};
  white-space: nowrap;
  transition:
    background 0.24s ease,
    border-color 0.24s ease,
    color 0.24s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const FooterShell = styled.footer`
  padding: 56px 0 98px;
  background: ${({ theme }) => theme.colors.surfaceDark};
  color: ${({ theme }) => theme.colors.textOnDark};
`;

export const FooterGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr;
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const FooterTitle = styled.h3`
  ${headingTypography};
  font-size: 1.08rem;
  margin: 0 0 16px;
`;

export const FooterCopy = styled.p`
  ${bodyText};
  color: rgba(238, 242, 244, 0.72);
  max-width: 34ch;
  margin: 16px 0 0;
`;

export const FooterListWrap = styled.div`
  color: rgba(238, 242, 244, 0.72);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 10px;
  }

  a {
    color: inherit;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.surface};
    }
  }
`;

export const FooterBottom = styled(Container)`
  margin-top: 34px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  color: rgba(238, 242, 244, 0.72);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const FooterBrand = styled(HeaderBrand)`
  ${bodyText};

  span span {
    color: rgba(238, 242, 244, 0.72);
  }
`;

export const MobileCtaBarWrap = styled.div`
  position: fixed;
  left: 12px;
  right: 12px;
  bottom: 12px;
  z-index: 18;
  display: none;
  gap: 10px;
  padding: 12px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 35px rgba(17, 27, 34, 0.14);
  border: 1px solid rgba(21, 33, 43, 0.08);

  > * {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

export const FloatingPhoneLink = styled.a`
  position: fixed;
  right: 18px;
  bottom: 92px;
  z-index: 17;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.surfaceDark};
  color: ${({ theme }) => theme.colors.textOnDark};
  box-shadow: ${({ theme }) => theme.shadows.strong};

  svg {
    width: 22px;
    height: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
