import { moreBtnIcon, pointerIcon } from 'constants/images';
import styled from 'styled-components';
import { colors } from 'styles/colors';

export const Container = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template: repeat(3, auto) / 1fr minmax(300px, 894px) 1fr;
`;

export const SearchBlock = styled.div`
  height: 168px;
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

  p {
    font-family: 'Poppins', sans-serif;
  }
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
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ButtonSearch = styled.button`
  height: 100%;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.bgBtn};
  font-family: 'Poppins', sans-serif;
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

export const FilterResourceType = styled.div`
  grid-column: 2/3;
  margin-top: 8px;
  padding: 10px 16px;
  height: 48px;
  display: flex;
  align-items: center;
  column-gap: 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

interface TypeItemProps {
  active: boolean;
}

export const TypeItem = styled.p<TypeItemProps>`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: 'Poppins', sans-serif;
  color: ${({ active }) => (active ? `${colors.white}` : `${colors.grey200}`)};
  cursor: ${({ theme }) => theme.cursor};
`;
