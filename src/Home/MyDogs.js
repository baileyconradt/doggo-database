import react from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DogSection from './DogSection'

export default function MyDogs(props) {
    return <Container fluid className='m-3'>
        <Row>
            <Col className='d-flex flex-row'>
            <h2>My Dogs</h2>
            <p>+ New</p>
            </Col>
        </Row>
        <Row>
            <Col>
            <DogSection></DogSection>
            </Col>
        </Row>
    </Container>
}