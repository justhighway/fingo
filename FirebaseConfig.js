// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk-7BUxfppJckeZFGuA1EV8xMiFyMfn0k",
  authDomain: "fingo123.firebaseapp.com",
  projectId: "fingo123",
  storageBucket: "fingo123.appspot.com",
  messagingSenderId: "166536804864",
  appId: "1:166536804864:web:605fb3acd221f750a2b6e5",
};

// Initialize Firebase
export const FB_APP = initializeApp(firebaseConfig);
export const FB_AUTH = getAuth(FB_APP);
export const FB_DB = getFirestore(FB_APP);
