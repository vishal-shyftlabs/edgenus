import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";

const FlipCard = ({ data }) => {
  return (
    <div className="rounded-lg">
      <div className="flip-card-front">
        <div
          style={{
            background: `url(${data.imgPath})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "300px",
            height: "200px",
          }}
        />
        <p className="absolute bottom-2 text-white bg-black bg-opacity-80 typewriter-text">
          {data.title}
        </p>
      </div>
      <div className="flip-card-back shadow-lg rounded-lg p-3 py-6 flex flex-col justify-between">
        <div>{data.subtitle}</div>
        <div>
          <Link href={data.path} className="underline flex items-center">
            Know more
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {};

export default FlipCard;
