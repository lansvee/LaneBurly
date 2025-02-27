// src/components/ProductSection.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ProductSection.css'; // <-- Import our custom CSS for hover & color circles

export default function ProductSection() {
  const products = [
    {
      id: 1,
      title: 'Classic Easy Zipper Tote',
      price: '$298',
      image: '/images/zipper.jpg',
      // Each string is a valid CSS color, e.g. hex or color name
      colors: ['#5C5C5C', '#9A9A9A', '#C8AE9F'] 
    },
    {
      id: 2,
      title: 'Concertina Phone Bag',
      price: '$248',
      image: '/images/phonebag.jpg',
      colors: ['#000000', '#594537']
    },
    {
      id: 3,
      title: 'Light Yellow Crossbody',
      price: '$398',
      image: '/images/crossbody.jpg',
      colors: ['#D2B48C', '#333333', '#EEE9E0']
    },
    {
      id: 4,
      title: 'Blue Mini Bag',
      price: '$98',
      image: '/images/blue.jpg',
      colors: ['#F5DEB3', '#FFC0CB', '#000000']
    }
  ];

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">What to Wear Now</h2>
      <Row>
        {products.map((prod) => (
          <Col key={prod.id} md={3} sm={6} xs={12} className="mb-4">
            <Card className="h-100 border-0 shadow-sm product-card">
              <Card.Img
                variant="top"
                src={prod.image}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title className="fw-normal">
                  {prod.title}
                </Card.Title>
                <Card.Text className="text-muted mb-2" style={{ fontStyle: 'italic' }}>
                  {prod.price}
                </Card.Text>

                {/* Color circles appear below price; hidden by default, revealed on hover */}
                <div className="product-colors">
                  {prod.colors.map((clr, index) => (
                    <div
                      key={index}
                      className="color-circle"
                      style={{ backgroundColor: clr }}
                    />
                  ))}
                </div>

                <Button variant="dark" style={{ borderRadius: 0 }}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
