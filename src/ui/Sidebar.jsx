import React from "react";
import BrandLogo from "./BrandLogo";
import { NavLink } from "react-router-dom";
import { Home2, TableDocument } from "iconsax-reactjs";
import useUser from "../features/authentication/useUser";
import { enToFaNumber } from "../utils/enToFaNumber";

function Sidebar() {
  const { data } = useUser();
  const { name , phoneNumber } = data || {};

  return (
    <div className="w-full  hidden xl:block xl:row-span-2   ">
      <div className=" flex flex-col items-center w-full ">
        <div className="mt-2 scale-[60%]   ">
          <BrandLogo />
        </div>
        <span className=" block w-85/100 h-[2px] bg-secondary-200 mt"></span>
        {/* user data section */}
        <div className=" flex flex-col items-center  pt-7 pb-3 bg-white w-85/100 mt-7  ring-1 ring-secondary-200 rounded-xl ">
          <div className="flex justify-around items-center w-full px-3 ">
            <img
              className=" size-[52px] "
              src="/assets/images/empty-profile-img.png"
              alt="user-profile"
            />
            <div className="flex flex-col items-center gap-y-2 pr-1 ">
              <h2 className=" text-[17px] font-medium text-secondary-700 ">
                {name}
              </h2>
              <p className="  font-medium text-secondary-400 ">
                {enToFaNumber(String(phoneNumber))}
              </p>
            </div>
            <EditInfoBtn />
          </div>
          {/* panel pages links */}
          <ul className="flex flex-col mt-14 w-full px-5 justify-start ">
            <CostumNavLink to={"/owner/dashboard"}>
              <Home2 className="size-6 " variant="Broken" />
              <span>داشبورد</span>
            </CostumNavLink>
            <CostumNavLink to={"/owner/projects"}>
              <TableDocument className="size-6 " variant="Broken" />
              <span>پروژه ها</span>
            </CostumNavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

function CostumNavLink({ children, to }) {
  const navLinkClass =
    " flex items-center gap-x-3 py-2.5 px-4 hover:bg-blue-100/50 hover:shadow-xs hover:text-primary-600 duration-300 my-1 rounded-xl ";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `  ${navLinkClass} bg-blue-100 text-primary-900  `
            : ` ${navLinkClass} text-secondary-800  `
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

function EditInfoBtn() {
  return (
    <svg
      className=" size-8 cursor-pointer mt-2   "
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        fill="#005FF0"
        d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 5.43-2.32 7.75-7.75 7.75Z"
      />
      <path
        fill="#005FF0"
        d="M8.5 17.69c-.61 0-1.17-.22-1.58-.62-.49-.49-.7-1.2-.59-1.95l.43-3.01c.08-.58.46-1.33.87-1.74l7.88-7.88c1.99-1.99 4.01-1.99 6 0 1.09 1.09 1.58 2.2 1.48 3.31-.09.9-.57 1.78-1.48 2.68l-7.88 7.88c-.41.41-1.16.79-1.74.87l-3.01.43c-.13.03-.26.03-.38.03Zm8.07-14.14-7.88 7.88c-.19.19-.41.63-.45.89l-.43 3.01c-.04.29.02.53.17.68.15.15.39.21.68.17l3.01-.43c.26-.04.71-.26.89-.45l7.88-7.88c.65-.65.99-1.23 1.04-1.77.06-.65-.28-1.34-1.04-2.11-1.6-1.6-2.7-1.15-3.87.01Z"
      />
      <path
        fill="#005FF0"
        d="M19.85 9.83c-.07 0-.14-.01-.2-.03a7.937 7.937 0 0 1-5.46-5.46.76.76 0 0 1 .52-.93c.4-.11.81.12.92.52.6 2.13 2.29 3.82 4.42 4.42.4.11.63.53.52.93-.09.34-.39.55-.72.55Z"
      />
    </svg>
  );
}
