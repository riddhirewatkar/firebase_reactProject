// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUzBxF4Qg644S8vOwmv4SFTgiNkwISo0w",
  authDomain: "my-app-6de83.firebaseapp.com",
  projectId: "my-app-6de83",
  storageBucket: "my-app-6de83.appspot.com",
  messagingSenderId: "894046389996",
  appId: "1:894046389996:web:7b32ffd883a2230949c7c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);