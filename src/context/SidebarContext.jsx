import React, { createContext, useState } from "react";
export const SidebarContext = createContext();

export const SidebarToogleProvider = ({ children }) => {
  const [isToogled, setIsToogled] = useState(true);
  const toggle = () => {
    setIsToogled(!isToogled);
  };
  return (
    <SidebarContext.Provider value={{ isToogled, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};
