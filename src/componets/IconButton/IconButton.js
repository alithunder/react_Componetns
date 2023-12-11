import React from "react";

const IconButton = ({ type, size, style, icon }) => {
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
      fontSize: "12px",
      padding: "8px",
    },
    md: {
      fontSize: "16px",
      padding: "12px",
    },
  };

  const Styles = {
    ...buttonStyles[type || "default"],
    ...sizeStyles[size || "md"],
    ...style,
  };

  return (
    <button type="button" style={Styles}>
      {icon}
    </button>
  );
};

export default IconButton;
