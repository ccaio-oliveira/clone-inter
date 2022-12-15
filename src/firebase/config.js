import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuSa_TGlfNNLXQuId9dfHbY2b3FrMTn3w",
    authDomain: 'ninkler-b6ec1.appspot.com',
    databaseUrl: 'https://mydb.southamerica-east1.firebaseio.com',
    projectId: 'ninkler-b6ec1',
    storageBucket: 'ninkler-b6ec1.appspot.com',
    messagingSenderId: '73383540461',
    appId: "1:73383540461:android:5e9616c185b1c23862fee4"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };