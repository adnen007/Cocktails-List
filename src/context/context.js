import React, { useContext } from "react";

const mainContext = React.createContext();

const AppContext = ({ children, value }) => {
  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
};

const useMainContext = () => {
  return useContext(mainContext);
};
export { AppContext, useMainContext };
