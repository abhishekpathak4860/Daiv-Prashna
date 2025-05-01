import React from "react";

import { useNavigate } from "react-router-dom";

const Node = ({ label, name = "Name", children = [], details, image }) => {
  const navigate = useNavigate();
  const hasChildren = Array.isArray(children) && children.length > 0;

  const handleClick = () => {
    navigate(`/details/${label}`, {
      state: { label, name, details, image },
    });
  };

  return (
    <div className="flex flex-col items-center relative">
      {label == 1 ? (
        <>
          <div className="bg-white  rounded-full p-3 shadow-md w-44 sm:w-[300px] sm:h-full flex flex-col items-center text-center">
            <img
              src={image}
              alt={`Node ${label}`}
              className="w-full h-full object-cover rounded-full"
            />
            <div className="font-semibold text-sm mb-1">{name}</div>
            <div
              className="text-blue-500 text-xs cursor-pointer hover:underline font-bold"
              onClick={handleClick}
            >
              View Details
            </div>
          </div>
          <div className="w-0.5 h-8 bg-gray-400 mb-2 z-0 absolute top-45 md:top-65" />
        </>
      ) : (
        <div
          className={` border-gray-300 ${
            label === "2" || label === "3" || label === "4"
              ? "rounded-full bg-[rgb(255,255,240)]"
              : "rounded-xl bg-amber-300"
          } p-3 shadow-md w-24 sm:w-28 flex flex-col items-center text-center`}
        >
          <img
            src={image}
            alt={`Node ${label}`}
            className="w-full h-full object-cover rounded-full"
          />
          <div className="font-semibold text-sm mb-1">{name}</div>
          <div
            className="text-blue-500 text-xs cursor-pointer hover:underline font-bold"
            onClick={handleClick}
          >
            View Details
          </div>
        </div>
      )}
      {/* <div className="w-0.5 h-6 bg-gray-400 mb-2 z-0" /> */}
      {hasChildren && (
        <>
          {/* <div className="w-px h-4 bg-gray-400 absolute top-full left-1/2 transform -translate-x-1/2 z-0" /> */}
          <div className="flex flex-wrap justify-center items-start mt-4 gap-4 sm:gap-2 relative ">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-400 " />
            {children.map((child, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <div className="w-0.5 h-6 bg-gray-400 mb-2 z-0" />
                {child}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Node;
