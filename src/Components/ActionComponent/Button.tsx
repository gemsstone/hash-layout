import React from 'react';

interface ButtonProps {
    title: string;
    btnClass: string;
    variant: 'h-primary-btn' | 'h-secondary-btn' | 'h-outlined-btn';
    alignPositions: 'h-align-default' | 'h-align-center' | 'h-align-right';
}

const Button: React.FC<ButtonProps> = ({ title, btnClass, variant, alignPositions }) => {
    const staticClass = "h-btn";
    return (
        <div className=''>
            <button className={`${staticClass} ${btnClass} ${variant} ${alignPositions}`}>
                {title}
            </button>
        </div>

    );
};

export default Button;
