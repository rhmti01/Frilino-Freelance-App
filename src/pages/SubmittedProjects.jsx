import React from "react";
import ProjectsHeader from "../features/freelancer/projects/ProjectsHeader";
import ProjectsTable from "../features/freelancer/projects/ProjectsTable";

function SubmittedProjects() {
  return (
    <div className=" bg-secondary-100/70 dark:bg-dark-800/20 rounded-2xl p-7 ">
      <div
        className=" flex justify-center items-start mx-auto  
        rounded-tr-3xl 2xl:py-7 2xl:pl-7 xl:py-7 xl:pl-5 xx:px-4
        mt-8 overflow-x-auto w-full 
     "
      >
        <div className="w-full max-w-6xl pb-10 ">
          <ProjectsHeader />
          <div className="w-full overflow-auto  ">
            <ProjectsTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmittedProjects;
