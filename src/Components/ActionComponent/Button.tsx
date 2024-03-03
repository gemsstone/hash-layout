import React from 'react';

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
