import React from "react";
import PropTypes from "prop-types";
import ImageCard from "../components/ImageCard";

const CommunityHub = (props) => {
  const data = [
    {
      title: "Trusted Network Access",
      subtitle: "Engage with a community that shares your business interests.",
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
  ];
  return (
    <div className=" h-full p-3">
      <div className="text-[35px] mt-5 font-bold">Community Hub</div>
      <div className="text-lg w-full pt-5 pb-10">
        Leverage the Power of Your Community
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

CommunityHub.propTypes = {};

export default CommunityHub;
