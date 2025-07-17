import React from "react";

function ProjectsHeader() {
  return (
    <div className="flex w-full justify-between items-center  ">
      <h1 className=" font-bold text-secondary-800 dark:text-secondary-100 text-[21px] ">
        لیست پروژه ها
      </h1>
      <div>فیلتر</div>
    </div>
  );
}

export default ProjectsHeader;

{
  /* <Modal
          title="افزودن پروژه جدید"
          open={isCreateProject}
          onClose={() => setIsCreateProject(false)}
        >
          <CreateProjectForm onClose={() => setIsCreateProject(false)} />
        </Modal> */
}
