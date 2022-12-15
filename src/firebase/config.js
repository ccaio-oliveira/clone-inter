import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBU5tErMni4N73_5B_HBxuT7hP1Eq4HYPQ",
    authDomain: "ninkler-w.firebaseapp.com",
    projectId: "ninkler-w",
    storageBucket: "ninkler-w.appspot.com",
    messagingSenderId: "389404432920",
    appId: "1:389404432920:web:0338a0934fb53e9bbbc16d",
    measurementId: "G-DC1LZKXCW8"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };