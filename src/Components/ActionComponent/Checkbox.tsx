import React, { useState } from 'react';
import '../../Styles/ActionComponent.css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {label}
    </label>
  );
};

export default Checkbox;
