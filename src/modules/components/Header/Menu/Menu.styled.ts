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
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${({ isactive }) => (isactive ? `${colors.white}` : `${colors.grey200}`)};
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.colors.textTertiary};

  &.active {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const NavLinkMenu = styled(NavLink)`
  position: relative;
  padding: 10px 32px 10px 72px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${colors.blackMidnight400};

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
      background-color: ${colors.blackMidnight300};

      a {
        color: ${({ theme }) => theme.colors.textPrimary};

        ::before {
          background: url(${searchIcon.active});
        }
      }
    }
  }
`;
