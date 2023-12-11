import React from 'react';

const Header = ({ brand, action }) => {
  return (
    <div className="header">
      <div className="brand">{brand}</div>
      <div className="action">{action}</div>
    </div>
  );
};

export default Header;