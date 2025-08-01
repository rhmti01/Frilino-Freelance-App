import React, { useState } from "react";
import useUser from "../features/authentication/useUser";
import UserGreeting from "./UserGreeting";
import HeaderMenu from "./HeaderMenu";
import MenuSidebar from "./MenuSidebar";
import PanelMenuSidebar from "./PanelMenuSideBar";
import { useSidebar } from "../context/SidebarContext";

function PanelHeader() {
  const { isLoading } = useUser();
   const { openSideBar,  setOpenSideBar  } = useSidebar();

  return (
    <div
      className={`  ${
        isLoading ? "  blur-sm bg-white/10" : "bg-secondary-0 dark:bg-dark-900 "
      } flex items-center justify-between w-full xl:pr-3 mm:pl-4 xx:pl-6 xl:pl-9  `}
    >
      <div className="flex items-center justify-center
       xg:gap-x-4 xx:gap-x-3 mm:gap-x-2.5 ">
        <MenuSidebar
          type="panel"
          open={openSideBar}
          changeSideBarStatus={setOpenSideBar}
        >
          <PanelMenuSidebar onClose={()=>setOpenSideBar(false)}/>
        </MenuSidebar>
        <UserGreeting />
      </div>
      <HeaderMenu />
    </div>
  );
}

export default PanelHeader;
