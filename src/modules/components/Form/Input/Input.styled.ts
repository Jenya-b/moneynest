import { closeIcon } from 'constants/images';
import styled from 'styled-components';
import { Input } from 'styles/components';

export const StyledInput = styled(Input)`
  ::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 2px;
    z-index: 1000;
    background: none;
  }
`;

export const ClearBtn = styled.button`
  position: absolute;
  bottom: 10px;
  right: 7px;
  width: 14px;
  height: 14px;
  background: url(${closeIcon}) no-repeat;
  background-position: center;
  background-size: contain;
`;

export const IconInput = styled.img`
  position: absolute;
  bottom: 7px;
  left: 5px;
  width: 20px;
  height: 20px;
  background-size: contain;
  background-position: center;
`;
