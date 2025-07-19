import React from "react";
import DashboardHeader from "../../ui/DashboardHeader";
import Stats from "./Stats";
import useProposals from "../proposals/useProposals";
import { useProjects } from "../../hooks/useProjects";
import { useUsers } from "./useUsers";
import Loading from "../../ui/Loading";

function DashboardLayout() {
  const { isLoading: isLoading1, users } = useUsers();
  const { isLoading: isLoading2, projects } = useProjects();
  const { isLoading: isLoading3, proposals } = useProposals();

  if (isLoading1 || isLoading2 || isLoading3) {
    return <Loading size="md" mt="mt-80" variant="plain" />;
  }

  return (
    <div>
      <DashboardHeader />
      <Stats users={users} projects={projects} proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
