import styled from 'styled-components';

interface TableProps {
  columns: number;
  value?: number;
  color?: string;
}

export const Wrapper = styled.div``;

export const THead = styled.div<TableProps>`
  height: 48px;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 1px dashed #a3a3a3;
`;

export const TRow = styled.div<TableProps>`
  position: relative;
  height: 48px;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  align-items: center;
  border-bottom: 1px solid #292949;

  ::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: ${({ value }) => value}%;
    height: 4px;
    background: ${({ color }) => color};
  }
`;
