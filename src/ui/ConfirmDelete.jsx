import { Button } from "@heroui/button";
import React from "react";

function ConfirmDelete({ resourceTitle, onClose, onConfirm, disabled }) {
  return (
    <div className=" w-full flex items-center flex-col mt-1 -mb-1.5 ">
      <h2 className=" w-full text-center font-normal text-base text-secondary-700 dark:text-secondary-400 ">
        ایا از حذف{" "}
        <span className=" font-semibold text-secondary-800 dark:text-secondary-300 text-wrap">{resourceTitle}</span>{" "}
        مطمئن هستید؟
      </h2>
      <div className="flex justify-between items-center w-full mt-8 gap-x-2  ">
        <Button
          onPress={onClose}
          disabled={disabled}
          className=" hover:shadow-none duration-100 shadow-sm shadow-secondary-200 dark:shadow-dark-600
        cursor-pointer w-full py-2 bg-gray-300 hover:bg-gray-400/75 dark:bg-gray-300 dark:hover:bg-gray-300/90 text-secondary-800 dark:text-secondary-700 rounded-lg font-medium
         text-[15px]  "
        >
          لفو
        </Button>
        <Button
          onPress={onConfirm}
          disabled={disabled}
          className=" hover:shadow-none duration-100 shadow-sm shadow-red-200 dark:shadow-dark-600
         cursor-pointer w-full py-2 bg-red-400 dark:bg-rose-600 dark:hover:bg-[#ff0037d4] hover:bg-red-500 text-white rounded-lg font-medium text-[15px]  "
        >
          تایید
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
