// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaba3uB6-lMnWd3qGocd7pXsBMMYbGQcQ",
  authDomain: "twitter-clone-fabcb.firebaseapp.com",
  projectId: "twitter-clone-fabcb",
  storageBucket: "twitter-clone-fabcb.firebasestorage.app",
  messagingSenderId: "420655549353",
  appId: "1:420655549353:web:5190e827c103f7836492b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // Use the initialized app to get Firestore

export default db;
