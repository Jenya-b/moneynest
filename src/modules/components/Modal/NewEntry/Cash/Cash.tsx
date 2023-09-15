import { Box, Grid, Stack, Typography } from '@mui/material';

import { Input } from 'modules/components/Form/Input/Input';
import { ButtonPrimary, ButtonSecondary, SwitchPrimary, SwitchSecondary } from '../NewEntry.styled';
import { ChangeEvent, FormEvent, useState } from 'react';
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
  const [switchState, setSwitchState] = useState({
    cash: true,
    transaction: true,
    deposit: true,
  });

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

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSwitchState({
      ...switchState,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Box sx={{ height: '50px', display: 'flex', alignItems: 'center', columnGap: '32px' }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography sx={{ color: '#ffffff', opacity: switchState.cash ? 0.6 : 1 }}>
            Cash
          </Typography>
          <SwitchPrimary
            checked={switchState.cash}
            onChange={handleSwitchChange}
            name="cash"
            inputProps={{ 'aria-label': 'ant design' }}
          />
          <Typography sx={{ color: '#ffffff', opacity: switchState.cash ? 1 : 0.6 }}>
            Debt
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography sx={{ color: '#ffffff', opacity: switchState.transaction ? 0.6 : 1 }}>
            Transaction
          </Typography>
          <SwitchPrimary
            checked={switchState.transaction}
            onChange={handleSwitchChange}
            name="transaction"
            inputProps={{ 'aria-label': 'ant design' }}
          />
          <Typography sx={{ color: '#ffffff', opacity: switchState.transaction ? 1 : 0.6 }}>
            Position
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography sx={{ color: '#4ED251', opacity: switchState.deposit ? 0.6 : 1 }}>
            Deposit
          </Typography>
          <SwitchSecondary
            checked={switchState.deposit}
            onChange={handleSwitchChange}
            name="deposit"
            inputProps={{ 'aria-label': 'ant design' }}
          />
          <Typography sx={{ color: '#F2522F', opacity: switchState.deposit ? 1 : 0.6 }}>
            Withdraw{' '}
          </Typography>
        </Stack>
      </Box>
      <Grid container spacing={2} mt={1}>
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
