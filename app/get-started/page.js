import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = (props) => {
  return (
    <>
      <Header />
      <div className="text-22 sm:text-44 font-extrabold">
        Setup your business with <span className="text-primary">BizzGenus</span>
      </div>
      <div className="text-24 font-semibold">
        Just a few steps to get you onboarded
      </div>
      <div className="text-28 font-bold">Business Info</div>
      <Footer />
    </>
  );
};

page.propTypes = {};

export default page;
