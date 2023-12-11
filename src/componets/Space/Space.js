import React from 'react';

const Space = ({ height, width }) => {
  const spaceStyles = {
    height: height ? `${height}px` : 'auto',
    width: width ? `${width}px` : 'auto' ,
  };

  return <div style={spaceStyles}></div>;
};

export default Space;
