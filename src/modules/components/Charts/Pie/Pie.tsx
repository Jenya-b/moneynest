import { Cell, Pie, PieChart as PChart, Tooltip, Sector } from 'recharts';

import { AssetsStructureData } from 'constants/dashbord';
import { PieInfo } from './PieInfo/PieInfo';
import { useState } from 'react';

interface PieChartProps {
  data: AssetsStructureData[];
}

export const PieChart = ({ data }: PieChartProps) => {
  const [state, setState] = useState<number>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onPieEnter = (_: any, index: number) => {
    setState(index);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 3}
          outerRadius={outerRadius + 7}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <div style={{ position: 'relative' }}>
      <PChart width={320} height={300}>
        <Pie
          activeIndex={state}
          data={data}
          innerRadius={90}
          dataKey="value"
          activeShape={renderActiveShape}
          onMouseOver={onPieEnter}
          onMouseOut={() => setState(undefined)}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          itemStyle={{ color: '#fff' }}
          contentStyle={{
            backgroundColor: '#292949',
            border: 'none',
            borderRadius: '10px',
          }}
          wrapperStyle={{ zIndex: 1 }}
        />
      </PChart>
      <PieInfo />
    </div>
  );
};
