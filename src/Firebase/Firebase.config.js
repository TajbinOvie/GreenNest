// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD99mWdbo8j6MvVyzzBIGjDuyhd8Q_n-O0",
  authDomain: "greennest-auth.firebaseapp.com",
  projectId: "greennest-auth",
  storageBucket: "greennest-auth.firebasestorage.app",
  messagingSenderId: "57730258007",
  appId: "1:57730258007:web:83625da737d7bf2fb17f12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;