import React from 'react';

interface ButtonProps {
    title: string;
    onClick: () => void;
    className: string;
    variant: 'h-primary-btn' | 'h-secondary-btn' | 'h-outlined-btn';
    alignPositions: 'h-align-default' | 'h-align-center' | 'h-align-right';
    disabled: boolean;
    type?: 'button' | 'submit' | 'reset'; // Add type prop
    style?: React.CSSProperties; // Add style prop
    ariaLabel?: string; // Add ariaLabel prop
    ariaDisabled?: boolean; // Add ariaDisabled prop
}

const Button: React.FC<ButtonProps> = ({ title, onClick, className, variant, alignPositions, disabled, type, style, ariaLabel, ariaDisabled, ...otherProps }) => {
    const staticClass = "h-btn";
    return (
        <div className={`${alignPositions}`}>
            <button
                className={`${staticClass} ${className} ${variant}`}
                onClick={onClick}
                disabled={disabled}
                type={type}
                style={style}
                aria-label={ariaLabel}
                aria-disabled={ariaDisabled}
                {...otherProps}
            >
                {title}
            </button>
        </div>
    );
};

export default Button;
