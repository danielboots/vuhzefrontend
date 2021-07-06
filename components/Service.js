import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import React, { useState, useEffect } from "react";

const Service = ({ service }) => {
  return (
    <div>
      <div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
          <h2 className="text-center font-black uppercase  text-gray-600 m-2">
            {service.title}
          </h2>

          <p className="text-center font-medium text-gray-600 "></p>
          <img
            className="w-full h-32 sm:h-48 object-cover"
            src={service.mainImage.asset.url}
            alt="meh"
          />
          <div className="m-4 text-center">
            <span className="font-bold text-gray-600 ">
              {service.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
