import React from 'react';
import { Link } from 'react-router-dom';
import { products as shopProducts } from '../../data/products';
import { useCart } from '../../context/CartContext';
import './ShopGrid.css';

const ShopGrid = () => {
    const { addToCart } = useCart();

    return (
        <div className="shop-product-grid">
            {shopProducts.map(product => (
                <div key={product.id} className="shop-product-card">
                    <Link to={`/product/${product.id}`} className="shop-product-link">
                        <div className="shop-product-image">
                            <img src={product.image} alt={product.name} />
                            {product.badge && (
                                <span className={`shop-badge ${product.badge.toLowerCase()}`}>
                                    {product.badge}
                                </span>
                            )}
                            <div className="shop-product-actions">
                                <button
                                    className="shop-add-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToCart(product);
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Link>
                    <div className="shop-product-info">
                        <p className="shop-price">
                            {product.oldPrice && <span className="old">{product.oldPrice}</span>}
                            {product.price}
                        </p>
                        <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShopGrid;
