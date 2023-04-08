// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwEdXEimGlOsk_IBtrAhiq_NMDhsOigeI",
  authDomain: "e-rase-82621.firebaseapp.com",
  projectId: "e-rase-82621",
  storageBucket: "e-rase-82621.appspot.com",
  messagingSenderId: "305523301832",
  appId: "1:305523301832:web:3ce74802a62375205a74fd",
  measurementId: "G-NEJEQDR3G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// if (!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
// }
const db = getFirestore();
// const dbb = firebase.firestore();
const auth = getAuth();
// const analytics = getAnalytics(app);

export { db, auth};