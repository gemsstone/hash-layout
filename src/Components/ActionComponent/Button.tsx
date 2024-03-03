import React from 'react';
import '../ActionComponent/style.css'

interface ButtonProps {
    title: string;
    btnClass: string;
}

const Button: React.FC<ButtonProps> = ({ title, btnClass }) => {
    const staticClass = "h-btn";
    return (
        <button className={`${btnClass} ${staticClass}`}>
            {title}
        </button>
    );
};

export default Button;
