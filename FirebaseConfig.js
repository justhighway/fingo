import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgL2oimgh24pHkvQTV9JYj41JwDfXpTLU",
  authDomain: "fingo-706c1.firebaseapp.com",
  projectId: "fingo-706c1",
  storageBucket: "fingo-706c1.appspot.com",
  messagingSenderId: "724927552048",
  appId: "1:724927552048:web:9d60f28b725e8cebccebf5",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
