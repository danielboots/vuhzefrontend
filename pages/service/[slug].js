import { sanityClient, urlFor } from "../../sanity";
import Layout from "@/components/Layout";

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
    <Layout title="About | EDM" description="About| EDM Music Services">
      <div>
        <img
          className="w-full h-32 sm:h-48 object-cover"
          src={mainImage.asset.url}
          alt="meh"
        />
        <h1>about test _rafce</h1>
        <h1>{title}</h1>
        <p>{tagline}</p>
        <p>{description}</p>
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
