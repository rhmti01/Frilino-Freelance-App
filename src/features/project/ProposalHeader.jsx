import React from "react";
import BackBtn from "../../ui/BackBtn";

function ProposalHeader({ project }) {
  return (
    <div className=" gap-y-5 w-full flex flex-col items-start justify-start   py-4 ">
      <BackBtn absolute={false} top="mt-0" right="right-8" to="/owner/projects" />
      <h3 className=" mm:text-[18px] ww:text-[19px] xl:text-[20px] font-medium text-secondary-600 dark:text-secondary-300  ">
        پیشنهاد های دریافت شده برای{" "}
        <span className=" font-semibold shadow-2xl text-secondary-800 dark:text-secondary-50 ">
          {project.title}
        </span>
      </h3>
    </div>
  );
}

export default ProposalHeader;
