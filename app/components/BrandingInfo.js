import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import DragAndDrop from "./DragAndDrop";
import BrandLogoUploader from "./BrandLogoUploader";
import DynamicInputFields from "./DynamicInputFields";
import PrimaryButton from "./PrimaryButton";

const BrandingInfo = ({
  currentStep,
  setCurrentStep,
  hexColor,
  setHexColor,
  image,
  setImage,
  portfolioLink,
  setPortfolioLink,
}) => {
  return (
    currentStep === 2 && (
      <div>
        <div className="flex items-center">
          <img
            src="back.png"
            className="h-[36px]"
            onClick={() => {
              setCurrentStep(1);
            }}
          />
          <div className="text-24 sm:text-28 font-bold">Branding Info</div>
        </div>
        <div className="text-label text-lg sm:text-24 mt-10">
          Upload Brand Logo
        </div>
        <BrandLogoUploader image={image} setImage={setImage} />
        <div className="text-label text-lg sm:text-24 mt-10">
          Select Brand Colours
        </div>
        <Input
          type="text"
          value={hexColor}
          onChange={(e) => setHexColor(e.target.value)}
          placeholder="Enter #Hex Code"
        >
          <div
            className={`h-10 w-10 rounded-md shadow-lg right-3 top-8 absolute`}
            style={{ backgroundColor: `#${hexColor}` }}
          />
        </Input>
        <div className="flex gap-x-3">
          <div
            className={`h-10 w-10 rounded-md shadow-lg bg-[#6C63FF]`}
            onClick={() => setHexColor("6C63FF")}
          />
          <div
            className={`h-10 w-10 rounded-md shadow-lg bg-[#D7D5FF]`}
            onClick={() => setHexColor("D7D5FF")}
          />
          <div
            className={`h-10 w-10 rounded-md shadow-lg bg-[#FFD037]`}
            onClick={() => setHexColor("FFD037")}
          />
          <div
            className={`h-10 w-10 rounded-md shadow-lg bg-[#FFFFFF]`}
            onClick={() => setHexColor("FFFFFF")}
          />
          <div
            className={`h-10 w-10 rounded-md shadow-lg bg-[#565987]`}
            onClick={() => setHexColor("565987")}
          />
        </div>
        <div className="text-label text-lg sm:text-24 mt-10">
          Upload brand Portfolio
        </div>
        <Input
          placeholder="Paste Portfolio Link"
          value={portfolioLink}
          onChange={(e) => setPortfolioLink(e.target.value)}
        />
        <span className="text-muted"> Or</span>
        <DragAndDrop />
        <div className="text-label text-lg sm:text-24 mt-10">Social Media</div>
        <DynamicInputFields />
        <PrimaryButton
          text="Next"
          className="w-full text-center text-20 mt-5"
          onClick={() => setCurrentStep(3)}
        />
      </div>
    )
  );
};

BrandingInfo.propTypes = {};

export default BrandingInfo;
