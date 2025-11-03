import React from "react";
import { createContext } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({ Children }) => {
  const [login, setLogin] = React.useState("");
  return (
    <Authcontext.Provider
      value={{
        login,
        setLogin,
      }}
    >
      {Children}
    </Authcontext.Provider>
  );
};
