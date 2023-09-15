import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const ChartBlock = styled.div`
  padding: 8px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

export const ChartTitle = styled.h2`
  padding-left: 8px;
  padding-bottom: 9px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ChartWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 240px;
  padding: 8px;
  border-radius: 5px;
  background: #171730;
`;

export const PieChartWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 320px 1fr;
  padding: 8px;
  border-radius: 5px;
  background: #171730;
`;

export const ChartControl = styled.div``;

export const TableBlock = styled.div``;
