// import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
// import Info from "../components/Info";
// import BlockContent from "@sanity/block-content-to-react";
import Service from "@/components/Service";
import FeatureGrid from "@/components/FeatureGrid";
import About from "@/components/About";
import Partners from "@/components/Partners";
// import Team from "@/components/Team";
import Post from "@/components/Post";
// import Process from "@/components/Process";
// import NewsLetter from "@/components/NewsLetter";
import Stats from "@/components/Stats";

const Home = ({ service, post }) => {
  const [serviceData, setServiceData] = useState(null);
  const [postData, setPost] = useState(null);
  console.log(serviceData);

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

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post'][0..2]{
        title,
        slug,
        body,
        tag,
        author-> {
          title, 
        },
       
        mainImage {
            asset-> {
                _id,
                url
            },
            alt
        }
        

    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <div className="font-body ">
        <Hero />

        <FeatureGrid />

        {/* <Team /> */}
        <About />

        <div className=" p-4 container mx-auto font-body ">
          <div className="mt-4  container mx-auto ">
            <h1 className="flex font-body  my-4 justify-center text-3xl font-bold text-gray-700 sm:text-4xl">
              What we do
            </h1>
            <hr className="" />
            <div className=" mt-10 my-6 p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
              {serviceData &&
                serviceData.map((service, index) => (
                  <div>
                    <Service key={service.id} service={service} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Stats />

      <div className="container mx-auto">
        <div>
          <div className=" mt-10 ">
            <h1 className="flex font-body  my-4 justify-center text-3xl font-bold text-gray-700 sm:text-4xl">
              Latest News
            </h1>
            <hr className="" />
          </div>

          <div className=" mt-10 my-6 p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {postData &&
              postData.map((post, index) => (
                <div>
                  <Post key={post.id} post={post} />
                </div>
              ))}
          </div>
        </div>
      </div>

      <Partners />
      {/* <Info />
      <NewsLetter /> */}
    </Layout>
  );
};

export default Home;
