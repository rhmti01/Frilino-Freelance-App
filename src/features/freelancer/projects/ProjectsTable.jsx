import React from "react";
import Loading from "../../../ui/Loading";
import { useProjects } from "../../../hooks/useProjects";
import ProjectTableRow from "./ProjectTableRow";
import Table from "../../../ui/Table";
import { useSearchParams } from "react-router-dom";

function ProjectsTable() {
  const { projects, isLoading } = useProjects();
  const [searchParams] = useSearchParams();

  if (isLoading) {
    return (
      <div className="  flex items-center justify-center w-full h-full">
        <Loading size="md" variant="plain" mt="mt-60" />
      </div>
    );
  }

  if (!projects?.length) {
    return (
      <div className="  flex items-center justify-center w-full h-full flex-col mt-5 ">
        {searchParams.size ? (
          <p className=" mm:mt-20 ww:mt-32 mm:text-[16px] ww:text-[16.5px] xx:text-[17px] 
        xl:text-[19px] font-semibold text-secondary-800 dark:text-secondary-300 ">
            پروژه ای مطابق با فیلتر های شما یافت نشد!
          </p>
        ) : (
          <p className=" mm:mt-14 ww:mt-20 mm:text-[16px] ww:text-[16.5px] xx:text-[17px] 
        xl:text-[19px]  font-semibold text-secondary-800 dark:text-secondary-300 ">
            لیست پروژه ها خالی می باشد!
          </p>
        )}
        <img
          className=" mm:size-[300px] ww:size-[340px] xx:size-[360px] xl:size-[340px] mm:mt-5 ww:mt-16  "
          src="/assets/images/Empty.png"
          alt="empty projects"
        />
      </div>
    );
  }

  return (
    <Table>
      <Table.Header>
        <th className=" bg-secondary-200 dark:bg-[#0e101d]   rounded-tr-2xl">
          #
        </th>
        <th>عنوان پروژه</th>
        <th>توضیحات پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th className=" bg-secondary-200 dark:bg-[#0e101d]   rounded-tl-2xl">
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
