import React from "react";
import BrandLogo from "./BrandLogo";
import { IoClose } from "react-icons/io5";
import AdminLayout from "../features/admin/AdminLayout";
import Sidebar from "./Sidebar";
import CustomNavLink from "./CustomNavlink";
import { Element4, Home2, Notepad2, Profile2User } from "iconsax-reactjs";
import UserMenus from "./UserMenus";

function PanelMenuSidebar({ onClose }) {
  return (
    <div className="flex flex-col w-full items-start justify-center ">
      <div className="flex justify-between w-full ">
        <BrandLogo scale="scale-60" forceShowText={true} />
        <button onClick={onClose}>
          <IoClose className=" mm:size-7 ww:size-8 text-slate-600 cursor-pointer " />
        </button>
      </div>
      <span className="block w-full h-[2px]  bg-secondary-200 dark:bg-dark-600"></span>
      <div className="flex flex-col w-full mt-3 ">
        <UserMenus/>
      </div>
    </div>
  );
}

export default PanelMenuSidebar;
