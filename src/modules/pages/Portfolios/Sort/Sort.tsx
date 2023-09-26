import { useState, useEffect } from 'react';
import Menu, { MenuProps } from '@mui/material/Menu';
import SortIcon from '@mui/icons-material/Sort';
import { Button, alpha, styled } from '@mui/material';
import { colors } from 'styles/colors';
import { HeadEnum } from 'constants/tables';
import { useAppDispatch } from 'modules/store/store';
import { portfoliosheadData } from 'constants/portfolios';
import { setCheckedHeadData, setHeadData } from 'modules/store/reducers/portfolioSlice';

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

export const Sort = () => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    dispatch(setHeadData(portfoliosheadData));
    const checkGroup: { [key in HeadEnum]?: boolean } = {};
    portfoliosheadData.map((item) => (checkGroup[item] = true));
    dispatch(setCheckedHeadData(checkGroup));
  }, []);

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
        startIcon={<SortIcon />}
        sx={{
          backgroundColor: 'rgba(255, 225, 120, 0.20)',
          textTransform: 'lowercase',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        Sorted by ...
      </Button>
      <StyledMenu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      ></StyledMenu>
    </div>
  );
};
