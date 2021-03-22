import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6BLz2WUbUtIDO8BAJonv4-fkNRNEuB9U",
    authDomain: "twitter-clone-70066.firebaseapp.com",
    databaseURL: "https://twitter-clone-70066.firebaseio.com",
    projectId: "twitter-clone-70066",
    storageBucket: "twitter-clone-70066.appspot.com",
    messagingSenderId: "369268816419",
    appId: "1:369268816419:web:721c059b4cacff7a148f96",
    measurementId: "G-FJZPNTMBV7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;