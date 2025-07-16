import React from "react";
import BackBtn from "../../ui/BackBtn";

function ProjectHeader({ project }) {
  return (
    <div className=" relative w-full flex justify-start pr-36  py-4 ">
      <BackBtn top="mt-0" right="right-8" />
      <h3 className="  font-medium text-secondary-600 dark:text-secondary-300 text-lg ">
        پیشنهاد های دریافت شده برای  {" "}
        <span className=" font-semibold shadow-2xl text-secondary-800 dark:text-secondary-50 ">
          {project.title}
        </span>
      </h3>
    </div>
  );
}

export default ProjectHeader;
