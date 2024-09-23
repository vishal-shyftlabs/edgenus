"use client";
import React, { useState } from "react";
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
import Modal from "../components/Modal";
import SpinnerOverlay from "../components/Spinner";

const page = (props) => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [name, setName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [businessContact, setBusinessContact] = useState("");
  const [hexColor, setHexColor] = useState("000000");
  const [members, setMembers] = useState([{ name: "", role: "" }]);
  const [image, setImage] = useState(null);
  const [businessName, setBusinessName] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [msg, setMsg] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/proxy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set Content-Type to JSON
      },
      body: JSON.stringify({
        name,
        businessEmail,
        profession,
        businessDescription,
        line1,
        line2,
        postcode,
        state,
        country,
        email,
        city,
        businessContact,
        hexColor,
        businessName,
        portfolioLink,
        members,
      }),
    });
    if (response.status === 200) {
      setIsLoading(false);
      setMsg("Thank you for submitting your details. We will get back to you.");
      setModalOpen(true);
    }
  };

  return (
    <>
      <Header />
      <div className="pt-32 px-8 sm:px-20 w-[90%] lg:w-[60%] mx-auto mb-20 min-h-[80vh]">
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
            name={name}
            setName={setName}
            businessName={businessName}
            setBusinessName={setBusinessName}
            businessEmail={businessEmail}
            setBusinessEmail={setBusinessEmail}
            businessDescription={businessDescription}
            setBusinessDescription={setBusinessDescription}
            profession={profession}
            setProfession={setProfession}
            line1={line1}
            setLine1={setLine1}
            line2={line2}
            setLine2={setLine2}
            city={city}
            setCity={setCity}
            state={state}
            setState={setState}
            postcode={postcode}
            setPostcode={setPostcode}
            country={country}
            setCountry={setCountry}
            email={email}
            setEmail={setEmail}
            businessContact={businessContact}
            setBusinessContact={setBusinessContact}
          />
          <BrandingInfo
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            hexColor={hexColor}
            setHexColor={setHexColor}
            image={image}
            setImage={setImage}
            portfolioLink={portfolioLink}
            setPortfolioLink={setPortfolioLink}
          />
          <TeamSetup
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            handleSubmit={handleSubmit}
            members={members}
            setMembers={setMembers}
          />
          <Modal
            isOpen={isModalOpen}
            onClose={() => {
              setModalOpen(false);
              window.location.href = "/";
            }}
          >
            <h2 className="text-xl font-semibold mb-4">{modalTitle}</h2>
            <p className="mb-4">{msg}</p>
            <button
              onClick={() => {
                setModalOpen(false);
                window.location.href = "/";
              }}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Ok
            </button>
          </Modal>
        </form>
      </div>
      <SpinnerOverlay isLoading={isLoading} />
      <Footer />
    </>
  );
};

page.propTypes = {};

export default page;
