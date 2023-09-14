import styled from 'styled-components';

import { closeIcon } from 'constants/images';

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 1.7rem;
  right: 1.7rem;
  width: 1.7rem;
  height: 1.7rem;
  background: url(${closeIcon}) no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 16px;
`;
