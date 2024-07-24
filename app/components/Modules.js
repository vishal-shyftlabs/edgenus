"use client";
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import RadialProgress from "./RadialProgress";
import { ArrowRight } from "react-bootstrap-icons";
import Link from "next/link";
import Card from "./Card";
import ImageCard from "./ImageCard";
import FlipCard from "./FlipCard";

const Modules = (props) => {
  const modules = [
    {
      title: "Digital Launchpad",
      subtitle: "Launch Your Business into the Digital World",
      data: [
        { value: 70, title: "Faster Setup" },
        { value: 50, title: "Cost Reduction" },
      ],
      imgPath: "digital-launchpad.jpg",
      path: "/digital-launchpad",
    },
    {
      title: "Brand Amplifier",
      subtitle: "Boost your brand's visibility and engagement",
      data: [
        { value: 30, title: "Increase in customer engagement" },
        { value: 20, title: "More Leads" },
      ],
      imgPath: "brand-amplifier.jpg",
      path: "/brand-amplifier",
    },
    {
      title: "Portfolio Optimizer",
      subtitle: "Streamline and Enhance Your Portfolio's Performance",
      data: [
        { value: 25, title: "Higher ROI" },
        { value: 15, title: "Time Savings" },
      ],
      imgPath: "portfolio-optimizer.jpg",
      path: "/portfolio-optimizer",
    },
    {
      title: "Marketing Dynamo",
      subtitle: "Automate and Elevate Your Marketing Strategy",
      data: [
        { value: 40, title: "Increased Efficiency" },
        { value: 30, title: "More Traffic" },
      ],
      path: "/marketing-dynamo",
      imgPath: "marketing-dynamo.jpg",
    },
    {
      title: "Financial Guardian",
      subtitle: "Efficient Solutions for Revenue and Expense Management",
      data: [
        { value: 50, title: "Faster Invoicing" },
        { value: 20, title: "Better Financial Insights" },
        { value: 10, title: "Revenue Boost" },
      ],
      path: "/financial-guardian",
      imgPath: "financial-guardian.jpg",
    },
    {
      title: "Community Hub",
      subtitle: "Leverage the Power of Your Community",
      data: [
        { value: 35, title: "Higher Customer Retention" },
        { value: 20, title: "More Frequent Interactions" },
      ],
      path: "/community-hub",
      imgPath: "community-hub.jpg",
    },
  ];

  return (
    <div className="translate-up p-8 bg-white">
      <div className="text-3xl font-bold text-center">
        Modules in our Business automation suite
      </div>
      <div className="flex flex-wrap gap-x-6 justify-center my-6">
        {modules.map((module, i) => (
          <div className="my-6" key={`module-${i}`}>
            <FlipCard data={module} />
          </div>
        ))}
      </div>
    </div>
  );
};

Modules.propTypes = {};

export default Modules;
