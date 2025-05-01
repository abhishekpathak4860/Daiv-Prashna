import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function LineageDetail() {
  const { state } = useLocation();
  const { label } = useParams();

  if (!state) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">No data found for person {label}</h2>
      </div>
    );
  }

  const { name, details, image } = state;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        <img
          src={`/${image}`}
          alt={`Node ${label}`}
          className="w-full h-full object-cover rounded-full"
        />
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{details}</p>
      </div>
    </div>
  );
}
