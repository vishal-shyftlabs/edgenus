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

const page = (props) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const NUMBER_OF_STEPS = 5;
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyKmd4xJQFcKY6gsJXVIXN0ZXSj8eZ3iLnQDC5PH2OnXJweUjF29EflWbOACaBjpbJFCA/exec";
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
          <Input placeholder="Name" className="flex" />
          <Input placeholder="Email" className="flex" />
          <Input placeholder="Profession" className="flex" />
          <Input placeholder="Business Name*" className="flex" />
          <TextArea placeholder="Business Description" className="flex" />
          <div className="absolute right-28 top-[26rem]">
            <Stepper
              currentStep={currentStep}
              numberOfSteps={NUMBER_OF_STEPS}
            />
          </div>
          <div className="text-label text-lg sm:text-24 mt-10">Address</div>
          <Input placeholder="Address line 1" className="flex" />
          <Input placeholder="Address line 2" className="flex" />
          <Input placeholder="Pin code" className="flex" />
          <div className="flex gap-x-6">
            <Input placeholder="City" className="" />
            <Input placeholder="State" className="" />
          </div>
          <Input placeholder="Country" className="flex" />
          <div className="text-label text-lg sm:text-24 mt-10">
            Contact Info
          </div>
          <Input placeholder="Business Contact no.*" className="flex" />
          <Input placeholder="Email*" className="flex" />

          <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              axios
                .post(SCRIPT_URL, { name: "Deepa", email: "blah" })
                .then((response) => {
                  console.log("Success!", response.data);
                })
                .catch((error) => {
                  console.error("Error!", error.message);
                });
            }}
            text="Submit"
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

page.propTypes = {};

export default page;
