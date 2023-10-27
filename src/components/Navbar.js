import React from "react";
import "../styles/navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar({ size, setShow }) {
  return (
    <div>
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={() => setShow(true)}>
            Online Shopping
          </span>
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <AiOutlineShoppingCart />
            </span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
