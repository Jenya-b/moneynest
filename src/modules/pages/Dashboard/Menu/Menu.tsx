import IconButton from '@mui/material/IconButton';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SortIcon from '@mui/icons-material/Sort';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import SyncIcon from '@mui/icons-material/Sync';
import HouseIcon from '@mui/icons-material/House';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useState } from 'react';
import { yellow } from '@mui/material/colors';
import { alpha, styled } from '@mui/material';
import { colors } from 'styles/colors';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: '#7171C0',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
      background: colors.blackMidnight100,
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: '#7171C0',
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

export const ContextMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ position: 'absolute', top: '0px', right: '10px' }}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon fontSize="large" sx={{ color: yellow[50] }} />
      </IconButton>
      <StyledMenu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <SortIcon />
          Equities&Funds
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <ViewComfyIcon />
          Cash&Debt
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <ViewQuiltIcon />
          FX&Derivatives
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SyncIcon />
          Swaps&Repos
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <HouseIcon />
          Real assets
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <ViewListIcon />
          Custom assets
        </MenuItem>
      </StyledMenu>
    </div>
  );
};
