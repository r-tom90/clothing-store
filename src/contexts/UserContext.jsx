import React, { createContext, useState } from "react";

// 2 pieces for to create a context, the UserContext and UserProvider

//UserContext is the storage piece itself with the default value. "The actual value you want to access"
export const UserContext = createContext({
  // The context always needs a initial value
  currentUser: null,
  setCurrentUser: () => null,
});

// Provider is the component, it goes to the index or main jsx and wraps the App component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
