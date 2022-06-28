import React from "react";
import CartCard from "./CartCard";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="all-products-in-cart">
      {cartItems < 1 ? (
        <div className="cart-empty-msg">Your Cart is Empty</div>
      ) : (
        cartItems.map((product, i) => <CartCard key={i} data={product} />)
      )}
      <NavLink to="/Checkout" className="Navlink-header">
        <div className="final-bill">
          <button className="pay-btn">Pay & Checkout</button>
        </div>
      </NavLink>
    </div>
  );
}
