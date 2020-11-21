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
          {
            //this is where we would loop through and render each dog using the renderCardsFromDogs function
          }
          <DogCard></DogCard>
          <DogCard></DogCard>
          <DogCard></DogCard>
          <DogCard></DogCard>
          <DogCard></DogCard>
          <DogCard></DogCard>
          <DogCard></DogCard>
        </Col>
      </Row>
    </Container>
  );
}
