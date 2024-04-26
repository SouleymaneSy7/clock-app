/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from "react";

const ToggleContext = React.createContext();
const ToggleUpdateContext = React.createContext();

export function useToggle() {
  return useContext(ToggleContext);
}

export const useToggleUpdate = () => {
  return useContext(ToggleUpdateContext);
};

export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <ToggleContext.Provider value={toggle}>
      <ToggleUpdateContext.Provider value={handleToggle}>
        {children}
      </ToggleUpdateContext.Provider>
    </ToggleContext.Provider>
  );
};
