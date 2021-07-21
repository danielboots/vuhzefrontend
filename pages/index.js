// import Link from "next/link";
// import Info from "@/components/Info";
// import BlockContent from "@sanity/block-content-to-react";
// import Team from "@/components/Team";
// import Process from "@/components/Process";
// import NewsLetter from "@/components/NewsLetter";

// import Head from "next/head";
import { auth } from "firebase";
import { useAuth } from "@/lib/auth";

import { sanityClient } from "/sanity";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import FeatureGrid from "@/components/FeatureGrid";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Post from "@/components/Post";
import Stats from "@/components/Stats";

const Home = ({ service, post }) => {
  const auth = useAuth();
  const [serviceData, setServiceData] = useState(null);
  const [postData, setPost] = useState(null);
  console.log(serviceData);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'service' && featured == true][0..2]{
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

      <div>
        <Partners />

        <div className="container mx-auto p-4 bg-gray-100 m-3">
          <h1 className="font-body  my-4 justify-center text-3xl font-bold text-gray-500 sm:text-2xl">
            Authentication{" "}
          </h1>

          <p className="font-body  my-4 justify-center text-lg font-bold text-gray-500 sm:text-lg">
            Current user:
            <div className="">{auth?.user ? auth.user.email : "None"}</div>
          </p>
          {auth?.user ? (
            <button
              onClick={(e) => auth.signout()}
              className=" p-2  text-sm tracking-widest font-bold uppercase text-md rounded-sm text-white bg-indigo-700 hover:bg-indigo-600 justify-end"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={(e) => auth.signinWithGitHub()}
              className=" p-2  text-sm tracking-widest font-bold uppercase text-md rounded-sm text-white bg-indigo-700 hover:bg-indigo-600 justify-end"
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* <Info />
      <NewsLetter /> */}
    </Layout>
  );
};

export default Home;
