import { createTheme } from '@mui/material';

import { colors } from './colors';

export const theme = createTheme({
  colors: {
    bgPrimary: colors.blackMidnight100,
    bgSecondary: colors.blackMidnight200,
    bgTertiary: colors.blackMidnight300,
    textPrimary: colors.white,
    textSecondary: colors.grey100,
    textTertiary: colors.grey200,
  },

  cursor: 'pointer',

  order: {
    mainIndex: 150,
    firstIndex: 100,
    mediumIndex: 50,
    lastIndex: 10,
  },
});
