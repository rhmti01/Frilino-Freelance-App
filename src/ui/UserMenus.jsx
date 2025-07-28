import React from "react";
import useUser from "../features/authentication/useUser";
import { Element4, Home2, Notepad2, Profile2User } from "iconsax-reactjs";
import CustomNavLink from "./CustomNavlink";

function UserMenus() {
  const { data: user } = useUser();
  const { role } = user || {};
  if (role === "ADMIN")
    return (
      <>
        <CustomNavLink to="dashboard">
          <Home2 className="size-6" variant="Broken" />
          <span className=" menuItem_text " >داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="users">
          <Profile2User className="size-6" variant="Broken" />
          <span className=" menuItem_text " >کاربران</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <Element4 className="size-6" variant="Broken" />
          <span className=" menuItem_text " >پروژه ها</span>
        </CustomNavLink>{" "}
        <CustomNavLink to="proposals">
          <Notepad2 className="size-6" variant="Broken" />
          <span className=" menuItem_text " >درخواست ها</span>
        </CustomNavLink>
      </>
    );

  if (role === "FREELANCER")
    return (
      <>
        <CustomNavLink to="dashboard">
          <Home2 className="size-6" variant="Broken" />
          <span className=" menuItem_text " >داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <Element4 className="size-6" variant="Broken" />
          <span className=" menuItem_text " >پروژه ها</span>
        </CustomNavLink>{" "}
        <CustomNavLink to="proposals">
          <Notepad2 className="size-6" variant="Broken" />
          <span className=" menuItem_text " >درخواست ها</span>
        </CustomNavLink>
      </>
    );

  if (role === "OWNER")
    return (
      <>
        <CustomNavLink to="dashboard">
          <Home2 className="size-6" variant="Broken" />
          <span className=" menuItem_text " >داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <Element4 className="size-6" variant="Broken" />
          <span className=" menuItem_text " >پروژه ها</span>
        </CustomNavLink>
      </>
    );
}

export default UserMenus;
