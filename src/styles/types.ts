export interface CustomTheme {
  colors: {
    bgPrimary: string;
    bgSecondary: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
  };

  cursor: string;

  order: {
    mainIndex: number;
    firstIndex: number;
    mediumIndex: number;
    lastIndex: number;
  };
}
