import React from "react";
import { useOwnerProjects } from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import "../../App";
import Table from "../../ui/Table";
import ProjectTableRow from "./ProjectTableRow";

function ProjectTable() {
  const { projects, isLoading } = useOwnerProjects();

  if (isLoading) {
    return (
      <div className="  flex items-center justify-center w-full h-full">
        <Loading size="md" variant="plain" mt="mt-60" />
      </div>
    );
  }

  if (!projects?.length) {
    return (
      <div className="  flex items-center justify-center w-full h-full flex-col ">
        <p className=" mt-20 text-[22px] font-semibold text-secondary-800 dark:text-secondary-300 ">
          لیست پروژه های خالی می باشد!
        </p>
        <img
          className=" size-[380px] mt-16 "
          src="/assets/images/Empty.png"
          alt="empty projects"
        />
      </div>
    );
  }

  return (
    <Table>
      <Table.Header>
        <th className=" bg-secondary-200 dark:bg-[#0e101d]   rounded-tr-2xl" >#</th>
        <th>عنوان پروژه</th>
        <th>توضیحات پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th >عملیات</th>
        <th className=" bg-secondary-200 dark:bg-[#0e101d]   rounded-tl-2xl  " >درخواست ها</th>
      </Table.Header>
      <Table.Body>
        {projects?.map((project, index) => (
            <ProjectTableRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
