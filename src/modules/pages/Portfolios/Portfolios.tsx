import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

import { Main } from 'styles/components';
import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { ChartBlock } from 'modules/components/ChartBlock/ChartBlock';
import { Table } from '../Dashboard/Table/Table';
import { IPortfolios, portfoliosheadData, portfolios } from 'constants/portfolios';
import { TRow, TitleTable } from '../Dashboard/Table/Table.styled';
import { SettingBlock, TableWrap } from './Portfolios.styled';
import { HeadEnum } from 'constants/tables';
import { ContextMenu } from './Menu/Menu';

export const PortfoliosPage = () => {
  const location = useLocation();
  const [theadSelected, setTheadSelected] = useState<{ [key in HeadEnum]?: boolean }>({});
  const [headData, setHeadData] = useState<HeadEnum[]>([]);
  const [countHiddenColumns, setCountHiddenColumns] = useState<number>(0);

  useEffect(() => {
    setHeadData(portfoliosheadData);
    const checkGroup: { [key in HeadEnum]?: boolean } = {};
    portfoliosheadData.map((item) => (checkGroup[item] = true));
    setTheadSelected(checkGroup);
  }, []);

  useEffect(() => {
    if (!theadSelected) return;
    const newData = portfoliosheadData.filter((item) => theadSelected[item]);

    setHeadData(newData);
  }, [theadSelected]);

  useEffect(() => {
    setCountHiddenColumns(portfoliosheadData.length - headData.length);
  }, [headData]);

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
      {theadSelected[HeadEnum.Name] && (
        <TitleTable
          bgColor={name?.colors?.bg}
          borderColor={name?.colors?.border}
          textColor={name?.colors?.text}
        >
          {name?.title}
        </TitleTable>
      )}
      {theadSelected[HeadEnum.Tier] && (
        <TitleTable
          bgColor={tier?.colors?.bg}
          borderColor={tier?.colors?.border}
          textColor={tier?.colors?.text}
        >
          {tier?.title}
        </TitleTable>
      )}

      {theadSelected[HeadEnum.ParentPortfolios] && (
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
      {theadSelected[HeadEnum.ChildPortfolios] && (
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
      {theadSelected[HeadEnum.PrevailingAssets] && (
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
      {theadSelected[HeadEnum.PrevailingCountries] && (
        <TitleTable
          bgColor={prevailingCountries?.colors?.bg}
          borderColor={prevailingCountries?.colors?.border}
          textColor={prevailingCountries?.colors?.text}
        >
          {prevailingCountries?.title}
        </TitleTable>
      )}
      {theadSelected[HeadEnum.PrevailingIndustries] && (
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

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTheadSelected({
      ...theadSelected,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Main style={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
      <Breadcrumbs pathName={location.pathname} />
      <ChartBlock title="Portfolio map">
        <>
          <SettingBlock>
            <ContextMenu
              data={portfoliosheadData}
              handleCheckboxChange={handleCheckboxChange}
              checked={theadSelected}
              countHiddenColumns={countHiddenColumns}
            />
          </SettingBlock>
          <TableWrap>
            <Table data={portfolios} headData={headData} renderItem={renderItem}></Table>
          </TableWrap>
        </>
      </ChartBlock>
    </Main>
  );
};

export default PortfoliosPage;
