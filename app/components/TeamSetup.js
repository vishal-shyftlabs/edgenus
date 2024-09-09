import React from "react";
import PropTypes from "prop-types";
import DynamicTeamMembers from "./DynamicTeamMembers";
import PrimaryButton from "./PrimaryButton";

const TeamSetup = ({
  currentStep,
  setCurrentStep,
  handleSubmit,
  members,
  setMembers,
}) => {
  return (
    currentStep === 3 && (
      <div>
        <div className="flex items-center">
          <img
            src="back.png"
            className="h-[36px]"
            onClick={() => {
              setCurrentStep(2);
            }}
          />
          <div className="text-24 sm:text-28 font-bold">Team Setup</div>
        </div>
        <div className="text-label text-lg sm:text-24 mt-10">
          Add Team Members
        </div>
        <DynamicTeamMembers members={members} setMembers={setMembers} />
        <PrimaryButton
          text="Submit"
          className="w-full text-center text-20 mt-5"
          onClick={handleSubmit}
        />
      </div>
    )
  );
};

TeamSetup.propTypes = {};

export default TeamSetup;
