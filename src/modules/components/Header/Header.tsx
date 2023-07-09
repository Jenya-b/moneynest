import { menu } from 'constants/menu';
import { StyledHeader, Logo, Nav, AccountBtn, MenuList } from './Header.styled';
import Menu from './Menu/Menu';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav>
        <MenuList>
          {menu.map(({ title, dropDownMenu, path }) => (
            <Menu key={title} dropDownMenu={dropDownMenu} path={path} title={title} />
          ))}
        </MenuList>
      </Nav>
      <AccountBtn />
    </StyledHeader>
  );
};
