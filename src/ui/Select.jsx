import React from "react";

function Select({ options, handleChange, value }) {
  return (
    <div className=" w-full " >
      <select
        value={value}
        onChange={handleChange}
        className=" filterSelect appearance-none pr-8 pl-2 bg-no-repeat form-select "
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

export default Select;
