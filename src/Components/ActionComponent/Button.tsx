import React from 'react';
import '../ActionComponent/style.css'

interface ButtonProps {
    title: string;
    btnClass: string;
    variant: 'primary' | 'secondary' | 'outlined';
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
