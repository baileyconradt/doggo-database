import React from 'react';
import {auth, firestore} from './firebaseStuff.js';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Col, Container, Row } from 'react-bootstrap';
import DogCard from './Home/DogCard.js';
import DogSection from './Home/DogSection.js';
import MyDogs from './Home/MyDogs.js';
import TopDogs from './Home/TopDogs.js';

export default function Home(props) {

const dogsRef = firestore.collection('dogs');
const query = dogsRef.orderBy('createdAt').limit(25);

const [dogs] = useCollectionData(query, {idField: 'id'});

        return (<div>
            <Container fluid>
        <Row>
            <Col>
            <MyDogs />
            <TopDogs />
            </Col>
            
            
            </Row>
    </Container>
            </div>);
    
}

function Dog(props){

    const {dogName, uid} = props.dog;

return(<div>
    
</div>);
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