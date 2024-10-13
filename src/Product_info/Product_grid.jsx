import React, { useState } from 'react';
import './Product_grid.css';
import PRODUCTS from './product_info';

import { useNavigate } from 'react-router-dom';
function Product_grid({ Type }) {
    const navigate = useNavigate();

    const goToProduct = (productId) => {
        navigate(`/${Type}s/${Type}${productId}`);
    };

    const filtered = PRODUCTS.filter((product) => product.type === Type);

    return (
        <>
            <div className="product-grid">
                {filtered.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.images[0]} alt={`Product ${product.id}`} />
                        <h3>{product.name}</h3>
                        <p>By {product.brand}</p>
                        <p>{`₹${product.unitPrice}`}</p>
                        <button onClick={() => goToProduct(product.id)}>VIEW PRODUCT</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Product_grid;