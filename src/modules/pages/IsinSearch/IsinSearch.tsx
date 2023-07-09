import { useLocation } from 'react-router-dom';
import { Main } from 'styles/components';

import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';

export const IsinSearchPage = () => {
  const location = useLocation();

  return (
    <Main>
      <Breadcrumbs pathName={location.pathname} />
    </Main>
  );
};

export default IsinSearchPage;
