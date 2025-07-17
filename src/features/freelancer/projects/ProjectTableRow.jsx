import react, { useState } from "react";
import Table from "../../../ui/Table";
import { enToFaNumber } from "../../../utils/enToFaNumber";
import { truncateText } from "../../../utils/truncateText";
import { numberDivider } from "../../../utils/numberDivider";
import toFaShortDate from "../../../utils/toFaShortDate";
import { Note } from "iconsax-reactjs";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal"

const projectStatus = {
  OPEN: {
    label: "باز",
    className: " badge--success  ",
  },
  CLOSED: {
    label: "بسته",
    className: " badge--danger ",
  },
};

function ProjectTableRow({ project, index }) {
  const { title, category, budget, deadline, status } = project;
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Table.Row>
      <td>{enToFaNumber(index + 1)}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{category.title}</td>
      <td>
        <span>{enToFaNumber(numberDivider(budget))}</span>
        <img
          className=" inline mx-1 "
          src="/assets/images/tooman.png"
          alt="تومان"
        />
      </td>
      <td>{toFaShortDate(deadline)}</td>
      <td>
        <span
          className={` rounded-xl px-2 py-0.5  ${projectStatus[status].className}  `}
        >
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <button>
          <Note
            onClick={() => setModalOpen(true)}
            values="Broken"
            className=" size-6  text-blue-900
             dark:text-blue-700 cursor-pointer  "
          />
        </button>
        <Modal
          title={` درخواست انجام پروژه ${title} `}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        >
          <CreateProposal />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProjectTableRow;
