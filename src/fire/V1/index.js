import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB_cX54cID2I7sh5cxG9Kp1UG3iJoobx2U",
  authDomain: "signupin-kib.firebaseapp.com",
  databaseURL: "https://signupin-kib.firebaseio.com",
  projectId: "signupin-kib",
  storageBucket: "signupin-kib.appspot.com",
  messagingSenderId: "949632058836"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export { db };
