import React from "react";
import { User } from "iconsax-reactjs";
import { NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import Logout from "../features/authentication/Logout";

function HeaderMenu() {
  return (
    <ul className=" flex items-center justify-center gap-x-4 ">
      <li>
        <Logout/>
      </li>
      <li>
        <ThemeSwitch />
      </li>
      <li className=" flex mb-0.5 ">
        <NavLink
          to="dashboard"
          className=" dashboard_btn "
        >
          <User className=" size-6 " variant="Broken" />
        </NavLink>
      </li>
    </ul>
  );
}

export default HeaderMenu;
