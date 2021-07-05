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
                  <img
                    className="h-80 w-100"
                    src={post.mainImage.asset.url}
                    alt="post image"
                  />
                  <span>
                    <p key={post.id} post={post}>
                      <h2> {post.title}</h2>
                    </p>
                  </span>
                </article>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Post;
