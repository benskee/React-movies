import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBHEoF5MzHZBZJZubWFh9xJy_xnVaaqXo4",
    authDomain: "react-shopping-cart-aa6f6.firebaseapp.com",
    databaseURL: "https://react-shopping-cart-aa6f6.firebaseio.com",
    projectId: "react-shopping-cart-aa6f6",
    storageBucket: "react-shopping-cart-aa6f6.appspot.com",
    messagingSenderId: "996217398404",
    appId: "1:996217398404:web:72ebb407d2563228de4ed1",
    measurementId: "G-D4ZGB6JHXY"
};

firebase.initializeApp(firebaseConfig);

export default firebase;