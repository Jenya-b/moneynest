import { accountIcon } from 'constants/images';
import styled from 'styled-components';
import { Button } from 'styles/components';

export const StyledHeader = styled.header`
  padding: 8px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  height: 100%;
  width: 48px;
  background: #d9d9d9;
`;

export const Nav = styled.nav`
  margin-left: 48px;
  margin-right: auto;
`;

export const AccountBtn = styled.button`
  margin-right: 8px;
  width: 32px;
  height: 32px;
  background: url(${accountIcon}) no-repeat;
`;

export const MenuList = styled.ul`
  display: flex;
  column-gap: 16px;
`;

export const ModalBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.bgBtn};
  margin-right: 20px;
`;
