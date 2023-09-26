import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

import { Main } from 'styles/components';
import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { ChartBlock } from 'modules/components/ChartBlock/ChartBlock';
import { Table } from '../Dashboard/Table/Table';
import { IPortfolios, portfolios } from 'constants/portfolios';
import { TRow, TitleTable } from '../Dashboard/Table/Table.styled';
import { Settings, TableWrap } from './Portfolios.styled';
import { HEAD_DATA, HeadEnum } from 'constants/tables';
import { HiddenField } from './HiddenField/HiddenField';
import { useAppSelector } from 'modules/store/store';
import { portfolioSelector } from 'modules/store/selectors';
import { Sort } from './Sort/Sort';
import { Filter } from './Filter/Filter';
import { TableBasic } from 'modules/components/TableBasic/TableBasic';

export const PortfoliosPage = () => {
  const location = useLocation();
  const { headData, checkedHeadData } = useAppSelector(portfolioSelector);

  const renderHeadItem = (item: HeadEnum) => <th key={item}>{HEAD_DATA[item]}</th>;

  const renderBodyItem = (
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
    <tr key={index}>
      {checkedHeadData[HeadEnum.Name] && (
        <td>
          <TitleTable
            bgColor={name?.colors?.bg}
            borderColor={name?.colors?.border}
            textColor={name?.colors?.text}
          >
            {name?.title}
          </TitleTable>
        </td>
      )}
      {checkedHeadData[HeadEnum.Tier] && (
        <td>
          <TitleTable
            bgColor={tier?.colors?.bg}
            borderColor={tier?.colors?.border}
            textColor={tier?.colors?.text}
          >
            {tier?.title}
          </TitleTable>
        </td>
      )}
      {checkedHeadData[HeadEnum.ParentPortfolios] && (
        <td>
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
        </td>
      )}
      {checkedHeadData[HeadEnum.ChildPortfolios] && (
        <td>
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
        </td>
      )}
      {checkedHeadData[HeadEnum.PrevailingAssets] && (
        <td>
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
        </td>
      )}
      {checkedHeadData[HeadEnum.PrevailingCountries] && (
        <td>
          <TitleTable
            bgColor={prevailingCountries?.colors?.bg}
            borderColor={prevailingCountries?.colors?.border}
            textColor={prevailingCountries?.colors?.text}
          >
            {prevailingCountries?.title}
          </TitleTable>
        </td>
      )}
      {checkedHeadData[HeadEnum.PrevailingIndustries] && (
        <td>
          <TitleTable
            bgColor={prevailingIndustries?.colors?.bg}
            borderColor={prevailingIndustries?.colors?.border}
            textColor={prevailingIndustries?.colors?.text}
          >
            {prevailingIndustries?.title}
          </TitleTable>
        </td>
      )}
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );

  return (
    <Main style={{ display: 'flex', flexDirection: 'column', rowGap: '8px', overflow: 'auto' }}>
      <Breadcrumbs pathName={location.pathname} />
      <ChartBlock title="Portfolio map">
        <>
          <Settings>
            <HiddenField />
            <Sort />
            <Filter />
          </Settings>
          <TableWrap>
            <TableBasic
              bodyData={portfolios}
              headData={headData}
              renderBodyItem={renderBodyItem}
              renderHeadItem={renderHeadItem}
            />
          </TableWrap>
        </>
      </ChartBlock>
    </Main>
  );
};

export default PortfoliosPage;
