import React from 'react';

const Button = ({ type = 'button', children, disabled, className = '', ...props }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
