import { FormEvent, useState } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

import { SwitchPrimary, SwitchSecondary } from '../NewEntry.styled';
import { InputWithIcon } from 'modules/components/Form/InputWithIcon/InputWithIcon';
import { inputDateIcon, inputIcon } from 'constants/images';
import { InputTextPosition, InputType } from 'modules/components/Form/model';
import { Select } from 'modules/components/Form/Select/Select';
import { MultipleSelect } from 'modules/components/Form/MultipleSelect/MultipleSelect';

export const Equities = () => {
  const [name, setName] = useState('');
  const [executionDate, setExecutionDate] = useState('');
  const [valueDate, setValueDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [priceCurrency, setPriceCurrency] = useState('');
  const [feeCurrency, setFeeCurrency] = useState('');
  const [feeValue, setFeeValue] = useState('');
  const [isin, setIsin] = useState('');
  const [nominalCurrency, setNominalCurrency] = useState('');
  const [nominalValue, setNominalValue] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [sector, setSector] = useState('');
  const [industry, setIndustry] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [custodian, setCustodian] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
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

  const handleChangePriceCurrency = (e: FormEvent<HTMLSelectElement>) =>
    setPriceCurrency(e.currentTarget.value);

  const handleChangeFeeCurrencyy = (e: FormEvent<HTMLSelectElement>) =>
    setFeeCurrency(e.currentTarget.value);

  const handleChangeFeeValue = (e: FormEvent<HTMLInputElement>) =>
    setFeeValue(e.currentTarget.value);

  const handleClearFeeValue = () => setFeeValue('');

  const handleChangeIsin = (e: FormEvent<HTMLInputElement>) => setIsin(e.currentTarget.value);

  const handleClearIsin = () => setIsin('');

  const handleChangeNominalCurrency = (e: FormEvent<HTMLSelectElement>) =>
    setNominalCurrency(e.currentTarget.value);

  const handleChangeNominalValue = (e: FormEvent<HTMLSelectElement>) =>
    setNominalValue(e.currentTarget.value);

  const handleChangeCountry = (e: FormEvent<HTMLSelectElement>) =>
    setCountry(e.currentTarget.value);

  const handleChangeRegion = (e: FormEvent<HTMLSelectElement>) => setRegion(e.currentTarget.value);

  const handleChangeSector = (e: FormEvent<HTMLSelectElement>) => setSector(e.currentTarget.value);

  const handleChangeIndustry = (e: FormEvent<HTMLSelectElement>) =>
    setIndustry(e.currentTarget.value);

  const handleChangePortfolio = (e: FormEvent<HTMLSelectElement>) =>
    setPortfolio(e.currentTarget.value);

  const handleChangeCustodian = (e: FormEvent<HTMLSelectElement>) =>
    setCustodian(e.currentTarget.value);

  const handleChangeAccountHolder = (e: FormEvent<HTMLSelectElement>) =>
    setAccountHolder(e.currentTarget.value);

  const handleChangeAccountNumber = (e: FormEvent<HTMLSelectElement>) =>
    setAccountNumber(e.currentTarget.value);

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
          <Select
            label="Price currency"
            placeholder="Currency"
            value={priceCurrency}
            handleChange={handleChangePriceCurrency}
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
          <Select
            label="Fee currency"
            placeholder="Currency"
            value={feeCurrency}
            handleChange={handleChangeFeeCurrencyy}
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
          <Select
            label="Nominal currency"
            placeholder="Currency"
            value={nominalCurrency}
            handleChange={handleChangeNominalCurrency}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            label="Nominal value"
            placeholder="Currency"
            value={nominalValue}
            handleChange={handleChangeNominalValue}
          />
        </Grid>
        <Grid item xs={3}>
          <Select
            label="Country"
            placeholder="Country"
            value={country}
            handleChange={handleChangeCountry}
          />
        </Grid>
        <Grid item xs={3}>
          <Select
            label="Region"
            placeholder="Region"
            value={region}
            handleChange={handleChangeRegion}
          />
        </Grid>
        <Grid item xs={3}>
          <Select
            label="Sector"
            placeholder="Sector"
            value={sector}
            handleChange={handleChangeSector}
          />
        </Grid>
        <Grid item xs={3}>
          <Select
            label="Industry"
            placeholder="Industry"
            value={industry}
            handleChange={handleChangeIndustry}
          />
        </Grid>
        <Grid item xs={5}>
          <Select
            label="Portfolio"
            placeholder="Portfolio"
            value={portfolio}
            handleChange={handleChangePortfolio}
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
          <Select
            label="Custodian"
            placeholder="Custodian"
            value={custodian}
            handleChange={handleChangeCustodian}
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            label="Account holder"
            placeholder="Account holder"
            value={accountHolder}
            handleChange={handleChangeAccountHolder}
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            label="Account number"
            placeholder="Account number"
            value={accountNumber}
            handleChange={handleChangeAccountNumber}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
