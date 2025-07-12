import React, { useState } from "react";
import ProjectTable from "./ProjectTable-v2";
import { AddSquare } from "iconsax-reactjs";
import CreateProjectForm from "./CreateProjectForm";

function Projects() {
  const [isCreateProject, setIsCreateProject] = useState(false);

  return (
    <div
      className=" flex flex-col items-start mx-auto bg-secondary-100/50 
    rounded-2xl 2xl:py-7 2xl:pl-7 xl:py-7 xl:pl-5 md:px-10 mt-8 overflow-x-auto w-full 
    max-w-7xl "
    >
      <CreateProjectForm
        open={isCreateProject}
        onClose={() => setIsCreateProject(false)}
      />
      <div className="flex w-full justify-between items-center  ">
        <h1 className=" font-bold text-secondary-800 text-xl ">
          پروژه های شما
        </h1>
        <button
          onClick={() => {
            setIsCreateProject(true);
          }}
          className=" hover:bg-blue-700 text-white font-semibold shadow-md 
        cursor-pointer px-4 py-3.5 bg-blue-600 rounded-xl flex items-center gap-x-3 text-[15px]  "
        >
          افزودن پروژه جدید
          <AddSquare className=" text-white size-6 " variant="Broken" />
        </button>
      </div>
      <div className="w-full overflow-auto  ">
        <ProjectTable />
      </div>
    </div>
  );
}

export default Projects;
