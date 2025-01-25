// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBKOOuegjXfqTER1veqUqrLfen7yjPezOY",
  authDomain: "authentication-46be6.firebaseapp.com",
  projectId: "authentication-46be6",
  storageBucket: "authentication-46be6.firebasestorage.app",
  messagingSenderId: "828286126369",
  appId: "1:828286126369:web:075e7745fc3e1ab29c9660",
  measurementId: "G-VH0WG7HBFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app,auth}