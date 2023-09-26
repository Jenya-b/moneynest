interface THeadProps<K> {
  data: K[];
  renderItem: (item: K, index: number) => JSX.Element;
}

export const THead = <K,>({ data, renderItem }: THeadProps<K>) => {
  return (
    <thead>
      <tr>{data.map((item, i) => renderItem(item, i))}</tr>
    </thead>
  );
};
