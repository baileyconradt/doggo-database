import React from 'react';
import {auth, firestore} from './firebaseStuff.js';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function Home(props) {

const dogsRef = firestore.collection('dogs');
const query = dogsRef.orderBy('createdAt').limit(25);

const [dogs] = useCollectionData(query, {idField: 'id'});

        return (<div>
            These are the doggos:
{dogs && dogs.map(dog => <Dog key={dog.id} dog={dog}/>)}
            </div>);
    
}

function Dog(props){

    const {dogName, uid} = props.dog;

return(<p>{dogName}</p>);
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