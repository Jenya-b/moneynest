import { useState } from 'react';
import Menu, { MenuProps } from '@mui/material/Menu';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  alpha,
  styled,
} from '@mui/material';
import { colors } from 'styles/colors';
import { HEAD_DATA } from 'constants/tables';
import { portfoliosheadData } from 'constants/portfolios';

const operators = ['contains', 'is empty', 'no is empty'];

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

export const Filter = () => {
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
        startIcon={<FilterListIcon />}
        sx={{
          backgroundColor: 'rgba(52, 254, 193, 0.20)',
          textTransform: 'lowercase',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        Filtered by ...
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
        <MenuItem sx={{ width: '400px', display: 'flex', flexDirection: 'column' }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FormControl variant="standard" fullWidth>
                <InputLabel sx={{ color: '#fff' }} id="columns-select-label">
                  Columns
                </InputLabel>
                <Select
                  sx={{ borderBottom: '1px solid #fff', color: '#fff' }}
                  labelId="columns-select-label"
                  id="columns-simple-select"
                  label="Columns"
                >
                  {portfoliosheadData.map((item) => (
                    <MenuItem value={item} key={item}>
                      {HEAD_DATA[item]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl variant="standard" fullWidth>
                <InputLabel sx={{ color: '#fff' }} id="operators-select-label">
                  Operator
                </InputLabel>
                <Select
                  sx={{ borderBottom: '1px solid #fff', color: '#fff' }}
                  labelId="operators-select-label"
                  id="operators-simple-select"
                  label="Operator"
                >
                  {operators.map((item) => (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl variant="standard" fullWidth>
                <InputLabel sx={{ color: '#fff' }}>Value</InputLabel>
                <Input sx={{ borderBottom: '1px solid #fff', color: '#fff' }} />
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{ alignSelf: 'start', mt: 1 }}>
            <Button>add filter</Button>
            <Button>delete filter</Button>
          </Box>
        </MenuItem>
      </StyledMenu>
    </div>
  );
};
