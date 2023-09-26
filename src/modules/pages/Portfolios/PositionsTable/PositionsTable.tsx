import { IPortfoliosHolding, portfoliosHoldingData } from 'constants/portfolios';
import { HEAD_DATA, HeadEnum } from 'constants/tables';
import { TableBasic } from 'modules/components/TableBasic/TableBasic';
import { TitleTable } from 'modules/pages/Dashboard/Table/Table.styled';
import { portfolioSelector } from 'modules/store/selectors';
import { useAppSelector } from 'modules/store/store';
import { Settings, TableWrap } from '../Portfolios.styled';
import { HiddenField } from './HiddenField/HiddenField';
import { useEffect } from 'react';

export const PositionsTable = () => {
  const { positionsHeadData, checkedPositionsHeadData } = useAppSelector(portfolioSelector);

  useEffect(() => {
    console.log(positionsHeadData);
  }, [positionsHeadData]);

  const renderHeadItem = (item: HeadEnum) => <th key={item}>{HEAD_DATA[item]}</th>;

  const renderBodyItem = (
    { nameSymbol, longShort }: IPortfoliosHolding,
    index: number | undefined
  ) => (
    <tr key={index}>
      {checkedPositionsHeadData[HeadEnum.NameSymbol] && (
        <td>
          <TitleTable
            bgColor={nameSymbol.name.colors?.bg}
            borderColor={nameSymbol.name?.colors?.border}
            textColor={nameSymbol.name?.colors?.text}
          >
            {nameSymbol.name?.title}
          </TitleTable>
        </td>
      )}
      {checkedPositionsHeadData[HeadEnum.LongShort] && (
        <td>
          <TitleTable
            bgColor={longShort.colors?.bg}
            borderColor={longShort.colors?.border}
            textColor={longShort.colors?.text}
          >
            {longShort.title}
          </TitleTable>
        </td>
      )}
    </tr>
  );

  return (
    <>
      <Settings>
        <HiddenField />
      </Settings>
      <TableWrap>
        <TableBasic
          bodyData={portfoliosHoldingData}
          headData={positionsHeadData}
          renderBodyItem={renderBodyItem}
          renderHeadItem={renderHeadItem}
        />
      </TableWrap>
    </>
  );
};
