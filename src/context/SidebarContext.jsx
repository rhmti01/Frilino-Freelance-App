// src/contexts/SidebarContext.jsx
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleSideBar = () => setOpenSideBar((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ openSideBar, setOpenSideBar, toggleSideBar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
