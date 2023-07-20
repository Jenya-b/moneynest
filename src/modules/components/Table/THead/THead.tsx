import { MouseEvent } from 'react';

import { SortElem } from '../Table.styled';

interface THeadProps {
  data: string[];
  handleClick: (event: MouseEvent<HTMLElement>) => void;
  sortElem: string;
}

export const THead = ({ data, handleClick, sortElem }: THeadProps) => {
  return (
    <thead>
      <tr>
        <th></th>
        {data.map((item) => (
          <th id={item} key={item} onClick={handleClick}>
            <SortElem active={sortElem === item}>{item}</SortElem>
          </th>
        ))}
      </tr>
    </thead>
  );
};
