import react, { useState } from "react";
import Table from "../../../ui/Table";
import { enToFaNumber } from "../../../utils/enToFaNumber";
import { truncateText } from "../../../utils/truncateText";
import { numberDivider } from "../../../utils/numberDivider";
import toFaShortDate from "../../../utils/toFaShortDate";
import { ReceiptAdd } from "iconsax-reactjs";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";
import toast from "react-hot-toast";
import CustomModal from "../../../ui/CustomModal";

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
  const { _id, title, category, budget, deadline, status , description } = project;
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Table.Row>
      <td>{enToFaNumber(index + 1)}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{truncateText(description, 30)}</td>
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
          <ReceiptAdd
            onClick={() => {
              if (status === "CLOSED") {
                toast.error(
                  "به دلیل بسته بودن پروژه، امکان ارسال پروپوزال وجود ندارد!"
                );
                return;
              }
              setModalOpen(true);
            }}
            values="Broken"
            className="size-6 text-blue-700 dark:text-blue-700 cursor-pointer"
          />
        </button>

        <CustomModal
          title={`درخواست انجام پروژه ${title}`}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        >
          <CreateProposal
            projectId={_id}
            status={status}
            onClose={() => setModalOpen(false)}
          />
        </CustomModal>
      </td>
    </Table.Row>
  );
}

export default ProjectTableRow;
