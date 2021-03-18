import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/database";
// import "firebase/storage";

if (!firebase.apps.length)
  firebase.initializeApp({
    // Paste Firebase config object here!
  });

const auth = firebase.auth;
// const db = firebase.database();
// const store = firebase.storage();

module.exports = { auth };
