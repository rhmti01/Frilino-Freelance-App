import React from "react";
import { useOwnerProjects } from "./useOwnerProjects";
import Loading from "../../ui/Loading";
import "../../App";
import { enToFaNumber } from "../../utils/enToFaNumber";
import { numberDivider } from "../../utils/numberDivider";
import truncateText from "../../utils/truncateText";
import toFaShortDate from "../../utils/toFaShortDate";

function ProjectTable() {
  const { projects, isLoading } = useOwnerProjects();
  console.log(projects, isLoading);

  if (isLoading) {
    return (
      <div className="  flex items-center justify-center w-full h-full">
        <Loading size="md" variant="plain" />
      </div>
    );
  }

  if (!projects?.length) {
    return (
      <div className="  flex items-center justify-center w-full h-full flex-col ">
        <p className=" text-[22px] font-semibold text-secondary-800 ">
          لیست پروژه های شما خالی می باشد!
        </p>
        <img
          className=" size-[400px] mt-20 "
          src="/assets/images/Empty.png"
          alt="empty projects"
        />
      </div>
    );
  }

  return (
    <div className="table-container max-w-5xl mx-auto mt-8">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project, index) => (
            <tr key={project._id}>
              <td>{enToFaNumber(index + 1)}</td>
              <td>{truncateText(project.title , 30)}</td>
              <td>{project.category.title}</td>
              <td>
                <span>{enToFaNumber(numberDivider(project.budget))}</span>
                <img className=" inline mx-1 " src="/assets/images/tooman.png" alt="تومان" />
              </td>
              <td>{toFaShortDate(project.deadline)}</td>
              <td>
                <div className="flex items-center gap-2 flex-wrap max-w-60 ">
                  {project.tags.map((tag) => (
                    <sapn className="badge badge--secondary " key={tag}>
                      {tag}
                    </sapn>
                  ))}
                </div>
              </td>
              <td>
                {project.freelancer?.name || (
                  <span className=" flex justify-center">-</span>
                )}
              </td>
              <td>
                {project.status === "OPEN" ? (
                  <span className=" badge badge--success  ">باز</span>
                ) : (
                  <span className=" badge badge--danger  ">بسته</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
