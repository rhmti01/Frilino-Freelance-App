import React from "react";
import ProposalTable from "../features/proposals/ProposalsTable";
import { AddSquare } from "iconsax-reactjs";

function Proposals() {
  return (
    <div
      className=" flex justify-center items-start mx-auto  bg-secondary-100/50 dark:bg-dark-900/75
    rounded-tr-3xl 2xl:py-7 2xl:pl-7 xl:py-7 xl:pl-5 md:px-10 mt-8 overflow-x-auto w-full 
     "
    >
      <div className="w-full max-w-6xl ">
        <div className="flex w-full justify-between items-center  ">
          <h1 className=" font-bold text-secondary-800 dark:text-secondary-100 text-[21px] ">
            پروپوزال های شما
          </h1>
          {/* <button
            onClick={() => {
              setIsCreateProject(true);
            }}
            className=" hover:bg-blue-700 text-white font-semibold shadow-md
             shadow-blue-100 cursor-pointer px-4 py-3.5 bg-blue-600 dark:bg-blue-600 rounded-xl
              flex items-center gap-x-3 text-[15px] dark:shadow-dark-700 "
          >
            افزودن پروپوزال جدید
            <AddSquare
              className=" text-white dark:text-secondary-100 size-6 "
              variant="Broken"
            />
          </button> */}
        </div>
        <div className="w-full overflow-auto ">
          <ProposalTable />
        </div>
      </div>
    </div>
  );
}

export default Proposals;
