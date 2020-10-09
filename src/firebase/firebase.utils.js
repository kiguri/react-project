import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBIypPxPykr0O-nZy4Oj7x1LuAAaSmH4aI",
    authDomain: "clothing-shop-db-aacdc.firebaseapp.com",
    databaseURL: "https://clothing-shop-db-aacdc.firebaseio.com",
    projectId: "clothing-shop-db-aacdc",
    storageBucket: "clothing-shop-db-aacdc.appspot.com",
    messagingSenderId: "931795248138",
    appId: "1:931795248138:web:27503c140f168a2182abf3",
    measurementId: "G-MG3JHSKWKR"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>  {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;