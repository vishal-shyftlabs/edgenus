import React from "react";
import PropTypes from "prop-types";
import ImageCard from "./ImageCard";
import Card from "./Card";

const WhyChooseUs = (props) => {
  const modules = [
    {
      title: "Efficient Localization",
      content:
        "With our platform, you can easily localize your content, cutting costs by 20-30% compared to traditional methods.",
    },
    {
      title: "Optimized Digital Marketing",
      content:
        "Our tailored strategies help you reach new markets effectively, potentially boosting conversion rates by up to 40%.",
    },
    {
      title: "Enhanced Team Management & Work Plan Optimization",
      content:
        "Our platform facilitates streamlined project management and communication, improving productivity and reducing operational overhead by up to 25%.",
    },
  ];
  return (
    <div className="px-8 md:px-20 bg-white py-20" id="why-choose-us">
      <div className="text-24 md:text-32 font-bold text-center">
        Why choose us?
      </div>
      <div className="flex flex-wrap gap-x-auto md:gap-x-6 items-center justify-center my-6">
        {modules.map((module, i) => (
          <div className="my-6" key={`module-${i}`}>
            <Card
              title={module.title}
              content={module.content}
              className={`${
                i % 2 == 0 ? "bg-secondary" : "bg-tertiary"
              } min-h-[208px]`}
              data={module}
              idx={i}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

WhyChooseUs.propTypes = {};

export default WhyChooseUs;
