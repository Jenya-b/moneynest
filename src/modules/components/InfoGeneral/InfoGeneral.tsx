import { Grid } from '@mui/material';
import { Cost, Price, Title } from './InfoGeneral.styled';

const data = {
  value: {
    title: 'Value',
    price: {
      value: '$00,000.000.00K',
      percent: '00.0%',
    },
    cost: {
      value: '$000,000.00K',
    },
  },
  pl: {
    title: 'P&L',
    price: {
      value: '$00,000.000.00K',
      percent: '00.0%',
    },
    cost: {
      value: '$000,000.00K',
      percent: '00.0%',
    },
  },
  prr: {
    title: 'PRR',
    price: {
      value: '15,5%',
      percent: '00.0%',
    },
  },
  var: {
    title: 'VaR',
    price: {
      value: '$00,000.000.00K',
      percent: '00.0%',
    },
  },
};

export const InfoGeneral = () => {
  return (
    <Grid sx={{ marginTop: '24px', padding: '0 16px' }} container spacing={3}>
      <Grid item xs={3}>
        <Title>{data.value.title}</Title>
        <Price>
          <p>{data.value.price.value}</p>
          <p>{data.value.price.percent}</p>
        </Price>
        <Cost>{data.value.cost.value}</Cost>
      </Grid>
      <Grid item xs={3}>
        <Title>{data.pl.title}</Title>
        <Price>
          <p>{data.pl.price.value}</p>
          <p>{data.pl.price.percent}</p>
        </Price>
        <Cost>
          <p>{data.pl.cost.value}</p>
          <p>{data.pl.cost.percent}</p>
        </Cost>
      </Grid>
      <Grid item xs={3}>
        <Title>{data.prr.title}</Title>
        <Price>
          <p>{data.prr.price.value}</p>
          <p>{data.prr.price.percent}</p>
        </Price>
      </Grid>
      <Grid item xs={3}>
        <Title>{data.var.title}</Title>
        <Price>
          <p>{data.var.price.value}</p>
          <p>{data.var.price.percent}</p>
        </Price>
      </Grid>
    </Grid>
  );
};
