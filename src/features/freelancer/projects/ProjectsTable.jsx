import React from "react";
import Loading from "../../../ui/Loading";
import { useProjects } from "../../../hooks/useProjects";
import ProjectTableRow from "./ProjectTableRow";
import Table from "../../../ui/Table";

function ProjectsTable() {
  const { projects, isLoading } = useProjects();

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
          لیست پروژه های شما خالی می باشد!
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
        <th className=" bg-secondary-200 dark:bg-[#0f121e] rounded-tr-2xl">#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>
          ددلاین
        </th>
        <th>وضعیت</th>
        <th className=" bg-secondary-200 dark:bg-[#0f121e] rounded-tl-2xl">
          عملیات
        </th>
      </Table.Header>
      <Table.Body>
        {projects?.map((project, index) => (
          <ProjectTableRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
