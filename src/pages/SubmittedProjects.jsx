import React from "react";
import ProjectsHeader from "../features/freelancer/projects/ProjectsHeader";
import ProjectsTable from "../features/freelancer/projects/ProjectsTable";
import { AddSquare } from "iconsax-reactjs";
import ProjectTable from "../features/projects/ProjectTable-v2";

function SubmittedProjects() {
  return (
    <div
      className=" flex justify-center items-start mx-auto  bg-secondary-100/50 dark:bg-dark-900/75
    rounded-tr-3xl 2xl:py-7 2xl:pl-7 xl:py-7 xl:pl-5 md:px-10 mt-8 overflow-x-auto w-full 
     "
    >
      <div className="w-full max-w-6xl ">
        <ProjectsHeader />
        <div className="w-full overflow-auto  ">
          <ProjectsTable />
        </div>
      </div>
    </div>
  );
}

export default SubmittedProjects;
