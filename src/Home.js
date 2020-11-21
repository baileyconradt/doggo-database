import React from 'react';
import { auth, firestore } from './firebaseStuff.js';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {useState} from 'react';

export default function Home(props) {

    const dogsRef = firestore.collection('dogs');
    const query = dogsRef.orderBy('createdAt').limit(25);

    const [dogs] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) => {
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser;

        if(formValue == '' || formValue.trim() == ''){
            alert("Please enter in a full name for the dog.")
            return;
        }

        await dogsRef.add({
            dogName: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
        setFormValue('');
    }

    return (<div>
        These are the doggos:
        {dogs && dogs.map(dog => <Dog key={dog.id} dog={dog} />)}
        <form onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)}></input>
            <button type='submit'>Create New Doggo</button>
        </form>
    </div>

    );

}

function Dog(props) {

    const { dogName, breed, color, birthday, uid } = props.dog;

    return (<p>{dogName}</p>);
}

//dogs
    //name
    //id
    //breed
    //color
    //birthday
    //images of the dog
        //user
        //time
        //image URL
        //keywords
        //score
        //upvoteUsers
        //downVoteUsers

//users
    //name
    //id
    //dog(s)