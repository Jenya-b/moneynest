import { Img } from '../Table.styled';

interface TBodyProps {
  data: {
    name: string;
    country: string;
    isin: string;
    figi: string;
    currency: string;
    symbol: string;
  }[];
}

export const TBody = ({ data }: TBodyProps) => (
  <tbody>
    {data.map(({ name, country, isin, figi, currency, symbol }, i) => (
      <tr key={i}>
        <td>
          <Img />
        </td>
        <td>
          <span>{name}</span>
          <span>{country}</span>
        </td>
        <td>
          <span>{isin}</span>
          <span>{figi}</span>
        </td>
        <td>{currency}</td>
        <td>{symbol}</td>
      </tr>
    ))}
  </tbody>
);
