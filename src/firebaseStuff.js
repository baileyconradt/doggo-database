import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyCt3f3CieM1c70veWP7iYsD02KdSW8YXoE",
    authDomain: "doggo-database.firebaseapp.com",
    databaseURL: "https://doggo-database.firebaseio.com",
    projectId: "doggo-database",
    storageBucket: "doggo-database.appspot.com",
    messagingSenderId: "999216906840",
    appId: "1:999216906840:web:fce43f2aa66c561773002d",
    measurementId: "G-H4LC5Y3T4F"
  });
  
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  export {auth, firestore}