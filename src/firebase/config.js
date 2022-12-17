import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuSa_TGlfNNLXQuId9dfHbY2b3FrMTn3w",
    authDomain: "https://ninkler-b6ec1-default-rtdb.firebaseio.com/",
    projectId: "ninkler-b6ec1",
    storageBucket: "ninkler-b6ec1.appspot.com",
    messagingSenderId: "73383540461",
    appId: "1:73383540461:android:cabe0fbba1042aa362fee4",
    measurementId: "G-DC1LZKXCW8"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };