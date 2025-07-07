import React from "react";
import useUser from "../features/authentication/useUser";

function PanelHeader() {
  const {data}  = useUser()
  const { name } = data || {};

  return (
    <div className=" bg-white flex items-center justify-start ">
      <p className=" pr-4 text-xl font-semibold text-secondary-600 " >
        سلام {" "}
        {name} {" "} 
        </p>
        <span className=" w-[2px] h-4 bg-secondary-300 mx-2 " ></span>
        <p className=" font-semibold text-secondary-600 " >عصر بخیر</p>
    </div>
  );
}

export default PanelHeader;
