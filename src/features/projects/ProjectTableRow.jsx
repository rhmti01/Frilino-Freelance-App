import react, { useState } from "react";
import Table from "../../ui/Table";
import { Edit, Eye, Trash } from "iconsax-reactjs";
import toFaShortDate from "../../utils/toFaShortDate";
import { enToFaNumber } from "../../utils/enToFaNumber";
import { truncateText } from "../../utils/truncateText";
import { numberDivider } from "../../utils/numberDivider";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProject from "./ToggleProject";
import { Link } from "react-router-dom";
import { HiEye } from "react-icons/hi";

function ProjectTableRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject } = useRemoveProject();

  return (
    <Table.Row>
      <td>{enToFaNumber(index + 1)}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>
        <span>{enToFaNumber(numberDivider(project.budget))}</span>
        <img
          className=" inline mx-1 "
          src="/assets/images/tooman.png"
          alt="تومان"
        />
      </td>
      <td>{toFaShortDate(project.deadline)}</td>
      <td className="  w-40 xl:w-40 h-full  ">
        <div className="flex items-center gap-2 flex-wrap   ">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary " key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>
        {project.freelancer?.name || (
          <span className=" flex justify-center">-</span>
        )}
      </td>
      <td>
        <ToggleProject project={project} />
      </td>
      <td className=" h-full">
        <>
          <Modal
            onClose={() => setIsEditOpen(false)}
            title={`  ویرایش ${project.title}  `}
            open={isEditOpen}
          >
            <CreateProjectForm
              projectToEdit={project}
              onClose={() => setIsEditOpen(false)}
            />
          </Modal>
          <button
            className="mx-2 inline-flex "
            onClick={() => setIsEditOpen(true)}
          >
            <Edit
              variant="Broken"
              className=" cursor-pointer size-6 mt-1 text-blue-600 "
            />
          </button>
        </>
        <>
          <button
            className="mx-2 inline-flex "
            onClick={() => setIsDeleteOpen(true)}
          >
            <Trash
              variant="Broken"
              className=" cursor-pointer size-6 text-red-500 "
            />
          </button>
          <Modal
            onClose={() => setIsDeleteOpen(false)}
            title={`  حذف ${project.title}  `}
            open={isDeleteOpen}
          >
            <ConfirmDelete
              onClose={() => setIsDeleteOpen(false)}
              resourceTitle={project.title}
              onConfirm={() =>
                removeProject(project._id, {
                  onSuccess: () => setIsDeleteOpen(false),
                })
              }
              disabled={false}
            />
          </Modal>
        </>
      </td>
      <td className="  ">
        <Link className=" w-full flex justify-center " to={project._id}>
          <HiEye className=" size-6 text-secondary-600 hover:text-secondary-800 duration-100 " />
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectTableRow;
