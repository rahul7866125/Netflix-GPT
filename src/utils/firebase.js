// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0kzJqxa43yE1IoU4x9jO061xfRux2Sis",
  authDomain: "netflix-gpt-27fca.firebaseapp.com",
  projectId: "netflix-gpt-27fca",
  storageBucket: "netflix-gpt-27fca.firebasestorage.app",
  messagingSenderId: "818029117341",
  appId: "1:818029117341:web:80d6aaa079c7be3f19f974",
  measurementId: "G-5HC9W6P5NQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();