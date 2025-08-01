import { createContext, useEffect, useState } from "react";

export const LoggedInContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

export const LoggedInProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem("loggedIn") === "true";
  });

  //Maintaining the local storage in sync with the global state context
  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn ? "true" : "false");
  }, [loggedIn]);

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
