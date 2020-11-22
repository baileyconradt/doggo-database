import {Container, Row, Col} from 'react-bootstrap'
import DogSection from './DogSection'
import { auth, firestore } from '../firebaseStuff.js';
import { useState, useEffect } from 'react'

//get top dogs from API
function useDogs() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        firestore.collection('dogs').orderBy('createdAt').limit(25).onSnapshot((snapshot) => {
            const newDogs = snapshot.docs.map((doc) => ({
                id: doc.id,
                ... doc.data()
            }));
            setDogs(newDogs);
        })
       
    }, []);
    return dogs;
}

/**
 * The "Top Dogs" Section on the Main Page
 * @param {object} props 
 */
export default function TopDogs(props) {

    const dogs = useDogs();


    return <Container fluid className='m-3'>
        <Row>
            <Col className='d-flex flex-row'>
            <h2>Top Dogs</h2>
            </Col>
        </Row>
        <Row>
            <Col className='text-left'>
            <p>The highest rated pups in the world.</p>
            </Col>
        </Row>
        <Row>
            <Col className='pl-0'>
            <DogSection dogs={dogs}></DogSection>
            </Col>
        </Row>
    </Container>
}