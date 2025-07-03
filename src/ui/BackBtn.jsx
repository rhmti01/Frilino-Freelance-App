/* eslint-disable no-unused-vars */
import React from "react";

function BackBtn() {
  return (
    <a className="cursor-pointer absolute top-1 right-2 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="size-6 stroke-secondary-700 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </a>
  );
}

export default BackBtn;
