import React from 'react';

const Text = ({ size, bold, color, style, children }) => {
  const textStyles = {
    fontSize: size ? `${size}px` : 'inherit',
    fontWeight: bold ? 'bold' : 'normal', 
    color: color || 'inherit',
    ...style, 
  };

  return (
    <span style={textStyles}>
      {children}
    </span>
  );
};

export default Text;
