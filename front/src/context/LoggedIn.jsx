import { createContext, useEffect, useState } from "react";

export const LoggedInContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
  userID : null,
  setUserID : () => {}
});

export const LoggedInProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem("loggedIn") === "true";
  });

  const [userID, setUserID] = useState(() => {
    return localStorage.getItem("userID");
  });

  //Maintaining the local storage in sync with the global state context
  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn ? "true" : "false");
  }, [loggedIn]);

  const value = {
    loggedIn,
    setLoggedIn,
    userID,
    setUserID
  };

  return (
    <LoggedInContext.Provider value={value}>
      {children}
    </LoggedInContext.Provider>
  );
};
