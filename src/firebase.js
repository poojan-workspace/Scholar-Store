import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMQ5EFdXzDo_Hf_QGdL_C1CXmw8jcP1vo",
  authDomain: "scholar-store.firebaseapp.com",
  projectId: "scholar-store",
  storageBucket: "scholar-store.appspot.com",
  messagingSenderId: "215191044037",
  appId: "1:215191044037:web:6f6a713b57398ac7f315ac",
  measurementId: "G-KG60239BWQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
