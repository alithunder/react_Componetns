import React from 'react';

const Tag = ({ color, children }) => {
  const tagStyles = {
    backgroundColor: color || '#ccc',
    padding: '5px 10px',
    borderRadius: '4px',
    display: 'block',
    margin: '2px',
    color: '#fff', 
  };

  return (
    <div style={tagStyles}>
      {children}
    </div>
  );
};

export default Tag;
