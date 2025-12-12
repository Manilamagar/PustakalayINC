import React from 'react';

const Button = ({ children, type = 'button', disabled = false, className = '', ...props }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
