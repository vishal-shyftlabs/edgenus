import React from "react";
import PropTypes from "prop-types";

const OutlineButton = ({ text, onClick, className }) => {
  return (
    <button
      className={`py-2 px-3 text-primary outline outline-primary rounded-md ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

OutlineButton.propTypes = {};

export default OutlineButton;
