import { THead, Wrapper } from './Table.styled';

interface TableProps<T> {
  data: T[];
  headData: string[];
  renderItem: (item: T) => JSX.Element;
}

export const Table = <T,>({ headData, data, renderItem }: TableProps<T>) => {
  return (
    <Wrapper>
      <THead columns={headData.length}>
        {headData.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </THead>
      {data.map((item) => renderItem(item))}
    </Wrapper>
  );
};
