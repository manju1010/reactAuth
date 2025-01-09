// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5fzTIc-0SV20imqM3jl2Toic_h80Tp_U",
  authDomain: "fir-frontend-586fe.firebaseapp.com",
  projectId: "fir-frontend-586fe",
  storageBucket: "fir-frontend-586fe.firebasestorage.app",
  messagingSenderId: "588625267121",
  appId: "1:588625267121:web:96061589d7d9d96feb1590",
  measurementId: "G-9EYZ02BW4W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  database  = getFirestore(app);
