import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]); // Add a dependency array to ensure this effect runs when the cart changes

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt={item.title} /> <p>{item.title}</p>
          </div>
          <div>
            <button
              onClick={() => {
                if (item.amount === 1) {
                  handleRemove(item.id);
                } else {
                  handleChange(item, -1);
                }
              }}
            >
              {item.amount === 1 ? (
                <AiTwotoneDelete color="red" size={24} />
              ) : (
                "-"
              )}
            </button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, 1)}> + </button>
          </div>
          <div>
            <span>₹{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs = {price}</span>
        <Link to={`/payment?price=${price}`}>
          <button className="btn btn-success m-2">
            Proceed to Pay ₹{price}
          </button>
        </Link>
      </div>
    </article>
  );
};

export default Cart;
