import { createTheme } from '@mui/material';

import { colors } from './colors';

export const theme = createTheme({
  colors: {
    bg: colors.blackMidnight100,
  },

  cursor: 'pointer',

  order: {
    mainIndex: 150,
    firstIndex: 100,
    mediumIndex: 50,
    lastIndex: 10,
  },
});
