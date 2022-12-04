import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC3x8-Nvv4-exvy7NDjLKRfu3BhAeZsZuk",
  authDomain: "projeto-70-c3bbf.firebaseapp.com",
  projectId: "projeto-70-c3bbf",
  storageBucket: "projeto-70-c3bbf.appspot.com",
  messagingSenderId: "216281587498",
  appId: "1:216281587498:web:ee4e26ad92d42ca6840853"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
