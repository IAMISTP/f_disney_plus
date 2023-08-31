// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Tdwpj5c4CtFqFOCj7KCOsNLCkBIunoE",
  authDomain: "react-disney-plus-app-4c0ae.firebaseapp.com",
  projectId: "react-disney-plus-app-4c0ae",
  storageBucket: "react-disney-plus-app-4c0ae.appspot.com",
  messagingSenderId: "939763430352",
  appId: "1:939763430352:web:f46c2c8be0090ce99abfd5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
