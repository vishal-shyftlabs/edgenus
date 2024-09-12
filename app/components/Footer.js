import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Footer = (props) => {
  return (
    <div className="h-auto sm:h-[20vh] bg-footer px-8 sm:px-20 py-8 sm:py-10">
      <div className="flex flex-col sm:flex-row justify-between">
        <div>
          <div className="font-extrabold text-lg sm:text-24">
            <Link href="/">BIZZGENUS</Link>
          </div>
          <div className="font-extralight text-sm sm:text-20 my-3">
            Powered by <span className="text-primary">Edgenus</span>
          </div>
          <div className="flex">
            <div>
              <a href="https://www.linkedin.com/company/edgenus-talent-incubation-ltd">
                <img src="linkedin.png" className="h-5" />
              </a>
            </div>
            <div>
              <a href="https://instagram.com/ed.genus">
                <img src="instagram.png" className="h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-0">
          <div className="sm:text-lg font-medium">Contact</div>
          <div className="flex items-center mt-3 text-sm sm:text-14">
            <img src="phone.png" className="h-5" />{" "}
            <span className="ml-2 mb-2">
              <a href="tel:+91 92661 47446">+91 92661 47446</a>{" "}
              {/* <a href="tel:+91-9810771425">+91-9810771425</a> (India) */}
            </span>
          </div>
          {/* <div className="flex items-center my-3 text-sm sm:text-14">
            <img src="phone.png" className="h-5" />{" "}
            <span className="ml-2">
              <a href="tel:+352-661839999">+352-661839999</a> (Europe)
            </span>
          </div> */}
          <div className="flex text-sm sm:text-14">
            <a href="mailto:reachus@edgenus.com" className="flex items-center">
              <img src="mail.png" className="h-5" />{" "}
              <span className="ml-2">reachus@edgenus.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
