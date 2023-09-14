import { Box, Grid, Stack, Typography } from '@mui/material';

import { Input } from 'modules/components/Form/Input/Input';
import { ButtonPrimary, ButtonSecondary, SwitchPrimary, SwitchSecondary } from '../NewEntry.styled';
import { FormEvent, useState } from 'react';
import { inputDateIcon } from 'constants/images';
import { InputTextPosition, InputType } from 'modules/components/Form/model';
import { MultipleSelect } from 'modules/components/Form/MultipleSelect/MultipleSelect';

export const Cash = () => {
  const [executionDate, setExecutionDate] = useState('');
  const [valueDate, setValueDate] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState<string[]>([]);
  const [feeCurrency, setFeeCurrency] = useState<string[]>([]);
  const [feeValue, setFeeValue] = useState('');
  const [portfolio, setPortfolio] = useState<string[]>([]);
  const [views, setViews] = useState<string[]>([]);
  const [custodian, setCustodian] = useState<string[]>([]);
  const [accountHolder, setAccountHolder] = useState<string[]>([]);
  const [accountNumber, setAccountNumber] = useState<string[]>([]);

  const handleChangeExecutionDate = (e: FormEvent<HTMLInputElement>) =>
    setExecutionDate(e.currentTarget.value);

  const handleClearExecutionDate = () => setExecutionDate('');

  const handleChangeValueDate = (e: FormEvent<HTMLInputElement>) =>
    setValueDate(e.currentTarget.value);

  const handleClearValueDate = () => setValueDate('');

  const handleChangeAmount = (e: FormEvent<HTMLInputElement>) => setAmount(e.currentTarget.value);

  const handleClearAmount = () => setAmount('');

  const handleChangeFeeValue = (e: FormEvent<HTMLInputElement>) =>
    setFeeValue(e.currentTarget.value);

  const handleClearFeeValue = () => setFeeValue('');

  return (
    <>
      <Box sx={{ height: '50px', display: 'flex', alignItems: 'center', columnGap: '32px' }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Cash</Typography>
          <SwitchPrimary defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.40)' }}>Debt</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Transaction</Typography>
          <SwitchPrimary defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.40)' }}>Position</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography sx={{ color: '#4ED251' }}>Deposit</Typography>
          <SwitchSecondary defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          <Typography sx={{ color: 'rgba(242, 82, 47, 0.6)' }}>Withdraw </Typography>
        </Stack>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Input
            value={executionDate}
            handleChange={handleChangeExecutionDate}
            handleClearValue={handleClearExecutionDate}
            label="Execution Date"
            inputIcon={inputDateIcon}
            type={InputType.Date}
            valuePosition={InputTextPosition.Center}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            value={valueDate}
            handleChange={handleChangeValueDate}
            handleClearValue={handleClearValueDate}
            label="Value Date"
            inputIcon={inputDateIcon}
            type={InputType.Date}
            valuePosition={InputTextPosition.Center}
          />
        </Grid>
        <Grid item xs={6}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Price currency"
            placeholder="Currency"
            selectValue={currency}
            setSelectValue={setCurrency}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            value={amount}
            handleChange={handleChangeAmount}
            handleClearValue={handleClearAmount}
            label="Amount"
            placeholder="Price"
            valuePosition={InputTextPosition.Left}
          />
        </Grid>
        <Grid item xs={6}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Fee currency"
            placeholder="Currency"
            selectValue={feeCurrency}
            setSelectValue={setFeeCurrency}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            value={feeValue}
            handleChange={handleChangeFeeValue}
            handleClearValue={handleClearFeeValue}
            label="Fee"
            placeholder="Fee"
          />
        </Grid>
        <Grid item xs={6}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Portfolio"
            placeholder="Portfolio"
            selectValue={portfolio}
            setSelectValue={setPortfolio}
          />
        </Grid>
        <Grid item xs={6}>
          <MultipleSelect
            isMultiple={true}
            placeholder="Views"
            label="Views"
            data={['1', '2', '3']}
            selectValue={views}
            setSelectValue={setViews}
          />
        </Grid>
        <Grid item xs={6}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Custodian"
            placeholder="Custodian"
            selectValue={custodian}
            setSelectValue={setCustodian}
          />
        </Grid>
        <Grid item xs={6}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Account holder"
            placeholder="Account holder"
            selectValue={accountHolder}
            setSelectValue={setAccountHolder}
          />
        </Grid>
        <Grid item xs={6}>
          <MultipleSelect
            isMultiple={false}
            placeholder="Account number"
            label="Account number"
            data={['1', '2', '3']}
            selectValue={accountNumber}
            setSelectValue={setAccountNumber}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', columnGap: '10px', mt: 2 }}>
        <ButtonPrimary>Cancel</ButtonPrimary>
        <ButtonSecondary>Enter</ButtonSecondary>
      </Box>
    </>
  );
};
