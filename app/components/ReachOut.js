import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Envelope,
  Facebook,
  Instagram,
  Linkedin,
  Telephone,
} from "react-bootstrap-icons";
import Link from "next/link";

const ReachOut = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
    field: "",
    size: "",
    subject: "",
    company: "",
  });
  const handleSubmit = (e) => {
    console.log("I'm clicked!");
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      {" "}
      <div className=" p-3 text-black relative py-12">
        <div className="flex font-semibold text-[40px] text-center justify-center relative">
          Get in touch
        </div>
        <div className="m-3 p-4 relative">
          <div className="my-8">
            <div className="items-start">Name *</div>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-1 border-transparent bg-transparent border-b-2 border-b-black outline-none w-full"
              />
            </div>
          </div>
          <div className="my-5">
            <div className="items-start">Phone</div>
            <div>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-1 border-transparent bg-transparent border-b-2 border-b-black outline-none w-full"
              />
            </div>
          </div>
          <div className="my-5">
            <div className="items-start">Email *</div>
            <div>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-1 border-transparent bg-transparent border-b-2 border-b-black outline-none w-full"
              />
            </div>
          </div>
          <div className="my-5">
            <div className="items-start">Field of business *</div>
            <div>
              <input
                type="text"
                id="field"
                name="field"
                value={formData.field}
                onChange={handleChange}
                className="p-1 border-transparent bg-transparent border-b-2 border-b-black outline-none w-full"
              />
            </div>
          </div>
          <div className="my-5">
            <div className="items-start">Company Name</div>
            <div>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="p-1 border-transparent bg-transparent border-b-2 border-b-black outline-none w-full"
              />
            </div>
          </div>
          <div className="my-5">
            <div className="items-start">Subject</div>
            <div>
              <select
                id="dropdown"
                className="appearance-none w-full py-2 bg-transparent border-b-2 border-black leading-tight focus:outline-none focus:border-none"
              >
                <option value="option1">Inquire about platform</option>
                <option value="option2">Collaborate with us</option>
                <option value="option3">Learn from our experts</option>
              </select>
              {/* <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="p-1 border-transparent bg-transparent border-b-2 border-b-white outline-none w-full"
            /> */}
            </div>
          </div>
          <div className="my-5">
            <div className="items-start">Your company size</div>
            <div>
              <input
                type="text"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="p-1 border-transparent bg-transparent border-b-2 border-b-black outline-none w-full"
              />
            </div>
          </div>
          <div className="my-5">
            <div className="items-start">Query*</div>
            <div>
              <input
                type="text"
                id="query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                className="p-1 border-transparent bg-transparent border-b-2 border-b-black outline-none w-full"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={(e) => handleSubmit(e)}
              className="bg-black p-3 bg-opacity-90 text-white mx-auto mt-3"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 py-3 px-6 items-center bg-black text-white">
        <div className="flex py-3 items-center">
          <Telephone color="white" className="mr-3" />{" "}
          <span className="mr-5">
            <a href="tel:+91-9820771425">+91-9810771425</a>
          </span>{" "}
          / <a href="tel:+352-661839999">+352-661839999</a>
        </div>
        <div className="flex py-3 items-center">
          <Envelope color="white" className="mr-3" />{" "}
          <a href="mailto:reachus@edgenus.com">reachus@edgenus.com</a>
        </div>
        <div className="flex py-3 items-center">
          <a href="https://www.facebook.com/share/ndJE6YheVHajbLdi/?mibextid=LQQJ4d"><Facebook color="white" className="mr-3" /></a>
        </div>
        <div className="flex py-3 items-center">
          <a href="https://www.instagram.com/edgenus.forarts"><Instagram color="white" className="mr-3" /></a>
        </div>
      </div>
    </>
  );
};

ReachOut.propTypes = {};

export default ReachOut;
