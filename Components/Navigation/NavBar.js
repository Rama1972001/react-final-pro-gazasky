import React, { useState, useContext } from "react";
import {
  faBars,
  faShoppingCart,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
/* "useContext" hook to access the "GlobalCartContext" which holds the state of the shopping cart. 
"useState" hook to keep track of whether the navigation bar is open or closed. */
export default function NavBar() {
  const { myShoppingCart } = useContext(GlobalCartContext);
  const [toggleNav, setToggelNav] = useState(false);


  /** open and close the navigation bar when the menu  clicked.  takes an event as a parameter and it prevents the default action of the event from happening. Then it toggles the state of the navigation bar by updating the toggleNav state variable using setToggelNav(!toggleNav) which  switch the value from t to f or f to t */
  function handleToggle(e) {
    e.preventDefault();
    setToggelNav(!toggleNav);
  }
  return (
    <div>
      <header>
        <div className="container-nav">
          <nav className={` ${toggleNav ? "active" : ""}`}>
            <div className="menu-icon">
              <FontAwesomeIcon
                icon={faBars}
                className="menu-icon-bar"
                onClick={(e) => handleToggle(e)}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className="menu-icon-close"
                onClick={(e) => handleToggle(e)}
              />
            </div>

            <ul className="navigation-list">
              <li>
                <Link to="/">
                  Home
                </Link>
                {/* <a href="/">Home</a>     */}
              </li>
              <li>
                <Link to="#">
                  Products
                  <i className="icon ">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </i>
                </Link>

                <ul className="products-cat">
                  <li>
                    <Link to="/collections">All</Link>

                  </li>
                  <li>
                    <Link to="/collections/men">Men</Link>
                  </li>
                  <li>
                    <Link to="/collections/women">Women</Link>
                  </li>
                  <li>
                    <Link to="/collections/kids">Kids</Link>
                  </li>
                </ul>
              </li>
              <li>
               
               
              </li>

              <li>
                <Link to="/search">Search for specific product</Link>
              </li>

              <li className="nav-shopping-cart">
                <Link
                  to="/cart"
                  className="cart position-relative d-inline-flex"
                >
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="store-cart-icon"
                  />
                  <span className="cart-basket d-flex align-items-center justify-content-center ">
                    {myShoppingCart.length}{" "}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
