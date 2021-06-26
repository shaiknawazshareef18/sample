import firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const authentication = firebase.auth();
const storage = firebase.storage();

export {firebaseApp};
export {authentication};
export {firestore};
export {storage};