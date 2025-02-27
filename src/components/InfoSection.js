// components/InfoSection.js
import React from 'react';
import { Container } from 'react-bootstrap';

export default function InfoSection() {
  return (
    <Container className="my-5 d-flex flex-column align-items-center text-center">
      <h2
        style={{
          fontFamily: 'Didot, serif', 
          fontSize: '2.5rem',
          letterSpacing: '1px',
          fontWeight: 'normal',
          marginBottom: '1rem'
        }}
      >
        The Art of Fewer, Better Choices
      </h2>
      <p
        style={{
          maxWidth: '600px',
          fontStyle: 'italic',
          color: '#555',
          lineHeight: '1.8'
        }}
      >
        Embrace a curated wardrobe of timeless pieces that transcend fleeting trends. 
        We believe elegance is found in thoughtful craftsmanship, refined silhouettes, 
        and a conscious approach to style. Elevate your closet, one purposeful piece at a time.
      </p>
    </Container>
  );
}
