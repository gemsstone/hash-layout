import React, { useState, useEffect, useRef } from 'react';
import '../../Styles/ActionComponent.css'

// Define the props for the Autocomplete component
interface AutocompleteProps {
  options: string[]; // Array of options for the autocomplete
  onSelect: (value: string) => void; // Callback function to handle selection of an option
}

// Define the Autocomplete component as a functional component
const Autocomplete: React.FC<AutocompleteProps> = ({ options, onSelect, ...otherProps }) => {
  // State hooks to manage the input value, filtered options, and visibility of the options
  const [value, setValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  
  // Reference to the autocomplete wrapper div element
  const autocompleteRef = useRef<HTMLDivElement>(null);

  // Event handler for input value change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setFilteredOptions(options.filter(option => option.toLowerCase().includes(newValue.toLowerCase())));
    setShowOptions(true);
  };

  // Event handler for selecting an option from the list
  const handleClick = (option: string) => {
    setValue(option);
    setShowOptions(false);
    onSelect(option);
    setFilteredOptions(options.filter(opt => opt !== option));
  };

  // Event handler for clicking outside the autocomplete
  const handleClickOutside = (e: MouseEvent) => {
    if (autocompleteRef.current && !autocompleteRef.current.contains(e.target as Node)) {
      setShowOptions(false);
    }
  };

  // Event handler for input click to show all options
  const handleInputClick = () => {
    setFilteredOptions(options);
    setShowOptions(true);
  };

  // Effect hook to add and remove click event listener for outside clicks
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Render the Autocomplete component
  return (
    <div className='h-Autcomplete-Wrapper' ref={autocompleteRef}>
      {/* Input element for the autocomplete */}
      <input className='h-Autcomplete-input' type="text" placeholder='Select...' value={value} onChange={handleChange} onClick={handleInputClick} />
      {/* Arrow icon to toggle the visibility of the options */}
      <span className={`arrow-icon ${showOptions ? 'up' : 'down'}`} onClick={() => setShowOptions(!showOptions)}></span>
      {/* Display the options if showOptions is true */}
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
