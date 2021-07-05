import { sanityClient } from "../../sanity";
import React, { useState, useEffect } from "react";
import ServCard from "@/components/ServCard";

const service = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'service']{
        title,
        slug,
        tagline,
        id,
        mainImage,
        description,
        tags,

    }`
      )
      .then((data) => setServiceData(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <section>
        <h1>services</h1>
        <h2>welcome to the projects </h2>
        <section>
          {serviceData &&
            serviceData.map((service, index) => (
              <div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
                  <h2 className="text-center font-black uppercase  text-gray-600">
                    {service.title}
                  </h2>
                  <p className="text-center font-medium text-gray-600 "></p>
                  <img
                    className="w-full h-32 sm:h-48 object-cover"
                    src="https://images.unsplash.com/photo-1551710029-607e06bd45ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80"
                    alt="meh"
                  />
                  <div className="m-4 text-center">
                    <span className="font-bold text-gray-600 ">
                      {service.description}
                    </span>
                    <span className="block text-gray-400 font-bold">
                      {service.tagline}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </section>
    </main>
  );
};

export default service;
