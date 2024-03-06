import React from 'react';
import '../../Styles/ActionComponent.css';

interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, onChange }) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <label>
      <input
        type="radio"
        checked={checked}
        onChange={handleChange}
        value={value}
      />
      {label}
    </label>
  );
};

export default RadioButton;
