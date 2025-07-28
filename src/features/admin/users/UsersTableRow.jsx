import React, { useState } from "react";
import Table from "../../../ui/Table";
import { enToFaNumber } from "../../../utils/enToFaNumber";
import { SecurityUser, User, Verify } from "iconsax-reactjs";
import ChangeUserStatus from "./ChangeUserStatus";
import CustomModal from "../../../ui/CustomModal";

function UsersTableRow({ user, index }) {
  const { name, email, phoneNumber, status, role } = user;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Table.Row>
      <td>{enToFaNumber(index + 1)}</td>
      <td>{name}</td>
      <td>{enToFaNumber(phoneNumber)}</td>
      <td>{email}</td>
      <td className="   ">
        {role === "FREELANCER" ? (
          <span className=" w-fit mx-auto flex items-center gap-x-2  ">
            <Code />
            فریلنسر
          </span>
        ) : role === "OWNER" ? (
          <span className=" w-fit mx-auto flex items-center gap-x-2  ">
            <User className="size-5 mb-0.5 " />
            کارفرما
          </span>
        ) : (
          <span className=" w-fit mx-auto flex items-center gap-x-2  ">
            <SecurityUser className="size-5 mb-0.5 " />
            ادمین
          </span>
        )}
      </td>
      <td>
        {status == 2 ? (
          <span className=" py-1 px-2 rounded-xl bg-green-500 text-white ">
            تایید شده
          </span>
        ) : status == 1 ? (
          <span className=" py-1 px-2 rounded-xl bg-yellow-500 text-white ">
            در انتظار تایید
          </span>
        ) : (
          <span className=" py-1 px-2 rounded-xl bg-red-500 text-white ">
            رد شده
          </span>
        )}
      </td>
      <td>
        <button>
          <Verify
            onClick={() => setModalOpen(true)}
            values="Broken"
            className=" size-6  text-blue-700
             dark:text-blue-700 cursor-pointer  "
          />
        </button>
        <CustomModal
          title={` تغییر وضعیت کاربر `}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        >
          <ChangeUserStatus
            userId={user._id}
            onClose={() => setModalOpen(false)}
          />
        </CustomModal>
      </td>
    </Table.Row>
  );
}

export default UsersTableRow;

function Code() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="size-5  mb-0.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      />
    </svg>
  );
}
