import React from "react";
import useUser from "../features/authentication/useUser";
import { Element4, Home2, Notepad2, Profile2User } from "iconsax-reactjs";
import CustomNavLink from "./CustomNavlink";
import { useSidebar } from "../context/SidebarContext";

function UserMenus() {
  const { data: user } = useUser();
  const { role } = user || {};
  const { setOpenSideBar } = useSidebar();

  const handleSideBar = () => {
    setOpenSideBar(false)
  };

  if (role === "ADMIN")
    return (
      <>
        <CustomNavLink onClick={handleSideBar} to="dashboard">
          <Home2 className="size-6" variant="Broken" />
          <span className=" menuItem_text ">داشبورد</span>
        </CustomNavLink>
        <CustomNavLink onClick={() => handleSideBar()} to="users">
          <Profile2User className="size-6" variant="Broken" />
          <span className=" menuItem_text ">کاربران</span>
        </CustomNavLink>
        <CustomNavLink onClick={() => handleSideBar()} to="projects">
          <Element4 className="size-6" variant="Broken" />
          <span className=" menuItem_text ">پروژه ها</span>
        </CustomNavLink>{" "}
        <CustomNavLink onClick={() => handleSideBar()} to="proposals">
          <Notepad2 className="size-6" variant="Broken" />
          <span className=" menuItem_text ">درخواست ها</span>
        </CustomNavLink>
      </>
    );

  if (role === "FREELANCER")
    return (
      <>
        <CustomNavLink onClick={() => handleSideBar()} to="dashboard">
          <Home2 className="size-6" variant="Broken" />
          <span className=" menuItem_text ">داشبورد</span>
        </CustomNavLink>
        <CustomNavLink onClick={() => handleSideBar()} to="projects">
          <Element4 className="size-6" variant="Broken" />
          <span className=" menuItem_text ">پروژه ها</span>
        </CustomNavLink>{" "}
        <CustomNavLink onClick={() => handleSideBar()} to="proposals">
          <Notepad2 className="size-6" variant="Broken" />
          <span className=" menuItem_text ">درخواست ها</span>
        </CustomNavLink>
      </>
    );

  if (role === "OWNER")
    return (
      <>
        <CustomNavLink onClick={() => handleSideBar()} to="dashboard">
          <Home2 className="size-6" variant="Broken" />
          <span className=" menuItem_text ">داشبورد</span>
        </CustomNavLink>
        <CustomNavLink onClick={() => handleSideBar()} to="projects">
          <Element4 className="size-6" variant="Broken" />
          <span className=" menuItem_text ">پروژه ها</span>
        </CustomNavLink>
      </>
    );
}

export default UserMenus;
