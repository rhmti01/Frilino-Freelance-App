import React, { useState } from "react";
import Table from "../../ui/Table";
import { enToFaNumber } from "../../utils/enToFaNumber";
import { numberDivider } from "../../utils/numberDivider";
import { truncateText } from "../../utils/truncateText";
import toFaShortDate from "../../utils/toFaShortDate";
import ChangeProposalStatus from "./ChangeProposalStatus";
import CustomModal from "../../ui/CustomModal";
import { TbArrowsExchange } from "react-icons/tb";

const statusStyle = [
  {
    label: "رد شده",
    className: " bg-red-500 ",
  },
  {
    label: "در انتظار تایید",
    className: " bg-yellow-500 ",
  },
  {
    label: "تایید شده",
    className: " bg-green-500 ",
  },
];

function ProposalTableRow({ proposal, index }) {
  const [open, setOpen] = useState(false);
  const { status } = proposal;

  return (
    <Table.Row>
      <td>{enToFaNumber(index + 1)}</td>
      <td>{proposal.user.name}</td>
      <td>{truncateText(proposal.description, 30)}</td>
      <td>{enToFaNumber(proposal.duration)} روز</td>
      <td>
        <span>{enToFaNumber(numberDivider(proposal.price))}</span>
        <img
          className=" inline mx-1 "
          src="/assets/images/tooman.png"
          alt="تومان"
        />
      </td>
      <td>{toFaShortDate(proposal.createdAt)}</td>
      <td>
        <span
          className={`  badge text-secondary-50  ${statusStyle[status].className}  `}
        >
          {statusStyle[status].label}
        </span>
      </td>
      <td className=" w-full">
        <svg
          onClick={() => setOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-5 cursor-pointer stroke-gray-600 dark:stroke-gray-400 mx-auto "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
        <CustomModal
          title="تغییر وضعیت درخواست"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
            id={proposal._id}
            onClose={() => setOpen(false)}
          />
        </CustomModal>
      </td>
    </Table.Row>
  );
}

export default ProposalTableRow;
