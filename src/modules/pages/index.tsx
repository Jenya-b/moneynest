import { lazy } from 'react';

const DashboardPage = lazy(() => import('./Dashboard/Dashboard'));
const PortfoliosPage = lazy(() => import('./Portfolios/Portfolios'));
const IsinSearchPage = lazy(() => import('./IsinSearch/IsinSearch'));

export { DashboardPage, IsinSearchPage, PortfoliosPage };
