// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf8dU-Jh9OeEFPQ3FuVFbhftKL80ahktY",
  authDomain: "netflix-gpt-ee0f1.firebaseapp.com",
  projectId: "netflix-gpt-ee0f1",
  storageBucket: "netflix-gpt-ee0f1.appspot.com",
  messagingSenderId: "310668004256",
  appId: "1:310668004256:web:e2cbbf49408e06f32272c5",
  measurementId: "G-FV8SCLE2KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();