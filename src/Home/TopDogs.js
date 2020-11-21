import {Container, Row, Col} from 'react-bootstrap'
import DogSection from './DogSection'

export default function TopDogs(props) {
    return <Container fluid className='m-3'>
        <Row>
            <Col className='d-flex flex-row'>
            <h2>Top Dogs</h2>
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