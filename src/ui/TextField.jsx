/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function TextField({ label ,name, value, onChange }) {
  return (
    <>
      <label className=" mt-14 p-5 block text-right font-semilight text-secondary-700 " htmlFor={name}>{label}</label>
      <input
        className=" numberInput "
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="false"
        type="tel"
      />
    </>
  );
}

export default TextField;
