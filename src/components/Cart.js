import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "./store/cart-context";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className="cart">
      <div className="cartHeading">
        <div className="headingCart">
          <h1>Your Shopping Basket</h1>
        </div>
        <div className="subtotal">
          <p>
            Subtotal ({cartCtx.totalItems} items): ${cartCtx.totalAmount}
          </p>
          <label>
            <input type="checkbox"></input>
            This item contains a gift
          </label>
          <NavLink to="/orderItem"><button className="checkoutButton">Proceed to Checkout</button></NavLink>
        </div>
      </div>

      {cartCtx.items.map((item) => (
        <div className="cartProducts">
          <CartItem key={item.id} productInfo={item}></CartItem>
        </div>
      ))}
    </div>
  );
};

export default Cart;
