import Link from "next/link";
// import { sanityClient, urlFor } from "../sanity";
// import React, { useState, useEffect } from "react";

const Service = ({ service }) => {
  return (
    <div>
      <div className="">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg  hover:shadow-2xl transition duration-300 ease-in-out relative border-1">
          <h2 className=" text-center font-gray-500 uppercase font-bold text-gray-600 m-2 tracking-wider">
            {service.title}
          </h2>

          <p className="text-center font-medium text-gray-600 "></p>
          <img
            className="w-full h-16 sm:h-32 object-cover transform transition duration-500 hover:scale-110 "
            src={service.mainImage.asset.url}
            alt="service web design"
          />
          <div className="bg-gray-800  hover:bg-gray-600 text-white text-xs uppercase font-bold rounded  p-2 absolute top-20  mt-2 ">
            <span>{service.tagline}</span>
          </div>

          <Link href={`service/${service.slug.current}`}>
            <button
              type="button"
              className=" m-3 py-3 px-4  uppercase  text-xs  rounded-sm font-bold  text-white  bg-gray-900 hover:bg-gray-700 justify-end"
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
