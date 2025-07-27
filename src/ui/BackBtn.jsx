/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

function BackBtn({ top = "-top-24", right = "-right-32" , to}) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate( to || -1, { replace: true })}
      className={`  ${top} ${right}  cursor-pointer absolute ring-1 
      p-1 rounded-lg ring-secondary-300 shadow-sm hover:shadow-md shadow-secondary-200   `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-6 stroke-secondary-600 dark:stroke-secondary-400 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  );
}

export default BackBtn;
