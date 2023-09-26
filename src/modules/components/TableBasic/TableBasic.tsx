import { TBody } from './TBody/TBody';
import { THead } from './THead/THead';
import { StyledTable } from './TableBasic.styled';

interface TableProps<T, K> {
  headData: T[];
  renderHeadItem: (item: T, index: number) => JSX.Element;
  bodyData: K[];
  renderBodyItem: (item: K, index: number) => JSX.Element;
}

export const TableBasic = <T, K>({
  bodyData,
  headData,
  renderBodyItem,
  renderHeadItem,
}: TableProps<T, K>) => {
  return (
    <StyledTable count={headData.length}>
      <THead data={headData} renderItem={renderHeadItem} />
      <TBody data={bodyData} renderItem={renderBodyItem} />
    </StyledTable>
  );
};
