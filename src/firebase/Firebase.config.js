// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDohvv7tmNwv8kwvU3pDbcIKzhcZvHl7QY",
    authDomain: "email-password-firebase-bd17e.firebaseapp.com",
    projectId: "email-password-firebase-bd17e",
    storageBucket: "email-password-firebase-bd17e.appspot.com",
    messagingSenderId: "337223679656",
    appId: "1:337223679656:web:427e4cc97e1d4036c5cc9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;