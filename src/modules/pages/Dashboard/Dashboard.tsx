import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { Main } from 'styles/components';
import { Content, PieChartWrap } from './Dashboard.styled';
import {
  assetsStructureData,
  headAssetsStructure,
  AssetsStructureData,
  headGeography,
  geographyData,
  industriesData,
  headIndustries,
} from 'constants/dashbord';
import { Table } from './Table/Table';
import { TRow } from './Table/Table.styled';
import { PieChart } from 'modules/components/Charts/Pie/Pie';
import { ChartBlock } from './ChartBlock/ChartBlock';
import { PerfomanceBlock } from './PerfomanceBlock/PerfomanceBlock';
import { CashFlowBlock } from './CashFlowBlock/CashFlowBlock';

export const DashboardPage = () => {
  const location = useLocation();
  const assetsResult = useMemo(
    () =>
      assetsStructureData.reduce(
        (previousValue, currentValue) => previousValue + currentValue.value,
        0
      ),
    []
  );
  const geographyResult = useMemo(
    () =>
      geographyData.reduce((previousValue, currentValue) => previousValue + currentValue.value, 0),
    []
  );

  const industriesResult = useMemo(
    () =>
      industriesData.reduce((previousValue, currentValue) => previousValue + currentValue.value, 0),
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
    <Main>
      <Breadcrumbs pathName={location.pathname} />
      <Content>
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
        <PerfomanceBlock />
        <CashFlowBlock />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '8px' }}>
          <ChartBlock title="Geography">
            <>
              <PieChartWrap>
                <PieChart data={geographyData} />
                <Table data={geographyData} renderItem={renderGeography} headData={headGeography} />
              </PieChartWrap>
            </>
          </ChartBlock>
          <ChartBlock title="Industries">
            <>
              <PieChartWrap>
                <PieChart data={industriesData} />
                <Table
                  data={industriesData}
                  renderItem={renderIndustries}
                  headData={headIndustries}
                />
              </PieChartWrap>
            </>
          </ChartBlock>
        </div>
      </Content>
    </Main>
  );
};

export default DashboardPage;
