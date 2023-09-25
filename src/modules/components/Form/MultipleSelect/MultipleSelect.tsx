import { Dispatch, SetStateAction } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import { Label } from 'styles/components';
import { Box } from '@mui/material';
import { HeadEnum } from 'constants/tables';

const styles = {
  marginTop: '4px',
  background: '#191934',
  color: '#4F4F4F',
  borderRadius: '5px',
  height: '35px',
  width: '100%',

  '&': {
    '&& fieldset': {
      border: '1px solid #7171c0',
      transition: 'all 0.3s',
    },
  },
  '&:hover': {
    '&& fieldset': {
      border: '1px solid #7171c0',
    },
  },
  '.Mui-focused': {
    border: '1px solid #7171c0',
  },
  '.MuiSelect-icon': {
    color: '#fff',
  },
};

function getStyles(name: string, selectValue: string[], theme: Theme) {
  return {
    fontWeight:
      selectValue.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface MultipleSelectProps {
  isMultiple: boolean;
  placeholder: string;
  label: string;
  data: string[];
  selectValue: string[];
  setSelectValue: Dispatch<SetStateAction<string[]>>;
}

export const MultipleSelect = ({
  data,
  selectValue,
  label,
  setSelectValue,
  isMultiple,
  placeholder,
}: MultipleSelectProps) => {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof selectValue>) => {
    const {
      target: { value },
    } = event;
    setSelectValue(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Label>
      <p>{label}</p>
      <Select
        sx={styles}
        multiple={isMultiple}
        displayEmpty
        value={selectValue}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em style={{ fontStyle: 'normal' }}>{placeholder}</em>;
          }
          if (!isMultiple) {
            return <em style={{ fontStyle: 'normal', color: '#fff' }}>{selected.join('')}</em>;
          }
          return (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  sx={{ height: '18px', background: '#7171C0', marginTop: '2px', color: '#fff' }}
                  key={value}
                  label={value}
                />
              ))}
            </Box>
          );
        }}
      >
        <MenuItem style={{ fontStyle: 'normal' }} disabled value="">
          <em style={{ fontStyle: 'normal' }}>{placeholder}</em>
        </MenuItem>
        {data.map((item, i) => (
          <MenuItem key={i} value={item} style={getStyles(item, selectValue, theme)}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </Label>
  );
};
