import React, { useState } from 'react';
import ShopHero from '../components/Shop/ShopHero';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, getCartTotal } = useCart();
    const subtotal = getCartTotal();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: 'India',
        address1: '',
        address2: '',
        city: '',
        state: '',
        pinCode: '',
        phone: '',
        email: '',
        orderNotes: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="checkout-page">
            <ShopHero title="CHECKOUT" />

            <div className="container">
                <div className="checkout-wrapper">
                    <div className="coupon-notice">
                        Have a coupon? <button className="notice-btn">Click here to enter your code</button>
                    </div>

                    <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="checkout-grid">
                            <div className="billing-section">
                                <h2>BILLING DETAILS</h2>
                                <div className="form-row">
                                    <div className="form-group half">
                                        <label>First name *</label>
                                        <input type="text" name="firstName" required onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group half">
                                        <label>Last name *</label>
                                        <input type="text" name="lastName" required onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Company name (optional)</label>
                                    <input type="text" name="companyName" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Country / Region *</label>
                                    <select name="country" value={formData.country} onChange={handleInputChange}>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Street address *</label>
                                    <input type="text" name="address1" placeholder="House number and street name" required onChange={handleInputChange} />
                                    <input type="text" name="address2" placeholder="Apartment, suite, unit, etc. (optional)" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Town / City *</label>
                                    <input type="text" name="city" required onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>State *</label>
                                    <select name="state" required onChange={handleInputChange}>
                                        <option value="">Select an option...</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Karnataka">Karnataka</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>PIN Code *</label>
                                    <input type="text" name="pinCode" required onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Phone *</label>
                                    <input type="tel" name="phone" required onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email address *</label>
                                    <input type="email" name="email" required onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className="additional-section">
                                <h2>ADDITIONAL INFORMATION</h2>
                                <div className="form-group">
                                    <label>Order notes (optional)</label>
                                    <textarea
                                        name="orderNotes"
                                        placeholder="Notes about your order, e.g. special notes for delivery."
                                        rows="5"
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="order-summary-section">
                            <h2>YOUR ORDER</h2>
                            <div className="order-table-wrapper">
                                <table className="order-table">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.name} × {item.quantity}</td>
                                                <td>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                        <tr className="order-subtotal">
                                            <th>Subtotal</th>
                                            <td>${subtotal.toFixed(2)}</td>
                                        </tr>
                                        <tr className="order-total">
                                            <th>Total</th>
                                            <td>${subtotal.toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="payment-notice">
                                <p>Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                            </div>

                            <div className="privacy-notice">
                                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#privacy">privacy policy</a>.</p>
                            </div>

                            <button type="submit" className="place-order-btn">PLACE ORDER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
