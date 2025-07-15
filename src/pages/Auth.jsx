/* eslint-disable no-unused-vars */
import React from "react";
import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col w-full bg-secondary-0 dark:bg-dark-900 ">
      <div className="  w-full min-h-full flex items-center justify-center bg-secondary-0 dark:bg-dark-900 ">
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
