import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import { theme } from 'styles/theme';
import { router } from 'modules/router/router';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<>Loading...</>}>
        <RouterProvider router={router} />
      </Suspense>
      <GlobalStyles />
    </ThemeProvider>
  );
};
