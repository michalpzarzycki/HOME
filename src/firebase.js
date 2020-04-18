// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDZDJUTCJH8tFq6sZ-Exuo53QyFxNhpXlU",
    authDomain: "portfoli-v2.firebaseapp.com",
    databaseURL: "https://portfoli-v2.firebaseio.com",
    projectId: "portfoli-v2",
    storageBucket: "portfoli-v2.appspot.com",
    messagingSenderId: "788610623560",
    appId: "1:788610623560:web:2529754fe6ae080e67907d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()

export default firebase