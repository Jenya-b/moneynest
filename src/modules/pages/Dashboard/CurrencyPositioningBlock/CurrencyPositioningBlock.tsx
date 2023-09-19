import { useMemo } from 'react';

import { PieChart } from 'modules/components/Charts/Pie/Pie';
import { ChartBlock } from '../ChartBlock/ChartBlock';
import { PieChartWrap } from '../Dashboard.styled';
import {
  AssetsStructureData,
  currencyPositioningData,
  headCurrencyPositioning,
} from 'constants/dashbord';
import { Table } from '../Table/Table';
import { TRow } from '../Table/Table.styled';

export const CurrencyPositioningBlock = () => {
  const result = useMemo(
    () =>
      currencyPositioningData.reduce(
        (previousValue, currentValue) => previousValue + currentValue.value,
        0
      ),
    []
  );

  const renderItem = ({ name, color, value }: AssetsStructureData) => (
    <TRow
      key={name}
      columns={headCurrencyPositioning.length}
      value={(100 / result) * value}
      color={color}
    >
      <p style={{ color }}>{name}</p>
      <p>$00,000,000,000,000.00</p>
      <p>$00,000,000,000,000.00</p>
      <p>00.0%</p>
    </TRow>
  );

  return (
    <ChartBlock title="Currency Positioning">
      <>
        <PieChartWrap>
          <PieChart data={currencyPositioningData} />
          <Table
            data={currencyPositioningData}
            renderItem={renderItem}
            headData={headCurrencyPositioning}
          />
        </PieChartWrap>
      </>
    </ChartBlock>
  );
};
