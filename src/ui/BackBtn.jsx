/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

function BackBtn({ top = "-top-24", right = "-right-32" }) {
  const navigate = useNavigate();

  return (
    <a
      onClick={() => navigate(-1, { replace: true })}
      className={`  ${top} ${right}  cursor-pointer absolute   `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="size-6 stroke-secondary-700 dark:stroke-secondary-400 "
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
