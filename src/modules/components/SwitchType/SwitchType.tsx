import { Box } from '@mui/material';
import { Switch } from './SwitchType.styled';

interface SwitchTypeProps {
  data: string[];
  handleClick: (item: string) => void;
  selectedType: string;
}

export const SwitchType = ({ data, handleClick, selectedType }: SwitchTypeProps) => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
    {data.map((item) => (
      <Switch key={item} active={item === selectedType} onClick={() => handleClick(item)}>
        {item}
      </Switch>
    ))}
  </Box>
);
