import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

// Створює єдиний React-root, вмикає перевірки StrictMode та передає всьому дереву
// спільну тему styled-components; GlobalStyle застосовує базові стилі перед рендером App.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
