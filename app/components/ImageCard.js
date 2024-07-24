import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const ImageCard = ({ data, children }) => {
  return (
    <div className="rounded shadow-lg img-card">
      <div
        style={{
          background: `url(${data.imgPath})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="rounded-t-md image"
      ></div>
      <div className="p-3 bg-white text-black">
        <div className="font-bold">{data.title}</div>
        <div className="h-[48px]">{data.subtitle}</div>
        {children}
      </div>
    </div>
  );
};

ImageCard.propTypes = {};

export default ImageCard;
