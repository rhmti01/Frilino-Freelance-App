import react  from "react";
import Table from "../../ui/Table";
import toFaShortDate from "../../utils/toFaShortDate";
import { enToFaNumber } from "../../utils/enToFaNumber";
import { truncateText } from "../../utils/truncateText";
import { numberDivider } from "../../utils/numberDivider";

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

function ProposalRow({ proposal, index }) {
  const { description, duration, price, createdAt, status } = proposal;

  return (
    <Table.Row>
      <td>{enToFaNumber(index + 1)}</td>
      <td>{truncateText(description, 60)}</td>
      <td>{enToFaNumber(duration)} روز</td>
      <td>{toFaShortDate(createdAt)}</td>
      <td>
        <span>{enToFaNumber(numberDivider(price))}</span>
        <img
          className=" inline mx-1 "
          src="/assets/images/tooman.png"
          alt="تومان"
        />
      </td>
      <td>
        <span
          className={`  badge text-secondary-50  ${
            statusStyle[status].className
          }  `}
        >
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
