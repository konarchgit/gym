import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col about">
                        <h2 className="footer-logo">GYM</h2>
                        <p>Powerlift is a champ in providing its users with absolutely everything a fitness or gym site needs.</p>
                        <div className="footer-socials">
                            <a href="#">IG</a>
                            <a href="#">FB</a>
                            <a href="#">TW</a>
                        </div>
                    </div>

                    <div className="footer-col posts">
                        <h4>Blog Posts</h4>
                        <ul>
                            <li>
                                <a href="#">Time for some gym sessions</a>
                                <span>August 23, 2023</span>
                            </li>
                            <li>
                                <a href="#">Our journey to health</a>
                                <span>August 24, 2023</span>
                            </li>
                            <li>
                                <a href="#">How to max your time</a>
                                <span>August 25, 2023</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col locations">
                        <h4>Locations</h4>
                        <p>123 Healthy Street, Fitness City, NY 10001</p>
                        <p>456 Muscle Avenue, Gym Town, CA 90210</p>
                    </div>

                    <div className="footer-col hours">
                        <h4>Working Hours</h4>
                        <p>Monday - Friday: 07:00 - 22:00</p>
                        <p>Saturday: 09:00 - 20:00</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2023 Powerlift Theme inspired design. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
