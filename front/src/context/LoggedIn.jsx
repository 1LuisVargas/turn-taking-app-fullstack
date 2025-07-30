import { createContext, useState } from "react";

export const LoggedInContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

export const LoggedInProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const value = {
    loggedIn,
    setLoggedIn,
  };

  return (
    <LoggedInContext.Provider value={value}>
      {children}
    </LoggedInContext.Provider>
  );
};
