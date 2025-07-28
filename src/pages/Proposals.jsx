import React from "react";
import ProposalTable from "../features/proposals/ProposalsTable";
import { AddSquare } from "iconsax-reactjs";

function Proposals() {
  return (
    <div className=" bg-secondary-100/70 dark:bg-dark-800/20 rounded-2xl p-7 ">
      <div
        className=" flex justify-center items-start mx-auto 
    rounded-tr-3xl 2xl:py-7 2xl:pl-7 xl:py-7 xl:pl-5 md:px-10 mt-8 overflow-x-auto w-full 
     "
      >
        <div className="w-full max-w-6xl ">
          <div className="flex w-full justify-between items-center  ">
            <h1 className=" font-bold text-secondary-800 dark:text-secondary-100 
            mm:text-[19.5px] ww:text-[20px] xl:text-[21px] mm:mr-2 xx:mr-0  ">
              لیست پروپوزال ها
            </h1>
          </div>
          <div className="w-full overflow-auto ">
            <ProposalTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proposals;
