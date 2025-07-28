import React from "react";

function RHFSelect({ label, name, register, options, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className=" mt-2 mm:text-[14px] xl:text-[15px] mm:p-2 xx:p-2.5 block text-right font-medium text-secondary-700 dark:text-dark-200 text-base "
      >
        {label} {required && <span className=" text-red-500 ">*</span>}
      </label>
      <select
        id={name}
        {...register(name)}
        className=" numberInput appearance-none pr-8 pl-2 bg-no-repeat form-select "
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFSelect;
