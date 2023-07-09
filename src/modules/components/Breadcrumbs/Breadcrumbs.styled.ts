import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 16px;
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: 5px;
  display: flex;
  align-items: center;
  column-gap: 20px;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  p {
    position: relative;

    :last-child {
      font-size: 24px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    ::after {
      position: absolute;
      content: '/';
      top: 50%;
      right: -15px;
      transform: translateY(-50%);
      font-size: 24px;
    }

    :last-child::after {
      display: none;
    }
  }
`;
