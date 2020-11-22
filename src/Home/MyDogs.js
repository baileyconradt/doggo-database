import react from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import AddDog from './AddDog'
import DogSection from './DogSection'
import { auth, firestore } from '../firebaseStuff.js';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';


/**
 * The "My Dogs" section on the main page
 * @param {object} props 
 */
export default function MyDogs(props) {

    const dogsRef = firestore.collection('dogs');
    const query = dogsRef.orderBy('createdAt').limit(25);
  
    const [dogs] = useCollectionData(query, { idField: 'id' });


    return <Container fluid className='m-3'>
        <Row>
            <Col className='d-flex flex-row'>
            <h2 className='mr-3'>My Dogs</h2>
            <AddDog />
            </Col>
        </Row>
        <Row>
            <Col className='text-left'>
            <p>Upload and manage your adorable pups!</p>
            </Col>
        </Row>
        <Row>
            <Col className='pl-0'>
            <DogSection dogs={dogs}></DogSection >
            </Col>
        </Row>
    </Container>
}