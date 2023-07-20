import { useState, MouseEvent } from 'react';
import { THead } from './THead/THead';
import { StyledTable } from './Table.styled';
import { TBody } from './TBody/TBody';
import { IResponse } from 'modules/services/api/isin';

interface TableProps {
  data: IResponse[];
}

export const Table = ({ data }: TableProps) => {
  const [sortElem, setSortElem] = useState('');
  const [headData, setHeadData] = useState<string[]>([
    'Name/Country',
    'ISIN/FIGI',
    'Currency',
    'Symbol',
  ]);

  const handleSort = (event: MouseEvent<HTMLElement>) => {
    const { id } = event.currentTarget;

    console.log(id);

    if (!id) return;

    if (id === sortElem) setSortElem('');
    else setSortElem(id);
  };

  return (
    <StyledTable count={headData.length}>
      <THead data={headData} handleClick={handleSort} sortElem={sortElem} />
      <TBody data={data} />
    </StyledTable>
  );
};
