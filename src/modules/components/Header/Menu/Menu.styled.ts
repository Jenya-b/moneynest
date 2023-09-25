import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '@mui/material/Menu';

import { colors } from 'styles/colors';
import { searchIcon } from 'constants/images';

interface ButtonProps {
  isactive: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: none;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.colors.textPrimary};
  opacity: ${({ isactive }) => (isactive ? 1 : 0.6)};

  :hover {
    opacity: 1;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.colors.textPrimary};
  opacity: 0.6;

  :hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }
`;

export const NavLinkMenu = styled.p`
  position: relative;
  padding: 10px 32px 10px 72px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${colors.blue400};

  ::before {
    position: absolute;
    content: '';
    left: 32px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 23px;
    background: url(${searchIcon.noActive});
  }
`;

export const StyledMenu = styled(Menu)`
  & .MuiMenu-paper {
    margin-top: 10px;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
  }

  li {
    padding: 0;

    :hover {
      background-color: ${({ theme }) => theme.colors.bgTertiary};

      p {
        color: ${({ theme }) => theme.colors.textPrimary};

        ::before {
          background: url(${searchIcon.active});
        }
      }
    }
  }
`;
