import { useLocation } from 'react-router-dom';

import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { Main } from 'styles/components';
import { Content } from './Dashboard.styled';
import { PerfomanceBlock } from './PerfomanceBlock/PerfomanceBlock';
import { CashFlowBlock } from './CashFlowBlock/CashFlowBlock';
import { AssetsStructureBlock } from './AssetsStructureBlock/AssetsStructureBlock';
import { GeographyBlock } from './GeographyBlock/GeographyBlock';
import { IndustriesBlock } from './IndustriesBlock/IndustriesBlock';
import { FinancingBlock } from './FinancingBlock/FinancingBlock';
import { CurrencyPositioningBlock } from './CurrencyPositioningBlock/CurrencyPositioningBlock';

export const DashboardPage = () => {
  const location = useLocation();

  return (
    <Main>
      <Breadcrumbs pathName={location.pathname} />
      <Content>
        <AssetsStructureBlock />
        <PerfomanceBlock />
        <FinancingBlock />
        <CashFlowBlock />
        <CurrencyPositioningBlock />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '8px' }}>
          <GeographyBlock />
          <IndustriesBlock />
        </div>
      </Content>
    </Main>
  );
};

export default DashboardPage;
