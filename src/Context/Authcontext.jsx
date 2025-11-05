import React from "react";
import { createContext } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [connect, setConnect] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [bank, setBank] = React.useState("");
  const [selectedBank, setSelectedBank] = React.useState(null);
  const [isCustomBank, setIsCustomBank] = React.useState(false);
  const [customBankName, setCustomBankName] = React.useState("");
  return (
    <Authcontext.Provider
      value={{
        selectedBank,
        setSelectedBank,
        isCustomBank,
        setIsCustomBank,
        customBankName,
        setCustomBankName,
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
      {children}
    </Authcontext.Provider>
  );
};
