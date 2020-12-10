import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCtW0fpW_MnWnOlrbx67VbayAJ9NEDEEeQ",
    authDomain: "filmsta-db.firebaseapp.com",
    projectId: "filmsta-db",
    storageBucket: "filmsta-db.appspot.com",
    messagingSenderId: "561709988621",
    appId: "1:561709988621:web:44d2e5fbf670f3da7d0e44",
    measurementId: "G-HM0MWZ8H7Q"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;