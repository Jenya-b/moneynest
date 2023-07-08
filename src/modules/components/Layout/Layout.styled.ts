import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr minmax(min-content, 1360px) 1fr;
  background: ${({ theme }) => theme.colors.bgPrimary};
`;

export const Wrapper = styled.div`
  grid-column: 2/3;
  background: ${({ theme }) => theme.colors.bgSecondary};
  display: grid;
  grid-template: 64px 1fr 162px / 1fr;
`;
