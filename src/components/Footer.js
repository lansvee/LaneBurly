// components/Footer.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>1 (800) 555-7890</li>
              <li>support@laneburly.com</li>
              <li>Mon-Fri 9am-5pm PST</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Customers</h5>
            <ul className="list-unstyled">
              <li><a href="/returns" className="text-dark text-decoration-none">Returns &amp; Exchanges</a></li>
              <li><a href="/policy" className="text-dark text-decoration-none">Privacy Policy</a></li>
              <li><a href="/faq" className="text-dark text-decoration-none">FAQ</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-dark text-decoration-none">About LaneBurly</a></li>
              <li><a href="/sustainability" className="text-dark text-decoration-none">Sustainability</a></li>
              <li><a href="/careers" className="text-dark text-decoration-none">Careers</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Get the Latest News</h5>
            <Form>
              <Form.Group controlId="newsletterEmail">
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email address"
                  className="mb-2"
                />
              </Form.Group>
              <Button variant="dark">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center text-muted">
            © 2025 <a href="https://www.laneburly.com" className="text-reset text-decoration-none">laneburly.com</a> - All Rights Reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
