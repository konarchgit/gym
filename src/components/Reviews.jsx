import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <section className="reviews-section">
            <div className="container">
                <div className="reviews-content">
                    <span className="quote-icon">"</span>
                    <div className="review-text">
                        <h2>Reviews from you</h2>
                        <p>
                            Et harum debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                            repudiandae sint et molestiae non recusandae quidem rerum facilis est
                            et expedita distinctio. Nam libero tempore, cum soluta.
                        </p>
                        <div className="reviewer">
                            <h4>Eloah Shelton</h4>
                            <span>Fitness Trainer</span>
                        </div>
                    </div>
                    <div className="review-nav">
                        <button className="nav-btn prev">←</button>
                        <button className="nav-btn next">→</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
