import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Brands from './components/Brands';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Blog from './pages/Blog';
import Timetable from './pages/Timetable';
import EventSingle from './pages/EventSingle';
import { CartProvider } from './context/CartContext';

const Home = () => (
  <>
    <Hero />
    <ProductGrid />
    <Brands />
    <Reviews />
    <Gallery />
    <ContactMap />
  </>
);

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/events-single" element={<EventSingle />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
