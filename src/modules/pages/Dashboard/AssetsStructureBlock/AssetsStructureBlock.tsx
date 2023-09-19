import { useMemo } from 'react';

import { PieChart } from 'modules/components/Charts/Pie/Pie';
import { ChartBlock } from '../ChartBlock/ChartBlock';
import { PieChartWrap } from '../Dashboard.styled';
import { AssetsStructureData, assetsStructureData, headAssetsStructure } from 'constants/dashbord';
import { Table } from '../Table/Table';
import { TRow } from '../Table/Table.styled';

export const AssetsStructureBlock = () => {
  const assetsResult = useMemo(
    () =>
      assetsStructureData.reduce(
        (previousValue, currentValue) => previousValue + currentValue.value,
        0
      ),
    []
  );

  const renderAssetsStructure = ({ name, color, value }: AssetsStructureData) => (
    <TRow
      key={name}
      columns={headAssetsStructure.length}
      value={(100 / assetsResult) * value}
      color={color}
    >
      <div style={{ color }}>{name}</div>
    </TRow>
  );

  return (
    <ChartBlock title="Assets Structure">
      <>
        <PieChartWrap>
          <PieChart data={assetsStructureData} />
          <Table
            data={assetsStructureData}
            renderItem={renderAssetsStructure}
            headData={headAssetsStructure}
          />
        </PieChartWrap>
      </>
    </ChartBlock>
  );
};
