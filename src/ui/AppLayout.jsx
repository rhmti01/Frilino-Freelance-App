import React from "react";
import { Outlet } from "react-router-dom";
import PanelHeader from "./PanelHeader";

function AppLayout({children}) {
  return (
    <div className=" appLayout ">
      {children}  {/* <Sidebar /> */}
      <PanelHeader />
      <Outlet />
    </div>
  );
}

export default AppLayout;
