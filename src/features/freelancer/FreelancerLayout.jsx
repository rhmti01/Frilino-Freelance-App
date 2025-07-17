import React from "react";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavlink";
import Sidebar from "../../ui/Sidebar";
import { Element, Home2, Notepad2 } from "iconsax-reactjs";

function FreelancerLayout() {
  return (
    <div>
      <AppLayout>
        <Sidebar>
          <CustomNavLink to="dashboard">
            <Home2 className="size-6" variant="Broken" />
            <span>داشبورد</span>
          </CustomNavLink>
          <CustomNavLink to="projects">
            <Element className="size-6" variant="Broken" />
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

export default FreelancerLayout;
