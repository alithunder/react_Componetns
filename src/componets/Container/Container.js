import React from 'react';

const Container = ({ width, style, children }) => {
    const containerStyles = {
        maxWidth: width ? `${width}px` : '100%',
        width: '100%',
        margin: '0 auto', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        ...style, 
      };
    
  return (
    <div style={containerStyles}>
      {children}
    </div>
  );
};
export default Container;