import { FormEvent, useState } from 'react';
import { Box } from '@mui/material';

import { ChartBlock } from '../ChartBlock/ChartBlock';
import { ChartControl, ChartWrap } from '../Dashboard.styled';
import { PERIODS_OF_TIME, perfomanceData, perfomanceParams } from 'constants/dashbord';
import { Chart as LineChart, LineChartProps } from 'modules/components/Charts/Line/Line';
import { MultipleSelect } from 'modules/components/Form/MultipleSelect/MultipleSelect';
import { Input } from 'modules/components/Form/Input/Input';
import { inputDateIcon } from 'constants/images';
import { InputTextPosition, InputType } from 'modules/components/Form/model';
import { SwitchType } from 'modules/components/SwitchType/SwitchType';

const chartCategoricalAxisProps: LineChartProps<(typeof perfomanceData)[number]>['axis'] = {
  x: {
    dataKey: 'name',
    type: 'category',
    allowDataOverflow: true,
    interval: 0,
  },
};

export const PerfomanceBlock = () => {
  const [perfomanceChecked, setPerfomanceChecked] = useState<string[]>([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedPeriod, SetSelectedPeriod] = useState('monthly');

  const handleChangeFromDate = (e: FormEvent<HTMLInputElement>) =>
    setFromDate(e.currentTarget.value);

  const handleClearFromDate = () => setFromDate('');

  const handleChangeToDate = (e: FormEvent<HTMLInputElement>) => setToDate(e.currentTarget.value);

  const handleClearToDate = () => setToDate('');

  const selectPeriod = (item: string) => SetSelectedPeriod(item);

  return (
    <ChartBlock title="Performance">
      <>
        <ChartWrap>
          <LineChart
            data={perfomanceData}
            lines={
              !perfomanceChecked.length
                ? perfomanceParams
                : perfomanceParams.filter((item) => perfomanceChecked.includes(item.dataKey))
            }
            axis={chartCategoricalAxisProps}
          />
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
            <MultipleSelect
              data={perfomanceParams.map(({ dataKey }) => dataKey)}
              isMultiple={true}
              placeholder="Param"
              label="Param"
              selectValue={perfomanceChecked}
              setSelectValue={setPerfomanceChecked}
            />
          </ChartControl>
        </ChartWrap>
      </>
    </ChartBlock>
  );
};
