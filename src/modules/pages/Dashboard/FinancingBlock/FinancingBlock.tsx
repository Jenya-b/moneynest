import { useMemo } from 'react';

import { PieChart } from 'modules/components/Charts/Pie/Pie';
import { ChartBlock } from '../../../components/ChartBlock/ChartBlock';
import { PieChartWrap } from '../Dashboard.styled';
import { AssetsStructureData, financingData, headFinancing } from 'constants/dashbord';
import { Table } from '../Table/Table';
import { TRow, TitleTable } from '../Table/Table.styled';

export const FinancingBlock = () => {
  const result = useMemo(
    () =>
      financingData.reduce((previousValue, currentValue) => previousValue + currentValue.value, 0),
    []
  );

  const renderItem = ({ name, color, value }: AssetsStructureData) => (
    <TRow
      key={name}
      columns={headFinancing.length}
      value={(100 / result) * value}
      color={color?.bg}
    >
      <TitleTable bgColor={color?.bg} borderColor={color?.border} textColor={color?.text}>
        {name}
      </TitleTable>
      <p>$00,000,000,000,000.00</p>
      <p>00.0%</p>
      <p>00.0%</p>
    </TRow>
  );

  return (
    <ChartBlock title="Financing">
      <>
        <PieChartWrap>
          <PieChart data={financingData} />
          <Table data={financingData} renderItem={renderItem} headData={headFinancing} />
        </PieChartWrap>
      </>
    </ChartBlock>
  );
};
