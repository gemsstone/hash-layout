
import React, { Component } from 'react';
import '../../Styles/ActionComponent.css'

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

interface CheckboxState {
  checked: boolean;
}

class Checkbox extends Component<CheckboxProps, CheckboxState> {
  constructor(props: CheckboxProps) {
    super(props);
    this.state = {
      checked: props.checked || false,
    };
  }

  handleChange = () => {
    const { onChange } = this.props;
    const { checked } = this.state;
    const newChecked = !checked;

    this.setState({ checked: newChecked });

    if (onChange) {
      onChange(newChecked);
    }
  };

  render() {
    const { label } = this.props;
    const { checked } = this.state;

    return (
      <label>
        <input type="checkbox" checked={checked} onChange={this.handleChange} />
        {label}
      </label>
    );
  }
}

export default Checkbox;
