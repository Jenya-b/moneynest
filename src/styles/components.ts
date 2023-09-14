import styled from 'styled-components';

export const Main = styled.main`
  padding: 0 8px 64px 8px;
`;

export const Label = styled.label`
  display: block;
  position: relative;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Input = styled.input`
  margin-top: 4px;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
  height: 24px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #7171c0;
  background: ${({ theme }) => theme.colors.bgSecondary};
`;

export const Select = styled.select`
  margin-top: 4px;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
  height: 24px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #7171c0;
  background: ${({ theme }) => theme.colors.bgSecondary};
`;

export const Button = styled.button`
  padding: 8px 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 5px;
`;
