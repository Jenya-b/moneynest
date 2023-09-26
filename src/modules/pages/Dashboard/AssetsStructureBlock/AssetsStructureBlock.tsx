import { useMemo } from 'react';

import { PieChart } from 'modules/components/Charts/Pie/Pie';
import { ChartBlock } from '../../../components/ChartBlock/ChartBlock';
import { PieChartWrap } from '../Dashboard.styled';
import { AssetsStructureData, assetsStructureData, headAssetsStructure } from 'constants/dashbord';
import { Table } from '../Table/Table';
import { TRow, TitleTable } from '../Table/Table.styled';
import { colors } from 'styles/colors';
import styled from 'styled-components';
import { topIcon } from 'constants/images';

const TopText = styled.span`
  display: block;
  position: relative;
  padding-left: 20px;

  ::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    width: 16px;
    height: 8px;
    transform: translateY(-50%);
    background: url(${topIcon}) no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const AssetsStructureBlock = () => {
  const result = useMemo(
    () =>
      assetsStructureData.reduce(
        (previousValue, currentValue) => previousValue + currentValue.value,
        0
      ),
    []
  );

  const renderItem = ({ name, color, value }: AssetsStructureData) => (
    <TRow
      key={name}
      columns={headAssetsStructure.length}
      value={(100 / result) * value}
      bgColor={color?.bg}
    >
      <TitleTable bgColor={color?.bg} borderColor={color?.border} textColor={color?.text}>
        {name}
      </TitleTable>
      <p style={{ display: 'flex', flexDirection: 'column', rowGap: '3px' }}>
        <span>$00,000,000,000,000.00</span>
        <span style={{ opacity: 0.6 }}>$00,000,000,000,000.00</span>
      </p>
      <p>$00,000,000,000,000.00</p>
      <p
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '3px',
          color: colors.green100,
        }}
      >
        <TopText>$00,000,000,000,000.00</TopText>
        <TopText>00.0%</TopText>
      </p>
      <p>00.0%</p>
    </TRow>
  );

  return (
    <ChartBlock title="Assets Structure">
      <>
        <PieChartWrap>
          <PieChart data={assetsStructureData} />
          <Table
            data={assetsStructureData}
            renderItem={renderItem}
            headData={headAssetsStructure}
          />
        </PieChartWrap>
      </>
    </ChartBlock>
  );
};
