import { createBrowserRouter } from 'react-router-dom';

import { path } from './path';
import { Layout } from 'modules/components/Layout/Layout';
import { DashboardPage, IsinSearchPage } from 'modules/pages';

export const router = createBrowserRouter([
  {
    path: path.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/tools/isin-search',
        element: <IsinSearchPage />,
      },
    ],
  },
]);
