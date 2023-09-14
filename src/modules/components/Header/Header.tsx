import { menu } from 'constants/menu';
import { StyledHeader, Logo, Nav, AccountBtn, MenuList, ModalBtn } from './Header.styled';
import { BasicMenu } from './Menu/Menu';
import { BasicModal } from 'modules/components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { NewEntry } from 'modules/components/Modal/NewEntry/NewEntry';

export const Header = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <StyledHeader>
      <Logo />
      <Nav>
        <MenuList>
          {menu.map(({ title, dropDownMenu, path }) => (
            <BasicMenu key={title} dropDownMenu={dropDownMenu} path={path} title={title} />
          ))}
        </MenuList>
      </Nav>
      <BasicModal handleClose={closeModal} open={isOpenModal}>
        <>
          <NewEntry handleCloseModal={closeModal} />
        </>
      </BasicModal>
      <ModalBtn onClick={openModal}>Modal</ModalBtn>
      <AccountBtn />
    </StyledHeader>
  );
};
