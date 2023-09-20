import { createBrowserRouter } from 'react-router-dom';

import { path } from './path';
import { Layout } from 'modules/components/Layout/Layout';
import { DashboardPage, IsinSearchPage, PortfoliosPage } from 'modules/pages';

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
        path: path.portfolios,
        element: <PortfoliosPage />,
      },
      {
        path: path.isinSearch,
        element: <IsinSearchPage />,
      },
    ],
  },
]);
