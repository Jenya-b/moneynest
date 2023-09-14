import { FormEvent, useState } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

import { SwitchPrimary, SwitchSecondary } from '../NewEntry.styled';
import { InputWithIcon } from 'modules/components/Form/InputWithIcon/InputWithIcon';
import { inputDateIcon, inputIcon } from 'constants/images';
import { InputTextPosition, InputType } from 'modules/components/Form/model';
import { MultipleSelect } from 'modules/components/Form/MultipleSelect/MultipleSelect';

export const Equities = () => {
  const [name, setName] = useState('');
  const [executionDate, setExecutionDate] = useState('');
  const [valueDate, setValueDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [priceCurrency, setPriceCurrency] = useState<string[]>([]);
  const [feeCurrency, setFeeCurrency] = useState<string[]>([]);
  const [feeValue, setFeeValue] = useState('');
  const [isin, setIsin] = useState('');
  const [nominalCurrency, setNominalCurrency] = useState<string[]>([]);
  const [nominalValue, setNominalValue] = useState<string[]>([]);
  const [country, setCountry] = useState<string[]>([]);
  const [region, setRegion] = useState<string[]>([]);
  const [sector, setSector] = useState<string[]>([]);
  const [industry, setIndustry] = useState<string[]>([]);
  const [portfolio, setPortfolio] = useState<string[]>([]);
  const [custodian, setCustodian] = useState<string[]>([]);
  const [accountHolder, setAccountHolder] = useState<string[]>([]);
  const [accountNumber, setAccountNumber] = useState<string[]>([]);
  const [views, setViews] = useState<string[]>([]);

  const handleChangeName = (e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value);

  const handleClearNameValue = () => setName('');

  const handleChangeExecutionDate = (e: FormEvent<HTMLInputElement>) =>
    setExecutionDate(e.currentTarget.value);

  const handleClearExecutionDate = () => setExecutionDate('');

  const handleChangeValueDate = (e: FormEvent<HTMLInputElement>) =>
    setValueDate(e.currentTarget.value);

  const handleClearValueDate = () => setValueDate('');

  const handleChangeQuantity = (e: FormEvent<HTMLInputElement>) =>
    setQuantity(e.currentTarget.value);

  const handleClearQuantity = () => setQuantity('');

  const handleChangePrice = (e: FormEvent<HTMLInputElement>) => setPrice(e.currentTarget.value);

  const handleClearPrice = () => setPrice('');

  const handleChangeFeeValue = (e: FormEvent<HTMLInputElement>) =>
    setFeeValue(e.currentTarget.value);

  const handleClearFeeValue = () => setFeeValue('');

  const handleChangeIsin = (e: FormEvent<HTMLInputElement>) => setIsin(e.currentTarget.value);

  const handleClearIsin = () => setIsin('');

  return (
    <Box>
      <Box sx={{ height: '50px', display: 'flex', alignItems: 'center', columnGap: '32px' }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Transaction</Typography>
          <SwitchPrimary defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.40)' }}>Position</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography sx={{ color: '#4ED251' }}>Buy</Typography>
          <SwitchSecondary defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          <Typography sx={{ color: 'rgba(242, 82, 47, 0.6)' }}>Sell</Typography>
        </Stack>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputWithIcon
            value={name}
            handleChange={handleChangeName}
            handleClearValue={handleClearNameValue}
            label="Name/Symbol"
            placeholder="Select from recent entries or type a new one."
            inputIcon={inputIcon}
            valuePosition={InputTextPosition.Center}
          />
        </Grid>
        <Grid item xs={6}>
          <InputWithIcon
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
          <InputWithIcon
            value={valueDate}
            handleChange={handleChangeValueDate}
            handleClearValue={handleClearValueDate}
            label="Value Date"
            inputIcon={inputDateIcon}
            type={InputType.Date}
            valuePosition={InputTextPosition.Center}
          />
        </Grid>
        <Grid item xs={4}>
          <InputWithIcon
            value={quantity}
            handleChange={handleChangeQuantity}
            handleClearValue={handleClearQuantity}
            label="Quantity"
            placeholder="Quantity"
          />
        </Grid>
        <Grid item xs={4}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Price currency"
            placeholder="Currency"
            selectValue={priceCurrency}
            setSelectValue={setPriceCurrency}
          />
        </Grid>
        <Grid item xs={4}>
          <InputWithIcon
            value={price}
            handleChange={handleChangePrice}
            handleClearValue={handleClearPrice}
            label="Price"
            placeholder="Price"
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Fee currency"
            placeholder="Currency"
            selectValue={feeCurrency}
            setSelectValue={setFeeCurrency}
          />
        </Grid>
        <Grid item xs={4}>
          <InputWithIcon
            value={feeValue}
            handleChange={handleChangeFeeValue}
            handleClearValue={handleClearFeeValue}
            label="Fee"
            placeholder="Fee"
          />
        </Grid>
        <Grid item xs={4}>
          <InputWithIcon
            value={isin}
            handleChange={handleChangeIsin}
            handleClearValue={handleClearIsin}
            label="ISIN/FIGI"
            placeholder="ISIN/FIGI"
          />
        </Grid>
        <Grid item xs={4}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Nominal currency"
            placeholder="Currency"
            selectValue={nominalCurrency}
            setSelectValue={setNominalCurrency}
          />
        </Grid>
        <Grid item xs={4}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Nominal value"
            placeholder="Currency"
            selectValue={nominalValue}
            setSelectValue={setNominalValue}
          />
        </Grid>
        <Grid item xs={3}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Country"
            placeholder="Country"
            selectValue={country}
            setSelectValue={setCountry}
          />
        </Grid>
        <Grid item xs={3}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Region"
            placeholder="Region"
            selectValue={region}
            setSelectValue={setRegion}
          />
        </Grid>
        <Grid item xs={3}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Sector"
            placeholder="Sector"
            selectValue={sector}
            setSelectValue={setSector}
          />
        </Grid>
        <Grid item xs={3}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Industry"
            placeholder="Industry"
            selectValue={industry}
            setSelectValue={setIndustry}
          />
        </Grid>
        <Grid item xs={5}>
          <MultipleSelect
            isMultiple={false}
            data={['1', '2', '3']}
            label="Portfolio"
            placeholder="Portfolio"
            selectValue={portfolio}
            setSelectValue={setPortfolio}
          />
        </Grid>
        <Grid item xs={7}>
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
    </Box>
  );
};
