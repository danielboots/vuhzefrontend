import { sanityClient, urlFor } from "../../sanity";
import Layout from "@/components/Layout";
import Link from "next/link";

const Service = ({
  title,
  slug,
  tagline,
  id,
  mainImage,
  description,
  tags,
}) => {
  return (
    <Layout title={`Services : ${title}`} description="About| Vuhze ">
      <div>
        <main>
          <div>
            {/* Main container div */}
            <div
              style={{
                backgroundImage: `url(${mainImage.asset.url})`,
              }}
              className=" bg-center bg-cover bg-no-repeat m-auto bg-fixed relative h-40v flex justify-center items-center flex-col "
            >
              <div className="absolute h-full w-full flex overflow-x-auto bg-gray-900 bg-opacity-50 backdrop-filter  "></div>
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
                    <p className="text-justify">{description}</p>
                  </div>
                </div>
              </div>
              <Link href="/contact">
                <button
                  type="button"
                  className=" m-3 py-3 px-4  uppercase  text-xs  rounded-sm font-bold  text-white bg-gray-900 hover:bg-gray-800 justify-end"
                >
                  Enquire ...
                </button>
              </Link>
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

  const query = `*[_type == 'service' && slug.current == $pageSlug][0]{
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

}`;

  const service = await sanityClient.fetch(query, { pageSlug });

  if (!service) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: service.title,
        slug: service.slug,
        tagline: service.tagline,
        id: service.id,
        mainImage: service.mainImage,
        description: service.description,
        tags: service.tags,
      },
    };
  }
};

export default Service;
