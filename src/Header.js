import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {  Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispath] = useStateValue();
  const handleAuthentication = () => { 
    if (user) {
      alert('you signout ');
      auth.signOut();
      }
   };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          alt="logoimg"
          src="https://exponential.org/wp-content/uploads/2019/03/amazon-logo_transparentwhite.png"
        />
      </Link>
      <div className="header-search">
        <input className="header-searchinput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-option-1">
              hello {!user ? "gest" : user.email}
            </span>
            <span className="header-option-2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <span className="header-option-1">returns</span>
            <span className="header-option-2">order</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-option-1">your</span>
          <span className="header-option-2">prime</span>
        </div>
        <Link to="/Checkout">
          <div className="header-optionbasket">
            <ShoppingBasketIcon />
            <span className="header-option-2 header-basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
