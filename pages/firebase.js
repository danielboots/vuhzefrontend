import Layout from "../components/Layout";

import firebase from "../firebase/initFirebase";
import WriteToCloudFirestore from "@/components/cloudFireStore/Write";

firebase();

const fireBase = () => {
  return (
    <Layout title="About | Vuhze Tech" description="About| Vuhze Tech">
      <h1>firestore test</h1>
      <div>
        cloud firestore test server
        <WriteToCloudFirestore />
      </div>
    </Layout>
  );
};

export default fireBase;
