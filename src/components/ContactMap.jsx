import React from 'react';
import './ContactMap.css';

const ContactMap = () => {
    return (
        <section className="contact-map-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>FIND US HERE & DROP BY</h2>
                    <p className="contact-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla eu posuere.</p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <p>251 Purple Sunset Avenue</p>
                            <p>Brooklyn, BXY 92101</p>
                            <p>powerlift@example.com</p>
                        </div>
                        <div className="detail-item">
                            <p>251 Purple Sunset Avenue</p>
                            <p>Brooklyn, BXY 92101</p>
                            <p>powerlift@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="map-placeholder">
                    <div className="map-overlay">
                        <div className="kettlebell-marker">
                            <svg viewBox="0 0 100 100" width="60" height="60">
                                <circle cx="50" cy="65" r="30" fill="black" />
                                <path d="M30 45 Q30 5, 50 5 Q70 5, 70 45" fill="none" stroke="black" stroke-width="12" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMap;
