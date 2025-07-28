import { Button } from "@heroui/button";
import React from "react";

function Option({ status, selectedStatus, onChangeStatus, label }) {
  return (
    <Button
      disabled={status === selectedStatus}
      className={`cursor-pointer mm:w-full ww:px-4 nn:px-5 xx:px-4 gg:px-4 xg:px-4.5 xl:px-5 mm:h-9 ww:h-[34px] nn:h-9 xx:h-9 xg:h-[38px] xl:h-10 rounded-xl list-none xl:text-base xg:text-[15px] gg:text-[14.5px] nn:text-[14.5px]  mm:text-[14px] ${
        status === selectedStatus
          ? "dark:bg-dark-600  bg-primary-950 text-secondary-0   "
          : " dark:bg-dark-800  dark:text-dark-100 dark:hover:bg-dark-700 bg-secondary-50 text-secondary-600  hover:bg-primary-900 hover:text-secondary-0 duration-300 "
      }`}
      onPress={() => onChangeStatus(selectedStatus)}
    >
      {label}
    </Button>
  );
}

export default Option;
