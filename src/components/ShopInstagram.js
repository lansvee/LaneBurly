// src/components/ShopInstagram.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function ShopInstagram() {
  // Ensure these files exist in public/images (e.g. public/images/ig-1.jpg)
  const images = [
    '/images/ig-1.jpg',
    '/images/ig-2.jpg',
    '/images/ig-3.jpg',
    '/images/ig-4.jpg',
    '/images/ig-5.jpg'
  ];

  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4">Shop Instagram</h2>
      <Row className="justify-content-center">
        {images.map((imgUrl, index) => (
          <Col key={index} md={2} sm={4} xs={6} className="mb-3">
            <img
              src={imgUrl}
              alt={`Instagram ${index + 1}`}
              className="img-fluid"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
