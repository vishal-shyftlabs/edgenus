import React from "react";
import PropTypes from "prop-types";
import PrimaryButton from "./PrimaryButton";

const Hero = (props) => {
  return (
    <div className="bg-secondary relative px-8 md:px-20 py-20">
      <div className="flex flex-col lg:justify-between lg:flex lg:flex-row items-center">
        <div className="lg:hidden mb-20">
          <img src="creativity.png" className="max-h-[374px]" />
        </div>
        <div className="flex-col justify-between">
          <div className="font-bold text-xl md:text-3xl">
            Unleash Your <span className="text-primary">Creativity</span>,<br />{" "}
            Leave the Rest to Us!
          </div>
          <div className="my-10 font-semibold text-xl md:text-2xl">
            We’re <span className="text-primary">BizzGenus</span>, providing
            effortless setup &<br /> management for your creative business
          </div>
          <div className="mb-10 text-lg md:text-xl">
            Share your business queries with us
          </div>
          <div className="font-semibold md:text-lg">
            <PrimaryButton text="Get Started" />
          </div>
        </div>

        <div className="hidden lg:inline-block">
          <img src="creativity.png" className="max-h-[374px]" />
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {};

export default Hero;
