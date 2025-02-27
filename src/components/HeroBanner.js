// src/components/HeroBanner.js
import React from 'react';
import './HeroBanner.css'; // Updated CSS

export default function HeroBanner() {
  return (
    <section
      className="hero-banner d-flex align-items-center"
      style={{
        width: '100%',
        minHeight: '80vh',
        background: `url('/images/hero.jpg') center/cover no-repeat`,
        position: 'relative'
      }}
    >
      {/* Overlay for better text contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.2)'
        }}
      />

      {/* The text container */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '600px'
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '3rem',
            letterSpacing: '1px',
            fontWeight: 'normal',
            color: '#fff',
            marginBottom: '1rem'
          }}
        >
          Elevate Your Style
        </h1>

        <p
          style={{
            fontSize: '1.2rem',
            color: '#f8f8f8',
            marginBottom: '1.5rem'
          }}
        >
          Timeless Fashion, Sustainable Choices
        </p>

        <button
          className="btn btn-dark"
          style={{
            borderRadius: 0,
            letterSpacing: '0.5px',
            padding: '0.75rem 1.5rem'
          }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
