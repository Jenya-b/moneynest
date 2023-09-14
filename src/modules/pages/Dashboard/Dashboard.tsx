import { useLocation } from 'react-router-dom';

import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { Main } from 'styles/components';

export const DashboardPage = () => {
  const location = useLocation();

  return (
    <Main>
      <Breadcrumbs pathName={location.pathname} />
    </Main>
  );
};

export default DashboardPage;
