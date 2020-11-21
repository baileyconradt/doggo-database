import react from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import DogSection from './DogSection'


/**
 * The "My Dogs" section on the main page
 * @param {object} props 
 */
export default function MyDogs(props) {
    return <Container fluid className='m-3'>
        <Row>
            <Col className='d-flex flex-row'>
            <h2 className='mr-3'>My Dogs</h2>
            <Button className='dogButton my-1'>Add</Button>
            </Col>
        </Row>
        <Row>
            <Col className='text-left'>
            <p>Upload and manage your adorable pups!</p>
            </Col>
        </Row>
        <Row>
            <Col>
            <DogSection></DogSection>
            </Col>
        </Row>
    </Container>
}