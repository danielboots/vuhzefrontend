import Link from "next/link";
import Layout from "../components/Layout";
import { sanityClient, urlFor } from "../sanity";

import Hero from "../components/Hero";

const Home = ({ projects }) => {
  console.log(projects);

  4;
  return (
    <Layout>
      <Hero />
      <h1 className="text-6xl font-bold text-gray-800 font-body flex justify-center ">
        content here
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
