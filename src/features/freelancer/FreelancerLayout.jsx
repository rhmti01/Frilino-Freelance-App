import React from "react";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import UserMenus from "../../ui/UserMenus";


function FreelancerLayout() {
  return (
    <div>
      <AppLayout>
        <Sidebar>
          <UserMenus/>
        </Sidebar>
      </AppLayout>
    </div>
  );
}

export default FreelancerLayout;
