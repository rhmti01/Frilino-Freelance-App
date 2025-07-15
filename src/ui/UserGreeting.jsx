import React from "react";
import useUser from "../features/authentication/useUser";
import getGreetingMessage from "../utils/getGreetingMessage"

function UserGreeting() {
  const { data } = useUser();
  const { name } = data || {};

  return (
    <div className=" flex justify-center items-center ">
      <p className=" text-xl font-semibold text-secondary-600 ">
        سلام {name}{" "}
      </p>
      <span className=" w-[2px] h-4 bg-secondary-300 mx-2 "></span>
      <p className=" font-semibold text-secondary-500 text-[15px] ">
        {getGreetingMessage()}
      </p>
    </div>
  );
}

export default UserGreeting;
