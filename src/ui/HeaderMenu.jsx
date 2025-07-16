import React from "react";
import { User } from "iconsax-reactjs";
import { NavLink } from "react-router-dom";
import ThemeSwitch from "../ui/ThemeSwitch";
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
          className=" hover:bg-secondary-100 duration-200
       ring-1 rounded-2xl ring-secondary-200 text-secondary-700
        cursor-pointer p-2  shadow-sm shadow-secondary-300
        dark:text-secondary-300 dark:shadow-secondary-600
        dark:bg-dark-800 dark:hover:bg-dark-900 dark:ring-dark-700  "
        >
          <User className=" size-6 " variant="Broken" />
        </NavLink>
      </li>
    </ul>
  );
}

export default HeaderMenu;
