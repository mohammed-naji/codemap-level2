import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcVhbGcV7cc2b9OYYmz4-rFA6mPXva_M0",
  authDomain: "taqat-courses.firebaseapp.com",
  projectId: "taqat-courses",
  storageBucket: "taqat-courses.firebasestorage.app",
  messagingSenderId: "437837095909",
  appId: "1:437837095909:web:2e4aaab7089f443ff6c50c",
  measurementId: "G-E0JTZ4BVPJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();
