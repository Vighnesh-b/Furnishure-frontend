import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SearchBar.css';
import '../styles/fonts.css';

function SearchBar() {
    const [query, setQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const presetProducts = [
        { name: 'Chair', url: '/Chairs' },
        { name: 'Sofas', url: '/Sofas' },
        { name: 'Bed', url: '/Beds' },
        { name: 'Wardrobe', url: '/Wardrobes' },
        { name: 'Lamps & Lighting', url: '/Lamps' },
        { name: 'Dining Set', url: '/Dinings' }
    ];

    const handleChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        setShowDropdown(newQuery.length > 0);
    };

    const handleSelect = (product) => {
        setQuery(product.name);
        setShowDropdown(false);
    };

    const filteredProducts = presetProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
            />
            {showDropdown && (
                <div className="dropdown">
                    {filteredProducts.map((product, index) => (
                        <Link key={index} to={product.url}>
                            <div
                                className="dropdown-item"
                                onClick={() => handleSelect(product)}
                            >
                                {product.name}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
