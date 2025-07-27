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
        className={`  ${mt} block  mm:p-2 xx:p-2.5  text-right font-medium 
        mm:text-[14px] xl:text-[15px] text-secondary-700 dark:text-dark-200  `}
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
        <span className=" mm:text-[13px] xx:text-[14px] xl:text-[14.5px] text-right text-error block text-sm mt-2 ">
          <Warning2 className=" size-4 inline mm:ml-1 xl:ml-2 " variant="Broken" />
          {errors[name]?.message}
        </span>
      )}
    </>
  );
}

export default TextField;
