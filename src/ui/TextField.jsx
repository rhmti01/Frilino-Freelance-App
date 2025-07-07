/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function TextField({ label ,name, value, onChange , type , mt , font , dir  , autoFocus = false }) {
  return (
    <>
      <label className={`  ${mt} p-3 block text-right font-semilight text-secondary-700   `} htmlFor={name}>{label}</label>
      <input
        className={`   numberInput ${font} ${dir}  `}  
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="false"
        type={type}
        dir={dir}
        autoFocus={autoFocus}
      />
    </>
  );
}

export default TextField;
