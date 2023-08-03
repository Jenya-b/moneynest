import { useLocation } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';

import { Main } from 'styles/components';
import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import {
  SearchBlock,
  Container,
  TitleWrap,
  ButtonMore,
  InputWrap,
  Info,
  Label,
  InputSearch,
  ButtonSearch,
  TooltipWrap,
  FilterResourceType,
  TypeItem,
} from './IsinSearch.styled';
import Tooltip from 'modules/components/Tooltip/Tooltip';
import { resourceType } from 'constants/filters';
import { Table } from 'modules/components/Table/Table';
import { Pagination } from 'modules/components/Pagination/Pagination';
import { useGetDataTableQuery } from 'modules/services';
import { data } from 'modules/components/Table/data';

export const IsinSearchPage = () => {
  const [page, setPage] = useState(1);
  const [type, setType] = useState('Shares');
  const location = useLocation();

  // const { data, isLoading, isFetching, refetch } = useGetDataTableQuery({ search: '' });

  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Main style={{ overflow: 'hidden' }}>
      <Breadcrumbs pathName={location.pathname} />
      <Container>
        <SearchBlock>
          <TitleWrap>
            <p>ISIN/FIGI Info</p>
            <TooltipWrap>
              <Tooltip
                text="ISIN stands for International Securities Identification Number. It is a unique 12-character alphanumeric code that serves as a universal identifier for securities such as stocks, bonds, and other financial instruments. The ISIN provides a standardized way to identify and track securities globally.
FIGI stands for Financial Instrument Global Identifier. It is a unique identifier assigned to financial instruments, similar to ISIN. 
Both ISIN and FIGI are widely used in the financial industry for trading, settlement, and reporting purposes. They help ensure accurate identification and tracking of securities across different systems and platforms."
              />
            </TooltipWrap>

            <ButtonMore />
          </TitleWrap>
          <InputWrap>
            <Info>
              Enter the name of the company, financial instrument, or security in the search field
              provided.
            </Info>
            <Label>
              <InputSearch />
              <ButtonSearch>Submit</ButtonSearch>
            </Label>
          </InputWrap>
        </SearchBlock>
        <FilterResourceType>
          {resourceType.map((item) => (
            <TypeItem key={item} active={item === type} onClick={() => setType(item)}>
              {item}
            </TypeItem>
          ))}
        </FilterResourceType>
        <div style={{ gridColumn: '2/3' }}>
          <Table data={data ?? []} />
          <Pagination count={10} page={page} onChange={handleChangePage} />
        </div>
      </Container>
    </Main>
  );
};

export default IsinSearchPage;
