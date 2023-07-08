export interface CustomTheme {
  colors: {
    bgPrimary: string;
    bgSecondary: string;
  };

  cursor: string;

  order: {
    mainIndex: number;
    firstIndex: number;
    mediumIndex: number;
    lastIndex: number;
  };
}
