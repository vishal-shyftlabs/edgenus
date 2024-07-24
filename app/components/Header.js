import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <div className="w-full my-auto text-md md:text-lg lg:text-3xl p-3 text-white bg-primary flex justify-between">
      <div>About Us</div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
