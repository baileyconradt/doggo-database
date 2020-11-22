import react from "react";
import { Container, Row, Col } from "react-bootstrap";
import DogCard from "./DogCard";


/**
 * Takes in dogs, spits out cards
 * @param {object} dogs 
 */
function renderCardsFromDogs(dogs) {
    //write function that renders out dog cards here
}

/**
 * A general Dog Section. Pass the list of dogs that you want to render into this component, and it will spit out dog cards for each dog.
 * @param {object} props
 */
export default function DogSection(props) {

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex flex-wrap">
          
          {/* //loop through to render Doggos */}
           {props.dogs && props.dogs.map(dog => <DogCard key={dog.id} dog={dog} />)}
        </Col>
      </Row>
    </Container>
  );
}
