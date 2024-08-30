import React from "react";
import PropTypes from "prop-types";

const PrimaryButton = ({ text, onClick, className }) => {
  return (
    <button
      className={`py-2 px-3 text-white bg-primary rounded-md ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

PrimaryButton.propTypes = {};

export default PrimaryButton;
