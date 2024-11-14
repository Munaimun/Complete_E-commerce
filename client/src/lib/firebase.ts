// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7rzWQHOwsFtCbHaGA-oUG2p0hkUJFUn8",
  authDomain: "complete-ecommerce-652a9.firebaseapp.com",
  projectId: "complete-ecommerce-652a9",
  storageBucket: "complete-ecommerce-652a9.firebasestorage.app",
  messagingSenderId: "169233271043",
  appId: "1:169233271043:web:66401e63649eb7ef3f8136"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()