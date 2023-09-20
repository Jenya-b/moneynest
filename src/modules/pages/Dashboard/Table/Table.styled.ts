import styled from 'styled-components';

interface TableProps {
  columns: number;
  value?: number;
  bgColor?: string;
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
  color: ${({ theme }) => theme.colors.textPrimary};

  ::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: ${({ value }) => value}%;
    height: 4px;
    background: ${({ bgColor }) => bgColor};
  }
`;

interface TitleTableProps {
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
}

export const TitleTable = styled.p<TitleTableProps>`
  width: max-content;
  padding: 4px 8px;
  background: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  border: ${({ borderColor }) => (borderColor ? `1px solid ${borderColor}` : null)};
  border-radius: 10px;
  box-sizing: border-box;
  font-weight: 700;
`;
