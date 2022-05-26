
import { getFirestore } from "firebase/firestore";// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHDcaBRj1HWLnUUeN13JZBNMtOdq3p4w8",
  authDomain: "todo-53e0e.firebaseapp.com",
  projectId: "todo-53e0e",
  storageBucket: "todo-53e0e.appspot.com",
  messagingSenderId: "146658232292",
  appId: "1:146658232292:web:012998f5e6fa55c90ae9f1"
};

// Initialize Firebase



const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}