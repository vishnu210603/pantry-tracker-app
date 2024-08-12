// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzQiCKqVUog5VVMosSlX9Q21p75nHpXI4",
  authDomain: "pantry-tracker-app-9fb3e.firebaseapp.com",
  projectId: "pantry-tracker-app-9fb3e",
  storageBucket: "pantry-tracker-app-9fb3e.appspot.com",
  messagingSenderId: "227330747085",
  appId: "1:227330747085:web:ceedc507fee7dcbf20d784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
