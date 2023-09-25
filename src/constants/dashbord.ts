import { Color } from 'interfaces/global';
import { HeadEnum } from './tables';

export const PERIODS_OF_TIME = ['daily', 'monthly', 'quaterly', 'annually'];

export enum Perfomance {
  Procter = 'procter',
  SP500 = 'sp500',
  Nasdaq = 'nasdaq',
}

export interface DashboardParam {
  dataKey: Perfomance;
  stroke: string;
}

export const perfomanceParams: DashboardParam[] = [
  {
    dataKey: Perfomance.Procter,
    stroke: '#8884d8',
  },
  {
    dataKey: Perfomance.SP500,
    stroke: '#82ca9d',
  },
  {
    dataKey: Perfomance.Nasdaq,
    stroke: '#b3615b',
  },
];

export const perfomanceData = [
  {
    name: 'Aug 23',
    procter: 4000,
    sp500: 2400,
    nasdaq: 2400,
  },
  {
    name: 'Sep 23',
    procter: 3000,
    sp500: 1398,
    nasdaq: 2210,
  },
  {
    name: 'Oct 23',
    procter: 2000,
    sp500: 9800,
    nasdaq: 2290,
  },
  {
    name: 'Nov 23',
    procter: 2780,
    sp500: 3908,
    nasdaq: 2000,
  },
  {
    name: 'Dec 23',
    procter: 1890,
    sp500: 4800,
    nasdaq: 2181,
  },
  {
    name: 'Jan 24',
    procter: 2390,
    sp500: 3800,
    nasdaq: 2500,
  },
  {
    name: 'Feb 24',
    procter: 3490,
    sp500: 4300,
    nasdaq: 2100,
  },
];

export interface AssetsStructureData {
  name: string;
  value: number;
  color: Color | null;
}

export const assetsStructureData: AssetsStructureData[] = [
  {
    name: 'Equities&similar',
    value: 400,
    color: {
      bg: '#448FFF',
      text: '#ffffff',
    },
  },
  {
    name: 'Bonds&similar',
    value: 300,
    color: {
      bg: '#4ED251',
      text: '#000000',
    },
  },
  {
    name: 'Cash',
    value: 300,
    color: {
      bg: '#403AEF',
      text: '#ffffff',
    },
  },
  {
    name: 'Funds',
    value: 200,
    color: {
      bg: '#CB528B',
      text: '#ffffff',
    },
  },
  {
    name: 'Other',
    value: 100,
    color: {
      bg: '#308D97',
      text: '#000000',
    },
  },
];

export const headAssetsStructure = [
  HeadEnum.AssetDescription,
  HeadEnum.ValueCost,
  HeadEnum.Exposure,
  HeadEnum.PL,
  HeadEnum.Allocation,
];

export const geographyData: AssetsStructureData[] = [
  {
    name: 'EU',
    value: 400,
    color: {
      bg: '#448FFF',
      text: '#ffffff',
    },
  },
  {
    name: 'US',
    value: 300,
    color: {
      bg: '#4ED251',
      text: '#000000',
    },
  },
  {
    name: 'CN',
    value: 300,
    color: {
      bg: '#403AEF',
      text: '#ffffff',
    },
  },
  {
    name: 'VN',
    value: 200,
    color: {
      bg: '#CB528B',
      text: '#ffffff',
    },
  },
  {
    name: 'HK',
    value: 100,
    color: {
      bg: '#308D97',
      text: '#000000',
    },
  },
];

export const headGeography = [HeadEnum.CountryRegion];

export const industriesData: AssetsStructureData[] = [
  {
    name: 'Telecomunications',
    value: 500,
    color: {
      bg: '#448FFF',
      text: '#ffffff',
    },
  },
  {
    name: 'Durable Goods',
    value: 500,
    color: {
      bg: '#4ED251',
      text: '#000000',
    },
  },
  {
    name: 'Consruction',
    value: 250,
    color: {
      bg: '#403AEF',
      text: '#ffffff',
    },
  },
  {
    name: 'Health',
    value: 200,
    color: {
      bg: '#CB528B',
      text: '#ffffff',
    },
  },
  {
    name: 'Other',
    value: 50,
    color: {
      bg: '#308D97',
      text: '#000000',
    },
  },
];

export const headIndustries = [HeadEnum.IndustrySector];

export const cashFlowAnalysisData = [
  {
    name: 'Aug 23',
    cash: 4000,
  },
  {
    name: 'Sep 23',
    cash: 3000,
  },
  {
    name: 'Oct 23',
    cash: -100,
  },
  {
    name: 'Nov 23',
    cash: 2780,
  },
  {
    name: 'Dec 23',
    cash: 1890,
  },
  {
    name: 'Jan 24',
    cash: -990,
  },
  {
    name: 'Feb 24',
    cash: -1888,
  },
  {
    name: 'Mar 24',
    cash: 2490,
  },
  {
    name: 'Apr 24',
    cash: 2190,
  },
  {
    name: 'May 24',
    cash: 1490,
  },
  {
    name: 'June 24',
    cash: 1990,
  },
  {
    name: 'July 24',
    cash: 2490,
  },
];

export const headFinancing = [
  HeadEnum.SourceDescription,
  HeadEnum.Exposure,
  HeadEnum.Cost,
  HeadEnum.Allocation,
];

export const financingData: AssetsStructureData[] = [
  {
    name: 'Savings',
    value: 900,
    color: {
      bg: '#448FFF',
      text: '#ffffff',
    },
  },
  {
    name: 'Loans',
    value: 300,
    color: {
      bg: '#4ED251',
      text: '#000000',
    },
  },
  {
    name: 'Repo',
    value: 150,
    color: {
      bg: '#403AEF',
      text: '#ffffff',
    },
  },
  {
    name: 'Short Term Loans',
    value: 150,
    color: {
      bg: '#CB528B',
      text: '#ffffff',
    },
  },
  {
    name: 'Other',
    value: 100,
    color: {
      bg: '#308D97',
      text: '#000000',
    },
  },
];

export const headCurrencyPositioning = [
  HeadEnum.SymbolName,
  HeadEnum.Amount,
  HeadEnum.Exposure,
  HeadEnum.Allocation,
];

export const currencyPositioningData: AssetsStructureData[] = [
  {
    name: 'USD',
    value: 500,
    color: {
      bg: '#448FFF',
      text: '#ffffff',
    },
  },
  {
    name: 'EUR',
    value: 500,
    color: {
      bg: '#4ED251',
      text: '#000000',
    },
  },
  {
    name: 'GBP',
    value: 450,
    color: {
      bg: '#403AEF',
      text: '#ffffff',
    },
  },
  {
    name: 'CNY',
    value: 150,
    color: {
      bg: '#CB528B',
      text: '#ffffff',
    },
  },
  {
    name: 'JPY',
    value: 50,
    color: {
      bg: '#308D97',
      text: '#000000',
    },
  },
];
