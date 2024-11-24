// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)



export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
if(!userAuth) return;

const userDocRef = doc(db, 'users', userAuth.uid)


const userSnapshot = await getDoc(userDocRef)

if(!userSnapshot.exists()){
  const {displayName, email} = userAuth
  const createdAt = new Date()

  try {
    await setDoc(userDocRef, {
      displayName,
      email, createdAt, ...additionalInformation
    })
  } catch (error) {
    console.log("Error creating user ", error)
  }

}

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password)=> {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const storage = getStorage()