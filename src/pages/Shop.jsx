import React from 'react';
import './Shop.css';
import ShopHero from '../components/Shop/ShopHero';
import ShopSidebar from '../components/Shop/ShopSidebar';
import ShopGrid from '../components/Shop/ShopGrid';

const Shop = () => {
    return (
        <div className="shop-page">
            <ShopHero />
            <div className="container">
                <div className="shop-layout">
                    <main className="shop-main">
                        <div className="shop-toolbar">
                            <div className="results-count">SHOWING 1–12 OF 25 RESULTS</div>
                            <div className="sorting">
                                <select>
                                    <option>Default sorting</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by average rating</option>
                                    <option>Sort by latest</option>
                                    <option>Sort by price: low to high</option>
                                    <option>Sort by price: high to low</option>
                                </select>
                            </div>
                        </div>
                        <ShopGrid />
                        <div className="pagination">
                            <span className="current">1</span>
                            <span>2</span>
                            <span>→</span>
                        </div>
                    </main>
                    <aside className="shop-sidebar">
                        <ShopSidebar />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Shop;
