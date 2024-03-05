import React, { useState, useEffect, useRef } from 'react';

interface AutocompleteProps {
  options: string[];
  onSelect: (value: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ options, onSelect, ...otherProps }) => {
  const [value, setValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const autocompleteRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setFilteredOptions(options.filter(option => option.toLowerCase().includes(newValue.toLowerCase())));
    setShowOptions(true);
  };

  const handleClick = (option: string) => {
    setValue(option);
    setShowOptions(false);
    onSelect(option);
    setFilteredOptions(options.filter(opt => opt !== option));
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (autocompleteRef.current && !autocompleteRef.current.contains(e.target as Node)) {
      setShowOptions(false);
    }
  };

  const handleInputClick = () => {
    setFilteredOptions(options);
    setShowOptions(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='h-Autcomplete-Wrapper' ref={autocompleteRef}>
      <input className='h-Autcomplete-input' type="text" placeholder='Select...' value={value} onChange={handleChange} onClick={handleInputClick} />
      {showOptions && (
        <ul className='h-Autcomplete-list-wrapper'>
          {filteredOptions.map((option, index) => (
            <li className='h-Autcomplete-list-item' key={index} onClick={() => handleClick(option)}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
