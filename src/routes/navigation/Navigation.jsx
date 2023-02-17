import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

// Vite needs a package manager plugin to utilize svg
import { ReactComponent as MyIcon } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase";

import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    // Fragment is a component that renders to nothing
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <MyIcon className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      {/* Outlet determines position of where the sibling routes go */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
