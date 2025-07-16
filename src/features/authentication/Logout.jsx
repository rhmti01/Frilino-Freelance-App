import React from "react";
import userLogout from "./useLogout";
import Loading from "../../ui/Loading";
import { LogoutCurve } from "iconsax-reactjs";

function Logout() {
  const { logout, isPending } = userLogout();

  return isPending ? (
    <Loading />
  ) : (
    <button
      onClick={logout}
      className=" flex justify-center items-center p-2 ring-1
       ring-secondary-300 rounded-2xl shadow-sm
        shadow-red-300 hover:bg-red-100 duration-200 cursor-pointer
         cursor-pointerdark:text-secondary-300 dark:shadow-secondary-600
        dark:bg-dark-800 dark:hover:bg-dark-900 dark:ring-dark-700   "
    >
      <LogoutCurve className=" text-red-500 size-6 " variant="Broken" />
    </button>
  );
}

export default Logout;
