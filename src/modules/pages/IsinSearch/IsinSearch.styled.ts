import { moreBtnIcon, pointerIcon } from 'constants/images';
import styled from 'styled-components';

export const SearchBlock = styled.div`
  margin-top: 8px;
  height: 168px;
  display: grid;
  grid-template-columns: 1fr minmax(300px, 894px) 1fr;
`;

export const Container = styled.div`
  grid-column: 2/3;
  border-radius: 5px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  display: grid;
  grid-template: 32px 1fr / 1fr;
  row-gap: 8px;
`;

export const TitleWrap = styled.div`
  padding: 0 8px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ButtonMore = styled.button`
  width: 32px;
  height: 32px;
  background: url(${moreBtnIcon}) no-repeat;
`;

export const InputWrap = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 5px;
  padding: 16px 40px;
`;

export const Info = styled.p`
  position: relative;
  padding-left: 17px;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  ::before {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 9px;
    height: 21px;
    background: url(${pointerIcon}) no-repeat;
  }
`;

export const Label = styled.label`
  margin-top: 18px;
  display: grid;
  grid-template: 40px / 1fr 120px;
  column-gap: 38px;
`;

export const InputSearch = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  background: ${({ theme }) => theme.colors.bgPrimary};
  padding-left: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ButtonSearch = styled.button`
  height: 100%;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.bgBtn};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TooltipWrap = styled.div`
  margin-right: auto;
  margin-left: 8px;
`;
