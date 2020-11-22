import React from 'react';
import './App.css';
import TopNav from './TopNav.js';
// import Login from './Login.js';
import Home from './Home.js';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import {auth, firestore} from './firebaseStuff'

function App(props) {

  const [user] = useAuthState(auth);

    let main;

    return (
      <div className="App">
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
          />
        <TopNav user={user}/>
        {user ? <Home/> : <div>Please sign in to view doggos :)</div>}
      </div>
    )

}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;