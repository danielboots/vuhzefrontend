import { sanityClient, urlFor } from "@/@/sanity";
import Layout from "@/components/Layout";
import BlockContent from "@sanity/block-content-to-react";

const Post = ({
  title,
  slug,
  body,
  mainImage,
  description,
  tagline,
  author,
  tag,
}) => {
  return (
    <Layout title={`${title}`} description="News Desk">
      <div>
        <main>
          <div>
            {/* Main container div */}
            <div
              style={{
                backgroundImage: `url(${mainImage.asset.url})`,
              }}
              className=" bg-center bg-cover bg-no-repeat m-auto bg-fixed relative h-50v flex justify-center items-center flex-col "
            >
              <div className="absolute h-full w-full flex overflow-x-auto bg-gray-900 bg-opacity-70 backdrop-filter  "></div>
              <h1 className=" text-white z-20 uppercase font-body text-center font-bold  tracking-wider text-3xl  sm:text-4xl md:text-6xl ">
                {title}
              </h1>
            </div>
          </div>

          <article className="font-body  shadow-lg mx-auto ">
            <header className="">
              <div className=" h-full w-full flex items-center justify-center p-8">
                <div className="bg-white rounded p-6">
                  <h1 className="text-4xl mb-4 flex justify-center font-gray-500  text-gray-900 tracking-tight uppercase">
                    {title}
                  </h1>
                  <div>
                    <div className="prose  w-full text-center my-10 ">
                      <BlockContent
                        blocks={body}
                        projectId="b4hlpbby"
                        dataset="production"
                      />
                    </div>
                  </div>
                  <div className=" p-4 justify-end  item-center font-body ">
                    <img
                      className="w-16 h-16 object-cover rounded-full "
                      src={urlFor(author.image).url()}
                      alt="alt tag"
                    />
                    <p className=" text-gray-500">
                      article by: <strong>{author.name}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </header>
          </article>
        </main>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  console.log(pageSlug);

  const query = `*[_type == 'post' && slug.current == $pageSlug][0]{
    title,
    slug,
    body,
  
    
    author-> {
      name, 
      image,
    },

    mainImage {
        asset-> {
            _id,
            url
        },
        alt
    },
  
    description,
    tag,

}`;

  const post = await sanityClient.fetch(query, { pageSlug });

  if (!post) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        mainImage: post.mainImage,
        body: post.body,
        author: post.author,

        tag: post.tag,
      },
    };
  }
};

export default Post;
