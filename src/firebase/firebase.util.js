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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get('users/125kjkjfijkasdkasjd')
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
      }catch(e){
        console.log("Error creating User", e)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;