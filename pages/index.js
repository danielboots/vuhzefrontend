import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

const Home = ({ service }) => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'service'][0..2]{
        title,
        slug,
        tagline,
        id,
        mainImage {
          asset-> {
              _id,
              url,
          },
          alt,
      },
      


        description,
        tags,

    }`
      )
      .then((data) => setServiceData(data))
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <Hero />

      <div className=" p-4 container mx-auto ">
        <h1 className="flex justify-center text-3xl  uppercase ">About</h1>
      </div>

      <div className=" p-4 container mx-auto ">
        <h1 className="flex justify-center text-3xl  uppercase ">
          Our Top Services
        </h1>

        <div className=" m-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceData &&
            serviceData.map((service, index) => (
              <div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
                  <h2 className="text-center font-black uppercase  text-gray-600 m-2">
                    {service.title}
                  </h2>
                  {/* <span className="block text-gray-400 font-bold text-center">
                    {service.tagline}
                  </span> */}
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
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
