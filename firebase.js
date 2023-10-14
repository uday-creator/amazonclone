// Here we are setting up our firebase 
// firebase is for hosting as well as for database

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB-D2L4-o_LcKypHc5Am-8TRp5VDqao7to",
  authDomain: "clone-f0dc8.firebaseapp.com",
  projectId: "clone-f0dc8",
  storageBucket: "clone-f0dc8.appspot.com",
  messagingSenderId: "320453525081",
  appId: "1:320453525081:web:fefba26e0f1e695d4b7b48",
  measurementId: "G-24JRKE3ZZ6"
};

//to use he firebase we have to initalize the app

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };