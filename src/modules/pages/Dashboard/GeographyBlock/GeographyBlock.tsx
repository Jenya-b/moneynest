import { useMemo } from 'react';

import { PieChart } from 'modules/components/Charts/Pie/Pie';
import { ChartBlock } from '../ChartBlock/ChartBlock';
import { PieChartWrap } from '../Dashboard.styled';
import { AssetsStructureData, geographyData, headGeography } from 'constants/dashbord';
import { Table } from '../Table/Table';
import { TRow } from '../Table/Table.styled';

export const GeographyBlock = () => {
  const geographyResult = useMemo(
    () =>
      geographyData.reduce((previousValue, currentValue) => previousValue + currentValue.value, 0),
    []
  );

  const renderGeography = ({ name, color, value }: AssetsStructureData) => (
    <TRow
      key={name}
      columns={headGeography.length}
      value={(100 / geographyResult) * value}
      color={color}
    >
      <div style={{ color }}>{name}</div>
    </TRow>
  );

  return (
    <ChartBlock title="Geography">
      <>
        <PieChartWrap>
          <PieChart data={geographyData} />
          <Table data={geographyData} renderItem={renderGeography} headData={headGeography} />
        </PieChartWrap>
      </>
    </ChartBlock>
  );
};
