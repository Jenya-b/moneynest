import { costBottomIcon } from 'constants/images';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ValueBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ValueTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  p {
    padding: 1px 8px;
    border-radius: 10px;
    border: 1px solid #7171c0;
  }
`;

export const ValueInfo = styled.div`
  margin-top: 6px;
  display: flex;
  column-gap: 4px;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  font-style: normal;

  p {
    :nth-child(2) {
      position: relative;
      padding-left: 20px;
      font-weight: 300;
      color: #f2522f;

      ::after {
        position: absolute;
        content: '';
        left: 1px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 8px;
        background: url(${costBottomIcon}) no-repeat;
        background-position: center;
        background-size: contain;
      }
    }
  }
`;

export const CostBlock = styled.div`
  margin-top: 16px;
  opacity: 0.6;
`;

export const CostTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  p {
    padding: 1px 8px;
    border-radius: 10px;
    border: 1px solid #fff;
  }
`;
export const CostInfo = styled.div`
  margin-top: 6px;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
