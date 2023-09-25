import { HEAD_DATA, HeadEnum } from 'constants/tables';
import { THead, Wrapper } from './Table.styled';

interface TableProps<T> {
  data: T[];
  headData: HeadEnum[];
  renderItem: (item: T, index?: number) => JSX.Element;
}

export const Table = <T,>({ headData, data, renderItem }: TableProps<T>) => {
  return (
    <Wrapper>
      <THead columns={headData.length}>
        {headData.map((item) => (
          <p key={item}>{HEAD_DATA[item]}</p>
        ))}
      </THead>
      {data.map((item, index) => renderItem(item, index))}
    </Wrapper>
  );
};
