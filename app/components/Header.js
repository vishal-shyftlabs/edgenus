import React, { useState } from "react";
import PropTypes from "prop-types";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";
import OutlineButton from "./OutlineButton";

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Customize font weight if needed
});

const Header = ({ showModules = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={poppins.className}>
      <div className="w-full my-auto py-3 px-8 md:px-20  flex justify-between items-center fixed z-50 bg-white opacity-80">
        <div className="font-extrabold text-lg sm:text-24">
          <Link href="/">BIZZGENUS</Link>
        </div>
        {/* Hamburger Menu (Visible until 725px) */}
        {showModules ? (
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8"
                fill="none"
                stroke="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        ) : null}
        {showModules ? (
          <>
            <div className="hidden lg:flex text-black text-base md:text-lg gap-x-5 items-center font-medium">
              {" "}
              <div>
                <a href="#modules">Modules</a>
              </div>
              <div>
                <a href="#portfolio">Portfolio</a>
              </div>
              <div>
                <a href="#customer">Customer</a>
              </div>
              <div>
                <a href="#why-choose-us">Why choose us?</a>
              </div>
            </div>
            <div className="hidden lg:flex font-medium">
              <PrimaryButton
                text="Get started"
                onClick={() => {
                  window.location.href = "/get-started";
                }}
              />
              <OutlineButton
                text="Drop your Query"
                onClick={() => {
                  window.location.href = "https://calendly.com/edgenus_sales";
                }}
                className="ml-3"
              />
            </div>
          </>
        ) : null}
        {isOpen && (
          <div className="lg:hidden font-medium rounded-b-md mt-2 py-3 px-20 space-y-2 text-black absolute flex flex-col left-0 -bottom-[15rem] z-50 w-full overflow-visible bg-white">
            <div>
              <a href="#modules" onClick={toggleMenu}>
                Modules
              </a>
            </div>
            <div>
              <a href="#portfolio" onClick={toggleMenu}>
                Portfolio
              </a>
            </div>
            <div>
              {" "}
              <a href="#customer" onClick={toggleMenu}>
                Customer
              </a>
            </div>
            <div>
              <a href="#why-choose-us" onClick={toggleMenu}>
                Why choose us?
              </a>
            </div>
            <div className="opacity-100">
              <PrimaryButton
                text="Get started"
                onClick={() => {
                  window.location.href = "/get-started";
                }}
              />
            </div>
            <div>
              <OutlineButton
                text="Drop your Query"
                onClick={() => {
                  window.location.href = "https://calendly.com/edgenus_sales";
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
