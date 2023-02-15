import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
// Vite needs a package manager plugin to utilize svg
import { ReactComponent as MyIcon } from "../../assets/crown.svg";
import "./navigation.scss";

const Navigation = () => {
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
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      {/* Outlet determines position of where the sibling routes go */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
