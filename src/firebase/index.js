import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCsTbyVEtzQF4_WC40cc8StJveZlim1F-8",
    authDomain: "uc-cs-proj.firebaseapp.com",
    projectId: "uc-cs-proj",
    storageBucket: "uc-cs-proj.appspot.com",
    messagingSenderId: "1012431146150",
    appId: "1:1012431146150:web:36e845235a099386f6b867",
    measurementId: "G-ZZN5WNF5RC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const authentication = firebase.auth();
const storage = firebase.storage();

export {firebaseApp};
export {authentication};
export {firestore};
export {storage};