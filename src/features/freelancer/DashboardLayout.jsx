import React from "react";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import DashboardHeader from "../../ui/DashboardHeader";

function DashboardLayout() {
  const { proposals, isLoading } = useProposals();

  if (isLoading) {
    return <Loading size="md" mt="mt-80" variant="plain" />;
  }

  return (
    <div >
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
