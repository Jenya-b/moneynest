import { sortIcon } from 'constants/images';
import styled from 'styled-components';

interface ICountColumns {
  count: number;
}

export const StyledTable = styled.table<ICountColumns>`
  margin-top: 32px;
  display: grid;
  min-width: 100%;
  grid-template-columns: 50px repeat(${({ count }) => count}, minmax(70px, 1fr));

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: #292949;
  }

  ::-webkit-scrollbar-corner {
    background-color: #808080;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #808080;
  }

  thead,
  tbody,
  tr {
    display: contents;
  }

  th,
  td {
    padding: 15px 5px 15px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
  }

  th {
    margin-left: 2px;
    z-index: 100;
    position: sticky;
    background: ${({ theme }) => theme.colors.bgSecondary};
    border-bottom: 1px dashed #a3a3a3;
    top: 0;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: ${({ theme }) => theme.cursor};
  }

  td {
    border-bottom: 1px solid #292949;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      :last-child {
        margin-top: 3px;
        color: #a3a3a3;
      }
    }
  }
`;

export const Img = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #fff;
`;

interface SortElemProps {
  active: boolean;
}

export const SortElem = styled.span<SortElemProps>`
  position: relative;
  display: inline-block;

  ::after {
    position: absolute;
    top: 50%;
    right: -20px;
    content: '';
    width: 13px;
    height: 6px;
    background: url(${sortIcon}) no-repeat;
    background-position: center;

    transform: ${({ active }) =>
      active ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0deg)'};
  }
`;
