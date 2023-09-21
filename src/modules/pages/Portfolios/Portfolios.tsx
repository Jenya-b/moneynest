import { Main } from 'styles/components';

import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { useLocation } from 'react-router-dom';
import { ChartBlock } from 'modules/components/ChartBlock/ChartBlock';
import { Table } from '../Dashboard/Table/Table';
import { IPortfolios, headData, portfolios } from 'constants/portfolios';
import { TRow, TitleTable } from '../Dashboard/Table/Table.styled';
import { Box } from '@mui/material';
import { TableWrap } from './Portfolios.styled';

export const PortfoliosPage = () => {
  const location = useLocation();

  const renderItem = ({
    name,
    tier,
    parentPortfolios,
    childPortfolios,
    prevailingAssets,
    prevailingCountries,
    prevailingIndustries,
  }: IPortfolios) => (
    <TRow style={{ height: '60px' }} columns={headData.length}>
      <TitleTable
        bgColor={name?.colors?.bg}
        borderColor={name?.colors?.border}
        textColor={name?.colors?.text}
      >
        {name?.title}
      </TitleTable>
      <TitleTable
        bgColor={tier?.colors?.bg}
        borderColor={tier?.colors?.border}
        textColor={tier?.colors?.text}
      >
        {tier?.title}
      </TitleTable>
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
      <TitleTable
        bgColor={prevailingCountries?.colors?.bg}
        borderColor={prevailingCountries?.colors?.border}
        textColor={prevailingCountries?.colors?.text}
      >
        {prevailingCountries?.title}
      </TitleTable>
      <TitleTable
        bgColor={prevailingIndustries?.colors?.bg}
        borderColor={prevailingIndustries?.colors?.border}
        textColor={prevailingIndustries?.colors?.text}
      >
        {prevailingIndustries?.title}
      </TitleTable>
    </TRow>
  );

  return (
    <Main style={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
      <Breadcrumbs pathName={location.pathname} />
      <ChartBlock title="Portfolio map">
        <TableWrap>
          <Table data={portfolios} headData={headData} renderItem={renderItem}></Table>
        </TableWrap>
      </ChartBlock>
    </Main>
  );
};

export default PortfoliosPage;
