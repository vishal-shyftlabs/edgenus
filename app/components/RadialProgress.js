import React from "react";

const RadialProgress = ({ progress }) => {
  const radius = 75;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center h-full transition-transform duration-300 ease-in-out hover:scale-110">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform rotate-90"
      >
        <circle
          stroke="lightgray"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="black"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <span className="absolute text-xl font-semibold">{progress}%</span>
    </div>
  );
};

export default RadialProgress;
