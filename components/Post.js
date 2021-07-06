import Link from "next/link";
// import { sanityClient, urlFor } from "../sanity";
// import React, { useState, useEffect } from "react";
// import BlockContent from "@sanity/block-content-to-react";

const Post = ({ post }) => {
  return (
    <div>
      <article>
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

            {/* <div className="prose text-center">
              Content goes here!
              <BlockContent
                key={post.id}
                blocks={post.body}
                projectId="ta2muy7p"
                dataset="production"
              />
            </div> */}

            <Link href={`post/${post.slug.current}`}>
              <button
                type="button"
                className=" m-3 py-3 px-4  uppercase  text-xs  rounded-sm font-bold  text-white bg-gray-900 hover:bg-gray-800 justify-end"
              >
                Read Article...
              </button>
            </Link>

            <p className="text-center font-medium text-gray-600 "></p>

            <div className="m-4 text-center">
              <span className="font-bold text-gray-600 "></span>
              <span className="block text-gray-400 font-bold"></span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Post;
