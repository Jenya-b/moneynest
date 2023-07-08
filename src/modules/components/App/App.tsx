import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import { theme } from 'styles/theme';
import { router } from 'modules/router/router';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  );
};
