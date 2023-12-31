import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import GlobalStyles from 'styles/global';
import { theme } from 'styles/theme';
import { router } from 'modules/router/router';
import { store } from 'modules/store/store';
import { Loader } from '../Loader/Loader';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
};
