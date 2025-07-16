import React from "react";
import Stats from "./Stats";
import DashboardHeader from "./DashboardHeader";
import { useOwnerProjects } from "../projects/useOwnerProjects";
import Loading from "../../ui/Loading";

function DashboardLayout() {
  const { projects , isLoading } = useOwnerProjects();

  if (isLoading) {
    return <Loading size="md" mt="mt-80" variant="plain" />;
  }

  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
