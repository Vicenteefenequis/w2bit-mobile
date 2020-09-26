
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/database'
import {apiKey,appId,authDomain,databaseURL,messagingSenderId,projectId,storageBucket}  from '../../databaseKeyAcess.json'

  const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain ,
    databaseURL: databaseURL ,
    projectId:projectId ,
    storageBucket: storageBucket ,
    messagingSenderId: messagingSenderId ,
    appId: appId ,
  };
    firebase.initializeApp(firebaseConfig)

  export { firebase }
  