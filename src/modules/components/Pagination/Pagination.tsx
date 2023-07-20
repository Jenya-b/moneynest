import { ChangeEvent } from 'react';

import { StyledPagination } from './Pagination.styled';

interface PaginationProps {
  count: number;
  page: number;
  onChange: (event: ChangeEvent<unknown>, value: number) => void;
}

export const Pagination = ({ count, page, onChange }: PaginationProps) => (
  <StyledPagination
    count={count}
    variant="outlined"
    shape="rounded"
    page={page}
    onChange={onChange}
    showFirstButton
    showLastButton
  />
);
