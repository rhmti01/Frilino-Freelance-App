import React from "react";
import Table from "../../ui/Table";
import ProposalTableRow from "./ProposalTableRow";
import Loading from "../../ui/Loading";

function ProposalTable({ proposals, isLoading }) {
  if (isLoading) {
    return (
      <div className="  flex items-center justify-center w-full h-full">
        <Loading size="md" variant="plain" mt="mt-60" />
      </div>
    );
  }

  if (!proposals.length) {
    return (
      <div className=" mt-20 w-full flex items-center flex-col  ">
        <p className=" mm:text-[16px] ww:text-[16.5px] xx:text-[17px] 
        xl:text-[18px] font-semibold text-secondary-800 dark:text-secondary-300 ">
          هنوز برای این پروژه درخواستی ثبت نشده است!
        </p>
        <img
          className=" mm:size-[320px] ww:size-[370px] xx:size-[400px] xl:size-[420px] "
          src="/assets/images/proposal-empty.png"
          alt="empty proposal"
        />
      </div>
    );
  }

  return (
    <div className=" mx-auto w-fit  mt-10 ">
      <Table>
        <Table.Header>
          <th className=" bg-secondary-200 dark:bg-[#0e101d]   rounded-tr-2xl">
            #
          </th>
          <th>فریلنسر</th>
          <th>توضیحات</th>
          <th>زمان پیشنهادی</th>
          <th>بودجه پیشنهادی </th>
          <th>تاریخ ثبت شده</th>
          <th>وضعیت</th>
          <th className=" bg-secondary-200 dark:bg-[#0e101d]   rounded-tl-2xl  ">
            تغییر وضعیت
          </th>
        </Table.Header>
        <Table.Body>
          {proposals?.map((proposal, index) => (
            <ProposalTableRow
              key={proposal._id}
              proposal={proposal}
              index={index}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalTable;
