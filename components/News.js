import Link from "next/link";

const News = ({ post }) => {
  return (
    <div>
      <article>
        <div>
          <div className="bg-white pt-4  rounded-lg overflow-hidden shadow-lg  hover:shadow-2xl transition duration-300 ease-in-out relative border-1">
            <h2 className="text-center py-2 font-gray-500 uppercase font-bold text-gray-600">
              {post.title}
            </h2>

            <img
              className="w-full h-16 sm:h-32 object-cover transform transition duration-500 hover:scale-110 "
              src={post.mainImage.asset.url}
              alt="Latest"
            />
            <div className="bg-gray-800  hover:bg-gray-600 text-white text-xs uppercase font-bold rounded  p-2 absolute top-20  mt-2 ">
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
                className=" m-3 py-3 px-4  uppercase  text-xs  rounded-sm font-bold  text-white bg-gray-900 hover:bg-gray-700 justify-end"
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

export default News;
