import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Info from "../components/Info";
import BlockContent from "@sanity/block-content-to-react";
import Service from "@/components/Service";

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
        `*[_type == 'post']{
        title,
        slug,
        body,
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
      <Hero />

      <div className="font-body">
        <div className=" p-4 container mx-auto font-body">
          <div className="mt-4 p-4 container mx-auto ">
            <h1 className="flex justify-center text-3xl font-extrabold tracking-tight sm:text-4xl ">
              Our Top Services
            </h1>

            <div className=" m-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
              {serviceData &&
                serviceData.map((service, index) => (
                  <div>
                    <Service key={service.id} service={service} />
                  </div>
                ))}

              {/* <Link href="/service">
                <button
                  type="button"
                  className="m-3 py-3 px-4 uppercase text-xs rounded-sm font-bold text-white bg-gray-900 hover:bg-gray-800 "
                >
                  View Service List
                </button>
              </Link> */}
            </div>
          </div>

          <div>
            <div>
              <div className=" p-4 container mx-auto ">
                <h1 className="flex justify-center text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Latest News
                </h1>
              </div>

              <div className=" m-4 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                {postData &&
                  postData.map((post, index) => (
                    <article key={index}>
                      <div>
                        <div className="bg-white overflow-hidden shadow-lg relative">
                          <h2 className="text-center font-black uppercase  text-gray-600">
                            {post.title}
                          </h2>

                          <img
                            className="w-full h-32 sm:h-48 object-cover"
                            src={post.mainImage.asset.url}
                            alt="meh"
                          />
                          <div className="prose text-center">
                            Content goes here!
                            <BlockContent
                              key={post.id}
                              blocks={post.body}
                              projectId="ta2muy7p"
                              dataset="production"
                            />
                          </div>

                          <p className="text-center font-medium text-gray-600 "></p>

                          <div className="m-4 text-center">
                            <span className="font-bold text-gray-600 "></span>
                            <span className="block text-gray-400 font-bold"></span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Info />
    </Layout>
  );
};

export default Home;
