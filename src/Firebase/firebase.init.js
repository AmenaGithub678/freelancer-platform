// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKmPrM8-skbRbXKmWNmY7zR7At7RxEGkg",
  authDomain: "freelance-application-5ac09.firebaseapp.com",
  projectId: "freelance-application-5ac09",
  storageBucket: "freelance-application-5ac09.firebasestorage.app",
  messagingSenderId: "693337899755",
  appId: "1:693337899755:web:4930e77018dc1bab8b34ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);