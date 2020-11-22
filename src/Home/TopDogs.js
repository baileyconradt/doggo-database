import {Container, Row, Col} from 'react-bootstrap'
import DogSection from './DogSection'

/**
 * The "Top Dogs" Section on the Main Page
 * @param {object} props 
 */
export default function TopDogs(props) {
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
            <DogSection ></DogSection>
            </Col>
        </Row>
    </Container>
}