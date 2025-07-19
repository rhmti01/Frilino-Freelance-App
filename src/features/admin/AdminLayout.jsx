import React from "react";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import CustomNavLink from "../../ui/CustomNavlink";
import { Element4, Home2, Notepad2, Profile2User } from "iconsax-reactjs";

function AdminLayout() {
  return (
    <div>
      <AppLayout>
        <Sidebar>
          <CustomNavLink to="dashboard">
            <Home2 className="size-6" variant="Broken" />
            <span>داشبورد</span>
          </CustomNavLink>
          <CustomNavLink to="users">
            <Profile2User className="size-6" variant="Broken" />
            <span>کاربران</span>
          </CustomNavLink>
          <CustomNavLink to="projects">
            <Element4 className="size-6" variant="Broken" />
            <span>پروژه ها</span>
          </CustomNavLink>{" "}
          <CustomNavLink to="proposals">
            <Notepad2 className="size-6" variant="Broken" />
            <span>درخواست ها</span>
          </CustomNavLink>
        </Sidebar>
      </AppLayout>
    </div>
  );
}

export default AdminLayout;
