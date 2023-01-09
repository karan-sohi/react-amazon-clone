import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";
import CartContext from "./store/cart-context";
import { useContext, useState} from "react";

const Navigation = () => {
  const cartCtx = useContext(CartContext);

  return (
    <header>
      <nav className="navBar">
        <div className="logo">eSHOP</div>
        <form className="navSearch">
          <input type="text" className="searchBar"></input>
          <button type="submit" className="searchButton">
            Search
          </button>
        </form>

        <NavLink to="/login"><button className="signIn">Hello Guest Sign In</button></NavLink>
        <NavLink to="/"><button className="shop">Your Shop</button></NavLink>
        <NavLink to="/checkout"><button className="cartButton" ><HiShoppingBag className="cartIcon" />{cartCtx.totalItems}</button></NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
