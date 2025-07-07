import React from "react";
import { useOwnerProjects } from "./useOwnerProjects";

function ProjectTable() {
  const { projects, isLoading } = useOwnerProjects();

  return <div>جدول پروژه ها</div>;
}

export default ProjectTable;
