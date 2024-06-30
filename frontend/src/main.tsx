import React from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import App from './components/App';

// import { theme } from './theme';

const defaultTheme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
