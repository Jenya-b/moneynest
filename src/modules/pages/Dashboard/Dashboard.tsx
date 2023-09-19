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
import { AssetsStructureBlock } from './AssetsStructureBlock/AssetsStructureBlock';
import { GeographyBlock } from './GeographyBlock/GeographyBlock';
import { IndustriesBlock } from './IndustriesBlock/IndustriesBlock';

export const DashboardPage = () => {
  const location = useLocation();

  return (
    <Main>
      <Breadcrumbs pathName={location.pathname} />
      <Content>
        <AssetsStructureBlock />
        <PerfomanceBlock />
        <CashFlowBlock />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '8px' }}>
          <GeographyBlock />
          <IndustriesBlock />
        </div>
      </Content>
    </Main>
  );
};

export default DashboardPage;
