import React from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { SnackbarProvider } from 'notistack';
import { RecoilRoot, useRecoilValue } from 'recoil';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { authState } from './store/auth';

// Create a new router instance
const router = createRouter({ routeTree, context: { auth: undefined! } });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const InnerApp = () => {
  const auth = useRecoilValue(authState);
  return <RouterProvider router={router} context={{ auth }} />;
};

console.log('Starting app...');

// import { theme } from './theme';

const defaultTheme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <RecoilRoot>
        <SnackbarProvider maxSnack={3}>
          <InnerApp />
        </SnackbarProvider>
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
);
