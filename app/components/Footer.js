import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div className="h-[15vh] bg-footer px-8 md:px-20 pt-8 md:pt-10">
      <div className="font-extrabold text-24">BIZZGENUS</div>
      <div className="font-extralight">
        Powered by <span className="text-primary">Edgenus</span>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
