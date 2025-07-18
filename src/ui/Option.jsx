import React from "react";

function Option({ status, selectedStatus, onChangeStatus, label }) {
  return (
    <button
      disabled={status === selectedStatus}
      className={`cursor-pointer px-5 py-1.5 rounded-xl list-none ${
        status === selectedStatus
          ? "dark:bg-dark-700  bg-primary-950 text-secondary-0  shadow-2xl shadow-blue-100 dark:shadow-dark-900 "
          : " dark:bg-dark-800 dark:shadow-xl  dark:text-dark-100 dark:hover:bg-dark-800 bg-secondary-50 text-secondary-600  hover:bg-primary-900 hover:text-secondary-0 duration-300 "
      }`}
      onClick={() => onChangeStatus(selectedStatus)}
    >
      {label}
    </button>
  );
}

export default Option;
