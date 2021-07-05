import { sanityClient } from "../sanity";
import React, { useState, useEffect } from "react";

const Post = () => {
  const [postData, setPost] = useState(null);

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
    <div>
      <main>
        <section>
          <h1>Welcome to the old blog site </h1>

          <div>
            {postData &&
              postData.map((post, index) => (
                <article key={index}>
                  <div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
                      <h2 className="text-center font-black uppercase  text-gray-600">
                        {post.title}
                      </h2>
                      <p className="text-center font-medium text-gray-600 "></p>
                      <img
                        className="w-full h-32 sm:h-48 object-cover"
                        src={post.mainImage.asset.url}
                        alt="meh"
                      />
                      <div className="m-4 text-center">
                        <span className="font-bold text-gray-600 "></span>
                        <span className="block text-gray-400 font-bold"></span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Post;
