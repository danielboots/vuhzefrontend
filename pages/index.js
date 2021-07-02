import Link from "next/link";
import Layout from "../components/Layout";
import { sanityClient, urlFor } from "../sanity";

const Home = ({ projects }) => {
  console.log(projects);

  4;
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-grey-400  hover:text-blue-400">
        EDM Music Services
      </h1>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const query = "*[ _type == 'project']";
  const projects = await sanityClient.fetch(query);

  if (!projects.length) {
    return {
      props: {
        projects: [],
      },
    };
  } else {
    return {
      props: {
        projects,
      },
    };
  }
};

export default Home;
