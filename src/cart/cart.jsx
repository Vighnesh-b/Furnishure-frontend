import axios from "axios";
import { UserContext } from "../Context/userContext";
import { useContext, useState } from "react";
import PRODUCTS from "../Product_info/product_info";
import './cart.css';
import '../styles/fonts.css';

function Cart() {
    const { user } = useContext(UserContext);
    const [cartData, setCartData] = useState(null);

    const getCartData = async () => {
        try {
            const response = await axios.get(`/getcart?userid=${user.id}`, {
                withCredentials: true,
            });

            setCartData(response.data);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    const handleAdd1ToCart = async (productId) => {
        try {
            await axios.post("/add1tocart", {
                userid: user.id,
                product: productId,
            }, { withCredentials: true });
            getCartData();
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const handleDelete1FromCart = async (productId) => {
        try {
            await axios.post("/delete1fromcart", {
                userid: user.id,
                product: productId,
            }, { withCredentials: true });
            getCartData();
        } catch (error) {
            console.error('Error deleting from cart:', error);
        }
    };

    const totalAmount = () => {
        if (!cartData) {
            return 0;
        }

        return cartData.items.reduce((total, item) => {
            const product = PRODUCTS.find((p) => p.id === parseInt(item.product, 10));
            const price = product ? product.unitPrice : 0;
            return total + price * item.quantity;
        }, 0);
    };

    const totalItems = () => {
        if (!cartData) {
            return 0;
        }

        return cartData.items.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <>
        <br />
            <button className='cartbutton' onClick={getCartData}>Update</button>
            {!cartData?<h1>Cart is Empty</h1>:<br></br>}
            {cartData && (
                <div className="cart-container">
                    <h2>Cart Information</h2>
                    {cartData.items.map(item => (
                        <div key={item.product} className="cart-item">
                            <img className="cart-image" src={PRODUCTS.find((p) => p.id === parseInt(item.product, 10))?.images[0]} alt="img" />
                            <div className="cart-item-info">
                                <p>{PRODUCTS.find((p) => p.id === parseInt(item.product, 10))?.name}</p>
                                <p>By {PRODUCTS.find((p) => p.id === parseInt(item.product, 10))?.brand}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <div className="cart-item-buttons">
                                <button className="cartbutton" onClick={() => handleAdd1ToCart(item.product)}>Add 1</button>
                                <button className="cartbutton" onClick={() => handleDelete1FromCart(item.product)}>Delete 1</button>
                            </div>
                            <hr />
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h2>Cart Summary</h2>
                        <p>Total Items in Cart: {totalItems()}</p>
                        <p>Total Amount: ₹{totalAmount()}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cart;
