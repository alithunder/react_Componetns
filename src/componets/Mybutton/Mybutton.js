import React from 'react';

const Button = ({ fun,type, size, style, children, ...restProps }) => {
  const buttonStyles = {
    primary: {
      backgroundColor: 'black',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'grey',
      color: 'white',
    },
    default: {
      backgroundColor: 'blue',
      color: 'white',
    },
  };

  const sizeStyles = {
    sm: {
      fontSize: '12px',
      padding: '8px 12px',
    },
    md: {
      fontSize: '14px',
      padding: '10px 16px',
    },
  };

  const Styles = {
    ...buttonStyles[type || 'default'],
    ...sizeStyles[size || 'md'],
    ...style,
  };

  return (
    <button
    onClick={fun}
      type="button"
      style={Styles}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
