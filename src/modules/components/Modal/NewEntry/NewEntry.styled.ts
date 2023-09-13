import styled from 'styled-components';
import { TabsEnum } from './NewEntry';

interface TabProps {
  tabNum: TabsEnum;
}

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 624px;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: 10px;
`;

export const Tabs = styled.div`
  position: relative;
  height: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Tab = styled.div<TabProps>`
  position: absolute;
  top: 0;
  width: calc(122px + 14px);
  height: 100%;
  text-align: center;
  clip-path: polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%);

  :nth-child(1) {
    background: ${({ tabNum }) => (tabNum == 0 ? '#448FFF' : 'rgba(68, 143, 255, 0.4)')};
    left: 0;
    clip-path: polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%);
  }
  :nth-child(2) {
    background: ${({ tabNum }) => (tabNum == 1 ? '#4ED251' : 'rgba(78, 210, 81, 0.4)')};
    left: calc(122px * 1);
  }
  :nth-child(3) {
    background: ${({ tabNum }) => (tabNum == 2 ? '#FB247C' : 'rgba(251, 36, 124, 0.4)')};
    left: calc(122px * 2);
  }
  :nth-child(4) {
    background: ${({ tabNum }) => (tabNum == 3 ? '#F4AB3D' : 'rgba(244, 171, 61, 0.4)')};
    left: calc(122px * 3);
  }
  :nth-child(5) {
    background: ${({ tabNum }) => (tabNum == 4 ? '#252197' : 'rgba(37, 33, 151, 0.4)')};
    left: calc(122px * 4);
  }
  &.active {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const TabLine = styled.div<TabProps>`
  height: 4px;
  width: 100%;

  background: ${({ tabNum }) =>
    tabNum == 0
      ? '#448FFF'
      : tabNum == 1
      ? '#4ED251'
      : tabNum == 2
      ? '#FB247C'
      : tabNum == 3
      ? '#F4AB3D'
      : '#252197'};
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.bgTertiary};
  color: ${({ theme }) => theme.colors.textPrimary};
`;
