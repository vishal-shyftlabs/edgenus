import React from "react";

const Card = ({
  title,
  content,
  className,
  idx,
  activeId,
  setActiveId,
  data,
  children,
}) => {
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white ${className} relative`}
      style={{
        backgroundColor: idx % 2 == 0 ? "#D7D5FF" : "#FFECC7",
      }}
      onClick={() => {
        activeId === idx ? setActiveId(null) : setActiveId(idx);
      }}
    >
      <div className="font-bold text-xl mb-2 text-primary">{title}</div>
      <p className="text-gray-700 text-base text-wrap">{content}</p>
      {children}
      {activeId === idx && (
        <div className="p-3 bg-primary h-2/3 text-white absolute bottom-0 left-0 rounded-md w-full !overflow-scroll">
          {data.points?.map((point, i) => (
            <div key={`point-${i}`} className="text-sm py-2">
              <div className="font-bold flex ">
                <img
                  alt="point"
                  src="point.png"
                  className="mr-3 h-[13.5px] w-[13.5px] mt-1"
                />
                {point.title}
              </div>
              <div className="flex">
                <div className="mr-3 h-[13.5px] w-[13.5px] mt-1 invisible" />
                {point.subtitle}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
