import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

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

const storage = firebase.storage();
const storageRef = storage.ref();
const profilePhotosRef = storageRef.child("profilephotos");
// const imagesRef = storageRef.child('images');
// const profilePhotosRef = imagesRef.child('profilephotos');

export { db, profilePhotosRef };
