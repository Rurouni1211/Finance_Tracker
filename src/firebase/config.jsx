import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDroazdkwwQcbEWQ2dCodk5IldUXC9i9lU",
  authDomain: "financetracker-3fc26.firebaseapp.com",
  projectId: "financetracker-3fc26",
  storageBucket: "financetracker-3fc26.appspot.com",
  messagingSenderId: "523963136705",
  appId: "1:523963136705:web:9db6ebe09b9994f843b240",
};

//init firebase

const app = initializeApp(firebaseConfig);

//init service
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);


const timestamp = Timestamp

export { projectFirestore, projectAuth, timestamp };
