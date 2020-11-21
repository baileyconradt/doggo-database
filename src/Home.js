import React from 'react';
import { auth, firestore } from './firebaseStuff.js';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

export default function Home(props) {

    const dogsRef = firestore.collection('dogs');
    const query = dogsRef.orderBy('createdAt').limit(25);

    const [dogs] = useCollectionData(query, { idField: 'id' });

    const [formDogName, setDogName] = useState('');
    const [formBreed, setBreed] = useState('');
    const [formColor, setColor] = useState('');
    const [formBirthday, setBirthday] = useState(new Date());

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL, displayName } = auth.currentUser;

        if (formDogName == '' || formDogName.trim() == '') {
            alert("Please enter in a full name for the dog.")
            return;
        }

        await dogsRef.add({
            dogName: formDogName,
            breed: formBreed,
            color: formColor,
            birthday: formBirthday,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            displayName,
            photoURL
        })
        setDogName('');
        setBreed('');
        setColor('');
        setBirthday(new Date());
    }

    return (<div>
        These are the doggos:
        <Container>
            <Row>
                <Col>{dogs && dogs.map(dog => <Dog key={dog.id} dog={dog} />)}</Col></Row></Container>

        <form onSubmit={sendMessage}>

            <input value={formDogName} placeholder="Dog Name" onChange={(e) => setDogName(e.target.value)}></input>
            <input value={formBreed} placeholder="Breed" onChange={(e) => setBreed(e.target.value)}></input>
            <input value={formColor} placeholder="Color" onChange={(e) => setColor(e.target.value)}></input>
            <input type='date' value={formBirthday} placeholder="Birthday" onChange={(e) => setBirthday(e.target.value)}></input>
            <button type='submit'>Create New Doggo</button>
        </form>
    </div>

    );

}

function Dog(props) {

    const { dogName, breed, color, birthday, displayName } = props.dog;
    const key = props.dog.id;

    const dogsRef = firestore.collection('dogs');

    const deleteDoggo = async (key) => {
        await dogsRef.doc(key).delete();
    }


    return (<Card>
        <Card.Title>{dogName}</Card.Title>
        <Card.Text></Card.Text>
        <Card.Text>Created by: {displayName}</Card.Text>
        <Card.Text>Breed: {breed}</Card.Text>
        <Card.Text>Color: {color}</Card.Text>
        <Card.Text>Birthday: {birthday}</Card.Text>
        <Button onClick={() => deleteDoggo(key)}>Delete Doggo</Button>
    </Card>);
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