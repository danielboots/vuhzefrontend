import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import "firebase/storage";
// import "firebase/analytics";
// import "firebase/performance";

import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase was successfully init.");
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const SignInWithGoogle = () => auth.signInWithPopup();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

GoogleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
