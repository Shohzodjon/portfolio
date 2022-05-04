import React from "react";
import "./cart.css";
function Cart({ img, title, desc }) {
  return (
    <div className="cart">
      <div className="cart-img">
        <img src={img} alt="cart img" />
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
}

export default Cart;
