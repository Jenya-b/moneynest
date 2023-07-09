import { lazy } from 'react';

const DashboardPage = lazy(() => import('./Dashboard/Dashboard'));
const IsinSearchPage = lazy(() => import('./IsinSearch/IsinSearch'));

export { DashboardPage, IsinSearchPage };
