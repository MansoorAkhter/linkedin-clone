import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9

const firebaseConfig = {
  apiKey: "AIzaSyDg135Y_mER17wG2kYEB9N8lDOZFX4kp-Q",
  authDomain: "linkedin-bymansoor.firebaseapp.com",
  projectId: "linkedin-bymansoor",
  storageBucket: "linkedin-bymansoor.appspot.com",
  messagingSenderId: "12065074501",
  appId: "1:12065074501:web:c7a3d45e6918a57858e22c",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
