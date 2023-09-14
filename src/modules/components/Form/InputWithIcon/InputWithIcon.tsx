import { FormEvent } from 'react';

import { Label } from 'styles/components';
import { ClearBtn, IconInput, StyledInput } from './InputWithIcon.styled';
import { InputTextPosition, InputType } from '../model';

interface InputWithIconProps {
  label: string;
  value: string;
  placeholder?: string;
  type?: InputType;
  inputIcon?: string;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
  handleClearValue: () => void;
  valuePosition?: InputTextPosition;
}

export const InputWithIcon = ({
  label,
  value,
  placeholder,
  handleChange,
  handleClearValue,
  inputIcon,
  type = InputType.Text,
  valuePosition = InputTextPosition.Left,
}: InputWithIconProps) => (
  <Label>
    <p>{label}</p>
    <StyledInput
      value={value}
      style={{ textAlign: valuePosition }}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
    />
    {inputIcon && <IconInput src={inputIcon} />}
    <ClearBtn onClick={handleClearValue} />
  </Label>
);
