import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/CartIcon.component";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

// ? Vite needs a package manager plugin to utilize svg
import { ReactComponent as MyIcon } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase";

// ? Importing styled components.
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
