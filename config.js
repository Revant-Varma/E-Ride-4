import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDliQQR5a5l9Qy11-LOp7722UOAU1-TSr0",
    authDomain: "e-ride-75042.firebaseapp.com",
    projectId: "e-ride-75042",
    storageBucket: "e-ride-75042.appspot.com",
    messagingSenderId: "390510165588",
  };
/
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
