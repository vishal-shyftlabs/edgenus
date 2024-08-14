import React from "react";

export default function Stepper({ currentStep, numberOfSteps }) {
  const activeColor = (index) =>
    currentStep >= index ? "bg-blue-500" : "bg-gray-300";
  const isFinalStep = (index) => index === numberOfSteps - 1;

  return (
    <div className="hidden md:flex-col items-center">
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div className={`w-6 h-6 rounded-full ${activeColor(index)}`}></div>
          {isFinalStep(index) ? null : (
            <div
              className={`w-12 h-1 md:w-1 md:h-12 md:ml-[.6rem] ${activeColor(
                index
              )}`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
