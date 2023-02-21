import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/CartIcon.component";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.component";

import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

// ? Vite needs a package manager plugin to utilize svg
import { ReactComponent as MyIcon } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase";

// ? Importing styled components.
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    // Fragment is a component that renders to nothing
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <MyIcon className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            // ? Rendered "as a span" and not a link
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {/* Components are all truthy values as they are functions */}
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      {/* Outlet determines position of where the sibling routes go when laying out, it renders the rest of the new components*/}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
