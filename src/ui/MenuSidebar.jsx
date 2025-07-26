import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import React from "react";

function MenuSidebar({ open, changeSideBarStatus , children }) {
  return (
    <>
      <button className="block vv:hidden my-2 mr-6">
        <HiMenuAlt3
          onClick={() => changeSideBarStatus(true)}
          className="text-secondary-800 size-[35px] dark:text-secondary-300"
        />
      </button>

      <div
        className={`fixed inset-0 bg-black/40  z-40 transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => changeSideBarStatus(false)}
      ></div>

      <div
        className={`
          fixed top-0 right-0 h-screen w-full max-w-[300px] z-50 
          bg-secondary-50 dark:bg-dark-900 shadow-lg 
          transform transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          flex flex-col items-center p-4 dark:shadow-dark-800
        `}
      >

        <div className="mt-0 w-full flex justify-center">{children}</div>
      </div>
    </>
  );
}

export default MenuSidebar;
