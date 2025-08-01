import React, { useState } from "react";
import ProjectTable from "./ProjectTable-v2";
import { AddSquare } from "iconsax-reactjs";
import CreateProjectForm from "./CreateProjectForm";
import { Button } from "@heroui/button";
import CustomModal from "../../ui/CustomModal";

function Projects() {
  const [isCreateProject, setIsCreateProject] = useState(false);

  return (
    <div
      className=" flex justify-center items-start mx-auto  bg-secondary-100/50 dark:bg-dark-900/75
    rounded-tr-3xl 2xl:py-7 2xl:pl-7 xl:py-7 xl:pl-5 xx:px-10 ww:px-7 mm:px-5 mm:pt-10 xx:pt-8 overflow-x-auto w-full pb-10
     "
    >
      <div className="w-full max-w-7xl ">
        <CustomModal
          title="افزودن پروژه جدید"
          open={isCreateProject}
          onClose={() => setIsCreateProject(false)}
        >
          <CreateProjectForm onClose={() => setIsCreateProject(false)} />
        </CustomModal>
        <div className="flex w-full justify-between items-center  ">
          <h1
            className=" font-bold text-secondary-800 dark:text-secondary-100 
          mm:text-[19.5px] ww:text-[20px] xl:text-[21px] mm:mr-2 xx:mr-0"
          >
            پروژه های شما
          </h1>
          <Button
            size="lg"
            onPress={() => {
              setIsCreateProject(true);
            }}
            className=" hover:bg-blue-700 text-white font-semibold shadow-md
             shadow-blue-100 cursor-pointer  bg-blue-600 dark:hover:bg-blue-800 
              rounded-xl  flex items-center  dark:shadow-dark-700 dark:bg-blue-700
              xl:text-[15px] xl:px-3.5 xl:py-3 xx:gap-x-3 xx:text-[14.5px] xx:px-3 xx:py-[11px] 
              ww:text-[14px] ww:px-2.5 ww:py-3 ww:gap-x-2.5 mm:text-[13.5px] mm:px-2 mm:py-2 
              mm:gap-x-2 mm:font-medium ww:font-semibold "
          >
            افزودن پروژه جدید
            <AddSquare
              className=" text-white dark:text-secondary-100 size-6 "
              variant="Broken"
            />
          </Button>
        </div>
        <div className="w-full overflow-auto  ">
          <ProjectTable />
        </div>
      </div>
    </div>
  );
}

export default Projects;
