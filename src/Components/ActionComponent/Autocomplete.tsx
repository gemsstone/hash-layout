import React, { useState } from 'react';

interface AutocompleteProps {
  options: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ options }) => {
  const [value, setValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setFilteredOptions(options.filter(option => option.toLowerCase().includes(newValue.toLowerCase())));
    setShowOptions(true);
  };

  const handleClick = (option: string) => {
    setValue(option);
    setShowOptions(false);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      {showOptions && (
        <ul>
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleClick(option)}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
