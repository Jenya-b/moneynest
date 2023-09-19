import { useMemo } from 'react';

import { PieChart } from 'modules/components/Charts/Pie/Pie';
import { ChartBlock } from '../ChartBlock/ChartBlock';
import { PieChartWrap } from '../Dashboard.styled';
import { AssetsStructureData, headIndustries, industriesData } from 'constants/dashbord';
import { Table } from '../Table/Table';
import { TRow } from '../Table/Table.styled';

export const IndustriesBlock = () => {
  const industriesResult = useMemo(
    () =>
      industriesData.reduce((previousValue, currentValue) => previousValue + currentValue.value, 0),
    []
  );

  const renderIndustries = ({ name, color, value }: AssetsStructureData) => (
    <TRow
      key={name}
      columns={headIndustries.length}
      value={(100 / industriesResult) * value}
      color={color}
    >
      <div style={{ color }}>{name}</div>
    </TRow>
  );

  return (
    <ChartBlock title="Industries">
      <>
        <PieChartWrap>
          <PieChart data={industriesData} />
          <Table data={industriesData} renderItem={renderIndustries} headData={headIndustries} />
        </PieChartWrap>
      </>
    </ChartBlock>
  );
};
