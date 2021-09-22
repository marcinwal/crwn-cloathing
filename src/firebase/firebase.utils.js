import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAwhPXYVe06ZY4xMLbfcNmKfpwhVDtTSXo",
    authDomain: "crwn-react-udemy.firebaseapp.com",
    projectId: "crwn-react-udemy",
    storageBucket: "crwn-react-udemy.appspot.com",
    messagingSenderId: "1039559120434",
    appId: "1:1039559120434:web:509885f0ff452a7e3e0e2b",
    measurementId: "G-KRDNMVETKQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

