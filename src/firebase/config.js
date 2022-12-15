// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBU5tErMni4N73_5B_HBxuT7hP1Eq4HYPQ",
    authDomain: "ninkler-w.firebaseapp.com",
    projectId: "ninkler-w",
    storageBucket: "ninkler-w.appspot.com",
    messagingSenderId: "389404432920",
    appId: "1:389404432920:web:0338a0934fb53e9bbbc16d",
    measurementId: "G-DC1LZKXCW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);