import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: "",
  logOut: () => {},
  logIn: () => {},
});

export const AuthContextProvider = (props) => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const logInHandler = () => {
    setIsLoggedIn(true);
  };
  const logOutHandler = () => {
    setIsLoggedIn(false);
  };

  const authValue = {
    isLoggedIn: loggedIn,
    token: "",
    logOut: logOutHandler,
    logIn: logInHandler,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
