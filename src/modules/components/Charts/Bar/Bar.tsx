/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  ReferenceLine,
  Bar,
  Cell,
} from 'recharts';
import type { Props as XAxisProps } from 'recharts/types/cartesian/XAxis';
import type { Props as YAxisProps } from 'recharts/types/cartesian/YAxis';

import { useZoomAndPan } from 'hooks/useZoomAndPan';
import { useTooltipSorting } from 'hooks/useTooltipSorter';
import { cashFlowAnalysisData } from 'constants/dashbord';

export type BarChartProps<T extends Record<string, unknown>> = {
  data: T[];
  axis?: {
    x?: XAxisProps & { hide?: boolean };
    y?: YAxisProps & { hide?: boolean };
  };
};

const RechartsClipPaths = forwardRef((_, ref: React.ForwardedRef<any>) => {
  const grid = useRef<SVGRectElement>(null);
  const axis = useRef<SVGRectElement>(null);
  useImperativeHandle(ref, () => ({
    grid,
    axis,
  }));

  return (
    <>
      <clipPath id="chart-xaxis-clip">
        <rect fill="rgba(0,0,0,0)" height="100%" ref={axis} />
      </clipPath>
      <clipPath id="chart-grid-clip">
        <rect fill="rgba(0,0,0,0)" height="100%" ref={grid} />
      </clipPath>
    </>
  );
});

export const Chart = <T extends Record<string, unknown>>({ data, axis }: BarChartProps<T>) => {
  const [loaded, setLoaded] = useState(false);

  const {
    clipPathRefs,
    xPadding,
    onChartMouseDown,
    onChartMouseUp,
    setWrapperRef,
    onChartMouseMove,
  } = useZoomAndPan({
    chartLoaded: loaded,
  });

  const { onSeriesMouseOver, tooltipSorter } = useTooltipSorting();

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  return (
    <ResponsiveContainer debounce={1} width="99%" height={384} ref={setWrapperRef}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        onMouseMove={onChartMouseMove}
        onMouseDown={onChartMouseDown}
        onMouseUp={onChartMouseUp}
      >
        <defs>
          <RechartsClipPaths ref={clipPathRefs} />
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        {axis?.x?.hide ? null : (
          <XAxis
            {...axis?.x}
            padding={{ left: xPadding[0], right: xPadding[1] }}
            domain={['dataMin', 'dataMax']}
            className="x-axis"
          />
        )}
        {axis?.y?.hide ? null : <YAxis {...axis?.y} />}
        <Tooltip
          labelStyle={{ color: '#fff', marginBottom: '5px' }}
          itemStyle={{ color: '#fff' }}
          contentStyle={{
            backgroundColor: '#292949',
            border: 'none',
            borderRadius: '10px',
          }}
          itemSorter={tooltipSorter}
        />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="cash" barSize={30}>
          {cashFlowAnalysisData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.cash >= 0 ? '#448FFF' : '#F2522F'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
