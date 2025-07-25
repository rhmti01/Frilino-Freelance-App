import React, { useState } from "react";
import Table from "../../../ui/Table";
import { enToFaNumber } from "../../../utils/enToFaNumber";
import { Code, SecurityUser, User, Verify } from "iconsax-reactjs";
import ChangeUserStatus from "./ChangeUserStatus";
import CustomModal from "../../../ui/CustomModal";

function UsersTableRow({ user, index }) {
  const { name, email, phoneNumber, status, role } = user;
  const [modalOpen , setModalOpen] = useState(false)

  return (
    <Table.Row>
      <td>{enToFaNumber(index + 1)}</td>
      <td>{name}</td>
      <td>{enToFaNumber(phoneNumber)}</td>
      <td>{email}</td>
      <td className="   ">
        {role === "FREELANCER" ? (
          <span className=" w-fit mx-auto flex items-center gap-x-2  ">
            <Code className="size-5 mb-0.5 " />
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
          <span className=" py-1 px-2 rounded-xl bg-green-500 text-white ">تایید شده</span>
        ) : role === "OWNER" ? (
          <span className=" py-1 px-2 rounded-xl bg-yellow-500 text-white ">در انتظار تایید</span>
        ) : (
          <span className="  ">رد شده</span>
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
            onClose={()=>setModalOpen(false)}
          />
        </CustomModal>
      </td>
    </Table.Row>
  );
}

export default UsersTableRow;
