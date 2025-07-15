import React from "react";
import useUser from "../features/authentication/useUser";
import BrandLogo from "./BrandLogo";
import { enToFaNumber } from "../utils/enToFaNumber";
import { Edit, Home2, LogoutCurve, TableDocument } from "iconsax-reactjs";
import { NavLink } from "react-router-dom";
import useProfileImage from "../hooks/useProfileImage";
import Logout from "../features/authentication/Logout";

export default function Sidebar() {
  const { data, isLoading } = useUser();
  const { name, phoneNumber } = data || {};

  const { profileImage, fileInputRef, triggerFileSelect, handleFileChange } =
    useProfileImage();

  return (
    <div className="  w-full hidden xl:block xl:row-span-2">
      <div className="flex flex-col items-center w-full">
        <div className="mt-2 scale-[60%]">
          <BrandLogo />
        </div>
        <span className="block w-85/100 h-[2px] bg-secondary-200 mt"></span>

        {/* user data section */}
        <div
          className={`  ${
            isLoading ? "bg-white/10 blur-sm" : "bg-secondary-0"
          }   flex flex-col items-center pt-7 pb-3 bg-white w-85/100 mt-7 ring-1 ring-secondary-200 rounded-xl      `}
        >
          <div
            className={`    h-full flex justify-around items-center w-full px-3  `}
          >
            {/* عکس پروفایل */}
            <div
              onClick={triggerFileSelect}
              className="size-[52px] rounded-full overflow-hidden cursor-pointer bg-gray-100 shrink-0"
            >
              <img
                src={profileImage}
                alt="user-profile"
                className="w-full h-full object-cover"
              />
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="flex flex-col items-center gap-y-2 pr-1">
              <h2 className="text-[17px] font-medium text-secondary-700">
                {name}
              </h2>
              <p className="font-medium text-secondary-400">
                {enToFaNumber(String(phoneNumber))}
              </p>
            </div>

            <Edit
              variant="Broken"
              className="size-6 cursor-pointer text-blue-500"
            />
          </div>

          {/* panel pages links */}
          <ul className="flex flex-col mt-14 w-full px-5 justify-start">
            <CostumNavLink to={"/owner/dashboard"}>
              <Home2 className="size-6" variant="Broken" />
              <span>داشبورد</span>
            </CostumNavLink>
            <CostumNavLink to={"/owner/projects"}>
              <TableDocument className="size-6" variant="Broken" />
              <span>پروژه ها</span>
            </CostumNavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CostumNavLink({ children, to }) {
  const navLinkClass = ` hover:bg-blue-100/50 hover:shadow-xs 
   flex items-center gap-x-3 py-2.5 px-4 hover:text-primary-600 duration-300 my-1 rounded-xl  `;

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navLinkClass} bg-blue-100 text-primary-900`
            : `${navLinkClass} text-secondary-800`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
