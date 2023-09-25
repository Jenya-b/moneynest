import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

import { Main } from 'styles/components';
import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { ChartBlock } from 'modules/components/ChartBlock/ChartBlock';
import { Table } from '../Dashboard/Table/Table';
import { IPortfolios, portfolios } from 'constants/portfolios';
import { TRow, TitleTable } from '../Dashboard/Table/Table.styled';
import { TableWrap } from './Portfolios.styled';
import { HeadEnum } from 'constants/tables';
import { Settings } from './Settings/Settings';
import { useAppSelector } from 'modules/store/store';
import { portfolioSelector } from 'modules/store/selectors';

export const PortfoliosPage = () => {
  const location = useLocation();
  const { headData, checkedHeadData } = useAppSelector(portfolioSelector);

  const renderItem = (
    {
      name,
      tier,
      parentPortfolios,
      childPortfolios,
      prevailingAssets,
      prevailingCountries,
      prevailingIndustries,
    }: IPortfolios,
    index: number | undefined
  ) => (
    <TRow key={index} style={{ height: '60px' }} columns={headData.length}>
      {checkedHeadData[HeadEnum.Name] && (
        <TitleTable
          bgColor={name?.colors?.bg}
          borderColor={name?.colors?.border}
          textColor={name?.colors?.text}
        >
          {name?.title}
        </TitleTable>
      )}
      {checkedHeadData[HeadEnum.Tier] && (
        <TitleTable
          bgColor={tier?.colors?.bg}
          borderColor={tier?.colors?.border}
          textColor={tier?.colors?.text}
        >
          {tier?.title}
        </TitleTable>
      )}

      {checkedHeadData[HeadEnum.ParentPortfolios] && (
        <Box sx={{ display: 'flex', columnGap: '5px', flexWrap: 'wrap' }}>
          {parentPortfolios?.map(({ colors, title }, index) => (
            <TitleTable
              key={index}
              bgColor={colors?.bg}
              borderColor={colors?.border}
              textColor={colors?.text}
            >
              {title}
            </TitleTable>
          ))}
        </Box>
      )}
      {checkedHeadData[HeadEnum.ChildPortfolios] && (
        <Box sx={{ display: 'flex', columnGap: '5px', rowGap: '5px', flexWrap: 'wrap' }}>
          {childPortfolios?.map(({ colors, title }, index) => (
            <TitleTable
              key={index}
              bgColor={colors?.bg}
              borderColor={colors?.border}
              textColor={colors?.text}
            >
              {title}
            </TitleTable>
          ))}
        </Box>
      )}
      {checkedHeadData[HeadEnum.PrevailingAssets] && (
        <Box sx={{ display: 'flex', columnGap: '5px', rowGap: '5px', flexWrap: 'wrap' }}>
          {prevailingAssets?.map(({ colors, title }, index) => (
            <TitleTable
              key={index}
              bgColor={colors?.bg}
              borderColor={colors?.border}
              textColor={colors?.text}
            >
              {title}
            </TitleTable>
          ))}
        </Box>
      )}
      {checkedHeadData[HeadEnum.PrevailingCountries] && (
        <TitleTable
          bgColor={prevailingCountries?.colors?.bg}
          borderColor={prevailingCountries?.colors?.border}
          textColor={prevailingCountries?.colors?.text}
        >
          {prevailingCountries?.title}
        </TitleTable>
      )}
      {checkedHeadData[HeadEnum.PrevailingIndustries] && (
        <TitleTable
          bgColor={prevailingIndustries?.colors?.bg}
          borderColor={prevailingIndustries?.colors?.border}
          textColor={prevailingIndustries?.colors?.text}
        >
          {prevailingIndustries?.title}
        </TitleTable>
      )}
    </TRow>
  );

  return (
    <Main style={{ display: 'flex', flexDirection: 'column', rowGap: '8px', overflow: 'auto' }}>
      <Breadcrumbs pathName={location.pathname} />
      <ChartBlock title="Portfolio map">
        <>
          <Settings />
          <TableWrap>
            <Table data={portfolios} headData={headData} renderItem={renderItem}></Table>
          </TableWrap>
        </>
      </ChartBlock>
    </Main>
  );
};

export default PortfoliosPage;
