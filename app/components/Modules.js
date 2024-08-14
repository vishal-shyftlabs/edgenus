"use client";
import React, { useEffect, useRef, useState } from "react";
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
      imgPath: "digital-launchpad.png",
      path: "/digital-launchpad",
      points: [
        {
          title: "Domain Mastery",
          subtitle:
            "Claim your unique online space with the perfect domain name.",
          imgPath: "/domain-mastery.jpg",
          alt: "domain-mastery",
        },
        {
          title: "Turbo WordPress Hosting",
          subtitle: "Fast, reliable hosting tailored for WordPress sites.",
          imgPath: "/wordpress-hosting.jpg",
          alt: "wordpress-hosting",
        },
        {
          title: "DIY Website Builders",
          subtitle: "Easy - to - use tools for crafting beautiful websites.",
          imgPath: "/diy-website-builders.jpg",
          alt: "diy-website-builders",
        },
        {
          title: "Seamless Integrations",
          subtitle: "Connect effortlessly with essential tools and platforms.",
          imgPath: "/seamless-integrations.jpg",
          alt: "diy-website-builders",
        },
        {
          title: "E-commerce Powerhouse Hosting",
          subtitle:
            "Hosting Optimized hosting solutions for your online store.",
          imgPath: "/ecommerce-powerhouse-hosting.jpg",
          alt: "ecommerce-powerhouse-hosting",
        },
        {
          title: "Smart Inquiry Forms",
          subtitle: "Capture and manage customer inquiries with ease.",
          imgPath: "/smart-enquiry-forms.jpg",
          alt: "smart-enquiry-forms",
        },
      ],
    },
    {
      title: "Brand Amplifier",
      subtitle: "Boost your brand's visibility and engagement",
      data: [
        { value: 30, title: "Increase in customer engagement" },
        { value: 20, title: "More Leads" },
      ],
      imgPath: "brand-amplifier.png",
      path: "/brand-amplifier",
      points: [
        {
          title: "Interactive Chatbots",
          subtitle:
            "Enhance customer interactions with intelligent automation.",
          imgPath: "/domain-mastery.jpg",
          alt: "domain-mastery",
        },
        {
          title: "B2B Insight Tracker",
          subtitle: "Identify and convert business visitors in real-time.",
          imgPath: "/wordpress-hosting.jpg",
          alt: "wordpress-hosting",
        },
        {
          title: "Effortless Booking Systems",
          subtitle: "Simplify appointment scheduling and management.",
          imgPath: "/diy-website-builders.jpg",
          alt: "diy-website-builders",
        },
        {
          title: "Lead Booster",
          subtitle:
            "Activate and nurture leads to transform them into loyal customers.",
          imgPath: "/seamless-integrations.jpg",
          alt: "diy-website-builders",
        },
      ],
    },
    {
      title: "Portfolio Optimizer",
      subtitle: "Streamline and Enhance Your Portfolio's Performance",
      data: [
        { value: 25, title: "Higher ROI" },
        { value: 15, title: "Time Savings" },
      ],
      imgPath: "portfolio-optimizer.png",
      path: "/portfolio-optimizer",
      points: [
        {
          title: "Unified Portfolio Management",
          subtitle:
            "Integrate all your assets into a single, cohesive portfolio.",
          imgPath: "/domain-mastery.jpg",
          alt: "domain-mastery",
        },
        {
          title: "Insightful Analytics",
          subtitle:
            "Obtain actionable insights to drive portfolio growth and efficiency.",
          imgPath: "/wordpress-hosting.jpg",
          alt: "wordpress-hosting",
        },
      ],
    },
    {
      title: "Marketing Dynamo",
      subtitle: "Automate and Elevate Your Marketing Strategy",
      data: [
        { value: 40, title: "Increased Efficiency" },
        { value: 30, title: "More Traffic" },
      ],
      path: "/marketing-dynamo",
      imgPath: "marketing-dynamo.png",
      points: [
        {
          title: "Social Media Commander",
          subtitle:
            "Enhance customer interactions with intelligent automation.",
          imgPath: "/domain-mastery.jpg",
          alt: "domain-mastery",
        },
        {
          title: "B2B Insight Tracker",
          subtitle: "Identify and convert business visitors in real-time.",
          imgPath: "/wordpress-hosting.jpg",
          alt: "wordpress-hosting",
        },
        {
          title: "Effortless Booking Systems",
          subtitle: "Simplify appointment scheduling and management.",
          imgPath: "/diy-website-builders.jpg",
          alt: "diy-website-builders",
        },
        {
          title: "Lead Booster",
          subtitle:
            "Activate and nurture leads to transform them into loyal customers.",
          imgPath: "/seamless-integrations.jpg",
          alt: "diy-website-builders",
        },
      ],
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
      imgPath: "financial-guardian.png",
      points: [
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
          subtitle:
            "Receive actionable prompts to optimize financial performance.",
          imgPath: "/seamless-integrations.jpg",
          alt: "diy-website-builders",
        },
      ],
    },
    {
      title: "Community Hub",
      subtitle: "Leverage the Power of Your Community",
      data: [
        { value: 35, title: "Higher Customer Retention" },
        { value: 20, title: "More Frequent Interactions" },
      ],
      path: "/community-hub",
      imgPath: "community-hub.png",
      points: [
        {
          title: "Trusted Network Access",
          subtitle:
            "Engage with a community that shares your business interests.",
          imgPath: "/domain-mastery.jpg",
          alt: "domain-mastery",
        },
        {
          title: "Dynamic Groups & Spaces",
          subtitle:
            "Create and manage dedicated spaces for your followers and customers.",
          imgPath: "/wordpress-hosting.jpg",
          alt: "wordpress-hosting",
        },
        {
          title: "Real-Time Updates",
          subtitle:
            "Keep your community informed with the latest news and updates.",
          imgPath: "/diy-website-builders.jpg",
          alt: "diy-website-builders",
        },
      ],
    },
  ];

  const [activeId, setActiveId] = useState(null);

  return (
    <div className="md:px-20 px-8 bg-white py-20" id="modules">
      <div className="text-24 md:text-32 font-bold">
        Modules in our Business automation suite
      </div>
      <div className="flex flex-wrap gap-x-6 justify-center my-6">
        {modules.map((module, i) => (
          <div className="my-6" key={`module-${i}`}>
            <Card
              data={module}
              title={module.title}
              content={module.subtitle}
              idx={i}
              activeId={activeId}
              setActiveId={setActiveId}
              className="w-[312px] h-[352px] !md:w-[504px]"
            >
              <div className="items-center my-5 mx-auto">
                <img src={module.imgPath} className="h-[194px]" />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

Modules.propTypes = {};

export default Modules;
