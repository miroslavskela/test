import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC7Rk7MVvLAJl7dKjQturIWkrlxB4ofQnk",
    authDomain: "e-commerce-eb8f2.firebaseapp.com",
    databaseURL: "https://e-commerce-eb8f2.firebaseio.com",
    projectId: "e-commerce-eb8f2",
    storageBucket: "e-commerce-eb8f2.appspot.com",
    messagingSenderId: "940684691977",
    appId: "1:940684691977:web:e36c58f8696cfeedf206d8",
    measurementId: "G-FJQJGQSZF5"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;