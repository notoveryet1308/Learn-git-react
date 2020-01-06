import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAa9G9QWp6RbIB8thQlmueozC-_ZdOaWP4",
    authDomain: "react-crown-db-75334.firebaseapp.com",
    databaseURL: "https://react-crown-db-75334.firebaseio.com",
    projectId: "react-crown-db-75334",
    storageBucket: "react-crown-db-75334.appspot.com",
    messagingSenderId: "181781703710",
    appId: "1:181781703710:web:f28f94c675c40eb69d120f",
    measurementId: "G-2BEHWK28QT"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;