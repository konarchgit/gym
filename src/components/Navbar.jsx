import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const { cartItems, removeFromCart, getCartTotal, getCartCount } = useCart();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo-frame">
            <Link to="/" className="navbar-logo">GYM</Link>
          </div>
          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pages">Pages</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li className="has-submenu">
              <Link to="/events">Events</Link>
              <ul className="submenu">
                <li><Link to="/timetable">Timetable</Link></li>
                <li><Link to="/events-single">Event Single</Link></li>
              </ul>
            </li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
          <div className="navbar-actions">
            <div
              className="cart-icon-wrapper"
              onMouseEnter={() => setIsMiniCartOpen(true)}
              onMouseLeave={() => setIsMiniCartOpen(false)}
            >
              <Link to="/cart" className="bag-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span className="bag-count">{getCartCount()}</span>
              </Link>

              {/* Mini Cart Dropdown */}
              {isMiniCartOpen && (
                <div className="mini-cart">
                  {cartItems.length === 0 ? (
                    <p className="empty-msg">No products in the cart.</p>
                  ) : (
                    <>
                      <div className="mini-cart-items">
                        {cartItems.map(item => (
                          <div key={item.id} className="mini-cart-item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-details">
                              <h4>{item.name}</h4>
                              <p>{item.quantity} × {item.price}</p>
                            </div>
                            <button
                              className="remove-item"
                              onClick={() => removeFromCart(item.id)}
                            >×</button>
                          </div>
                        ))}
                      </div>
                      <div className="mini-cart-total">
                        <span>TOTAL:</span>
                        <span className="total-amount">${getCartTotal().toFixed(2)}</span>
                      </div>
                      <Link to="/cart" className="view-checkout-btn">VIEW & CHECKOUT</Link>
                    </>
                  )}
                </div>
              )}
            </div>

            <a href="#info" className="info-link" onClick={() => setIsPanelOpen(true)}>Info</a>
            <button className="menu-toggle" onClick={() => setIsPanelOpen(true)}>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Side Panel Drawer */}
      <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
        <div className="side-panel-header">
          <button className="close-btn" onClick={() => setIsPanelOpen(false)}>
            Close <span>✕</span>
          </button>
        </div>
        <div className="side-panel-content">
          <div className="side-panel-logo-frame">
            <div className="navbar-logo">GYM</div>
          </div>
          <p className="side-panel-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae nunc ut dolor sagittis euismod eget sit amet erat. Mauris porta. Lorem ipsum dolor.
          </p>
          <div className="side-panel-hours">
            <h3>Working Hours</h3>
            <div className="hours-item">
              <span className="day">Monday - Friday:</span>
              <span className="time">07:00 - 21:00</span>
            </div>
            <div className="hours-item">
              <span className="day">Saturday:</span>
              <span className="time">07:00 - 16:00</span>
            </div>
            <div className="hours-item">
              <span className="day">Sunday:</span>
              <span className="time">Closed</span>
            </div>
          </div>
        </div>
        <div className="side-panel-bg-text">ABOUT</div>
      </div>

      {/* Floating Action Bar */}
      <div className="floating-actions">
        <button className="action-btn red">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="10" /></svg>
        </button>
        <button className="action-btn white cart-trigger">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span className="cart-badge-yellow">{getCartCount()}</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
