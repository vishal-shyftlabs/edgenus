import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div className="h-[15vh] bg-footer px-8 sm:px-20 pt-8 sm:pt-10">
      <div className="font-extrabold text-lg sm:text-24">
        <Link href="/">BIZZGENUS</Link>
      </div>
      <div className="font-extralight text-sm sm:text-20">
        Powered by <span className="text-primary">Edgenus</span>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
