
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick,
  className = '',
  fullWidth = false,
  type = 'button'
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-button-gradient text-white hover:shadow-lg hover:shadow-wov-green/30 focus:ring-wov-green",
    secondary: "bg-wov-teal text-white hover:bg-wov-teal-dark focus:ring-wov-teal",
    tertiary: "bg-wov-blue text-white hover:bg-wov-blue-dark focus:ring-wov-blue",
    outline: "border-2 border-wov-blue text-wov-blue hover:bg-wov-blue hover:text-white focus:ring-wov-blue"
  };

  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
