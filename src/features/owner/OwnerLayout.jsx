import React from "react";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavlink";
import { Element4, Home2 } from "iconsax-reactjs";
import Sidebar from "../../ui/Sidebar";

function OwnerLayout() {
  return (
    <div>
      <AppLayout>
        <Sidebar>
          <CustomNavLink to="dashboard">
            <Home2 className="size-6" variant="Broken" />
            <span>داشبورد</span>
          </CustomNavLink>
          <CustomNavLink to="projects">
            <Element4 className="size-6" variant="Broken" />
            <span >پروژه ها</span>
          </CustomNavLink>
        </Sidebar>
      </AppLayout>
    </div>
  );
}

export default OwnerLayout;
