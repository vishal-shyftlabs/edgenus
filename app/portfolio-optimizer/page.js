import React from "react";
import PropTypes from "prop-types";
import ImageCard from "../components/ImageCard";

const PortfolioOptimizer = (props) => {
  const data = [
    {
      title: "Unified Portfolio Management",
      subtitle: "Integrate all your assets into a single, cohesive portfolio.",
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
  ];
  return (
    <div className=" h-full p-3">
      <div className="text-[35px] mt-5 font-bold">Portfolio Optimizer</div>
      <div className="text-lg w-full pt-5 pb-10">
        Streamline and Enhance Your Portfolio&amp;s Performance
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

PortfolioOptimizer.propTypes = {};

export default PortfolioOptimizer;
