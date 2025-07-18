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
      className=" w-[400px] py-1.5 px-2 gap-x-2 dark:bg-dark-800
     flex items-center justify-center rounded-xl   bg-white  shadow-sm  "
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
