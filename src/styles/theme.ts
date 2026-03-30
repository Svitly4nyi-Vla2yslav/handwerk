export const theme = {
  colors: {
    bg: '#f5f1eb',
    bgMuted: '#ede7df',
    surface: '#ffffff',
    surfaceAlt: '#f9f6f2',
    surfaceDark: '#15212b',
    surfaceDarkAlt: '#1c2a35',
    text: '#18242e',
    textSoft: '#55616c',
    textOnDark: '#eef2f4',
    border: 'rgba(21, 33, 43, 0.1)',
    accent: '#cf6b32',
    accentDark: '#a95424'
  },
  shadows: {
    soft: '0 20px 45px rgba(23, 34, 41, 0.08)',
    strong: '0 24px 60px rgba(18, 30, 38, 0.16)'
  },
  radii: {
    sm: '14px',
    md: '22px',
    lg: '32px',
    pill: '999px'
  },
  layout: {
    container: 'min(1180px, calc(100vw - 32px))',
    headerHeight: '88px'
  },
  fonts: {
    body: '"Aptos", "Segoe UI", "Trebuchet MS", sans-serif',
    heading: '"Aptos Display", "Trebuchet MS", "Segoe UI", sans-serif'
  },
  breakpoints: {
    tablet: '1160px',
    mobile: '780px'
  }
} as const;

export type AppTheme = typeof theme;
