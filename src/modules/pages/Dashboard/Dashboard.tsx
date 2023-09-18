import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { Main } from 'styles/components';
import { ChartControl, ChartWrap, Content, PieChartWrap } from './Dashboard.styled';
import {
  perfomanceParams,
  perfomanceData,
  assetsStructureData,
  headAssetsStructure,
  AssetsStructureData,
  headGeography,
  geographyData,
  industriesData,
  headIndustries,
  cashFlowAnalysisData,
} from 'constants/dashbord';
import { MultipleSelect } from 'modules/components/Form/MultipleSelect/MultipleSelect';
import { Table } from './Table/Table';
import { TRow } from './Table/Table.styled';
import { PieChart } from 'modules/components/Charts/Pie/Pie';
import { Chart as LineChart, LineChartProps } from 'modules/components/Charts/Line/Line';
import { Chart as BarChart, BarChartProps } from 'modules/components/Charts/Bar/Bar';
import { ChartBlock } from './ChartBlock/ChartBlock';

const chartCategoricalAxisProps: LineChartProps<(typeof perfomanceData)[number]>['axis'] = {
  x: {
    dataKey: 'name',
    type: 'category',
    allowDataOverflow: true,
    interval: 0,
  },
};

const chartBarAxisProps: BarChartProps<(typeof cashFlowAnalysisData)[number]>['axis'] = {
  x: {
    dataKey: 'name',
    type: 'category',
    allowDataOverflow: true,
    interval: 0,
  },
};

export const DashboardPage = () => {
  const location = useLocation();
  const [perfomanceChecked, setPerfomanceChecked] = useState<string[]>([]);
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
        <ChartBlock title="Performance">
          <>
            <ChartWrap>
              <LineChart
                data={perfomanceData}
                lines={
                  !perfomanceChecked.length
                    ? perfomanceParams
                    : perfomanceParams.filter((item) => perfomanceChecked.includes(item.dataKey))
                }
                axis={chartCategoricalAxisProps}
              />
              <ChartControl>
                <MultipleSelect
                  data={perfomanceParams.map(({ dataKey }) => dataKey)}
                  isMultiple={true}
                  placeholder="Param"
                  label="Param"
                  selectValue={perfomanceChecked}
                  setSelectValue={setPerfomanceChecked}
                />
              </ChartControl>
            </ChartWrap>
          </>
        </ChartBlock>
        <ChartBlock title="Cash Flow Analysis">
          <>
            <ChartWrap>
              <BarChart data={cashFlowAnalysisData} axis={chartBarAxisProps} />
              <ChartControl></ChartControl>
            </ChartWrap>
          </>
        </ChartBlock>
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
