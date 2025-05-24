import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDmOHB5Tc_0A3GBFYPbNUSI-lF9xVU5itw",
  authDomain: "chat-f288a.firebaseapp.com",
  projectId: "chat-f288a",
  storageBucket: "chat-f288a.firebasestorage.app",
  messagingSenderId: "146310972653",
  appId: "1:146310972653:web:0060189d09c857803d38e4",
  measurementId: "G-NQMNN4DPZJ",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
