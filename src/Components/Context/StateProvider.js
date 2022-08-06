import React, { useContext, createContext, useState } from "react";
import { data } from "../../Data/Data";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(data);
  const [isLogin, setIsLogin] = useState("");
  localStorage.setItem("data", JSON.stringify(data));
  return (
    <StateContext.Provider value={[state, setState, isLogin, setIsLogin]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
