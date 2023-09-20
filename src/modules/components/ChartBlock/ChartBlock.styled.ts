import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 8px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

export const Title = styled.h2`
  padding-left: 8px;
  padding-bottom: 9px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
