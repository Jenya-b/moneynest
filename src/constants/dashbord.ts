export enum Perfomance {
  Procter = 'procter',
  SP500 = 'sp500',
  Nasdaq = 'nasdaq',
}

export interface DashboardParam {
  name: Perfomance;
  color: string;
}

export const perfomanceParams: DashboardParam[] = [
  {
    name: Perfomance.Procter,
    color: '#8884d8',
  },
  {
    name: Perfomance.SP500,
    color: '#82ca9d',
  },
  {
    name: Perfomance.Nasdaq,
    color: '#b3615b',
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
  color: string;
}

export const assetsStructureData: AssetsStructureData[] = [
  { name: 'Equities&similar', value: 400, color: '#448FFF' },
  { name: 'Bonds&similar', value: 300, color: '#4ED251' },
  { name: 'Cash', value: 300, color: '#403AEF' },
  { name: 'Funds', value: 200, color: '#CB528B' },
  { name: 'Other', value: 100, color: '#308D97' },
];

export const headAssetsStructure = [
  'Asset/Description',
  'Value/Cost',
  'Equivalent',
  'PL',
  'Allocation',
];

export const geographyData: AssetsStructureData[] = [
  { name: 'EU', value: 400, color: '#448FFF' },
  { name: 'US', value: 300, color: '#4ED251' },
  { name: 'CN', value: 300, color: '#403AEF' },
  { name: 'VN', value: 200, color: '#CB528B' },
  { name: 'HK', value: 100, color: '#308D97' },
];

export const headGeography = ['Country/Region'];

export const industriesData: AssetsStructureData[] = [
  { name: 'Telecomunications', value: 500, color: '#448FFF' },
  { name: 'Durable Goods', value: 500, color: '#4ED251' },
  { name: 'Consruction', value: 250, color: '#403AEF' },
  { name: 'Health', value: 200, color: '#CB528B' },
  { name: 'Other', value: 50, color: '#308D97' },
];

export const headIndustries = ['Industry/Sector'];

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
