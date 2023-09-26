import { Box } from '@mui/material';
import { IPortfolios, portfolios } from 'constants/portfolios';
import { HEAD_DATA, HeadEnum } from 'constants/tables';
import { TableBasic } from 'modules/components/TableBasic/TableBasic';
import { TitleTable } from 'modules/pages/Dashboard/Table/Table.styled';
import { portfolioSelector } from 'modules/store/selectors';
import { useAppSelector } from 'modules/store/store';
import { Settings, TableWrap } from '../Portfolios.styled';
import { HiddenField } from './HiddenField/HiddenField';
import { Sort } from './Sort/Sort';
import { Filter } from './Filter/Filter';

export const MapTable = () => {
  const { mapHeadData, checkedMapHeadData } = useAppSelector(portfolioSelector);

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
      {checkedMapHeadData[HeadEnum.Name] && (
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
      {checkedMapHeadData[HeadEnum.Tier] && (
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
      {checkedMapHeadData[HeadEnum.ParentPortfolios] && (
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
      {checkedMapHeadData[HeadEnum.ChildPortfolios] && (
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
      {checkedMapHeadData[HeadEnum.PrevailingAssets] && (
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
      {checkedMapHeadData[HeadEnum.PrevailingCountries] && (
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
      {checkedMapHeadData[HeadEnum.PrevailingIndustries] && (
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
    <>
      <Settings>
        <HiddenField />
        <Sort />
        <Filter />
      </Settings>
      <TableWrap>
        <TableBasic
          bodyData={portfolios}
          headData={mapHeadData}
          renderBodyItem={renderBodyItem}
          renderHeadItem={renderHeadItem}
        />
      </TableWrap>
    </>
  );
};
