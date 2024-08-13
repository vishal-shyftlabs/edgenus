'use client';
import React from "react";
import PropTypes from "prop-types";
import ImageCard from "../components/ImageCard";

const FinancialGuardian = (props) => {
  const data = [
    {
      title: "Payment Integrator",
      subtitle: "Simplify and streamline your payment processing.",
      imgPath: "/domain-mastery.jpg",
      alt: "domain-mastery",
    },
    {
      title: "Smart Invoicing Templates",
      subtitle: "Create professional, customizable invoices with ease.",
      imgPath: "/wordpress-hosting.jpg",
      alt: "wordpress-hosting",
    },
    {
      title: "P&L Dashboard",
      subtitle: "Gain clear insights into your profit and loss statements.",
      imgPath: "/diy-website-builders.jpg",
      alt: "diy-website-builders",
    },
    {
      title: "Financial Nudge Alerts",
      subtitle: "Receive actionable prompts to optimize financial performance.",
      imgPath: "/seamless-integrations.jpg",
      alt: "diy-website-builders",
    },
  ];
  return (
    <div className=" h-full p-3">
      <div className="text-[35px] mt-5 font-bold">Financial Guardian</div>
      <div className="text-lg w-full pt-5 pb-10">
        Efficient Solutions for Revenue and Expense Management{" "}
      </div>
      <div className="">
        <div className="flex flex-wrap gap-x-6 justify-center">
          {data.map((point, i) => (
            <div className="my-3" key={`point_${i}`}>
              <ImageCard data={point} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FinancialGuardian.propTypes = {};

export default FinancialGuardian;
