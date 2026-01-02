import React from 'react';
import './ShopSidebar.css';

const ShopSidebar = () => {
    return (
        <div className="sidebar-widgets">
            {/* Search */}
            <div className="widget">
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                    <button>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Price Filter */}
            <div className="widget">
                <h3 className="widget-title">PRICE BY RANGE</h3>
                <div className="price-slider-mock">
                    <div className="slider-track"></div>
                    <div className="slider-range"></div>
                    <div className="handle low"></div>
                    <div className="handle high"></div>
                </div>
                <div className="price-filter-actions">
                    <button className="filter-btn">FILTER</button>
                    <span className="price-label">Price: $30 — $150</span>
                </div>
            </div>

            {/* Categories */}
            <div className="widget">
                <h3 className="widget-title">CATEGORIES</h3>
                <ul className="category-list">
                    <li>ARRIVALS <span>(12)</span></li>
                    <li>FASHION <span>(13)</span></li>
                    <li>LIFESTYLE <span>(3)</span></li>
                    <li>NUTRITION <span>(0)</span></li>
                    <li>UNCATEGORIZED <span>(0)</span></li>
                </ul>
            </div>

            {/* Popular Items */}
            <div className="widget">
                <h3 className="widget-title">POPULAR ITEMS</h3>
                <div className="popular-item">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80" alt="item" />
                    <div className="popular-info">
                        <h4>RUNNING SHOES</h4>
                        <p>$80.00</p>
                    </div>
                </div>
                <div className="popular-item">
                    <img src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=100&q=80" alt="item" />
                    <div className="popular-info">
                        <h4>PROTEIN</h4>
                        <p>$30.00</p>
                    </div>
                </div>
                <div className="popular-item">
                    <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=100&q=80" alt="item" />
                    <div className="popular-info">
                        <h4>COLORED TOP</h4>
                        <p>$75.00</p>
                    </div>
                </div>
            </div>

            {/* Tags */}
            <div className="widget">
                <h3 className="widget-title">TAGS</h3>
                <div className="tag-cloud">
                    <span>FIT</span>
                    <span>FITNESS</span>
                    <span>FUNCTIONAL</span>
                    <span>GYM</span>
                    <span>HEALTHY</span>
                    <span>PT</span>
                    <span>STRONG</span>
                    <span>TRAINING</span>
                </div>
            </div>
        </div>
    );
};

export default ShopSidebar;
