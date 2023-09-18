import {
  Wrapper,
  CostBlock,
  CostInfo,
  CostTitle,
  ValueBlock,
  ValueInfo,
  ValueTitle,
} from './PieInfo.styled';

export const PieInfo = () => (
  <Wrapper>
    <ValueBlock>
      <ValueTitle>
        <p>Value</p>
      </ValueTitle>
      <ValueInfo>
        <p>$00,000.00K</p>
        <p>00.0%</p>
      </ValueInfo>
    </ValueBlock>
    <CostBlock>
      <CostTitle>
        <p>Cost</p>
      </CostTitle>
      <CostInfo>$00,000.00K</CostInfo>
    </CostBlock>
  </Wrapper>
);
