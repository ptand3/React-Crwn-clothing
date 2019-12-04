import firebase from 'firebase/app';  //By doing this we are pulling the firebase library that belongs to the firebase app
import 'firebase/firestore'; //For database
import 'firebase/auth';  //For user authentication


//Web App's Firebase Configuration
//The config object is how firebase knows that your application is connected to your firebase account and database!
const config = {
    apiKey: "AIzaSyBcX9wcl9-orXKOAzvo1D1-aUa7x9W0E64",
    authDomain: "react-crwn-clothing-a3974.firebaseapp.com",
    databaseURL: "https://react-crwn-clothing-a3974.firebaseio.com",
    projectId: "react-crwn-clothing-a3974",
    storageBucket: "react-crwn-clothing-a3974.appspot.com",
    messagingSenderId: "784247527203",
    appId: "1:784247527203:web:62ce256ab14be092c81e96",
    measurementId: "G-ZX6SC9DRHH"
}

//Initialize our firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();  //This give access to new GoogleAuthProvider class from auth library
provider.setCustomParameters({ "prompt": "select_account" });//this allows to pop up the google account whenever the user sign in/authenticats
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;