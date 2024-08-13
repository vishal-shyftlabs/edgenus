import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const ImageCard = ({
  data = {},
  children = <></>,
  idx = null,
  activeId = null,
  setActiveId = () => {},
  className = "",
}) => {
  return (
    <div
      className="img-card relative"
      onClick={() => {
        setActiveId(idx);
      }}
    >
      <div
        style={{
          background: `url(${data.imgPath})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={`rounded-t-md image ${className}`}
      ></div>
      {activeId === idx && (
        <div className="p-3 bg-primary h-3/4 text-white absolute bottom-0 rounded-md w-full !overflow-scroll">
          {data.points?.map((point, i) => (
            <div key={`point-${i}`} className="text-sm py-2">
              <div className="font-bold flex">
                <img
                  alt="point"
                  src="point.png"
                  className="mr-3 h-[13.5px] w-[13.5px] mt-1"
                />{" "}
                {point.title}
              </div>
              <div className="flex">
                <div className="mr-3 h-[13.5px] w-[13.5px] mt-1 invisible" />
                {point.subtitle}
              </div>
            </div>
          ))}
          {children}
        </div>
      )}
    </div>
  );
};

ImageCard.propTypes = {};

export default ImageCard;
