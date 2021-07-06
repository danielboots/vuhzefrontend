import { sanityClient, urlFor } from "../../sanity";
import Layout from "@/components/Layout";

const Post = ({ title }) => {
  return (
    <Layout title="About | EDM" description="About| EDM Music posts">
      <div>
        <h1>about </h1>
        <h1>{title}</h1>
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
    mainImage {
        asset-> {
            _id,
            url
        },
        alt
    }
  


    description,
    tags,

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
      },
    };
  }
};

export default Post;
