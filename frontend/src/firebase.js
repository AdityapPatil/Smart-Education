// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI2L1wSnHr4H-VnrQSP2q6gk2lcnH1QLA",
  authDomain: "smart-education-967aa.firebaseapp.com",
  projectId: "smart-education-967aa",
  storageBucket: "smart-education-967aa.firebasestorage.app",
  messagingSenderId: "930239785259",
  appId: "1:930239785259:web:c128f606b2675da1783d6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);