import React from "react";
import { NavLink } from "react-router-dom";

function CustomNavLink({ children, to }) {
  const navLinkClass = ` hover:bg-blue-100/50 dark:hover:bg-dark-700 hover:shadow-xs 
   flex items-center gap-x-3 py-2.5 px-4 hover:text-primary-600 duration-300 my-1 rounded-xl  no-underline  `;

  return (
    <li className=" outline-0 list-none no-underline " >
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navLinkClass} bg-blue-100 dark:bg-dark-700 text-primary-900`
            : `${navLinkClass} text-secondary-800 dark:text-secondary-300  `
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavLink;
