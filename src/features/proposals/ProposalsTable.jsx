import React from "react";
import useProposals from "./useProposals";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

function ProposalsTable() {
  const { proposals, isLoading } = useProposals();

  if (isLoading) {
    return (
      <div className="  flex items-center justify-center w-full h-full">
        <Loading size="md" variant="plain" mt="mt-60" />
      </div>
    );
  }

  if (!proposals?.length) {
    return (
      <div className="  flex items-center justify-center w-full h-full flex-col ">
        <p className=" mt-20 text-[22px] font-semibold text-secondary-800 dark:text-secondary-300 ">
          لیست پروژه های خالی می باشد!
        </p>
        <img
          className=" size-[380px] mt-16 "
          src="/assets/images/Empty.png"
          alt="empty proposals"
        />
      </div>
    );
  }

  return (
    <Table>
      <Table.Header>
        <th className=" bg-secondary-200 dark:bg-[#0e101d]   rounded-tr-2xl">#</th>
        <th>توضیحات</th>
        <th>مدت تحویل</th>
        <th>تاریخ ثبت </th>
        <th>هزینه</th>
        <th className=" bg-secondary-200 dark:bg-[#0e101d]   rounded-tl-2xl  "> وضعیت </th>
      </Table.Header>
      <Table.Body>
        {proposals?.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
