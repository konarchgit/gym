import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductGrid.css';

const displayProducts = products.slice(0, 9);

const ProductGrid = () => {
    const { addToCart } = useCart();

    return (
        <section className="product-grid-section">
            <div className="container">
                <div className="product-grid">
                    {displayProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <Link to={`/product/${product.id}`} className="product-image-link">
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                    {product.badge && <span className="badge">{product.badge}</span>}
                                </div>
                            </Link>
                            <div className="product-info">
                                <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
                                <p className="price">{product.price}</p>
                                <button
                                    className="add-to-cart"
                                    onClick={() => addToCart(product)}
                                >Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
