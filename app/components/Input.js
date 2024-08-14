import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  placeholder = "",
  required = false,
  value = "",
  className = { className },
  onChange = () => {},
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`bg-input p-3 sm:p-4 sm:text-24 w-full rounded-md ${className} my-5`}
    />
  );
};

Input.propTypes = {};

export default Input;
