import React from 'react';

interface ButtonProps {
    title: string;
    btnClass: string;
    variant: 'h-primary-btn' | 'h-secondary-btn' | 'h-outlined-btn';
}

const Button: React.FC<ButtonProps> = ({ title, btnClass, variant }) => {
    const staticClass = "h-btn";
    return (
        <button className={`${staticClass} ${variant}`}>
            {title}
        </button>
    );
};

export default Button;
