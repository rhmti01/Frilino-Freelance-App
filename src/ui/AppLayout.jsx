import React from "react";
import { Outlet } from "react-router-dom";
import PanelHeader from "./PanelHeader";
import Sidebar from "./Sidebar";
import OwnerDashboard from "../pages/OwnerDashboard";

function AppLayout() {
  return (
    <div className=" appLayout ">
      <Sidebar />
      <PanelHeader />
      <Outlet/>
    </div>
  );
}

export default AppLayout;
