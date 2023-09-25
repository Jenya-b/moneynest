import { ChangeEvent, useEffect, useState } from 'react';
import { Main } from 'styles/components';

import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { useLocation } from 'react-router-dom';
import { ChartBlock } from 'modules/components/ChartBlock/ChartBlock';
import { Table } from '../Dashboard/Table/Table';
import { IPortfolios, portfoliosheadData, portfolios } from 'constants/portfolios';
import { TRow, TitleTable } from '../Dashboard/Table/Table.styled';
import { Box } from '@mui/material';
import { TableWrap } from './Portfolios.styled';
import { HeadEnum } from 'constants/tables';
import { ContextMenu } from './Menu/Menu';

export const PortfoliosPage = () => {
  const location = useLocation();
  const [theadSelected, setTheadSelected] = useState<{ [key in HeadEnum]?: boolean }>({});
  const [headData, setHeadData] = useState<HeadEnum[]>([]);

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
    console.log(headData);
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
    <TRow key={index} style={{ height: '60px' }} columns={portfoliosheadData.length}>
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
          <ContextMenu
            data={portfoliosheadData}
            handleCheckboxChange={handleCheckboxChange}
            checked={theadSelected}
          />
          <TableWrap>
            <Table data={portfolios} headData={headData} renderItem={renderItem}></Table>
          </TableWrap>
        </>
      </ChartBlock>
    </Main>
  );
};

export default PortfoliosPage;
