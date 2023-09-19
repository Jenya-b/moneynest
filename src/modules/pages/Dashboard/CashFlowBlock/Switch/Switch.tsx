import { ChangeEvent } from 'react';
import { Stack, Typography } from '@mui/material';

import { SwitchTertiary } from 'modules/components/Modal/NewEntry/NewEntry.styled';
import { SwitchNameEnum } from '../CashFlowBlock';

interface SwitchProps {
  name: SwitchNameEnum;
  state: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Switch = ({ name, state, handleChange }: SwitchProps) => {
  const switchNames = {
    [SwitchNameEnum.Aggregate]: 'Aggregate',
    [SwitchNameEnum.Average]: 'Average',
    [SwitchNameEnum.DueOnly]: 'Due only',
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
      <Typography
        sx={{
          color: state ? '#ffffff' : '#808080',
          cursor: 'pointer',
          textTransform: 'capitalize',
        }}
      >
        {switchNames[name]}
      </Typography>
      <SwitchTertiary
        checked={state}
        onChange={handleChange}
        name={name}
        inputProps={{ 'aria-label': 'ant design' }}
      />
    </Stack>
  );
};
