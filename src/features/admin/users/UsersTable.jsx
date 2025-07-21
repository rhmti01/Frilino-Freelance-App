import React from "react";
import UsersTableRow from "./UsersTableRow";
import Table from "../../../ui/Table";
import { useUsers } from "../useUsers";
import Loading from "../../../ui/Loading";

function UsersTable() {
  const { users, isLoading } = useUsers();

  if (isLoading) {
    return (
      <div className="  flex items-center justify-center w-full h-full">
        <Loading size="md" variant="plain" mt="mt-60" />
      </div>
    );
  }

  if (!users?.length) {
    return (
      <div className="  flex items-center justify-center w-full h-full flex-col ">
        <p className=" mt-20 text-[22px] font-semibold text-secondary-800 dark:text-secondary-300 ">
          لیست کاربران ثبت نامی خالی می باشد!
        </p>
        <img
          className=" size-[350px] mt-16 "
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
        <th>نام و نام خانوادگی</th>
        <th>شماره موبایل</th>
        <th>ایمیل</th>
        <th>نقش کاربر</th>
        <th>وضعیت کاربر</th>
        <th className=" bg-secondary-200 dark:bg-[#0e101d]   rounded-tl-2xl">
          عملیات
        </th>
      </Table.Header>
      <Table.Body>
        {users?.map((user, index) => (
          <UsersTableRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
