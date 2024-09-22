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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("calling submit");
    const response = await fetch("http://localhost:3001/proxy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set Content-Type to JSON
      },
      body: JSON.stringify({
        name: "Dee",
        businessEmail: "edgenus@gmail.com",
        profession: "Creator",
        businessDescription: "",
        line1: "2023",
        line2: "Baker Street",
        postcode: "234567",
        state: "",
        country: "UK",
        email: "edgenusbusiness.com",
        city: "London",
        businessContact: "91763877888",
        hexColor: "D7D5FF",
        businessName: "Edgenus",
        portfolioLink: "www.example.com",
      }),
    });

    // const data = await response.json();

    // const response = await fetch("/api/onboard", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json", // Set Content-Type to JSON
    //   },
    //   body: JSON.stringify({
    //     name: "Vishal",
    //     email: "vishal@example.com",
    //     message: "No!",
    //   }),
    // name,
    // businessEmail,
    // profession,
    // businessDescription,
    // line1,
    // line2,
    // postcode,
    // state,
    // country,
    // email,
    // city,
    // state,
    // businessContact,
    // hexColor,
    // members,
    // image,
    // businessName,
    // portfolioLink,
    // Convert the form data to JSON
    // });
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

          {/* <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              axios
                .post("/submit")
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
