import { sanityClient, urlFor } from "../../sanity";
import Layout from "@/components/Layout";
import BlockContent from "@sanity/block-content-to-react";

const Post = ({ title, slug, body, mainImage, description, tagline }) => {
  return (
    <Layout title="About | EDM" description="About| EDM Music posts">
      <div>
        <h1>{title}</h1>

        <img
          className="w-full h-32 sm:h-48 object-cover"
          src={mainImage.asset.url}
          alt="meh"
        />

        <div className="prose text-center">
          <BlockContent
            blocks={body}
            projectId="ta2muy7p"
            dataset="production"
          />
        </div>
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
    },
  
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
        mainImage: post.mainImage,
        body: post.body,
      },
    };
  }
};

export default Post;
