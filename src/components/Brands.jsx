import React from 'react';
import './Brands.css';

const brands = [
    { id: 1, name: 'Brand 1', logo: 'https://powerlift.qodeinteractive.com/wp-content/uploads/2019/08/client-logo-1.png' },
    { id: 2, name: 'Brand 2', logo: 'https://powerlift.qodeinteractive.com/wp-content/uploads/2019/08/client-logo-2.png' },
    { id: 3, name: 'Brand 3', logo: 'https://powerlift.qodeinteractive.com/wp-content/uploads/2019/08/client-logo-3-h.png' },
    { id: 4, name: 'Brand 4', logo: 'https://powerlift.qodeinteractive.com/wp-content/uploads/2019/08/client-logo-4.png' },
];

const Brands = () => {
    return (
        <section className="brands-section">
            <div className="container">
                <div className="brands-grid">
                    {brands.map(brand => (
                        <div key={brand.id} className="brand-item">
                            <img src={brand.logo} alt={brand.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
