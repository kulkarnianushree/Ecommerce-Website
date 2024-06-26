import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Heading = (props) => {
  return (
    <Container>
      <Row>
        <Col className="d-flex align-items-center">
          <button className="btn btn-link">Home</button>
          <button className="btn btn-link">Store</button>
          <button className="btn btn-link ">About</button>
          <Button variant="danger" onClick={props.onChoose}> Cart {props.count}</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Heading;
