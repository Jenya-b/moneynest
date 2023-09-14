import { useState } from 'react';
import { Title } from '../Modal.styled';
import { Tabs, Tab, TabLine, Wrapper, Content } from './NewEntry.styled';
import { Equities } from './Equities/Equities';

export enum TabsEnum {
  Equities,
  Cash,
  Fx,
  RealAssets,
  CustomAssets,
}

const tabsInfo = {
  [TabsEnum.Equities]: 'Equities&Funds',
  [TabsEnum.Cash]: 'Cash&Debt',
  [TabsEnum.Fx]: 'FX&Derivatives',
  [TabsEnum.RealAssets]: 'Real Assets',
  [TabsEnum.CustomAssets]: 'Custom Assets',
};

export const NewEntry = () => {
  const [activeTab, setActiveTab] = useState<TabsEnum>(0);

  const handleActiveTab = (item: TabsEnum) => setActiveTab(Number(item));

  const renderItem = () => {
    switch (activeTab) {
      case TabsEnum.Equities:
        return <Equities />;
      case TabsEnum.Cash:
        return <div>Cash</div>;
      case TabsEnum.Fx:
        return <div>Fx</div>;
      case TabsEnum.RealAssets:
        return <div>RealAssets</div>;
      case TabsEnum.CustomAssets:
        return <div>CustomAssets</div>;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <Title>New entry</Title>
      <Tabs>
        {(Object.keys(tabsInfo) as unknown[] as TabsEnum[]).map((item) => (
          <Tab
            tabNum={activeTab}
            key={item}
            onClick={() => handleActiveTab(item)}
            className={activeTab == item ? 'active' : ''}
          >
            {tabsInfo[item]}
          </Tab>
        ))}
      </Tabs>
      <TabLine tabNum={activeTab} />
      <Content>{renderItem()}</Content>
    </Wrapper>
  );
};
