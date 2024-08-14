import React from "react";

const Card = ({
  title = "",
  content = "",
  className = "",
  idx = null,
  activeId = null,
  setActiveId = () => {},
  data = {},
  children = <></>,
}) => {
  return (
    <div
      className={`relative rounded overflow-hidden shadow-lg p-6 bg-white ${className}`}
      style={{
        backgroundColor: idx % 2 == 0 ? "#D7D5FF" : "#FFECC7",
      }}
      onMouseOver={() => {
        setActiveId(idx);
      }}
      onMouseOut={() => setActiveId(null)}
    >
      <div className="flex flex-col !justify-between">
        <div>
          <div className="font-bold mb-2 text-primary text-22">{title}</div>
          <p className="text-gray-700 text-wrap text-lg">{content}</p>
        </div>
        {children}
      </div>
      {activeId === idx && (
        <div className="p-3 bg-primary h-2/3 text-white absolute bottom-0 left-0 rounded-md w-full scrollbar">
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
