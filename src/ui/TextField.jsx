/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Warning2 } from "iconsax-reactjs";
import React from "react";

function TextField({
  register,
  label,
  name,
  mt,
  font,
  dir,
  autoFocus = false,
  type = "text",
  required,
  validationSchema,
  errors,
}) {

  return (
    <>
      <label
        className={`  ${mt} block p-3  text-right font-medium text-[15px] text-secondary-700 dark:text-dark-200  `}
        htmlFor={name}
      >
        {label} {required && <span className=" text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        className={`   numberInput ${font} ${dir}  `}
        id={name}
        autoComplete="off"
        type={type}
        dir={dir}
        autoFocus={autoFocus}
      />
      {errors && errors[name] && (
        <span className=" text-right text-error block text-sm mt-2 ">
          <Warning2 className=" size-4 inline ml-2 " variant="Broken" />
          {errors[name]?.message}
        </span>
      )}
    </>
  );
}

export default TextField;
