import React from 'react';
import {auth, firestore} from './firebaseStuff.js';
import firebase from 'firebase/app';


export default function Login(props) {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

        return (<div>
<button onClick={signInWithGoogle}>Sign In With Google</button>
            </div>);
    
}