// src/components/CategoryRow.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CategoryRow.css';  // <-- Import our new CSS

export default function CategoryRow() {
  return (
    <Container fluid className="my-5">
      <Row>
        {/* Category 1: New Arrivals */}
        <Col xs={12} sm={6} md={4} className="p-0">
          <div className="category-tile" id="arrivals">
            <img
              src="/images/newarrivals.jpg"
              alt="New Arrivals"
              className="img-fluid"
            />
            <h3>New Arrivals</h3>
          </div>
        </Col>

        {/* Category 2: The Edit */}
        <Col xs={12} sm={6} md={4} className="p-0">
          <div className="category-tile">
            <img
              src="/images/theedit.jpg"
              alt="The Edit"
              className="img-fluid"
            />
            <h3>The Edit</h3>
          </div>
        </Col>

        {/* Category 3: Best Sellers */}
        <Col xs={12} sm={6} md={4} className="p-0">
          <div className="category-tile">
            <img
              src="/images/bestsellers.jpg"
              alt="Best Sellers"
              className="img-fluid"
            />
            <h3>Best-Sellers</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
