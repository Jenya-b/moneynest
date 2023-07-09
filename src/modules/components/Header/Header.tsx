import { menu } from 'constants/menu';
import { StyledHeader, Logo, Nav, AccountBtn, MenuList } from './Header.styled';
import { BasicMenu } from './Menu/Menu';

export const Header = () => {
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
      <AccountBtn />
    </StyledHeader>
  );
};
