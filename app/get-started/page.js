"use client";
import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Stepper from "../components/Stepper";

const page = (props) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const NUMBER_OF_STEPS = 5;
  return (
    <>
      <Header />
      <div className="pt-32 px-8 sm:px-20 w-[90%] lg:w-[60%] mx-auto mb-20">
        <div className="text-32 sm:text-44 font-extrabold">
          Setup your business with
          <span className="text-primary ml-3">BizzGenus</span>
        </div>
        <div className="text-22 sm:text-24 text-label font-semibold my-5">
          Just a few steps to get you onboarded
        </div>
        <form>
          <div className="text-24 sm:text-28 font-bold">Business Info</div>

          <div className="text-label text-lg sm:text-24 mt-10">Identity</div>
          <Input placeholder="Business Name*" required className="flex" />
          <Input placeholder="Business Description" className="flex" />

          <div className="absolute right-28 top-[26rem]">
            <Stepper
              currentStep={currentStep}
              numberOfSteps={NUMBER_OF_STEPS}
            />
          </div>

          <div className="text-label text-lg sm:text-24 mt-10">Address</div>
          <Input placeholder="Address line 1*" required className="flex" />
          <Input placeholder="Address line 2*" required className="flex" />
          <Input placeholder="Pin code*" required className="flex" />
          <div className="flex gap-x-6">
            <Input placeholder="City*" required className="" />
            <Input placeholder="State*" required className="" />
          </div>
          <Input placeholder="Country*" required className="flex" />

          <div className="text-label text-lg sm:text-24 mt-10">
            Contact Info
          </div>
          <Input
            placeholder="Business Contact no.*"
            required
            className="flex"
          />
          <Input placeholder="Email*" required className="flex" />
        </form>
      </div>
      <Footer />
    </>
  );
};

page.propTypes = {};

export default page;
