import React from 'react';
import './ShopHero.css';

const ShopHero = ({ title = 'SHOP PAGE' }) => {
    return (
        <section className="shop-hero">
            <div className="shop-hero-content">
                <span className="subtitle">YOU BACK IN</span>
                <h1>{title}</h1>
            </div>
        </section>
    );
};

export default ShopHero;
