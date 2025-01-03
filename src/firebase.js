// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMPMODWYmjIdmHgWNjEkzTCTbA28yAOSk",
  authDomain: "login-auth-754a2.firebaseapp.com",
  projectId: "login-auth-754a2",
  storageBucket: "login-auth-754a2.firebasestorage.app",
  messagingSenderId: "263606079962",
  appId: "1:263606079962:web:0ff4324c24e325be16f0e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };