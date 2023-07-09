import { useState, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';

import { Button, StyledNavLink, StyledMenu, NavLinkMenu } from './Menu.styled';
import { pathCheck } from 'utils/pathCheck';

interface BasicMenuProps {
  title: string;
  dropDownMenu: {
    title: string;
    pointer: string;
  }[];
  path: string;
}

export default function BasicMenu({ dropDownMenu, path, title }: BasicMenuProps) {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!dropDownMenu.length)
    return (
      <li>
        <StyledNavLink to={path}>{title}</StyledNavLink>
      </li>
    );

  return (
    <li>
      <Button onClick={handleClick} isactive={pathCheck(location.pathname, path)}>
        {title}
      </Button>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {dropDownMenu.map(({ title, pointer }) => (
          <MenuItem key={title} onClick={handleClose}>
            <NavLinkMenu to={`${path}/${pointer}`}>{title}</NavLinkMenu>
          </MenuItem>
        ))}
      </StyledMenu>
    </li>
  );
}
