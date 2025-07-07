/* eslint-disable no-unused-vars */
import React from "react";
import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col w-full ">
      <div className=" bg-blue-50/ w-full min-h-full flex items-center justify-center ">
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
