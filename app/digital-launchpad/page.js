import React from "react";
import PropTypes from "prop-types";
import ImageCard from "../components/ImageCard";
import RadialProgress from "../components/RadialProgress";
import FlipCard from "../components/FlipCard";

const DigitalLaunchpad = (props) => {
  const data = [
    {
      title: "Domain Mastery",
      subtitle: "Claim your unique online space with the perfect domain name.",
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
      subtitle: "Hosting Optimized hosting solutions for your online store.",
      imgPath: "/ecommerce-powerhouse-hosting.jpg",
      alt: "ecommerce-powerhouse-hosting",
    },
    {
      title: "Smart Inquiry Forms",
      subtitle: "Capture and manage customer inquiries with ease.",
      imgPath: "/smart-enquiry-forms.jpg",
      alt: "smart-enquiry-forms",
    },
  ];
  const numbers = [
    { value: 70, title: "Faster Setup" },
    { value: 50, title: "Cost Reduction" },
  ];
  return (
    <div className=" h-full p-3">
      <div className="text-[35px] mt-5 font-bold">Digital Launchpad</div>
      <div className="text-lg flex flex-wrap pt-5 pb-10">
        Launch Your Business into the Digital World
      </div>
      <div className="flex flex-wrap justify-center">
        {numbers.map((dat, i) => (
          <div className="justify-center" key={`module_data_${i}`}>
            <div className="py-4">
              <RadialProgress progress={dat.value} />
              <div className="px-3 text-center font-bold">{dat.title}</div>
            </div>
          </div>
        ))}
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

DigitalLaunchpad.propTypes = {};

export default DigitalLaunchpad;
