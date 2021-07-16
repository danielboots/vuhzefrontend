import firebase from "firebase/app";
import "firebase/firestore";
// import { useUser } from "../../firebase/useUser";

const WriteToCloudFirestore = () => {
  //   const { user } = useUser();
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("VuhzeUserCollection")
        .doc("my_doc") // leave as .doc() for a random unique doc name to be assigned
        .set({
          string_data: "Dan - test data",
          //   number_data: 2,
          //   boolean_data: true,
          //   map_data: { stringInMap: "Hi", numberInMap: 7 },
          //   array_data: ["text", 4],
          //   null_data: null,
          //   time_stamp: firebase.firestore.Timestamp.fromDate(
          //     new Date("December 17, 1995 03:24:00")
          //   ),
          //   geo_point: new firebase.firestore.GeoPoint(34.714322, -131.468435),
        })
        .then(alert("Data was successfully sent to cloud firestore!"));
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div style={{ margin: "5px 0" }}>
      <button
        className="m-3 py-3 px-4  uppercase  text-xs  rounded-sm font-bold  text-white bg-gray-900 hover:bg-gray-700 justify-end"
        onClick={sendData}
        style={{ width: "100%" }}
      >
        Send Data To Cloud Firestore
      </button>
    </div>
  );
};

export default WriteToCloudFirestore;
