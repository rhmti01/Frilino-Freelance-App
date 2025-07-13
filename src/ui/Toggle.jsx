import React from "react";

function Toggle({toggleStatus , enabled}) {
  return (
    <div
      onClick={toggleStatus}
      className={`relative w-16 h-7.5 rounded-full cursor-pointer transition-colors duration-300 flex items-center px-2 ${
        enabled ? "bg-blue-500" : "bg-gray-400"
      }`}
    >
      <span className="absolute left-3 text-white text-xs font-medium">
        {enabled ? "باز" : ""}
      </span>
      <span className="absolute right-2 text-white text-xs font-medium">
        {!enabled ? "بسته" : ""}
      </span>
      <div
        className={` size-4.5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          enabled ? "translate-x-0.5 " : "-translate-x-8"
        }`}
      />
    </div>
  );
}

export default Toggle;
