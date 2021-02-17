import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA61uXzqO6i3IPoe5cvr0bFF0nizE04cso",
  authDomain: "project-amazop.firebaseapp.com",
  projectId: "project-amazop",
  storageBucket: "project-amazop.appspot.com",
  messagingSenderId: "974321223619",
  appId: "1:974321223619:web:a587e163b7bf43b8ae5f76",
  measurementId: "G-K34XP7XTYV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
