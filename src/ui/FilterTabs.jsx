import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Option from "./Option";

function FilterTabs({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get(filterField) || options.at(0).value;
  const [status, setStatus] = useState(currentValue);

  const handleChangeStauts = (newStatus) => {
    setStatus(newStatus);
    searchParams.set(filterField, newStatus);
    setSearchParams(searchParams);
  };

  return (
    <div
      className=" mm:w-full xx:w-[370px]  xg:w-[340px] xl:w-[400px] ww:py-0.5 nn:py-1 mm:py-1 xl:py-1.5 ww:px-0.5 mm:px-1 nn:px-1 xg:px-1.5 xl:px-2
     nn:gap-x-1 mm:gap-x-4 ww:gap-x-0.5 xl:gap-x-2 dark:bg-dark-800 flex items-center justify-center 
       rounded-xl   bg-white  shadow-sm  "
    >
      {options.map(({ value, label }) => {
        return (
          <Option
            key={value}
            status={status}
            selectedStatus={value}
            label={label}
            onChangeStatus={handleChangeStauts}
          />
        );
      })}
    </div>
  );
}

export default FilterTabs;
