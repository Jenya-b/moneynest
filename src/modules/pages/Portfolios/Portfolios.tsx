import { Main } from 'styles/components';

import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { useLocation } from 'react-router-dom';
import { ChartBlock } from 'modules/components/ChartBlock/ChartBlock';
import { Table } from '../Dashboard/Table/Table';
import { IPortfolios, headData, portfolios } from 'constants/portfolios';
import { TRow } from '../Dashboard/Table/Table.styled';

export const PortfoliosPage = () => {
  const location = useLocation();

  const renderItem = (item: IPortfolios) => <TRow columns={headData.length}></TRow>;

  return (
    <Main style={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
      <Breadcrumbs pathName={location.pathname} />
      <ChartBlock title="Portfolio map">
        <Table data={portfolios} headData={headData} renderItem={renderItem}></Table>
      </ChartBlock>
    </Main>
  );
};

export default PortfoliosPage;
