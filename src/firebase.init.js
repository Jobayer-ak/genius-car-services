// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMDJB3LbKsDknC6m9zPRlaX_VYLXso68E",
  authDomain: "genius-car-services-bc8cd.firebaseapp.com",
  projectId: "genius-car-services-bc8cd",
  storageBucket: "genius-car-services-bc8cd.appspot.com",
  messagingSenderId: "1018259815603",
  appId: "1:1018259815603:web:917e91f190087c507504c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
