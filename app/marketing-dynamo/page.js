'use client';
import React from "react";
import PropTypes from "prop-types";
import ImageCard from "../components/ImageCard";

const MarketingDynamo = (props) => {
  const data = [
    {
      title: "Social Media Commander",
      subtitle: "Enhance customer interactions with intelligent automation.",
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
  ];
  return (
    <div className=" h-full p-3">
      <div className="text-[35px] mt-5 font-bold">Marketing Dynamo</div>
      <div className="text-lg w-full pt-5 pb-10">
        Automate and Elevate Your Marketing Strategy
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

MarketingDynamo.propTypes = {};

export default MarketingDynamo;
