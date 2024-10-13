import React, { useState } from 'react';
import './Product_page.css';
import PRODUCTS from './product_info';
import { UserContext } from "../Context/userContext"
import { useContext } from "react"
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Product_page({ Id }) { 
  const navigate = useNavigate();
  const selectedProduct = PRODUCTS.find(product => product.id === Id);
  const {user}=useContext(UserContext);
  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const { name, unitPrice, images, description, measurements } = selectedProduct;

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  function handleQuantityChange(e) {
    setQuantity(parseInt(e.target.value, 10));
  }

  const totalPrice = (quantity * unitPrice).toFixed(2);

  const addToCart = async () => {
    
    try {
      const response = await axios.post('/addToCart', {
        userid: user.id,
        product: Id,
        quantity: quantity,
      });
      toast.success(`${name} has been added to cart`);
      console.log('Product added to cart:', response.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <>
      <br />
      <br />
      <div className="product-container">
        <div className="product-image">
          <div className="big-image"><img src={images[selectedImage]} alt="Furniture" /></div>
          <div className="image-gallery">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ₹{index + 1}`}
                className={`thumbnail ₹{index === selectedImage ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="product-details">
          <h2>{name}</h2>
          <p className="price">₹{unitPrice.toFixed(2)}</p>
          <div className="quantity-container">
            <label htmlFor="quantity">Quantity:</label>
            <select
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <p className="total-price">Total Price: ₹{totalPrice}</p>
          <button className="add-to-cart" onClick={!user?()=>navigate('/login'):addToCart}>Add to Cart</button>
        </div>
      </div>
      <div className="description">
        <h2>Product details</h2>
        <p>{description}</p>
        <h2>Measurements</h2>
        <ul className='measurements'>
          {measurements.map((measurement, index) => (
            <li key={index}>{measurement}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Product_page;