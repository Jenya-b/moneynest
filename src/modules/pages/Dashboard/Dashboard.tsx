import { useLocation } from 'react-router-dom';

import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { Main } from 'styles/components';
import { BasicModal } from 'modules/components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { NewEntry } from 'modules/components/Modal/NewEntry/NewEntry';

export const DashboardPage = () => {
  const location = useLocation();
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <Main>
      <Breadcrumbs pathName={location.pathname} />
      <BasicModal handleClose={closeModal} open={true}>
        <>
          <NewEntry />
        </>
      </BasicModal>
    </Main>
  );
};

export default DashboardPage;
