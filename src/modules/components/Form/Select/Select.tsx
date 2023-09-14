import { FormEvent } from 'react';

import { Label, Select as StyledSelect } from 'styles/components';

interface SelectProps {
  label: string;
  value: string;
  placeholder: string;
  handleChange: (e: FormEvent<HTMLSelectElement>) => void;
}

export const Select = ({ label, placeholder, handleChange, value }: SelectProps) => (
  <Label>
    <p>{label}</p>
    <StyledSelect
      value={value}
      onChange={handleChange}
      style={{ color: value ? '#fff' : '#646464' }}
    >
      <option value="" disabled style={{ color: '#646464' }}>
        {placeholder}
      </option>
      {[1, 2, 3].map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </StyledSelect>
  </Label>
);
