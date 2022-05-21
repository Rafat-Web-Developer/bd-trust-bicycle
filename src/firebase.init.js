// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs83_q3sELoEaUlY31FTaJBi_VgNokoyM",
  authDomain: "bd-trust-bicycle.firebaseapp.com",
  projectId: "bd-trust-bicycle",
  storageBucket: "bd-trust-bicycle.appspot.com",
  messagingSenderId: "192684450775",
  appId: "1:192684450775:web:d9b9ece36b8f3d5e842192",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
