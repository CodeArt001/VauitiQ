import React from "react";
import { createContext } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({ Children }) => {
  const [connect, setConnect] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [bank, setBank] = React.useState("");
  return (
    <Authcontext.Provider
      value={{
        connect,
        setConnect,
        password,
        setPassword,
        bank,
        setBank,
        email,
        setEmail,
      }}
    >
      {Children}
    </Authcontext.Provider>
  );
};
