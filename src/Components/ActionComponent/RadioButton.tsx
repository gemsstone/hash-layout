
import React, { Component, ChangeEvent } from 'react';

interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

class RadioButton extends Component<RadioButtonProps> {
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, value } = this.props;
    onChange(value);
  };

  render() {
    const { label, checked } = this.props;
    return (
      <label>
        <input
          type="radio"
          checked={checked}
          onChange={this.handleChange}
        />
        {label}
      </label>
    );
  }
}

export default RadioButton;
