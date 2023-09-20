interface Color {
  text: string | null;
  bg: string | null;
  border: string | null;
}

interface Info {
  title: string;
  colors: Color | null;
}

export interface IPortfolios {
  name: Info | null;
  tier: Info | null;
  parentPortfolios: Info[] | null;
  childPortfolios: Info[] | null;
  prevailingAssets: Info[] | null;
  prevailingCountries: Info | null;
  prevailingIndustries: Info | null;
}

export const headData = [
  'Name',
  'Tier',
  'Parent portfolios',
  'Child portfolios',
  'Prevailing Assets',
  'Prevailing	Countries',
  'Prevailing	Industries',
];

export const portfolios: IPortfolios[] = [
  {
    name: {
      title: 'Investments',
      colors: {
        text: '#FFFFFF',
        bg: '#403AEE',
        border: null,
      },
    },
    tier: {
      title: 'Root',
      colors: {
        text: '#000000',
        bg: '#FFFFFF',
        border: null,
      },
    },
    parentPortfolios: null,
    childPortfolios: [
      {
        title: 'Procter',
        colors: {
          text: '#FFFFFF',
          bg: null,
          border: '#403AEF',
        },
      },
      {
        title: 'Color',
        colors: {
          text: '#FFFFFF',
          bg: null,
          border: '#403AEF',
        },
      },
    ],
    prevailingAssets: [
      {
        title: 'Equities&similar',
        colors: {
          text: '#FFFFFF',
          bg: '##448FFF',
          border: null,
        },
      },
      {
        title: 'Cash',
        colors: {
          text: '#FFFFFF',
          bg: '#403AEE',
          border: null,
        },
      },
      {
        title: 'Bonds&similar',
        colors: {
          text: '#000000',
          bg: '#4ED251',
          border: null,
        },
      },
    ],
    prevailingCountries: {
      title: 'US',
      colors: {
        text: '#000000',
        bg: '#4ED251',
        border: null,
      },
    },
    prevailingIndustries: {
      title: 'Telecomunications',
      colors: {
        text: '#FFFFFF',
        bg: '##448FFF',
        border: null,
      },
    },
  },
];
