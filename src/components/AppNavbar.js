// components/AppNavbar.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand 
          href="#" 
          style={{
            fontFamily: "'Playfair Display', serif", 
            fontSize: '1.75rem',
            letterSpacing: '1px'
          }}
        >
          LANE BURLY
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarBasic" />
        <Navbar.Collapse id="navbarBasic">
          <Nav className="ms-auto">
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#arrivals">New Arrivals</Nav.Link>
            <Nav.Link href="#sale">Sale</Nav.Link>
            <Nav.Link href="#journal">Journal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
