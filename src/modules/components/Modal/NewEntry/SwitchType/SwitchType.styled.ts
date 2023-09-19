import styled from 'styled-components';
import { theme } from 'styles/theme';

interface SwitchProps {
  active: boolean;
}

export const Switch = styled.button<SwitchProps>`
  padding: 0px 8px;
  border-radius: 10px;
  border: 1px solid #7171c0;
  background: ${({ active }) => (active ? '#7171c0' : 'none')};
  text-transform: capitalize;
  color: ${({ active }) => (active ? `${theme.colors.textPrimary}` : 'rgba(255, 255, 255, 0.4)')};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
