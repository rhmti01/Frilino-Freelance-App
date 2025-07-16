import React from "react";
import useUser from "../features/authentication/useUser";
import UserGreeting from "./userGreeting";
import HeaderMenu from "./HeaderMenu";

function PanelHeader() {
  const { isLoading } = useUser();

  return (
    <div
      className={`  ${
        isLoading ? "  blur-sm bg-white/10" : "bg-secondary-0 dark:bg-dark-900 "
      } flex items-center justify-between w-full pr-3 pl-9  `}
    >
      <UserGreeting />
      <HeaderMenu/>
    </div>
  );
}

export default PanelHeader;
