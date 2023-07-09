import styled from 'styled-components';

interface LinkProps {
  icon: string;
}

export const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px 16px;
`;

export const FooterNav = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  display: flex;
  justify-content: space-between;
`;

export const LinkList = styled.ul`
  display: flex;
  column-gap: 16px;
`;

export const Link = styled.a<LinkProps>`
  position: relative;
  padding-left: ${({ icon }) => (icon ? '28px' : '0')};

  ::before {
    position: absolute;
    content: '';
    width: 24px;
    height: 18px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: url(${({ icon }) => icon}) no-repeat;
    background-position: center;
  }
`;

export const InfoText = styled.p`
  font-size: 8.4px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
