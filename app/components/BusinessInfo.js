"use client";
import React from "react";
import Input from "../components/Input";
import Stepper from "../components/Stepper";
import TextArea from "../components/TextArea";
import PrimaryButton from "../components/PrimaryButton";

const BusinessInfo = ({ currentStep, setCurrentStep }) => {
  const NUMBER_OF_STEPS = 5;
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwFpNoKGLqFthEF4Fj7xDG9JUcm5Kn6gHbAO822TokGEMvK85KjYtzgUZ90xrZfJPSRNw/exec";
  return (
    currentStep === 1 && (
      <div>
        <div className="text-24 sm:text-28 font-bold">Business Info</div>
        <div className="text-label text-lg sm:text-24 mt-10">Identity</div>
        <Input placeholder="Name" className="flex" />
        <Input placeholder="Email" className="flex" />
        <Input placeholder="Profession" className="flex" />
        <Input placeholder="Business Name*" className="flex" />
        <TextArea placeholder="Business Description" className="flex" />
        <div className="absolute right-28 top-[26rem]">
          <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />
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
        <div className="text-label text-lg sm:text-24 mt-10">Contact Info</div>
        <Input placeholder="Business Contact no.*" className="flex" />
        <Input placeholder="Email*" className="flex" />
        <PrimaryButton
          text="Next"
          className="w-full text-center text-20"
          onClick={() => setCurrentStep(2)}
        />
      </div>
    )
  );
};

BusinessInfo.propTypes = {};

export default BusinessInfo;
