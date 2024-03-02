import React from 'react';

interface ButtonProps {
  title: string;
  btnClass:string;
}

const Button: React.FC<ButtonProps> = ({ title, btnClass }) => {
  return (
    <button className={btnClass}>
      {title}
    </button>
  );
};

export default Button;
