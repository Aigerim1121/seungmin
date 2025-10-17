// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbIQs5V3DyFtHKzoxksCCuw9tXcVld46Y",
  authDomain: "loll-20093.firebaseapp.com",
  projectId: "loll-20093",
  storageBucket: "loll-20093.firebasestorage.app",
  messagingSenderId: "977037900959",
  appId: "1:977037900959:web:56d046319682bad6be76aa",
  measurementId: "G-MN0MZ6HN2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)