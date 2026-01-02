import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-split men">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h2>Men's</h2>
                    <div className="hero-cta">
                        <Link to="/shop" className="shop-link">Shop NOW <span>↗</span></Link>
                    </div>
                </div>
            </div>
            <div className="hero-split women">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h2>Women's</h2>
                    <div className="hero-cta">
                        <Link to="/shop" className="shop-link">Shop NOW <span>↗</span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
