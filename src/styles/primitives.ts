import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(100vw - 24px, 100%);
  }
`;

export const MainContent = styled.main`
  overflow: clip;
`;

const sectionVariants = {
  default: css``,
  muted: css`
    background: rgba(255, 255, 255, 0.56);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(21, 33, 43, 0.05);
  `,
  dark: css`
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.surfaceDark} 0%,
      ${({ theme }) => theme.colors.surfaceDarkAlt} 100%
    );
    color: ${({ theme }) => theme.colors.textOnDark};
  `,
  accent: css`
    background: linear-gradient(180deg, #fbf3eb 0%, #f7ede3 100%);
  `,
  contact: css`
    padding-top: 96px;
    padding-bottom: 120px;
  `
};

export const Section = styled.section<{ $variant?: keyof typeof sectionVariants }>`
  padding: 88px 0;
  scroll-margin-top: calc(${({ theme }) => theme.layout.headerHeight} + 24px);
  ${({ $variant = 'default' }) => sectionVariants[$variant]};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ $variant }) => ($variant === 'contact' ? '72px 0 120px' : '72px 0')};
  }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  padding: 7px 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(207, 107, 50, 0.12);
  color: ${({ theme }) => theme.colors.accentDark};
  font-size: 0.83rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const headingTypography = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 1.05;
  letter-spacing: -0.03em;
`;

export const bodyText = css`
  color: ${({ theme }) => theme.colors.textSoft};
  line-height: 1.7;
  margin: 0;
`;

export const PanelBase = css`
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(21, 33, 43, 0.08);
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

export const SoftCardBase = css`
  padding: 22px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(21, 33, 43, 0.08);
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const buttonVariants = {
  primary: css`
    background: ${({ theme }) => theme.colors.accent};
    color: #fff;
    box-shadow: 0 16px 28px rgba(207, 107, 50, 0.24);

    &:hover {
      background: ${({ theme }) => theme.colors.accentDark};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.surfaceDark};
    color: ${({ theme }) => theme.colors.textOnDark};

    &:hover {
      background: #223340;
    }
  `,
  ghost: css`
    min-height: auto;
    padding: 12px 0;
    color: ${({ theme }) => theme.colors.text};
  `,
  ghostLight: css`
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: ${({ theme }) => theme.colors.textOnDark};
    background: rgba(255, 255, 255, 0.06);
  `
};

const buttonStyles = css<{
  $variant?: keyof typeof buttonVariants;
  $fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 20px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
  ${({ $variant = 'primary' }) => buttonVariants[$variant]};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  &:hover {
    transform: translateY(-1px);
  }
`;

export const Button = styled.button<{
  $variant?: keyof typeof buttonVariants;
  $fullWidth?: boolean;
}>`
  ${buttonStyles};
`;

export const ButtonLink = styled.a<{
  $variant?: keyof typeof buttonVariants;
  $fullWidth?: boolean;
}>`
  ${buttonStyles};
`;

const textLinkStyles = css`
  color: ${({ theme }) => theme.colors.accentDark};
  font-weight: 700;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const TextLink = styled.a`
  ${textLinkStyles};
`;

export const TextButtonLink = styled.button`
  ${textLinkStyles};
`;

export const IconBadge = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(207, 107, 50, 0.12);
  color: ${({ theme }) => theme.colors.accentDark};

  svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }
`;

export const BrandLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
`;

export const BrandMark = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.surfaceDark} 0%, #243645 100%);
  color: ${({ theme }) => theme.colors.textOnDark};
  font-weight: 800;
  letter-spacing: 0.06em;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

export const BrandText = styled.span`
  display: grid;
  gap: 4px;

  strong {
    font-size: 1rem;
  }

  span {
    color: ${({ theme }) => theme.colors.textSoft};
    font-size: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    span {
      display: none;
    }
  }
`;
