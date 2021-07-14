import Link from "next/link";
// import { sanityClient, urlFor } from "../sanity";
// import React, { useState, useEffect } from "react";

const Service = ({ service }) => {
  return (
    <div>
      <div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg  hover:shadow-2xl transition duration-300 ease-in-out relative border-1">
          <h2 className="text-center font-black uppercase  text-coolgray-600 m-2 tracking-wider">
            {service.title}
          </h2>

          <p className="text-center font-medium text-gray-600 "></p>
          <img
            className="w-full h-16 sm:h-32 object-cover"
            src={service.mainImage.asset.url}
            alt="meh"
          />
          <div className="m-4 text-center">
            <span className=" text-coolgray-600  text-justify font-bold">
              {service.tagline}
            </span>
          </div>

          <Link href={`service/${service.slug.current}`}>
            <button
              type="button"
              className=" m-3 py-3 px-4  uppercase  text-xs  rounded-sm font-bold  text-white  bg-coolgray-700 hover:bg-black justify-end"
            >
              More Info ...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
