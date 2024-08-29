import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ rows = 4, cols = 5, className, placeholder }) => {
  return (
    <textarea
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      className={`bg-input p-3 sm:p-4 sm:text-24 w-full rounded-md ${className} my-5`}
    />
  );
};

TextArea.propTypes = {};

export default TextArea;
