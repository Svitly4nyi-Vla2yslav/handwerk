import styled from 'styled-components';
import { bodyText, BrandLink, Container, headingTypography } from './primitives';

export const HeaderShell = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(247, 243, 238, 0.82);
  border-bottom: 1px solid rgba(21, 33, 43, 0.08);
`;

export const HeaderInner = styled(Container)`
  min-height: ${({ theme }) => theme.layout.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 14px;
  }
`;

export const HeaderBrand = styled(BrandLink)``;

export const SiteNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  a {
    color: ${({ theme }) => theme.colors.textSoft};
    transition:
      color 0.2s ease,
      transform 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const PhonePill = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.72);
  white-space: nowrap;

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

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: rgba(238, 242, 244, 0.72);

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
  padding: 14px 18px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.surfaceDark};
  color: ${({ theme }) => theme.colors.textOnDark};
  box-shadow: ${({ theme }) => theme.shadows.strong};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
