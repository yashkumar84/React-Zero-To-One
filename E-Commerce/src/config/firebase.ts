// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcHgJ2QlWcwfQPrYpglG6SYDfEAVqE96E",
  authDomain: "e-commerce-fb4a8.firebaseapp.com",
  projectId: "e-commerce-fb4a8",
  storageBucket: "e-commerce-fb4a8.firebasestorage.app",
  messagingSenderId: "306809809671",
  appId: "1:306809809671:web:8a63cecb2617c52b0b73a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
