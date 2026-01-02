import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ShopHero from '../components/Shop/ShopHero';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [mainImage, setMainImage] = useState(product?.image);

    if (!product) {
        return <div className="container" style={{ padding: '100px 0' }}>Product not found.</div>;
    }

    const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

    return (
        <div className="product-detail-page">
            <ShopHero title={product.name} />

            <div className="container">
                <div className="product-main-section">
                    <div className="product-gallery">
                        <div className="thumbnail-list">
                            {(product.gallery || [product.image]).map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`thumb-item ${mainImage === img ? 'active' : ''}`}
                                    onClick={() => setMainImage(img)}
                                >
                                    <img src={img} alt={`${product.name} thumb ${idx}`} />
                                </div>
                            ))}
                        </div>
                        <div className="main-image-container">
                            <img src={mainImage} alt={product.name} />
                            {product.badge && <span className={`detail-badge ${product.badge.toLowerCase()}`}>{product.badge}</span>}
                        </div>
                    </div>

                    <div className="product-info-panel">
                        <h1 className="product-title">{product.name}</h1>
                        <div className="product-rating">
                            <span className="stars">★★★★★</span>
                            <span className="review-count">(1 CUSTOMER REVIEW)</span>
                        </div>
                        <p className="product-price-large">{product.price}</p>
                        <p className="product-short-desc">
                            {product.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus, urna quis placerat porta.'}
                        </p>

                        <div className="add-to-cart-section">
                            <div className="quantity-selector">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                <input type="number" value={quantity} readOnly />
                                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <button
                                className="add-btn-large"
                                onClick={() => addToCart(product, quantity)}
                            >ADD TO CART</button>
                        </div>

                        <div className="product-meta">
                            <p><strong>SKU:</strong> <span>{product.sku || '734'}</span></p>
                            <p><strong>CATEGORY:</strong> <span>{product.category || 'ARRIVALS'}</span></p>
                            <p><strong>TAG:</strong> <span>{(product.tags || ['SHOES']).join(', ')}</span></p>
                        </div>
                    </div>
                </div>

                <div className="product-tabs">
                    <div className="tabs-header">
                        <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>DESCRIPTION</button>
                        <button className={activeTab === 'info' ? 'active' : ''} onClick={() => setActiveTab('info')}>ADDITIONAL INFORMATION</button>
                        <button className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>REVIEWS (1)</button>
                    </div>
                    <div className="tabs-content">
                        {activeTab === 'description' && (
                            <div className="tab-pane">
                                <p>{product.details || product.description || 'Detailed description content goes here...'}</p>
                            </div>
                        )}
                        {activeTab === 'info' && (
                            <div className="tab-pane">
                                <p>Weight: 1.5 kg<br />Dimensions: 30 x 20 x 10 cm</p>
                            </div>
                        )}
                        {activeTab === 'reviews' && (
                            <div className="tab-pane">
                                <p>Great product! Highly recommended.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="related-products">
                    <h2 className="section-title">RELATED PRODUCTS</h2>
                    <div className="related-grid">
                        {relatedProducts.map(rp => (
                            <Link to={`/product/${rp.id}`} key={rp.id} className="related-card">
                                <div className="rp-image">
                                    <img src={rp.image} alt={rp.name} />
                                    {rp.badge && <span className={`rp-badge ${rp.badge.toLowerCase()}`}>{rp.badge}</span>}
                                </div>
                                <div className="rp-info">
                                    <p className="rp-price">{rp.price}</p>
                                    <h3>{rp.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
