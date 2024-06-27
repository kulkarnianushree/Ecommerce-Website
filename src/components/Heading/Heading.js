import React from "react";
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Heading = (props) => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="d-flex">
            <Nav.Link as={NavLink} to='/Home' className="mx-3">Home</Nav.Link>
            <Nav.Link as={NavLink} to='/Store' className="mx-3">Store</Nav.Link>
            <Nav.Link as={NavLink} to='/About' className="mx-3">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="danger" onClick={props.onChoose}>Cart {props.count}</Button>
      </Container>
    </Navbar>
  );
};

export default Heading;
