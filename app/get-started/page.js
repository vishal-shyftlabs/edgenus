"use client";
import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Stepper from "../components/Stepper";
import TextArea from "../components/TextArea";
import PrimaryButton from "../components/PrimaryButton";
import axios from "axios";
import BusinessInfo from "../components/BusinessInfo";
import BrandingInfo from "../components/BrandingInfo";
import TeamSetup from "../components/TeamSetup";

const page = (props) => {
  const [currentStep, setCurrentStep] = React.useState(1);
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
          <BusinessInfo
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
          <BrandingInfo
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
          <TeamSetup
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            handleSubmit={() => {}}
          />

          {/* <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              axios
                .post(SCRIPT_URL, {
                  name: "Deepa",
                  email: "blah",
                  message: "some",
                })
                .then((response) => {
                  console.log("Success!", response.data);
                })
                .catch((error) => {
                  console.error("Error!", error.message);
                });
            }}
            text="Submit"
          /> */}
        </form>
      </div>
      <Footer />
    </>
  );
};

page.propTypes = {};

export default page;
