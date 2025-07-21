import React, { useEffect } from "react";
import Stats from "./Stats";
import DashboardHeader from "../../ui/DashboardHeader";
import { useOwnerProjects } from "../projects/useOwnerProjects";
import Loading from "../../ui/Loading";
import useUser from "../authentication/useUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function DashboardLayout() {
  const navigate = useNavigate()
  const {data:user} = useUser()
  const { projects , isLoading } = useOwnerProjects();

  useEffect(()=>{
    if (user?.status !==2) navigate("/")
  },[user?.status])

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
