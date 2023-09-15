import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { Main } from 'styles/components';
import {
  ChartBlock,
  ChartControl,
  ChartTitle,
  ChartWrap,
  Content,
  PieChartWrap,
  TableBlock,
} from './Dashboard.styled';
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
import { PieInfo } from 'modules/components/PieInfo/PieInfo';
import { Table } from './Table/Table';
import { TRow } from './Table/Table.styled';

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
        <ChartBlock>
          <ChartTitle>Assets Structure</ChartTitle>
          <PieChartWrap>
            <div style={{ position: 'relative' }}>
              <PieChart width={320} height={300}>
                <Pie data={assetsStructureData} innerRadius={90} dataKey="value">
                  {assetsStructureData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <PieInfo />
            </div>
            <TableBlock>
              <Table
                data={assetsStructureData}
                renderItem={renderAssetsStructure}
                headData={headAssetsStructure}
              />
            </TableBlock>
          </PieChartWrap>
        </ChartBlock>
        <ChartBlock>
          <ChartTitle>Performance </ChartTitle>
          <ChartWrap>
            <ResponsiveContainer debounce={1} width="99%" height={384}>
              <LineChart
                data={perfomanceData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {perfomanceChecked.length
                  ? perfomanceParams
                      .filter(({ name }) => perfomanceChecked.includes(name))
                      .map(({ color, name }) => (
                        <Line key={name} type="monotone" dataKey={name} stroke={color} />
                      ))
                  : perfomanceParams.map(({ color, name }) => (
                      <Line key={name} type="monotone" dataKey={name} stroke={color} />
                    ))}
              </LineChart>
            </ResponsiveContainer>
            <ChartControl>
              <MultipleSelect
                data={perfomanceParams.map(({ name }) => name)}
                isMultiple={true}
                placeholder="Param"
                label="Param"
                selectValue={perfomanceChecked}
                setSelectValue={setPerfomanceChecked}
              />
            </ChartControl>
          </ChartWrap>
        </ChartBlock>
        <ChartBlock>
          <ChartTitle>Cash Flow Analysis </ChartTitle>
          <ChartWrap>
            <ResponsiveContainer debounce={1} width="99%" height={384}>
              <BarChart
                data={cashFlowAnalysisData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="cash">
                  {cashFlowAnalysisData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cash >= 0 ? '#448FFF' : '#F2522F'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <ChartControl></ChartControl>
          </ChartWrap>
        </ChartBlock>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '8px' }}>
          <ChartBlock>
            <ChartTitle>Geography</ChartTitle>
            <PieChartWrap>
              <div style={{ position: 'relative' }}>
                <PieChart width={320} height={300}>
                  <Pie data={geographyData} innerRadius={90} dataKey="value">
                    {geographyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                <PieInfo />
              </div>
              <TableBlock>
                <Table data={geographyData} renderItem={renderGeography} headData={headGeography} />
              </TableBlock>
            </PieChartWrap>
          </ChartBlock>
          <ChartBlock>
            <ChartTitle>Industries</ChartTitle>
            <PieChartWrap>
              <div style={{ position: 'relative' }}>
                <PieChart width={320} height={300}>
                  <Pie data={industriesData} innerRadius={90} dataKey="value">
                    {industriesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                <PieInfo />
              </div>
              <TableBlock>
                <Table
                  data={industriesData}
                  renderItem={renderIndustries}
                  headData={headIndustries}
                />
              </TableBlock>
            </PieChartWrap>
          </ChartBlock>
        </div>
      </Content>
    </Main>
  );
};

export default DashboardPage;
