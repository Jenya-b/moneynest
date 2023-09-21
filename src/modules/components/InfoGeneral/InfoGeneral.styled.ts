import { topIcon } from 'constants/images';
import styled from 'styled-components';
import { colors } from 'styles/colors';

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-bottom: 1px dashed #a3a3a3;
  padding-bottom: 7px;
`;

export const Price = styled.div`
  padding-top: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  column-gap: 5px;

  p {
    :nth-child(1) {
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    :nth-child(2) {
      position: relative;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      padding-left: 20px;
      color: ${colors.green100};

      ::before {
        position: absolute;
        content: '';
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 8px;
        background: url(${topIcon}) no-repeat;
        background-position: center;
        background-size: contain;
      }
    }
  }
`;

export const Cost = styled.div`
  padding-top: 4px;
  position: relative;
  padding-left: 50px;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  ::before {
    position: absolute;
    content: 'Cost';
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 46px;
    height: 19px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.textSecondary};
    border: 1px solid ${({ theme }) => theme.colors.textSecondary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    :nth-child(1) {
      color: ${colors.green100};
    }

    :nth-child(2) {
      position: relative;
      font-weight: 400;
      padding-left: 20px;
      color: ${colors.green100};

      ::before {
        position: absolute;
        content: '';
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 8px;
        background: url(${topIcon}) no-repeat;
        background-position: center;
        background-size: contain;
      }
    }
  }
`;
