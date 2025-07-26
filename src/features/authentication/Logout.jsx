import React from "react";
import userLogout from "./useLogout";
import Loading from "../../ui/Loading";
import { LogoutCurve } from "iconsax-reactjs";
import { Button } from "@heroui/button";

function Logout() {
  const { logout, isPending } = userLogout();

  return isPending ? (
    <Loading />
  ) : (
    <Button
      onPress={logout}
      className=" flex justify-center items-center xg:p-2 mm:p-[7px] hover:ring-1
       ring-secondary-200 rounded-2xl shadow-sm
        shadow-secondary-300 hover:bg-red-100 duration-200 cursor-pointer
         cursor-pointerdark:text-secondary-300 dark:shadow-secondary-800
        dark:bg-dark-800 dark:hover:bg-dark-900 dark:ring-dark-600   "
    >
      <LogoutCurve className=" text-red-500 size-6 " variant="Broken" />
    </Button>
  );
}

export default Logout;
