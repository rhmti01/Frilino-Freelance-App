import React from "react";
import { enToFaNumber } from "../utils/enToFaNumber";

const statColor = {
  blue: " bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-500 ",
  green: "  bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-500  ",
  indigo:" bg-indigo-50 dark:bg-indigo-700 text-indigo-500 dark:text-indigo-300 ",
  orange: "  bg-amber-50 dark:bg-amber-600 text-amber-500 dark:text-amber-100  ",
};

function stat({ value, title, color, icon }) {
  return (
    <div className="xl:min-w-56 rounded-2xl bg- ">
      <div
        className="flex items-center justify-around py-6 bg-secondary-0 rounded-xl shadow-sm
        shadow-secondary-300 dark:bg-dark-800 dark:shadow-dark-700 
        text-secondary-900 dark:text-dark-50"
      >
        <div className={`   flex p-3 rounded-4xl ${statColor[color]}   `}>
          {icon}
        </div>
        <div className="flex flex-col gap-y-4 items-end">
          <h4 className="font-semibold text-[19px] text-secondary-700 dark:text-secondary-300 ">
            {title}
          </h4>
          <p className="font-bold text-2xl pl-0.5 ">
            {enToFaNumber(value)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default stat;
