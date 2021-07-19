import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";

import Layout from "@/components/Layout";

const about = () => {
  const auth = useAuth();
  if (!auth.user) {
    return "Loading...";
  }

  return (
    <Layout
      title="User Dashboard | Vuhze Tech"
      description="User Dashboard| Vuhze Tech"
    >
      <div className="">
        <p className="font-body p-2 ml-7  my-4 justify-center text-lg font-bold text-gray-500 sm:text-lg">
          Welcome:
          <img
            className="inline-block h-48 w-48 rounded-full"
            src={auth.user.photoUrl}
            alt="profile pic"
          />
          <div className="">{auth?.user ? auth.user.email : "None"}</div>
        </p>

        <EmptyState />
      </div>
    </Layout>
  );
};

export default about;
