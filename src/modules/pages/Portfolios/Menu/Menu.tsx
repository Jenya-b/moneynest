import { useState } from 'react';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, Checkbox, FormControlLabel, alpha, styled } from '@mui/material';
import { colors } from 'styles/colors';
import { HEAD_DATA, HeadEnum } from 'constants/tables';

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

interface ContextMenuProps {
  data: HeadEnum[];
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: { [key in HeadEnum]?: boolean };
  countHiddenColumns: number;
}

export const ContextMenu = ({
  data,
  handleCheckboxChange,
  checked,
  countHiddenColumns,
}: ContextMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClick}
        startIcon={countHiddenColumns ? <VisibilityOffIcon /> : <VisibilityIcon />}
        sx={{
          backgroundColor: 'rgba(68, 143, 255, 0.20)',
          textTransform: 'lowercase',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        {countHiddenColumns} hidden field
      </Button>
      <StyledMenu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {data.map((item) => (
          <MenuItem key={item}>
            <FormControlLabel
              control={
                <Checkbox checked={checked[item]} onChange={handleCheckboxChange} name={item} />
              }
              label={HEAD_DATA[item]}
            />
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};
