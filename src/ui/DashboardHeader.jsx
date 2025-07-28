import React from "react";

function DashboardHeader() {
  return (
    <div className=" mt-10 mb-10 pr-3 ">
      <h1
        className=" mm:text-[26px] ww:text-[27px] xx:text-[28px] xl:text-[30px] font-bold
         text-secondary-800 dark:text-dark-0 "
      >
        آمار کلی
      </h1>
      <p className=" mm:text-[15px] ww:text-[15.5px] xx:text-base 
      xl:text-[17px] text-secondary-500 font-light mt-3 ">
        نمایی خلاصه از داده‌های شما
      </p>
    </div>
  );
}

export default DashboardHeader;
