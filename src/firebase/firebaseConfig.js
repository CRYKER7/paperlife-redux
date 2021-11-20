// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx84FbtNAq_Eocq93fq74QXdyFONlzoW8",
  authDomain: "paperlife-dbfca.firebaseapp.com",
  projectId: "paperlife-dbfca",
  storageBucket: "paperlife-dbfca.appspot.com",
  messagingSenderId: "665269451955",
  appId: "1:665269451955:web:ff5c5765fc6cae409884c6"
};

// Initialize Firebase
const firebaseAPP = firebase.initializeApp(firebaseConfig);

const db = firebaseAPP.firestore();
const auth = firebase.auth();

export {db, auth}