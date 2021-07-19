import Head from "next/head";
import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";

import Layout from "@/components/Layout";

const about = () => {
  const auth = useAuth();
  if (!auth.user) {
    return "Loading...";
  }

  return (
    <Layout title="About | Vuhze Tech" description="About| Vuhze Tech">
      <p className="font-body  my-4 justify-center text-lg font-bold text-gray-500 sm:text-lg">
        Current user:
        <div className="">{auth?.user ? auth.user.email : "None"}</div>
      </p>
      <EmptyState />
    </Layout>
  );
};

export default about;
