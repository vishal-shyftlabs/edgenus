import React from "react";
import PropTypes from "prop-types";
import PrimaryButton from "./PrimaryButton";

const Hero = (props) => {
  return (
    <div className="bg-secondary relative px-8 md:px-20 py-20">
      <div className="flex flex-col lg:justify-between lg:flex lg:flex-row items-center">
        <div className="lg:hidden my-20">
          <img
            alt="creativity"
            src="creativity.png"
            className="max-h-[374px]"
          />
        </div>
        <div className="flex-col justify-between">
          <div className="font-bold text-24 md:text-44">
            Unleash Your <span className="text-primary">Creativity</span>,<br />{" "}
            Leave the Rest to Us!
          </div>
          <div className="my-10 font-semibold md:text-24">
            We’re <span className="text-primary">BizzGenus</span>, providing
            effortless setup &<br /> management for your creative business
          </div>
          <div className="mb-10 text-sm md:text-20">
            Share your business queries with us
          </div>
          <div className="font-semibold text-sm md:text-18">
            <PrimaryButton text="Get Started" />
          </div>
        </div>

        <div className="hidden mt-20 lg:inline-block">
          <img src="creativity.png" className="max-h-[374px]" />
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {};

export default Hero;
