// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxWjrEDqRAZu2jPRWDCy0DIYGPZj_ZIeU",
  authDomain: "netflix-gpt-f8b99.firebaseapp.com",
  projectId: "netflix-gpt-f8b99",
  storageBucket: "netflix-gpt-f8b99.appspot.com",
  messagingSenderId: "527943389694",
  appId: "1:527943389694:web:bf833f026109f3b21e30af",
  measurementId: "G-W8H0TPHLLM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
