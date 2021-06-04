import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD2k_f1VELHmA1DIxybEHhBMowTtIQXKjY",
    authDomain: "clothing-upright-db.firebaseapp.com",
    projectId: "clothing-upright-db",
    storageBucket: "clothing-upright-db.appspot.com",
    messagingSenderId: "968937485165",
    appId: "1:968937485165:web:cb0ae0f5f84a8d8e926064",
    measurementId: "G-ETHMJYGHV8"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;