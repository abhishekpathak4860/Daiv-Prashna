import React from "react";
import { useParams } from "react-router-dom";
import articlesData from "../articlesData";

export default function ArticlesDetails() {
  const { id } = useParams();
  const getData = articlesData.find((data) => data._id === id);

  if (!getData) {
    return (
      <p className="text-center mt-10 text-red-500 text-xl">No Articles...</p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-[rgb(255,255,240)] min-h-screen">
      {/* Author Section */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 max-w-5xl w-full mb-10">
        {/* Author Image */}
        <div className="md:w-3/6 md:h-3/6 h-40 w-40 rounded-full overflow-hidden border-0">
          <img
            src={`/${getData.authorImage}`}
            alt={getData.author}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Author Details */}
        <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left">
          <h2 className="text-2xl font-bold text-custom-maroon mb-2">
            About the Author
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {getData.author}
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            {getData.authorDescription}
          </p>
        </div>
      </div>

      {/* Article Section */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 max-w-5xl w-full mb-10">
        {/* Author Image */}
        <div className="md:w-full h-40 w-40 rounded-full overflow-hidden border-4 ">
          <img
            src={`/${getData.image}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Author Details */}
        <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left">
          <h2 className="text-2xl font-bold text-custom-maroon mb-2">
            {getData.title}
          </h2>

          <p className="text-gray-700 text-base leading-relaxed">
            {getData.articleDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
