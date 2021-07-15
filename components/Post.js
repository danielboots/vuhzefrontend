import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div>
      <article>
        <div>
          <div className="bg-white pt-4  rounded-lg overflow-hidden shadow-lg  hover:shadow-2xl transition duration-300 ease-in-out relative border-1">
            <h2 className="text-center py-2 font-gray-500 uppercase  text-gray-600">
              {post.title}
            </h2>

            <img
              className="w-full h-32 sm:h-48 object-cover"
              src={post.mainImage.asset.url}
              alt="alt image name"
            />
            <div className="bg-indigo-600 text-white text-xs uppercase font-bold rounded opacity-90 p-2 absolute top-20 ml-2 mt-2 hover:bg-medblue-800">
              <span>{post.tag}</span>
            </div>

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
