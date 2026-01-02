import React from 'react';
import './Gallery.css';

const galleryImages = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800',
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800',
    'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=800',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800',
];

const Gallery = () => {
    return (
        <section className="gallery-section">
            <div className="gallery-grid">
                {galleryImages.map((img, index) => (
                    <div key={index} className="gallery-item">
                        <img src={img} alt={`Gallery ${index}`} />
                        <div className="gallery-hover">
                            <span className="plus">+</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
