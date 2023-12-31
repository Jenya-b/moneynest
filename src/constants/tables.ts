export enum HeadEnum {
  None = 'none',
  Name = 'name',
  Tier = 'tier',
  ParentPortfolios = 'parentPortfolios',
  ChildPortfolios = 'childPortfolios',
  PrevailingAssets = 'prevailingAssets',
  PrevailingCountries = 'prevailingCountries',
  PrevailingIndustries = 'prevailingIndustries',
  AssetDescription = 'assetDescription',
  ValueCost = 'valueCost',
  Exposure = 'exposure',
  PL = 'pl',
  Allocation = 'allocation',
  CountryRegion = 'countryRegion',
  IndustrySector = 'industrySector',
  SourceDescription = 'sourceDescription',
  Cost = 'cost',
  SymbolName = 'symbolName',
  Amount = 'amount',
  UnrealizedPl = 'unrealizedPl',
  TotalPl = 'totalPl',
  TargetWeight = 'targetWeight',
  Tax = 'tax',
  Irr = 'irr',
  Var = 'var',
  Views = 'views',
  Custodians = 'custodians',
  AccountHolders = 'accountHolders',
  NameSymbol = 'nameSymbol',
  LongShort = 'longShort',
  Quantity = 'quantity',
  PriceCurrency = 'priceCurrency',
  AveragePrice = 'averagePrice',
  ValueMarketPrice = 'valueMarketPrice',
  Portfolio = 'portfolio',
}

export const HEAD_DATA: { [key in HeadEnum]: string } = {
  [HeadEnum.None]: '',
  [HeadEnum.Name]: 'Name',
  [HeadEnum.Tier]: 'Tier',
  [HeadEnum.ParentPortfolios]: 'Parent portfolios',
  [HeadEnum.ChildPortfolios]: 'Child portfolios',
  [HeadEnum.PrevailingAssets]: 'Prevailing assets',
  [HeadEnum.PrevailingCountries]: 'Prevailing countries',
  [HeadEnum.PrevailingIndustries]: 'Prevailing industries',
  [HeadEnum.AssetDescription]: 'AssetDescription',
  [HeadEnum.ValueCost]: 'ValueCost',
  [HeadEnum.Exposure]: 'Exposure',
  [HeadEnum.PL]: 'PL',
  [HeadEnum.Allocation]: 'Allocation',
  [HeadEnum.CountryRegion]: 'Country/Region',
  [HeadEnum.IndustrySector]: 'Industry/Sector',
  [HeadEnum.SourceDescription]: 'Source/Description',
  [HeadEnum.Cost]: 'Cost',
  [HeadEnum.SymbolName]: 'Symbol/Name',
  [HeadEnum.Amount]: 'Amount',
  [HeadEnum.UnrealizedPl]: 'Unrealized PL',
  [HeadEnum.TotalPl]: 'Total PL',
  [HeadEnum.TargetWeight]: 'Target weight',
  [HeadEnum.Tax]: 'Tax',
  [HeadEnum.Irr]: 'IRR',
  [HeadEnum.Var]: 'VaR',
  [HeadEnum.Views]: 'Views',
  [HeadEnum.Custodians]: 'Custodians',
  [HeadEnum.AccountHolders]: 'Account	holders',
  [HeadEnum.NameSymbol]: 'Name symbol',
  [HeadEnum.LongShort]: 'Long short',
  [HeadEnum.Quantity]: 'Quantity',
  [HeadEnum.PriceCurrency]: 'Price currency',
  [HeadEnum.AveragePrice]: 'Average price',
  [HeadEnum.ValueMarketPrice]: 'Value market price',
  [HeadEnum.Portfolio]: 'Portfolio',
};
