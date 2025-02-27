// pages/Home.js
import React from 'react';
import AppNavbar from '../components/AppNavbar';
import HeroBanner from '../components/HeroBanner';
import CategoryRow from '../components/CategoryRow';
import ProductSection from '../components/ProductSection';
import InfoSection from '../components/InfoSection';
import ShopInstagram from '../components/ShopInstagram';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Top navigation */}
      <AppNavbar />

      {/* Large hero/billboard area */}
      <HeroBanner />

      {/* Row of category images: New Arrivals, Casual Edit, Best Sellers */}
      <CategoryRow />

      {/* Product grid section: “What to Wear Now” */}
      <ProductSection />

      {/* Optional text section: “The Art of Fewer, Better Choices” */}
      <InfoSection />

      {/* Image gallery row: “Shop Instagram” */}
      <ShopInstagram />

      {/* Footer */}
      <Footer />
    </>
  );
}
