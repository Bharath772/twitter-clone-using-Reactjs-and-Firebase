// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth } from "firebase/auth"; // Import Firebase Auth (if needed)

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

// Initialize Firestore and Firebase Auth
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Firebase Auth (if you want to use auth)

// Export db and auth for use in other parts of the app
export { db, auth };
