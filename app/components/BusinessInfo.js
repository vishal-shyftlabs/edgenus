"use client";
import React from "react";
import Input from "../components/Input";
import Stepper from "../components/Stepper";
import TextArea from "../components/TextArea";
import PrimaryButton from "../components/PrimaryButton";

const BusinessInfo = ({
  currentStep,
  setCurrentStep,
  city,
  state,
  postcode,
  line1,
  line2,
  name,
  businessEmail,
  businessDescription,
  profession,
  setProfession,
  setName,
  setPostcode,
  setCity,
  setState,
  setLine1,
  setLine2,
  setBusinessEmail,
  setBusinessDescription,
  businessName,
  setBusinessName,
  setCountry,
  businessContact,
  setBusinessContact,
  country,
  email,
  setEmail,
}) => {
  const NUMBER_OF_STEPS = 5;
  return (
    currentStep === 1 && (
      <div>
        <div className="text-24 sm:text-28 font-bold">Business Info</div>
        <div className="text-label text-lg sm:text-24 mt-10">Identity</div>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="flex"
        />
        <Input
          placeholder="Business Email"
          className="flex"
          value={businessEmail}
          onChange={(e) => setBusinessEmail(e.target.value)}
        />
        <Input
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          placeholder="Profession"
          className="flex"
        />
        <Input
          placeholder="Business Name*"
          className="flex"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <TextArea
          placeholder="Business Description"
          className="flex"
          value={businessDescription}
          onChange={(e) => setBusinessDescription(e.target.value)}
        />
        <div className="absolute right-28 top-[26rem]">
          <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />
        </div>
        <div className="text-label text-lg sm:text-24 mt-10">Address</div>
        <Input
          placeholder="Address line 1"
          className="flex"
          value={line1}
          onChange={(e) => setLine1(e.target.value)}
        />
        <Input
          placeholder="Address line 2"
          className="flex"
          value={line2}
          onChange={(e) => setLine2(e.target.value)}
        />
        <Input
          placeholder="Pin code"
          className="flex"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
        <div className="flex gap-x-6">
          <Input
            placeholder="City"
            className=""
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            placeholder="State"
            className=""
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <Input
          placeholder="Country"
          className="flex"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <div className="text-label text-lg sm:text-24 mt-10">Contact Info</div>
        <Input
          placeholder="Business Contact no.*"
          className="flex"
          value={businessContact}
          onChange={(e) => setBusinessContact(e.target.value)}
        />
        <Input
          placeholder="Email*"
          className="flex"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
