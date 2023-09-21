// interface Color {
//   text: string | null;
//   bg: string | null;
//   border: string | null;
// }

import { Color } from 'interfaces/global';

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
      },
    },
    tier: {
      title: 'Root',
      colors: {
        text: '#000000',
        bg: '#FFFFFF',
      },
    },
    parentPortfolios: null,
    childPortfolios: [
      {
        title: 'Procter',
        colors: {
          text: '#FFFFFF',
          border: '#403AEF',
        },
      },
      {
        title: 'Color',
        colors: {
          text: '#FFFFFF',
          border: '#403AEF',
        },
      },
    ],
    prevailingAssets: [
      {
        title: 'Equities&similar',
        colors: {
          text: '#FFFFFF',
          bg: '#448FFF',
        },
      },
      {
        title: 'Cash',
        colors: {
          text: '#FFFFFF',
          bg: '#403AEE',
        },
      },
      {
        title: 'Bonds&similar',
        colors: {
          text: '#000000',
          bg: '#4ED251',
        },
      },
    ],
    prevailingCountries: {
      title: 'US',
      colors: {
        text: '#000000',
        bg: '#4ED251',
      },
    },
    prevailingIndustries: {
      title: 'Telecomunications',
      colors: {
        text: '#FFFFFF',
        bg: '#448FFF',
      },
    },
  },
  {
    name: {
      title: 'Real estate',
      colors: {
        text: '#FFFFFF',
        bg: '#F2522F',
      },
    },
    tier: {
      title: 'Root',
      colors: {
        text: '#000000',
        bg: '#FFFFFF',
      },
    },
    parentPortfolios: null,
    childPortfolios: [
      {
        title: 'UK',
        colors: {
          text: '#000000',
          bg: '#A3A3A3',
          border: '#F2522F',
        },
      },
      {
        title: 'Honk Kong',
        colors: {
          text: '#000000',
          bg: '#FFE178',
          border: '#F2522F',
        },
      },
      {
        title: 'RS',
        colors: {
          text: '#219324',
          bg: '#FFE178',
          border: '#219324',
        },
      },
      {
        title: 'Orient',
        colors: {
          text: '#219324',
          bg: '#FFE178',
          border: '#219324',
        },
      },
    ],
    prevailingAssets: [
      {
        title: 'Equities&similar',
        colors: {
          text: '#FFFFFF',
          bg: '#448FFF',
        },
      },
      {
        title: 'Cash',
        colors: {
          text: '#FFFFFF',
          bg: '#403AEE',
        },
      },
      {
        title: 'Bonds&similar',
        colors: {
          text: '#000000',
          bg: '#4ED251',
        },
      },
    ],
    prevailingCountries: {
      title: 'US',
      colors: {
        text: '#000000',
        bg: '#4ED251',
      },
    },
    prevailingIndustries: {
      title: 'Telecomunications',
      colors: {
        text: '#FFFFFF',
        bg: '#448FFF',
      },
    },
  },
  {
    name: {
      title: 'Color',
      colors: {
        text: '#FFFFFF',
        border: '#403AEF',
      },
    },
    tier: {
      title: 'Tier I',
      colors: {
        text: '#000000',
        bg: '#4ED251',
      },
    },
    parentPortfolios: [
      {
        title: 'Investments',
        colors: {
          text: '#FFFFFF',
          bg: '#403AEE',
        },
      },
    ],
    childPortfolios: null,
    prevailingAssets: [
      {
        title: 'Equities&similar',
        colors: {
          text: '#FFFFFF',
          bg: '#448FFF',
        },
      },
      {
        title: 'Cash',
        colors: {
          text: '#FFFFFF',
          bg: '#403AEE',
        },
      },
      {
        title: 'Bonds&similar',
        colors: {
          text: '#000000',
          bg: '#4ED251',
        },
      },
    ],
    prevailingCountries: {
      title: 'US',
      colors: {
        text: '#000000',
        bg: '#4ED251',
      },
    },
    prevailingIndustries: {
      title: 'Telecomunications',
      colors: {
        text: '#FFFFFF',
        bg: '#448FFF',
      },
    },
  },
];
