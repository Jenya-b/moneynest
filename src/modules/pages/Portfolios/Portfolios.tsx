import { useLocation } from 'react-router-dom';

import { Main } from 'styles/components';
import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { ChartBlock } from 'modules/components/ChartBlock/ChartBlock';
import { TableWrap } from './Portfolios.styled';
import { MapTable } from './MapTable/MapTable';
import { PositionsTable } from './PositionsTable/PositionsTable';
import { useEffect } from 'react';
import { HeadEnum } from 'constants/tables';
import { portfoliosHoldingheadData, portfoliosheadData } from 'constants/portfolios';
import { useAppDispatch } from 'modules/store/store';
import {
  setCheckedMapHeadData,
  setCheckedPositionsHeadData,
} from 'modules/store/reducers/portfolioSlice';

export const PortfoliosPage = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkGroupMap: { [key in HeadEnum]?: boolean } = {};
    portfoliosheadData.map((item) => (checkGroupMap[item] = true));
    dispatch(setCheckedMapHeadData(checkGroupMap));

    const checkGroupPositions: { [key in HeadEnum]?: boolean } = {};
    portfoliosHoldingheadData.map((item) => (checkGroupPositions[item] = true));
    dispatch(setCheckedPositionsHeadData(checkGroupPositions));
  }, []);

  return (
    <Main style={{ display: 'flex', flexDirection: 'column', rowGap: '8px', overflow: 'auto' }}>
      <Breadcrumbs pathName={location.pathname} />
      <ChartBlock title="Portfolio map">
        <>
          <MapTable />
        </>
      </ChartBlock>
      <ChartBlock title="Positions/Holdings">
        <>
          <TableWrap>
            <PositionsTable />
          </TableWrap>
        </>
      </ChartBlock>
    </Main>
  );
};

export default PortfoliosPage;
