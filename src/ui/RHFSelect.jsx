import React from "react";

function RHFSelect({ label, name, register, options, required }) {

  return (
    <div>
      <label
        htmlFor={name}
        className=" mt-2 p-3 block text-right font-semilight text-secondary-700 "
      >
        {label} {required && <span className=" text-red-500 ">*</span>}
      </label>
      <select id={name} {...register(name)} className=" numberInput appearance-none pr-8 pl-2 bg-no-repeat form-select ">
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
