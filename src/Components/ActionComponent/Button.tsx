import React from 'react';
import '../../Styles/ActionComponent.css'

// Define the props interface for the Button component
interface ButtonProps {
    title: string; // The text displayed on the button
    onClick: () => void; // The function to call when the button is clicked
    className: string; // Additional CSS classes for styling
    variant: 'h-primary-btn' | 'h-secondary-btn' | 'h-outlined-btn'; // The variant of the button
    alignPositions: 'h-align-default' | 'h-align-center' | 'h-align-right'; // The alignment of the button
    disabled: boolean; // Whether the button is disabled
    type?: 'button' | 'submit' | 'reset'; // The type of the button
    style?: React.CSSProperties; // Custom styles for the button
    ariaLabel?: string; // Aria label for accessibility
    ariaDisabled?: boolean; // Aria disabled state for accessibility
}

// Define the Button component
const Button: React.FC<ButtonProps> = ({ title, onClick, className, variant, alignPositions, disabled, type, style, ariaLabel, ariaDisabled, ...otherProps }) => {
    const staticClass = "h-btn"; // Static class for styling
    const buttonStyle = disabled ? { opacity: 0.5, cursor: 'no-drop' } : {}; // Apply opacity if disabled
    return (
        <div className={`${alignPositions}`}>
            <button
                className={`${staticClass} ${className} ${variant}`} // Combine static and dynamic classes
                onClick={onClick} // Attach onClick event handler
                disabled={disabled} // Set disabled state
                type={type} // Set button type
                style={{ ...style, ...buttonStyle }} // Apply custom styles
                aria-label={ariaLabel} // Set aria label
                aria-disabled={ariaDisabled} // Set aria disabled state
                {...otherProps} // Pass any other props to the button
            >
                {title}
            </button>
        </div>
    );
};

export default Button; // Export the Button component
