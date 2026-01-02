import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShopHero from '../components/Shop/ShopHero';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
    const [couponCode, setCouponCode] = useState('');

    const subtotal = getCartTotal();

    return (
        <div className="cart-page">
            <ShopHero title="CART" />

            <div className="container">
                <div className="cart-content">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <h2>Your cart is currently empty.</h2>
                            <Link to="/shop" className="return-shop">RETURN TO SHOP</Link>
                        </div>
                    ) : (
                        <>
                            <table className="cart-table">
                                <thead>
                                    <tr>
                                        <th className="product-remove">&nbsp;</th>
                                        <th className="product-thumbnail">&nbsp;</th>
                                        <th className="product-name">PRODUCT</th>
                                        <th className="product-price">PRICE</th>
                                        <th className="product-quantity">QUANTITY</th>
                                        <th className="product-subtotal">SUBTOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => {
                                        const price = parseFloat(item.price.replace('$', ''));
                                        const sub = price * item.quantity;
                                        return (
                                            <tr key={item.id}>
                                                <td className="product-remove">
                                                    <button onClick={() => removeFromCart(item.id)}>×</button>
                                                </td>
                                                <td className="product-thumbnail">
                                                    <Link to={`/product/${item.id}`}>
                                                        <img src={item.image} alt={item.name} />
                                                    </Link>
                                                </td>
                                                <td className="product-name" data-title="Product">
                                                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                                                </td>
                                                <td className="product-price" data-title="Price">
                                                    ${price.toFixed(2)}
                                                </td>
                                                <td className="product-quantity" data-title="Quantity">
                                                    <div className="quantity-box">
                                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                        <input type="number" value={item.quantity} readOnly />
                                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                                    </div>
                                                </td>
                                                <td className="product-subtotal" data-title="Subtotal">
                                                    ${sub.toFixed(2)}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <div className="cart-actions">
                                <div className="coupon-section">
                                    <input
                                        type="text"
                                        placeholder="Coupon code"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                    />
                                    <button className="apply-coupon">APPLY COUPON</button>
                                </div>
                                <button className="update-cart">UPDATE CART</button>
                            </div>

                            <div className="cart-totals">
                                <h2>CART TOTALS</h2>
                                <table>
                                    <tbody>
                                        <tr className="subtotal">
                                            <th>SUBTOTAL</th>
                                            <td>${subtotal.toFixed(2)}</td>
                                        </tr>
                                        <tr className="total">
                                            <th>TOTAL</th>
                                            <td>${subtotal.toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="/checkout" className="checkout-btn-link">
                                    <button className="checkout-btn">PROCEED TO CHECKOUT</button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
