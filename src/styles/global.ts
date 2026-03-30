import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    background:
      radial-gradient(circle at top left, rgba(207, 107, 50, 0.08), transparent 28%),
      linear-gradient(180deg, #f7f3ee 0%, ${({ theme }) => theme.colors.bg} 100%);
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.18) 1px, transparent 1px);
    background-size: 120px 120px;
    opacity: 0.25;
    pointer-events: none;
    z-index: -1;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    border: 0;
    background: none;
    padding: 0;
  }

  img,
  svg {
    display: block;
  }

  button:focus-visible,
  a:focus-visible,
  summary:focus-visible,
  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline: 3px solid rgba(207, 107, 50, 0.34);
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    body {
      padding-bottom: 102px;
    }
  }
`;
