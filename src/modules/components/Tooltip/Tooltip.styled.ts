import styled from 'styled-components';

export const Popap = styled.p`
  padding: 36px 27px;
  width: 474px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.bgModal};
`;
