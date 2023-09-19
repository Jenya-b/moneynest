import { ChangeEvent, FormEvent, useState } from 'react';
import { Box } from '@mui/material';

import { PERIODS_OF_TIME, cashFlowAnalysisData } from 'constants/dashbord';
import { ChartBlock } from '../ChartBlock/ChartBlock';
import { ChartControl, ChartWrap } from '../Dashboard.styled';
import { Chart as BarChart, BarChartProps } from 'modules/components/Charts/Bar/Bar';
import { Input } from 'modules/components/Form/Input/Input';
import { inputDateIcon } from 'constants/images';
import { InputTextPosition, InputType } from 'modules/components/Form/model';
import { SwitchType } from 'modules/components/SwitchType/SwitchType';
import { Switch } from './Switch/Switch';

const chartBarAxisProps: BarChartProps<(typeof cashFlowAnalysisData)[number]>['axis'] = {
  x: {
    dataKey: 'name',
    type: 'category',
    allowDataOverflow: true,
    interval: 0,
  },
};

export enum SwitchNameEnum {
  Aggregate = 'aggregate',
  DueOnly = 'dueOnly',
  Average = 'average',
}

export const CashFlowBlock = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedPeriod, SetSelectedPeriod] = useState('monthly');
  const [switchState, setSwitchState] = useState({
    aggregate: true,
    dueOnly: false,
    average: false,
  });

  const handleChangeFromDate = (e: FormEvent<HTMLInputElement>) =>
    setFromDate(e.currentTarget.value);

  const handleClearFromDate = () => setFromDate('');

  const handleChangeToDate = (e: FormEvent<HTMLInputElement>) => setToDate(e.currentTarget.value);

  const selectPeriod = (item: string) => SetSelectedPeriod(item);

  const handleClearToDate = () => setToDate('');

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSwitchState({
      ...switchState,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <ChartBlock title="Cash Flow Analysis">
      <>
        <ChartWrap>
          <BarChart data={cashFlowAnalysisData} axis={chartBarAxisProps} />
          <ChartControl>
            <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
              <Input
                value={fromDate}
                handleChange={handleChangeFromDate}
                handleClearValue={handleClearFromDate}
                label="From Date"
                inputIcon={inputDateIcon}
                type={InputType.Date}
                valuePosition={InputTextPosition.Center}
              />
              <Input
                value={toDate}
                handleChange={handleChangeToDate}
                handleClearValue={handleClearToDate}
                label="To Date"
                inputIcon={inputDateIcon}
                type={InputType.Date}
                valuePosition={InputTextPosition.Center}
              />
            </Box>
            <SwitchType
              data={PERIODS_OF_TIME}
              selectedType={selectedPeriod}
              handleClick={selectPeriod}
            />
            <Switch
              name={SwitchNameEnum.Aggregate}
              state={switchState.aggregate}
              handleChange={handleSwitchChange}
            />
            <Switch
              name={SwitchNameEnum.DueOnly}
              state={switchState.dueOnly}
              handleChange={handleSwitchChange}
            />
            <Switch
              name={SwitchNameEnum.Average}
              state={switchState.average}
              handleChange={handleSwitchChange}
            />
          </ChartControl>
        </ChartWrap>
      </>
    </ChartBlock>
  );
};
