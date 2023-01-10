import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";
import { BiSearchAlt2 } from "react-icons/bi";
import CartContext from "./store/cart-context";
import { useContext, useState} from "react";
import AuthContext from "./store/auth-context";

const Navigation = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext)

  const handleSignOut = () => {
    authCtx.logOut();
  }

  return (
    <header>
      <nav className="navBar">
        <div className="logo">eSHOP</div>
        <form className="navSearch">
          <input type="text" className="searchBar"></input>
          <button className="searchButton">
            <BiSearchAlt2 className='searchIcon'></BiSearchAlt2>
          </button>
        </form>

        {!authCtx.isLoggedIn && <NavLink to="/login"><button className="navBarButtons"><p>Hello Guest</p>Sign In</button></NavLink>}
        {authCtx.isLoggedIn && <NavLink to="/login"><button className="navBarButtons" onClick={handleSignOut}><p>Hello Guest</p>Sign Out</button></NavLink>}
        <NavLink to="/"><button className="navBarButtons">Your Shop</button></NavLink>
        <NavLink to="/checkout"><button className="navBarButtons" ><HiShoppingBag className="cartIcon" />{cartCtx.totalItems}</button></NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
