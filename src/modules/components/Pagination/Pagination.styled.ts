import { Pagination } from '@mui/material';
import styled from 'styled-components';

export const StyledPagination = styled(Pagination)`
  margin-top: 60px;
  display: flex;
  justify-content: center;

  .MuiPagination-ul {
    column-gap: 12px;
  }

  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: #292949;
    color: white;
  }
  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background: #448fff;
  }
  .css-1v2lvtn-MuiPaginationItem-root {
    color: white;
  }
`;
