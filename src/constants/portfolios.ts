import { Color } from 'interfaces/global';
import { HeadEnum } from './tables';

interface Info {
  title: string;
  colors: Color | null;
}

interface Count {
  firstValue: number;
  secondValue: number | null;
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

export const portfoliosheadData = [
  HeadEnum.Name,
  HeadEnum.Tier,
  HeadEnum.ParentPortfolios,
  HeadEnum.ChildPortfolios,
  HeadEnum.PrevailingAssets,
  HeadEnum.PrevailingCountries,
  HeadEnum.PrevailingIndustries,
  HeadEnum.ValueCost,
  HeadEnum.UnrealizedPl,
  HeadEnum.TotalPl,
  HeadEnum.Allocation,
  HeadEnum.TargetWeight,
  HeadEnum.Tax,
  HeadEnum.Irr,
  HeadEnum.Var,
  HeadEnum.Views,
  HeadEnum.Custodians,
  HeadEnum.AccountHolders,
];

export const portfoliosHoldingheadData = [
  HeadEnum.NameSymbol,
  HeadEnum.LongShort,
  HeadEnum.Quantity,
  HeadEnum.PriceCurrency,
  HeadEnum.AveragePrice,
  HeadEnum.ValueMarketPrice,
  HeadEnum.TotalPl,
  HeadEnum.Allocation,
  HeadEnum.TargetWeight,
  HeadEnum.Portfolio,
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

export interface IPortfoliosHolding {
  logo: string;
  nameSymbol: {
    name: Info;
    symbol: string;
  };
  longShort: Info;
  quantity: Count;
  priceCurrency: Info;
  averagePrice: Count;
  valueMarketPrice: Count;
  totalPl: Count;
  allocation: Count;
  targetWeight: Count;
  portfolio: Info;
}

export const portfoliosHoldingData: IPortfoliosHolding[] = [
  {
    logo: '',
    nameSymbol: {
      name: {
        title: 'Apple',
        colors: {
          text: '#FFFFFF',
          bg: '#448FFF',
        },
      },
      symbol: 'NASDAQ:AAPL',
    },
    longShort: {
      title: 'Long',
      colors: {
        text: '#000',
        bg: '#34FEC1',
      },
    },
    quantity: {
      firstValue: 0,
      secondValue: null,
    },
    priceCurrency: {
      title: 'USD',
      colors: {
        text: '#FFFFFF',
        bg: '#7171C0',
      },
    },
    averagePrice: {
      firstValue: 0,
      secondValue: null,
    },
    valueMarketPrice: {
      firstValue: 0,
      secondValue: 0,
    },
    totalPl: {
      firstValue: 0,
      secondValue: 0,
    },
    allocation: {
      firstValue: 0,
      secondValue: null,
    },
    targetWeight: {
      firstValue: 0,
      secondValue: null,
    },
    portfolio: {
      title: 'Procter',
      colors: {
        text: '#219324',
        bg: '#FFE178',
        border: '#219324',
      },
    },
  },
];
