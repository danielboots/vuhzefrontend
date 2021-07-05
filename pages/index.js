import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ServCard from "@/components/ServCard";

const Home = ({ services }) => {
  console.log(services);

  4;
  return (
    <Layout>
      <Hero />

      <div className=" p-4 container mx-auto ">
        <h1 className="flex justify-center text-3xl  uppercase ">
          Our Top Services
        </h1>

        <div className=" m-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {services.length === 0 && <h3>No Services currently</h3>}
          {services.map((services) => (
            <ServCard key={services.id} services={services} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == 'service']`;
  const services = await sanityClient.fetch(query);

  if (!services.length) {
    return {
      props: {
        services: [],
      },
    };
  } else {
    return {
      props: {
        services,
      },
    };
  }
};

export default Home;
