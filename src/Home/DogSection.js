import react from "react";
import { Container, Row, Col } from "react-bootstrap";
import DogCard from "./DogCard";

export default function DogSection(props) {
  return (
    <Container fluid>
      <Row>
        <Col className='d-flex flex-row'>
          {
            //this is where we would loop through and render each dog
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
